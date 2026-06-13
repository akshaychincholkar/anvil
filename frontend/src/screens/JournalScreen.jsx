import { useState, useEffect, useCallback } from "react";
import { Flame, Plus, X, Trophy, Heart, Target, Wind, Sunrise } from "lucide-react";
import { api } from "../api.js";

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

const todayISO = () => new Date().toISOString().slice(0, 10);
const todayLabel = () => new Date().toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export default function JournalScreen() {
  const TODAY = todayISO();
  const [year, month] = [new Date().getFullYear(), new Date().getMonth() + 1];

  const [entry, setEntry] = useState(null);
  const [history, setHistory] = useState({});
  const [drafts, setDrafts] = useState(Object.fromEntries(SECTIONS.map((s) => [s.id, ""])));

  const load = useCallback(async () => {
    const [e, h] = await Promise.all([
      api.getJournalEntry(TODAY),
      api.getJournalHistory(year, month),
    ]);
    setEntry(e);
    setHistory(h);
  }, [TODAY, year, month]);

  useEffect(() => { load(); }, [load]);

  const setMood = async (moodId) => {
    await api.updateJournalMood(TODAY, moodId);
    load();
  };

  const addBullet = async (sid) => {
    const text = drafts[sid].trim();
    if (!text) return;
    await api.addJournalBullet(TODAY, sid, text);
    setDrafts((d) => ({ ...d, [sid]: "" }));
    load();
  };

  const removeBullet = async (bulletId) => {
    await api.deleteJournalBullet(bulletId);
    load();
  };

  if (!entry) return <div style={{ padding: 28, color: "#9A968C" }}>Loading…</div>;

  const loggedToday = entry.mood !== null;
  const streak = (() => {
    let s = loggedToday ? 1 : 0;
    const d = new Date(TODAY);
    d.setDate(d.getDate() - 1);
    while (true) {
      const iso = d.toISOString().slice(0, 10);
      if (history[iso]) { s++; d.setDate(d.getDate() - 1); }
      else break;
    }
    return s;
  })();

  const totalBullets = Object.values(entry.bullets || {}).reduce((n, arr) => n + arr.length, 0);

  // Calendar: days of current month
  const daysInMonth = new Date(year, month, 0).getDate();
  const monthStartDow = new Date(year, month - 1, 1).getDay();
  const offset = monthStartDow === 0 ? 6 : monthStartDow - 1;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Journal</div>
          <h1 style={S.h1}>Today</h1>
          <div style={S.date}>{todayLabel()}</div>
        </div>
        <div style={S.streakBox}>
          <Flame size={16} color="#C2773B" />
          <span style={S.streakNum}>{streak}</span>
          <span style={S.streakLabel}>day streak</span>
        </div>
      </div>

      {/* Mood */}
      <div style={S.card}>
        <div style={S.cardTitle}>How are you?</div>
        <div style={S.moodRow}>
          {MOODS.map((m) => {
            const on = entry.mood === m.id;
            return (
              <button key={m.id} onClick={() => setMood(m.id)}
                style={{ ...S.moodBtn, ...(on ? { background: m.color, borderColor: m.color, transform: "translateY(-2px)" } : {}) }}>
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
                  <button onClick={() => removeBullet(b.id)} style={S.bulletDel}><X size={13} /></button>
                </li>
              ))}
            </ul>
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
          </div>
        );
      })}

      {/* Mood calendar */}
      <div style={S.card}>
        <div style={S.cardTitle}>
          {new Date(year, month - 1).toLocaleDateString("en-US", { month: "long", year: "numeric" })} · Mood history
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
            const isToday = dateISO === TODAY;
            return (
              <div key={day} style={{
                ...S.calDay,
                background: m ? m.color : (future ? "#FAFAF8" : "#fff"),
                borderColor: isToday ? "#26241F" : "#ECEAE3",
                borderWidth: isToday ? 2 : 1,
                color: m ? "#fff" : "#B5B1A7",
                opacity: future ? 0.5 : 1,
              }} title={m ? m.label : ""}>
                {m ? m.emoji : day}
              </div>
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
        {loggedToday
          ? `Mood set · ${totalBullets} point${totalBullets === 1 ? "" : "s"} written today`
          : "Tap a mood to log today and keep your streak"}
      </div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "26px 22px", color: "#26241F", boxSizing: "border-box", maxWidth: 680, margin: "0 auto" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18, gap: 12 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  date: { fontSize: 12.5, color: "#9A968C", marginTop: 3 },
  streakBox: { display: "flex", alignItems: "center", gap: 5, background: "#fff", borderRadius: 20, padding: "7px 13px", boxShadow: "0 1px 2px rgba(0,0,0,0.06)", flexShrink: 0 },
  streakNum: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  streakLabel: { fontSize: 11, color: "#9A968C", fontWeight: 500 },
  card: { background: "#fff", borderRadius: 12, padding: 16, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  cardTitle: { fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" },
  moodRow: { display: "flex", gap: 8, marginTop: 13, flexWrap: "wrap" },
  moodBtn: { flex: 1, minWidth: 60, border: "1.5px solid #ECEAE3", background: "#fff", borderRadius: 12, padding: "12px 6px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, transition: "transform 0.12s ease", fontFamily: "inherit" },
  moodEmoji: { fontSize: 24, lineHeight: 1 },
  moodLabel: { fontSize: 11.5, fontWeight: 600 },
  sectionHead: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 },
  sectionIcon: { width: 30, height: 30, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
  sectionHint: { fontSize: 11.5, color: "#9A968C", marginTop: 1 },
  bulletList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7 },
  bullet: { display: "flex", alignItems: "center", gap: 9, background: "#FAFAF8", borderRadius: 8, padding: "9px 10px" },
  bulletDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0 },
  bulletText: { fontSize: 13.5, fontWeight: 500, flex: 1, lineHeight: 1.35 },
  bulletDel: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", padding: 2, display: "grid", placeItems: "center", flexShrink: 0 },
  addRow: { display: "flex", gap: 7, marginTop: 9 },
  input: { flex: 1, border: "1px solid #E4E2DA", borderRadius: 8, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none" },
  addBtn: { border: "none", color: "#fff", width: 38, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  calDow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, margin: "13px 0 8px" },
  calDowCell: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase" },
  calGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 },
  calDay: { aspectRatio: "1", borderRadius: 8, borderStyle: "solid", display: "grid", placeItems: "center", fontSize: 15, fontWeight: 600 },
  legend: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14, paddingTop: 12, borderTop: "1px solid #F2F1EC" },
  legendItem: { display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#6B675E", fontWeight: 500 },
  legendDot: { width: 10, height: 10, borderRadius: "50%" },
  footer: { textAlign: "center", fontSize: 12, color: "#9A968C", padding: "8px 0 4px", fontWeight: 500 },
};
