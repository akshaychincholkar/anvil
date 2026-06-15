import { useState, useEffect, useRef, useCallback } from "react";
import { BarChart3 } from "lucide-react";
import { api } from "../api.js";
import GroveStats from "./GroveStats.jsx";
import { TREES, DEFAULT_TREE, Tree, MiniTree } from "./grove/trees.jsx";

const DURATIONS = [15, 30, 45, 60, 90];
const ACTIVE_KEY = "anvil_grove_active";
const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const fmtMin = (m) => (m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`);

export default function GroveScreen() {
  const [view, setView] = useState("timer"); // timer | stats
  const [phase, setPhase] = useState("idle"); // idle | running | done | failed
  const [duration, setDuration] = useState(15);
  const [custom, setCustom] = useState(false);
  const [label, setLabel] = useState("");
  const [tree, setTree] = useState(DEFAULT_TREE);
  const [deepFocus, setDeepFocus] = useState(() => localStorage.getItem("anvil_grove_deepfocus") !== "0");
  const [remaining, setRemaining] = useState(15 * 60);
  const [data, setData] = useState({ sessions: [], stats: null });

  const endRef = useRef(null);
  const startRef = useRef(null);
  const recordedRef = useRef(false);

  const load = useCallback(async () => {
    try { setData(await api.getFocus()); } catch { /* offline */ }
  }, []);

  // record outcome, then refresh the forest
  const record = useCallback(async (completed, actualMin) => {
    if (recordedRef.current) return;
    recordedRef.current = true;
    localStorage.removeItem(ACTIVE_KEY);
    try {
      await api.createFocus({
        label: label.trim() || null, tree, duration_min: duration,
        actual_min: actualMin, completed,
        started_at: startRef.current, ended_at: new Date().toISOString(),
      });
    } catch { /* ignore */ }
    load();
  }, [label, tree, duration, load]);

  const fail = useCallback(() => {
    if (phase !== "running") return;
    const elapsed = startRef.current ? Math.round((Date.now() - new Date(startRef.current).getTime()) / 60000) : 0;
    setPhase("failed");
    record(false, Math.max(0, Math.min(duration, elapsed)));
  }, [phase, duration, record]);

  const complete = useCallback(() => {
    setPhase("done");
    setRemaining(0);
    record(true, duration);
  }, [duration, record]);

  // Resume an in-flight session after a refresh
  useEffect(() => {
    load();
    const saved = JSON.parse(localStorage.getItem(ACTIVE_KEY) || "null");
    if (saved && saved.endTime) {
      const left = Math.round((saved.endTime - Date.now()) / 1000);
      setDuration(saved.duration); setLabel(saved.label || ""); setTree(saved.tree || "oak");
      endRef.current = saved.endTime; startRef.current = saved.startedAt;
      if (left > 0) { setRemaining(left); setPhase("running"); }
      else { setPhase("done"); recordedRef.current = false; record(true, saved.duration); }
    }
  }, []); // eslint-disable-line

  // Countdown tick
  useEffect(() => {
    if (phase !== "running") return;
    const tick = () => {
      const left = Math.round((endRef.current - Date.now()) / 1000);
      if (left <= 0) { complete(); return; }
      setRemaining(left);
    };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [phase, complete]);

  // Deep Focus: leaving the app / switching tabs while focusing → the tree withers
  useEffect(() => {
    if (phase !== "running" || !deepFocus) return;
    const onHide = () => { if (document.hidden) fail(); };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, [phase, deepFocus, fail]);

  const toggleDeep = () => setDeepFocus((v) => {
    const n = !v;
    localStorage.setItem("anvil_grove_deepfocus", n ? "1" : "0");
    return n;
  });

  const plant = () => {
    recordedRef.current = false;
    startRef.current = new Date().toISOString();
    endRef.current = Date.now() + duration * 60 * 1000;
    localStorage.setItem(ACTIVE_KEY, JSON.stringify({
      endTime: endRef.current, duration, label, tree, startedAt: startRef.current,
    }));
    setRemaining(duration * 60);
    setPhase("running");
  };

  const reset = () => { setPhase("idle"); setRemaining(duration * 60); };

  const pickPreset = (d) => { setCustom(false); setDuration(d); setRemaining(d * 60); };
  const enterCustom = () => { if (!custom) { setCustom(true); setDuration(5); setRemaining(5 * 60); } };
  const onCustomChange = (v) => {
    setCustom(true);
    if (v === "") { setDuration(0); setRemaining(0); return; }
    const m = Math.max(1, Math.min(600, parseInt(v, 10) || 0));
    setDuration(m); setRemaining(m * 60);
  };

  const total = duration * 60;
  const progress = phase === "running" ? 1 - remaining / total : phase === "done" ? 1 : 0;

  // Ring geometry
  const R = 130, C = 2 * Math.PI * R;
  const ring = C * (1 - (phase === "running" ? progress : phase === "done" ? 1 : 0));

  const stats = data.stats;

  if (view === "stats") {
    return <GroveStats sessions={data.sessions} onBack={() => setView("timer")} />;
  }

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Grove</div>
        <h1 style={S.h1}>Grove</h1>
        <div style={S.subhead}>Plant a tree, stay focused, grow your grove.</div>
        <button onClick={() => setView("stats")} style={S.insightsBtn} disabled={phase === "running"}>
          <BarChart3 size={15} /> Insights
        </button>
      </div>

      {/* Stats strip */}
      {stats && (
        <div style={S.statRow}>
          <Stat label="Today" value={fmtMin(stats.today_minutes)} />
          <Stat label="Trees" value={stats.trees} />
          <Stat label="Streak" value={`${stats.streak}d`} />
          <Stat label="Success" value={`${stats.success_rate}%`} />
        </div>
      )}

      {/* Timer stage */}
      <div style={S.stage}>
        <div style={S.ringWrap}>
          <svg width="300" height="300" viewBox="0 0 300 300" style={{ position: "absolute", inset: 0 }}>
            <circle cx="150" cy="150" r={R} fill="none" stroke="#ECEAE3" strokeWidth="10" />
            <circle cx="150" cy="150" r={R} fill="none" stroke={phase === "failed" ? "#C2536B" : "#4C9A6B"}
              strokeWidth="10" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={ring}
              transform="rotate(-90 150 150)" style={{ transition: "stroke-dashoffset 0.4s linear" }} />
          </svg>
          <div style={S.ringInner}>
            <Tree species={tree} progress={phase === "idle" ? 0 : progress} withered={phase === "failed"} size={170} />
          </div>
        </div>

        {phase === "idle" && (
          <>
            <div style={S.timeBig}>{fmt(duration * 60)}</div>
            <div style={S.controls}>
              <div style={S.chips}>
                {DURATIONS.map((d) => (
                  <button key={d} onClick={() => pickPreset(d)}
                    style={{ ...S.chip, ...(!custom && duration === d ? S.chipOn : {}) }}>{d}m</button>
                ))}
                <button onClick={enterCustom}
                  style={{ ...S.chip, ...(custom ? S.chipOn : {}) }}>Custom</button>
              </div>
              {custom && (
                <div style={S.customRow}>
                  <input type="number" min="1" max="600" inputMode="numeric" autoFocus
                    value={duration || ""} onChange={(e) => onCustomChange(e.target.value)}
                    placeholder="e.g. 50" style={S.customInput} />
                  <span style={S.customUnit}>minutes</span>
                </div>
              )}
              <input value={label} onChange={(e) => setLabel(e.target.value)}
                placeholder="What are you focusing on? (optional)" style={S.input} maxLength={60} />
              <div style={S.treePick}>
                {Object.entries(TREES).map(([k, v]) => (
                  <button key={k} onClick={() => setTree(k)} title={v.label}
                    style={{ ...S.treeBtn, ...(tree === k ? { borderColor: v.leaf, background: v.leaf + "1A" } : {}) }}>
                    <span style={{ ...S.treeDot, background: v.leaf }} />{v.label}
                  </button>
                ))}
              </div>
              <button onClick={toggleDeep} style={S.toggleRow}>
                <div style={{ textAlign: "left" }}>
                  <div style={S.toggleTitle}>Deep Focus</div>
                  <div style={S.toggleHint}>{deepFocus ? "Leaving the app kills the tree" : "Tree survives until you give up"}</div>
                </div>
                <div style={{ ...S.switch, ...(deepFocus ? S.switchOn : {}) }}>
                  <div style={{ ...S.knob, ...(deepFocus ? S.knobOn : {}) }} />
                </div>
              </button>
              <button onClick={plant} disabled={duration < 1} style={{ ...S.plantBtn, ...(duration < 1 ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>Plant tree</button>
            </div>
          </>
        )}

        {phase === "running" && (
          <>
            <div style={S.timeBig}>{fmt(remaining)}</div>
            <div style={S.focusLabel}>{label.trim() || "Focusing…"}</div>
            <div style={deepFocus ? S.warn : S.warnSoft}>
              {deepFocus ? "⚠ Deep Focus on — leaving this app will kill your tree." : "🌿 Relaxed mode — only Give up ends this session."}
            </div>
            <button onClick={fail} style={S.giveUp}>Give up</button>
          </>
        )}

        {phase === "done" && (
          <>
            <div style={S.resultTitle}>🌳 You grew a {TREES[tree].label} tree!</div>
            <div style={S.resultSub}>{fmtMin(duration)} of focus added to your grove.</div>
            <button onClick={reset} style={S.plantBtn}>Plant another</button>
          </>
        )}

        {phase === "failed" && (
          <>
            <div style={{ ...S.resultTitle, color: "#C2536B" }}>Your tree withered.</div>
            <div style={S.resultSub}>You left before the timer finished. Try again?</div>
            <button onClick={reset} style={S.plantBtn}>Try again</button>
          </>
        )}
      </div>

      {/* Forest */}
      <Forest sessions={data.sessions} onDelete={async (id) => { await api.deleteFocus(id); load(); }} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div style={S.stat}>
      <div style={S.statValue}>{value}</div>
      <div style={S.statLabel}>{label}</div>
    </div>
  );
}

function Forest({ sessions, onDelete }) {
  const grown = sessions.filter((s) => s.completed);
  if (grown.length === 0) {
    return <div style={S.forestEmpty}>Your grove is empty. Plant your first tree above. 🌱</div>;
  }
  // group by day
  const byDay = {};
  for (const s of grown) {
    const d = (s.started_at || s.created_at || "").slice(0, 10);
    (byDay[d] ||= []).push(s);
  }
  const days = Object.keys(byDay).sort().reverse();
  const fmtDay = (d) => {
    const today = new Date().toISOString().slice(0, 10);
    if (d === today) return "Today";
    return new Date(d + "T00:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  };

  return (
    <div style={S.forest}>
      <div style={S.forestHead}>Your Grove · {grown.length} trees</div>
      {days.map((d) => (
        <div key={d} style={S.daySection}>
          <div style={S.dayLabel}>{fmtDay(d)} · {byDay[d].length}</div>
          <div style={S.treeGrid}>
            {byDay[d].map((s) => (
              <div key={s.id} style={S.treeCard} title={`${s.label || "Focus"} · ${fmtMin(s.actual_min)}`}
                onDoubleClick={() => onDelete(s.id)}>
                <MiniTree species={s.tree} />
                <div style={S.treeCardMin}>{fmtMin(s.actual_min || s.duration_min)}</div>
                {s.label && <div style={S.treeCardLabel}>{s.label}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={S.forestHint}>Double-tap a tree to remove it.</div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 24px", color: "#26241F", boxSizing: "border-box", maxWidth: 820, margin: "0 auto" },
  head: { marginBottom: 16, textAlign: "center" },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "#9A968C", marginTop: 4 },
  insightsBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #E0DDD5", background: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit", marginTop: 12 },

  statRow: { display: "flex", gap: 10, justifyContent: "center", marginBottom: 18, flexWrap: "wrap" },
  stat: { background: "#fff", borderRadius: 12, padding: "10px 18px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", minWidth: 78 },
  statValue: { fontSize: 19, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", color: "#26241F" },
  statLabel: { fontSize: 11, color: "#9A968C", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 2 },

  stage: { background: "#fff", borderRadius: 18, padding: "28px 24px 32px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 26 },
  ringWrap: { position: "relative", width: 300, height: 300, display: "grid", placeItems: "center" },
  ringInner: { position: "relative", zIndex: 1, display: "grid", placeItems: "center" },
  timeBig: { fontSize: 40, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", letterSpacing: "-0.02em", marginTop: 6 },
  focusLabel: { fontSize: 14, color: "#6B675E", marginTop: 2, fontWeight: 500 },
  warn: { fontSize: 12, color: "#C2773B", marginTop: 12, fontWeight: 600, textAlign: "center", maxWidth: 320 },
  warnSoft: { fontSize: 12, color: "#4C9A6B", marginTop: 12, fontWeight: 600, textAlign: "center", maxWidth: 320 },
  toggleRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, border: "1px solid #E0DDD5", background: "#fff", borderRadius: 12, padding: "10px 14px", cursor: "pointer", fontFamily: "inherit", width: "100%" },
  toggleTitle: { fontSize: 14, fontWeight: 700, color: "#26241F" },
  toggleHint: { fontSize: 11.5, color: "#9A968C", marginTop: 1 },
  switch: { width: 42, height: 24, borderRadius: 12, background: "#D9D6CE", flexShrink: 0, padding: 2, transition: "background 0.18s", boxSizing: "border-box" },
  switchOn: { background: "#4C9A6B" },
  knob: { width: 20, height: 20, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.2)", transform: "translateX(0)", transition: "transform 0.18s" },
  knobOn: { transform: "translateX(18px)" },

  controls: { width: "100%", maxWidth: 380, display: "flex", flexDirection: "column", gap: 14, marginTop: 8 },
  chips: { display: "flex", gap: 7, justifyContent: "center", flexWrap: "wrap" },
  chip: { border: "1px solid #E0DDD5", background: "#fff", padding: "8px 16px", borderRadius: 20, fontSize: 13.5, fontWeight: 700, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  chipOn: { background: "#4C9A6B", color: "#fff", borderColor: "#4C9A6B" },
  customRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8 },
  customInput: { border: "1px solid #E0DDD5", borderRadius: 10, padding: "10px 12px", fontSize: 15, fontWeight: 700, fontFamily: "inherit", outline: "none", color: "#26241F", textAlign: "center", width: 100 },
  customUnit: { fontSize: 13, color: "#9A968C", fontWeight: 600 },
  input: { border: "1px solid #E0DDD5", borderRadius: 10, padding: "11px 13px", fontSize: 14, fontFamily: "inherit", outline: "none", color: "#26241F", textAlign: "center" },
  treePick: { display: "flex", gap: 7, justifyContent: "center", flexWrap: "wrap" },
  treeBtn: { display: "flex", alignItems: "center", gap: 6, border: "1.5px solid #E0DDD5", background: "#fff", padding: "7px 13px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  treeDot: { width: 10, height: 10, borderRadius: "50%" },
  plantBtn: { border: "none", background: "#26241F", color: "#fff", padding: "13px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  giveUp: { border: "1px solid #E0DDD5", background: "#fff", color: "#C2536B", padding: "11px 26px", borderRadius: 11, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 18 },
  resultTitle: { fontSize: 22, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginTop: 14, textAlign: "center" },
  resultSub: { fontSize: 13.5, color: "#9A968C", marginTop: 6, marginBottom: 18, textAlign: "center" },

  forest: { background: "#fff", borderRadius: 16, padding: "20px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  forestHead: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 14 },
  forestEmpty: { background: "#fff", borderRadius: 16, padding: "40px 20px", textAlign: "center", color: "#9A968C", fontSize: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  daySection: { marginBottom: 16 },
  dayLabel: { fontSize: 12, fontWeight: 700, color: "#9A968C", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 },
  treeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(80px,1fr))", gap: 8 },
  treeCard: { display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 4px", borderRadius: 10, cursor: "pointer", background: "#FAFAF8" },
  treeCardMin: { fontSize: 12, fontWeight: 700, color: "#4C9A6B", marginTop: -4 },
  treeCardLabel: { fontSize: 10.5, color: "#9A968C", marginTop: 2, textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 76 },
  forestHint: { fontSize: 11, color: "#C3BFB5", textAlign: "center", marginTop: 6 },
};
