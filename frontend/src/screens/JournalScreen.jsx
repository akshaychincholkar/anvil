import { useState, useEffect, useCallback } from "react";
import { Flame, Plus, X, Trophy, Heart, Target, Wind, Sunrise, ChevronLeft } from "lucide-react";
import { api } from "../api.js";
import { effectiveTodayISO } from "../dayStart.js";
import HelpButton from "../components/HelpButton.jsx";

const MOODS = [
  { id: 1, label: "Rough", emoji: "😣", color: "#C2536B" },
  { id: 2, label: "Low",   emoji: "🙁", color: "#C2773B" },
  { id: 3, label: "Okay",  emoji: "😐", color: "#C9A227" },
  { id: 4, label: "Good",  emoji: "🙂", color: "#4C9A6B" },
  { id: 5, label: "Great", emoji: "😄", color: "#3A7CA5" },
];
const moodById = (id) => MOODS.find((m) => m.id === id);

const SECTIONS = [
  { id: "wins",     label: "Wins",              hint: "What went well today?",    icon: Trophy,  color: "#C9A227" },
  { id: "grateful", label: "Grateful for",      hint: "1–3 things",               icon: Heart,   color: "#C2536B" },
  { id: "mattered", label: "What mattered",     hint: "The point of today",       icon: Target,  color: "#3A7CA5" },
  { id: "letgo",    label: "Letting go of",     hint: "Offload what's draining",  icon: Wind,    color: "#8268B0" },
  { id: "tomorrow", label: "Tomorrow's one thing", hint: "A single priority",     icon: Sunrise, color: "#4C9A6B" },
];

const isoL = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const todayISO = () => effectiveTodayISO(); // honours the start-of-day hour (Settings)
const formatDateLabel = (iso) => {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
};

export default function JournalScreen() {
  const TODAY = todayISO();
  const [year, month] = [new Date().getFullYear(), new Date().getMonth() + 1];

  const [viewDate, setViewDate] = useState(null); // null = today
  const selectedDate = viewDate || TODAY;
  const isToday = selectedDate === TODAY;

  const [entry, setEntry] = useState(null);
  const [history, setHistory] = useState({});
  const [drafts, setDrafts] = useState(Object.fromEntries(SECTIONS.map((s) => [s.id, ""])));

  const loadEntry = useCallback(async (dateStr) => {
    const e = await api.getJournalEntry(dateStr);
    setEntry(e);
  }, []);

  const loadHistory = useCallback(async () => {
    const h = await api.getJournalHistory(year, month);
    setHistory(h);
  }, [year, month]);

  const load = useCallback(async () => {
    const [e, h] = await Promise.all([
      api.getJournalEntry(selectedDate),
      api.getJournalHistory(year, month),
    ]);
    setEntry(e);
    setHistory(h);
  }, [selectedDate, year, month]);

  useEffect(() => { load(); }, [load]);

  const setMood = async (moodId) => {
    if (!isToday) return;
    await api.updateJournalMood(selectedDate, moodId);
    load();
  };

  const addBullet = async (sid) => {
    if (!isToday) return;
    const text = drafts[sid].trim();
    if (!text) return;
    await api.addJournalBullet(selectedDate, sid, text);
    setDrafts((d) => ({ ...d, [sid]: "" }));
    loadEntry(selectedDate);
  };

  const removeBullet = async (bulletId) => {
    await api.deleteJournalBullet(bulletId);
    loadEntry(selectedDate);
  };

  const openDay = (dateISO) => {
    if (dateISO === TODAY) setViewDate(null);
    else setViewDate(dateISO);
    setDrafts(Object.fromEntries(SECTIONS.map((s) => [s.id, ""])));
  };

  if (!entry) return <div style={{ padding: 28, color: "var(--text-3)" }}>Loading…</div>;

  const loggedToday = entry.mood !== null;
  const streak = (() => {
    let s = 0;
    const d = new Date(TODAY);
    // count back from today
    const todayMooded = history[TODAY] || (isToday && loggedToday);
    if (todayMooded) { s = 1; d.setDate(d.getDate() - 1); } else return 0;
    while (true) {
      const iso = isoL(d);
      if (history[iso]) { s++; d.setDate(d.getDate() - 1); }
      else break;
    }
    return s;
  })();

  const totalBullets = Object.values(entry.bullets || {}).reduce((n, arr) => n + arr.length, 0);

  const daysInMonth = new Date(year, month, 0).getDate();
  const monthStartDow = new Date(year, month - 1, 1).getDay();
  const offset = monthStartDow === 0 ? 6 : monthStartDow - 1;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Journal</div>
          {!isToday && (
            <button style={S.backBtn} onClick={() => setViewDate(null)}>
              <ChevronLeft size={14} /> Back to Today
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h1 style={S.h1}>{isToday ? "Today" : formatDateLabel(selectedDate)}</h1>
            <HelpButton id="journal" />
          </div>
          {isToday && <div style={S.date}>{formatDateLabel(TODAY)}</div>}
        </div>
        <div style={S.streakBox}>
          <Flame size={16} color="#C2773B" />
          <span style={S.streakNum}>{streak}</span>
          <span style={S.streakLabel}>day streak</span>
        </div>
      </div>

      {/* Mood */}
      <div style={S.card}>
        <div style={S.cardTitle}>How {isToday ? "are" : "were"} you?</div>
        <div style={S.moodRow}>
          {MOODS.map((m) => {
            const on = entry.mood === m.id;
            return (
              <button key={m.id} onClick={() => setMood(m.id)} disabled={!isToday}
                style={{ ...S.moodBtn, cursor: isToday ? "pointer" : "default", ...(on ? { background: m.color, borderColor: m.color, transform: "translateY(-2px)" } : {}), ...(!isToday && !on ? { opacity: 0.55 } : {}) }}>
                <span style={S.moodEmoji}>{m.emoji}</span>
                <span style={{ ...S.moodLabel, color: on ? "#fff" : "#6B675E" }}>{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bullet sections */}
      {SECTIONS.map((s) => {
        const Icon = s.icon;
        const bullets = entry.bullets?.[s.id] || [];
        return (
          <div key={s.id} style={S.card}>
            <div style={S.sectionHead}>
              <span style={{ ...S.sectionIcon, background: `${s.color}1A`, color: s.color }}><Icon size={15} /></span>
              <div>
                <div style={S.cardTitle}>{s.label}</div>
                <div style={S.sectionHint}>{s.hint}</div>
              </div>
            </div>
            <ul style={S.bulletList}>
              {bullets.map((b) => (
                <li key={b.id} style={S.bullet}>
                  <span style={{ ...S.bulletDot, background: s.color }} />
                  <span style={S.bulletText}>{b.text}</span>
                  {isToday && <button onClick={() => removeBullet(b.id)} style={S.bulletDel}><X size={13} /></button>}
                </li>
              ))}
              {!isToday && bullets.length === 0 && <li style={S.sectionHint}>Nothing written.</li>}
            </ul>
            {isToday && (
              <div style={S.addRow}>
                <input
                  placeholder="Add a point…"
                  value={drafts[s.id]}
                  onChange={(e) => setDrafts((d) => ({ ...d, [s.id]: e.target.value }))}
                  onKeyDown={(e) => e.key === "Enter" && addBullet(s.id)}
                  style={S.input}
                />
                <button onClick={() => addBullet(s.id)} style={{ ...S.addBtn, background: s.color }}><Plus size={16} /></button>
              </div>
            )}
          </div>
        );
      })}

      {/* Mood calendar — clickable days (item 10) */}
      <div style={S.card}>
        <div style={S.cardTitle}>
          {new Date(year, month - 1).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · Mood history
          <span style={{ fontSize: 11, color: "var(--text-3)", fontWeight: 400, marginLeft: 8 }}>tap a day to view</span>
        </div>
        <div style={S.calDow}>
          {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => <div key={d} style={S.calDowCell}>{d}</div>)}
        </div>
        <div style={S.calGrid}>
          {Array.from({ length: offset }).map((_, i) => <div key={`p${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const dateISO = `${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
            const moodId = dateISO === TODAY && entry.mood ? entry.mood : history[dateISO];
            const m = moodId ? moodById(moodId) : null;
            const future = dateISO > TODAY;
            const isSelected = dateISO === selectedDate;
            return (
              <button
                key={day}
                onClick={() => !future && openDay(dateISO)}
                disabled={future}
                style={{
                  ...S.calDay,
                  background: m ? m.color : (future ? "var(--surface-2)" : "var(--surface)"),
                  borderColor: isSelected ? "var(--accent-strong)" : "var(--border)",
                  borderWidth: isSelected ? 2 : 1,
                  color: m ? "#fff" : "var(--text-3)",
                  opacity: future ? 0.5 : 1,
                  cursor: future ? "not-allowed" : "pointer",
                  outline: isSelected ? "2px solid var(--accent-strong)" : "none",
                  outlineOffset: 1,
                }}
                title={m ? m.label : dateISO}>
                {m ? m.emoji : day}
              </button>
            );
          })}
        </div>
        <div style={S.legend}>
          {MOODS.map((m) => (
            <span key={m.id} style={S.legendItem}>
              <span style={{ ...S.legendDot, background: m.color }} /> {m.label}
            </span>
          ))}
        </div>
      </div>

      <div style={S.footer}>
        {isToday
          ? (loggedToday
            ? `Mood set · ${totalBullets} point${totalBullets === 1 ? "" : "s"} written today`
            : "Tap a mood to log today and keep your streak")
          : `Viewing ${formatDateLabel(selectedDate)} · past entries are read-only`}
      </div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 24px", color: "var(--text)", boxSizing: "border-box", maxWidth: 680, margin: "0 auto" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 22 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  backBtn: { display: "inline-flex", alignItems: "center", gap: 4, border: "none", background: "none", color: "#3A7CA5", fontSize: 12.5, fontWeight: 600, cursor: "pointer", padding: "0 0 6px", fontFamily: "inherit" },
  h1: { fontSize: 30, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  date: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  streakBox: { display: "flex", alignItems: "center", gap: 6, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "8px 14px" },
  streakNum: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "#C2773B" },
  streakLabel: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },
  card: { background: "var(--surface)", borderRadius: 12, padding: "18px 20px", marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  cardTitle: { fontSize: 14, fontWeight: 700, marginBottom: 12, color: "var(--text)" },
  moodRow: { display: "flex", gap: 8, flexWrap: "wrap" },
  moodBtn: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4, border: "2px solid var(--border)", background: "var(--surface)", borderRadius: 10, padding: "10px 12px", cursor: "pointer", flex: "1 1 60px", transition: "transform 0.1s" },
  moodEmoji: { fontSize: 22 },
  moodLabel: { fontSize: 11, fontWeight: 600 },
  sectionHead: { display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 },
  sectionIcon: { width: 32, height: 32, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
  sectionHint: { fontSize: 11.5, color: "var(--text-3)", marginTop: 1 },
  bulletList: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 },
  bullet: { display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, lineHeight: 1.4 },
  bulletDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0 },
  bulletText: { flex: 1 },
  bulletDel: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 2, display: "grid", placeItems: "center" },
  addRow: { display: "flex", gap: 8 },
  input: { flex: 1, border: "1px solid var(--border)", borderRadius: 8, padding: "9px 12px", fontSize: 13.5, fontFamily: "inherit", outline: "none" },
  addBtn: { width: 36, height: 36, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  calDow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 },
  calDowCell: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textAlign: "center", textTransform: "uppercase" },
  calGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 12 },
  calDay: { aspectRatio: "1", border: "1px solid var(--border)", borderRadius: 7, fontSize: 13, display: "grid", placeItems: "center", fontWeight: 500, fontFamily: "inherit" },
  legend: { display: "flex", gap: 10, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, color: "var(--text-2)" },
  legendDot: { width: 8, height: 8, borderRadius: "50%", display: "inline-block" },
  footer: { fontSize: 12.5, color: "var(--text-3)", textAlign: "center", marginTop: 8, fontStyle: "italic" },
};
