import { useState, useEffect, useRef } from "react";
import { Plus, X, Check, ChevronLeft, Trash2, Minus } from "lucide-react";
import { api } from "../../api.js";

const JAP_PER_MALA = 108;
const SEED = [{ id: 1, name: "ॐ गं गणपतये नमः", count: 0, daily: {} }];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Local calendar date (NOT toISOString, which is UTC and can shift the day).
const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const todayISO = () => toISO(new Date());

// The seven ISO dates of the current week, Monday → Sunday.
const thisWeekDates = () => {
  const now = new Date();
  const dow = now.getDay();               // 0=Sun … 6=Sat
  const mon = new Date(now);
  mon.setDate(now.getDate() + (dow === 0 ? -6 : 1 - dow));
  return Array.from({ length: 7 }, (_, i) => { const x = new Date(mon); x.setDate(mon.getDate() + i); return toISO(x); });
};

// Chanting (jap) counter. Each jap keeps one lifetime count; 108 japs = 1 mala.
// Counts persist in the per-user setting "chanting_japs" (debounced — a jap
// every second shouldn't mean an API call every second).
export default function ChantingView() {
  const [japs, setJaps] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activeJapId, setActiveJapId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");

  const saveTimer = useRef(null);
  const pendingSave = useRef(false);
  const listRef = useRef([]);
  useEffect(() => { listRef.current = japs; }, [japs]);

  useEffect(() => {
    api.getSetting("chanting_japs")
      .then((r) => { setJaps(Array.isArray(r?.value) && r.value.length ? r.value : SEED); setLoaded(true); })
      .catch(() => { setJaps(SEED); setLoaded(true); });
  }, []);

  const persist = (list) => {
    pendingSave.current = true;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      pendingSave.current = false;
      api.setSetting("chanting_japs", list).catch(() => {});
    }, 600);
  };
  // Flush any debounced count still waiting when the view unmounts.
  useEffect(() => () => {
    clearTimeout(saveTimer.current);
    if (pendingSave.current) api.setSetting("chanting_japs", listRef.current).catch(() => {});
  }, []);

  const mutate = (next) => { setJaps(next); persist(next); };
  // Bump both the lifetime count and today's per-day tally (kept in `daily`,
  // a { "YYYY-MM-DD": n } map) so the weekly chart has real history. A −1 undo
  // rolls back today's tally too, but never below zero.
  const bump = (id, delta) =>
    mutate(listRef.current.map((j) => {
      if (j.id !== id) return j;
      const today = todayISO();
      const daily = { ...(j.daily || {}) };
      daily[today] = Math.max(0, (daily[today] || 0) + delta);
      return { ...j, count: Math.max(0, j.count + delta), daily };
    }));

  const addJap = () => {
    const name = newName.trim();
    if (!name) return;
    mutate([...listRef.current, { id: Date.now(), name, count: 0, daily: {} }]);
    setNewName("");
    setAdding(false);
  };
  const removeJap = (jap) => {
    if (!window.confirm(`Delete "${jap.name}" and its count?`)) return;
    if (activeJapId === jap.id) setActiveJapId(null);
    mutate(listRef.current.filter((j) => j.id !== jap.id));
  };

  const active = japs.find((j) => j.id === activeJapId);

  if (!loaded) return <div style={C.muted}>Loading…</div>;

  if (active) {
    return (
      <ChantCard
        jap={active}
        onCount={() => bump(active.id, +1)}
        onMinus={() => bump(active.id, -1)}
        onBack={() => setActiveJapId(null)}
      />
    );
  }

  return (
    <div>
      <style>{CSS}</style>
      <div style={C.head}>
        <div>
          <h2 style={C.title}>Chanting · जप</h2>
          <div style={C.sub}>{JAP_PER_MALA} japs = 1 mala 📿 — pick a mantra and swipe up to count.</div>
        </div>
        {!adding && (
          <button onClick={() => setAdding(true)} style={C.addBtn}><Plus size={14} /> New Mantra</button>
        )}
      </div>

      {adding && (
        <div style={C.addRow}>
          <input
            autoFocus
            placeholder="Mantra name (e.g. ॐ नमः शिवाय)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") addJap(); if (e.key === "Escape") setAdding(false); }}
            style={C.input}
          />
          <button onClick={addJap} disabled={!newName.trim()}
            style={{ ...C.confirmBtn, ...(newName.trim() ? {} : { opacity: 0.5, cursor: "not-allowed" }) }}>
            <Check size={14} />
          </button>
          <button onClick={() => { setAdding(false); setNewName(""); }} style={C.cancelIconBtn}><X size={14} /></button>
        </div>
      )}

      <div style={C.list}>
        {japs.map((j) => {
          const malas = Math.floor(j.count / JAP_PER_MALA);
          const cur = j.count % JAP_PER_MALA;
          return (
            <div key={j.id} style={C.japRow} onClick={() => setActiveJapId(j.id)}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={C.japName}>{j.name}</div>
                <div style={C.japStats}>
                  📿 {malas} {malas === 1 ? "mala" : "malas"} · this mala {cur}/{JAP_PER_MALA} · {j.count} japs total
                </div>
                <div style={C.barTrack}><div style={{ ...C.barFill, width: `${(cur / JAP_PER_MALA) * 100}%` }} /></div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); removeJap(j); }} style={C.trashBtn} title="Delete jap">
                <Trash2 size={14} />
              </button>
            </div>
          );
        })}
        {japs.length === 0 && <div style={C.muted}>No mantras yet — add one to begin.</div>}
      </div>

      {japs.length > 0 && <WeeklyChart japs={japs} />}
    </div>
  );
}

// Bar chart of this week's japs per day (Mon–Sun), summed across every mantra.
function WeeklyChart({ japs }) {
  const week = thisWeekDates();
  const today = todayISO();
  const perDay = week.map((iso) => japs.reduce((sum, j) => sum + ((j.daily || {})[iso] || 0), 0));
  const weekTotal = perDay.reduce((a, b) => a + b, 0);
  const max = Math.max(...perDay, 1);

  return (
    <div style={C.chartCard}>
      <div style={C.chartHead}>
        <div style={C.chartTitle}>This week's chanting</div>
        <div style={C.chartTotal}>{weekTotal} {weekTotal === 1 ? "jap" : "japs"}</div>
      </div>
      <div style={C.chartGrid}>
        {week.map((iso, i) => {
          const n = perDay[i];
          const isToday = iso === today;
          const h = n > 0 ? Math.max(4, Math.round((n / max) * 100)) : 0;
          return (
            <div key={iso} style={C.chartCol} title={`${iso}: ${n} jap${n === 1 ? "" : "s"}`}>
              <div style={C.chartCount}>{n > 0 ? n : ""}</div>
              <div style={C.chartBarTrack}>
                <div style={{ ...C.chartBar, height: `${h}%`, ...(isToday ? C.chartBarToday : {}) }} />
              </div>
              <div style={{ ...C.chartDow, ...(isToday ? C.chartDowToday : {}) }}>
                {DOW[new Date(iso + "T00:00").getDay()]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Focus mode: the swipeable card. A light upward swipe (~15px) counts one jap;
// the card flies up and a fresh one pops in from below, while copies of the
// jap text drift upward at random positions.
function ChantCard({ jap, onCount, onMinus, onBack }) {
  const [drag, setDrag] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [flyers, setFlyers] = useState([]);
  const [parts, setParts] = useState([]);
  const [malaDone, setMalaDone] = useState(false);
  const startY = useRef(null);
  const prevCount = useRef(jap.count);

  const malas = Math.floor(jap.count / JAP_PER_MALA);
  const cur = jap.count % JAP_PER_MALA;

  // Celebrate the moment a swipe completes a mala (not on manual −1 corrections).
  useEffect(() => {
    const wasIncrement = jap.count === prevCount.current + 1;
    prevCount.current = jap.count;
    if (wasIncrement && jap.count > 0 && jap.count % JAP_PER_MALA === 0) {
      setMalaDone(true);
      navigator.vibrate?.([40, 60, 40]);
      const t = setTimeout(() => setMalaDone(false), 2200);
      return () => clearTimeout(t);
    }
  }, [jap.count]);

  const trigger = () => {
    const id = Date.now() + Math.random();
    setFlyers((f) => [...f, { id }]);
    setTimeout(() => setFlyers((f) => f.filter((x) => x.id !== id)), 550);
    // 2–3 text particles at random spots, drifting up with random tilt/speed.
    const n = 2 + Math.floor(Math.random() * 2);
    const ps = Array.from({ length: n }, (_, i) => ({
      id: id + i + 1,
      left: 6 + Math.random() * 72,
      bottom: 30 + Math.random() * 25,
      rot: -16 + Math.random() * 32,
      dur: 1 + Math.random() * 0.7,
      delay: Math.random() * 0.15,
      scale: 0.7 + Math.random() * 0.55,
    }));
    setParts((p) => [...p, ...ps]);
    setTimeout(() => setParts((p) => p.filter((x) => !ps.some((q) => q.id === x.id))), 2000);
    setCardKey((k) => k + 1);
    navigator.vibrate?.(12);
    onCount();
  };

  const onDown = (e) => { startY.current = e.clientY; e.currentTarget.setPointerCapture?.(e.pointerId); };
  const onMove = (e) => {
    if (startY.current == null) return;
    const dy = e.clientY - startY.current;
    if (dy < -15) { startY.current = null; setDrag(0); trigger(); } // light swipe — trigger mid-gesture
    else setDrag(Math.min(0, dy));
  };
  const onUp = () => { startY.current = null; setDrag(0); };

  return (
    <div>
      <style>{CSS}</style>
      <div style={C.focusHead}>
        <button onClick={onBack} style={C.backBtn}><ChevronLeft size={15} /> All mantras</button>
        <div style={C.focusStats}>
          📿 <b>{malas}</b> {malas === 1 ? "mala" : "malas"} · total <b>{jap.count}</b>
        </div>
        <button onClick={onMinus} disabled={jap.count === 0} title="Undo one jap"
          style={{ ...C.minusBtn, ...(jap.count === 0 ? { opacity: 0.35, cursor: "not-allowed" } : {}) }}>
          <Minus size={13} />
        </button>
      </div>

      <div style={C.stage}>
        {flyers.map((f) => (
          <div key={f.id} className="jap-fly" style={{ ...C.card, gridArea: "1 / 1" }}>
            <div style={C.cardText}>{jap.name}</div>
          </div>
        ))}
        <div
          key={cardKey}
          className="jap-pop"
          style={{ ...C.card, gridArea: "1 / 1", transform: `translateY(${drag * 0.6}px)`, touchAction: "none" }}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        >
          <div style={C.cardText}>{jap.name}</div>
          <div style={C.cardCount}>{cur} <span style={C.cardOf}>/ {JAP_PER_MALA}</span></div>
          <div style={C.cardHint}>Swipe up gently — 1 jap</div>
        </div>

        <div style={C.partsLayer}>
          {parts.map((p) => (
            <span key={p.id} className="jap-part" style={{
              left: `${p.left}%`, bottom: `${p.bottom}%`,
              "--r": `${p.rot}deg`, "--s": p.scale,
              animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
            }}>{jap.name}</span>
          ))}
        </div>

        {malaDone && (
          <div style={C.malaOverlay} className="jap-mala">
            <div style={C.malaEmoji}>📿</div>
            <div style={C.malaText}>Mala complete</div>
            <div style={C.malaSub}>{malas} {malas === 1 ? "mala" : "malas"} of {jap.name}</div>
          </div>
        )}
      </div>

      {/* The mala itself: one bead per jap in the current round. */}
      <div style={C.beads}>
        {Array.from({ length: JAP_PER_MALA }, (_, i) => (
          <span key={i} style={{ ...C.bead, ...(i < cur ? C.beadOn : {}) }} />
        ))}
      </div>
    </div>
  );
}

const CSS = `
@keyframes japFly { to { transform: translateY(-150%) rotate(-3deg); opacity: 0; } }
@keyframes japPop { from { transform: translateY(28px) scale(0.97); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
@keyframes japPart {
  0%   { opacity: 0; transform: translateY(0) scale(var(--s)) rotate(var(--r)); }
  12%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(-230px) scale(var(--s)) rotate(var(--r)); }
}
@keyframes japMala { 0% { opacity: 0; transform: scale(0.85); } 12% { opacity: 1; transform: scale(1); } 82% { opacity: 1; } 100% { opacity: 0; } }
.jap-fly  { animation: japFly 0.5s ease-in forwards; pointer-events: none; }
.jap-pop  { animation: japPop 0.28s ease-out; }
.jap-part { position: absolute; animation-name: japPart; animation-timing-function: ease-out; animation-fill-mode: both;
            font-family: 'Fraunces', Georgia, serif; font-size: 15px; font-weight: 700; color: #8268B0;
            white-space: nowrap; pointer-events: none; text-shadow: 0 1px 6px rgba(130,104,176,0.25); }
.jap-mala { animation: japMala 2.2s ease forwards; }
`;

const C = {
  muted: { color: "var(--text-3)", fontSize: 13, padding: "20px 0", textAlign: "center" },
  head: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", margin: 0, color: "#8268B0" },
  sub: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },
  addBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "#8268B0", padding: "8px 13px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 },
  addRow: { display: "flex", gap: 6, marginBottom: 14 },
  input: { flex: 1, border: "1px solid var(--border)", borderRadius: 9, padding: "9px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none" },
  confirmBtn: { border: "none", background: "#8268B0", color: "#fff", borderRadius: 9, width: 38, cursor: "pointer", display: "grid", placeItems: "center" },
  cancelIconBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", borderRadius: 9, width: 38, cursor: "pointer", display: "grid", placeItems: "center" },
  list: { display: "flex", flexDirection: "column", gap: 8 },
  japRow: { display: "flex", alignItems: "center", gap: 10, padding: "13px 14px", background: "var(--surface-2, var(--bg))", border: "1px solid var(--border)", borderRadius: 12, cursor: "pointer" },
  japName: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  japStats: { fontSize: 12, color: "var(--text-3)", margin: "3px 0 7px" },
  barTrack: { height: 5, borderRadius: 3, background: "var(--border)", overflow: "hidden" },
  barFill: { height: "100%", borderRadius: 3, background: "linear-gradient(90deg, #8268B0, #C9A227)", transition: "width 0.25s ease" },
  trashBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 6, borderRadius: 7, flexShrink: 0, display: "grid", placeItems: "center" },

  focusHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 14 },
  backBtn: { display: "flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 11px", borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  focusStats: { fontSize: 13, color: "var(--text-2)" },
  minusBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", borderRadius: 8, width: 30, height: 30, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },

  stage: { position: "relative", display: "grid", placeItems: "center", minHeight: 400, overflow: "hidden", borderRadius: 16 },
  card: {
    width: "min(420px, 92%)", minHeight: 300, borderRadius: 22, padding: "34px 26px",
    background: "linear-gradient(165deg, #8268B0 0%, #5E4A8C 100%)", color: "#fff",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18,
    boxShadow: "0 18px 50px rgba(94,74,140,0.4)", cursor: "grab",
    userSelect: "none", WebkitUserSelect: "none",
  },
  cardText: { fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(24px, 5.5vw, 38px)", fontWeight: 700, textAlign: "center", lineHeight: 1.4, textShadow: "0 2px 12px rgba(0,0,0,0.25)" },
  cardCount: { fontSize: 34, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "#F5E9C9" },
  cardOf: { fontSize: 16, opacity: 0.75, fontWeight: 600 },
  cardHint: { fontSize: 12, opacity: 0.75, letterSpacing: "0.04em" },
  partsLayer: { position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" },

  malaOverlay: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, background: "color-mix(in srgb, var(--surface) 88%, transparent)", borderRadius: 16, pointerEvents: "none" },
  malaEmoji: { fontSize: 46 },
  malaText: { fontSize: 24, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "#8268B0" },
  malaSub: { fontSize: 13, color: "var(--text-2)" },

  beads: { display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", maxWidth: 460, margin: "18px auto 0" },
  bead: { width: 7, height: 7, borderRadius: "50%", background: "var(--border)", transition: "background 0.2s ease" },
  beadOn: { background: "#C9A227" },

  chartCard: { marginTop: 22, padding: "16px 16px 12px", background: "var(--surface-2, var(--bg))", border: "1px solid var(--border)", borderRadius: 14 },
  chartHead: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 },
  chartTitle: { fontSize: 13, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "#8268B0" },
  chartTotal: { fontSize: 12, fontWeight: 600, color: "var(--text-3)" },
  chartGrid: { display: "flex", alignItems: "flex-end", gap: 8, height: 130 },
  chartCol: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%" },
  chartCount: { fontSize: 10.5, fontWeight: 700, color: "var(--text-2)", height: 14, lineHeight: "14px" },
  chartBarTrack: { flex: 1, width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" },
  chartBar: { width: "72%", maxWidth: 34, minHeight: 0, borderRadius: "5px 5px 0 0", background: "linear-gradient(180deg, #8268B0, #B9A0DB)", transition: "height 0.3s ease" },
  chartBarToday: { background: "linear-gradient(180deg, #C9A227, #E3C864)" },
  chartDow: { fontSize: 10.5, fontWeight: 600, color: "var(--text-3)", marginTop: 6 },
  chartDowToday: { color: "#C9A227", fontWeight: 800 },
};
