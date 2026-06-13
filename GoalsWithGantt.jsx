import { useState } from "react";
import { ChevronRight, ChevronDown, Plus, Target, X, Check } from "lucide-react";

// ── Five pillars ────────────────────────────────────────────────
const PILLARS = {
  Financial:    { dot: "#C9A227", soft: "rgba(201,162,39,0.10)" },
  Academic:     { dot: "#3A7CA5", soft: "rgba(58,124,165,0.10)" },
  Relationship: { dot: "#C2536B", soft: "rgba(194,83,107,0.10)" },
  Health:       { dot: "#4C9A6B", soft: "rgba(76,154,107,0.10)" },
  Spiritual:    { dot: "#8268B0", soft: "rgba(130,104,176,0.10)" },
};
const PILLAR_NAMES = Object.keys(PILLARS);
const YEAR = 2026;
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const HORIZONS = ["Yearly", "Quarterly", "Monthly", "Weekly"];
const nextHorizon = (h) => HORIZONS[Math.min(HORIZONS.indexOf(h) + 1, HORIZONS.length - 1)];

// startM / endM are 0-indexed month numbers within the year (fractional for weeks).
// They drive both the period label and the Gantt bar.
const SEED = [
  { id: "f1", pillar: "Financial", horizon: "Yearly",    title: "Build a viable business + first revenue", parent: null, startM: 0,  endM: 11 },
  { id: "f2", pillar: "Financial", horizon: "Quarterly", title: "Validate one concrete business idea",     parent: "f1", startM: 0,  endM: 2 },
  { id: "f3", pillar: "Financial", horizon: "Monthly",   title: "Run 10 customer discovery interviews",     parent: "f2", startM: 1,  endM: 1 },
  { id: "f4", pillar: "Financial", horizon: "Weekly",    title: "Interview 3 retail traders",               parent: "f3", startM: 1.0, endM: 1.25 },
  { id: "a1", pillar: "Academic",  horizon: "Yearly",    title: "Ship the BRTN personal system",            parent: null, startM: 0,  endM: 11 },
  { id: "a2", pillar: "Academic",  horizon: "Quarterly", title: "Working single-user MVP with Cal sync",    parent: "a1", startM: 0,  endM: 2 },
  { id: "a3", pillar: "Academic",  horizon: "Monthly",   title: "Goal + quadrant screens done",             parent: "a2", startM: 0,  endM: 0 },
  { id: "a4", pillar: "Academic",  horizon: "Weekly",    title: "Finish goals drill-down view",             parent: "a3", startM: 0.0, endM: 0.25 },
  { id: "h1", pillar: "Health",    horizon: "Yearly",    title: "Consistent strength + mobility",           parent: null, startM: 0,  endM: 11 },
  { id: "h2", pillar: "Health",    horizon: "Monthly",   title: "Morning workout 5×/week",                  parent: "h1", startM: 5,  endM: 5 },
  { id: "h3", pillar: "Health",    horizon: "Weekly",    title: "Plan next week's sessions",                parent: "h2", startM: 5.0, endM: 5.25 },
  { id: "s1", pillar: "Spiritual", horizon: "Yearly",    title: "Daily Sadhna without gaps",                parent: null, startM: 0,  endM: 11 },
  { id: "s2", pillar: "Spiritual", horizon: "Weekly",    title: "Reflect on 3 articles",                    parent: "s1", startM: 2.0, endM: 2.25 },
  { id: "r1", pillar: "Relationship", horizon: "Quarterly", title: "Get brother interview-ready",           parent: null, startM: 0, endM: 2 },
  { id: "r2", pillar: "Relationship", horizon: "Weekly",    title: "Two mock interview drills",              parent: "r1", startM: 0.5, endM: 0.75 },
];

// ── Period label helpers ────────────────────────────────────────
const quarterOf = (m) => `Q${Math.floor(m / 3) + 1}`;
const weekLabel = (startM) => {
  const m = Math.floor(startM);
  const wk = Math.round((startM - m) / 0.25) + 1; // ~4 weeks per month
  return `${MONTHS[m]} W${wk}`;
};
const periodLabel = (g) => {
  switch (g.horizon) {
    case "Yearly":    return `${YEAR}`;
    case "Quarterly": return `${quarterOf(g.startM)} ${YEAR}`;
    case "Monthly":   return `${MONTHS[Math.floor(g.startM)]} ${YEAR}`;
    case "Weekly":    return weekLabel(g.startM);
    default:          return "";
  }
};

export default function GoalsWithGantt() {
  const [goals, setGoals] = useState(SEED);
  const [pillar, setPillar] = useState("Financial");
  const [ganttPillars, setGanttPillars] = useState(["Academic", "Spiritual"]);
  const [open, setOpen] = useState({ f1: true, f2: true, a1: true });
  const [adding, setAdding] = useState(null);
  const [draft, setDraft] = useState("");
  const [draftMonth, setDraftMonth] = useState(0);

  const toggleGanttPillar = (name) =>
    setGanttPillars((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);

  const childrenOf = (parentId) => goals.filter((g) => g.parent === parentId && g.pillar === pillar);
  const roots = goals.filter((g) => g.pillar === pillar && g.parent === null);
  const pillarGoals = goals.filter((g) => g.pillar === pillar);
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  const p = PILLARS[pillar];

  const startAdd = (parentId) => { setAdding(parentId); setDraft(""); setDraftMonth(0); };

  // Default a new goal's span from its horizon + chosen month.
  const spanFor = (horizon, month) => {
    if (horizon === "Yearly")    return { startM: 0, endM: 11 };
    if (horizon === "Quarterly") { const q = Math.floor(month / 3) * 3; return { startM: q, endM: q + 2 }; }
    if (horizon === "Monthly")   return { startM: month, endM: month };
    return { startM: month, endM: month + 0.25 }; // weekly
  };

  const commitAdd = (parentId, parentHorizon) => {
    if (!draft.trim()) return;
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    const span = spanFor(horizon, draftMonth);
    const id = `g${Date.now()}`;
    setGoals((g) => [...g, { id, pillar, horizon, title: draft.trim(), parent: parentId === "ROOT" ? null : parentId, ...span }]);
    if (parentId !== "ROOT") setOpen((o) => ({ ...o, [parentId]: true }));
    setAdding(null); setDraft("");
  };

  const AddInline = ({ parentId, parentHorizon, depth }) => {
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    const showMonth = horizon !== "Yearly";
    return (
      <div style={{ ...S.addBox, marginLeft: depth * 24 }}>
        <input
          autoFocus
          placeholder={`New ${horizon.toLowerCase()} goal…`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") commitAdd(parentId, parentHorizon); if (e.key === "Escape") setAdding(null); }}
          style={S.input}
        />
        {showMonth && (
          <select value={draftMonth} onChange={(e) => setDraftMonth(Number(e.target.value))} style={S.monthSelect}>
            {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
          </select>
        )}
        <button onClick={() => commitAdd(parentId, parentHorizon)} style={S.saveBtn}><Check size={14} /></button>
        <button onClick={() => setAdding(null)} style={S.cancelBtn}><X size={14} /></button>
      </div>
    );
  };

  const Node = ({ goal, depth }) => {
    const kids = childrenOf(goal.id);
    const isOpen = open[goal.id];
    const canNest = goal.horizon !== "Weekly";
    return (
      <div>
        <div style={{ ...S.row, marginLeft: depth * 24, background: depth === 0 ? p.soft : "transparent" }}>
          {kids.length > 0 ? (
            <button onClick={() => toggle(goal.id)} style={S.caret}>
              {isOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
            </button>
          ) : (
            <span style={{ ...S.caret, opacity: 0.25 }}><Target size={12} /></span>
          )}
          <span style={{ ...S.horizonTag, color: p.dot, borderColor: p.dot }}>{goal.horizon}</span>
          <span style={S.title}>{goal.title}</span>
          <span style={S.periodTag}>{periodLabel(goal)}</span>
          {canNest && (
            <button onClick={() => { setOpen((o) => ({ ...o, [goal.id]: true })); startAdd(goal.id); }} style={S.rowAdd} title="Add sub-goal">
              <Plus size={13} />
            </button>
          )}
        </div>
        {isOpen && kids.map((k) => <Node key={k.id} goal={k} depth={depth + 1} />)}
        {isOpen && adding === goal.id && <AddInline parentId={goal.id} parentHorizon={goal.horizon} depth={depth + 1} />}
      </div>
    );
  };

  // ── Gantt: weekly goals only, across the multi-selected pillars ──
  const ganttRows = goals
    .filter((g) => g.horizon === "Weekly" && ganttPillars.includes(g.pillar))
    .sort((a, b) => a.pillar.localeCompare(b.pillar) || a.startM - b.startM);

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>BRTN · Goals</div>
          <h1 style={S.h1}>{pillar} Goals</h1>
        </div>
      </div>

      <div style={S.pillarPicker}>
        {PILLAR_NAMES.map((name) => {
          const on = name === pillar;
          return (
            <button key={name} onClick={() => { setPillar(name); setAdding(null); }}
              style={{ ...S.pillarChip, ...(on ? { background: PILLARS[name].dot, color: "#fff", borderColor: PILLARS[name].dot } : {}) }}>
              <span style={{ ...S.dot, background: on ? "#fff" : PILLARS[name].dot }} />
              {name}
            </button>
          );
        })}
      </div>

      <div style={S.list}>
        {roots.map((g) => <Node key={g.id} goal={g} depth={0} />)}
        {adding === "ROOT" && <AddInline parentId="ROOT" parentHorizon={null} depth={0} />}
        {adding !== "ROOT" && (
          <button onClick={() => startAdd("ROOT")} style={S.rootAdd}><Plus size={14} /> Add top-level goal</button>
        )}
      </div>

      {/* ── GANTT ───────────────────────────────────────────── */}
      <div style={S.ganttWrap}>
        <div style={S.ganttTop}>
          <div style={S.ganttTitle}>{YEAR} · Weekly Timeline</div>
          <div style={S.ganttMultiSelect}>
            {PILLAR_NAMES.map((name) => {
              const on = ganttPillars.includes(name);
              return (
                <button key={name} onClick={() => toggleGanttPillar(name)}
                  style={{ ...S.msChip, ...(on ? { background: PILLARS[name].dot, color: "#fff", borderColor: PILLARS[name].dot } : {}) }}>
                  <span style={{ ...S.dot, width: 7, height: 7, background: on ? "#fff" : PILLARS[name].dot }} />
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        {ganttRows.length === 0 ? (
          <div style={S.ganttEmpty}>Select one or more pillars to see their weekly goals.</div>
        ) : (
          <div style={S.ganttScroll}>
            <div style={S.ganttInner}>
              <div style={S.ganttHeader}>
                <div style={S.ganttLabelCol} />
                <div style={S.ganttGrid}>
                  {MONTHS.map((m) => <div key={m} style={S.ganttMonth}>{m}</div>)}
                </div>
              </div>
              {ganttRows.map((g) => {
                const c = PILLARS[g.pillar].dot;
                const left = (g.startM / 12) * 100;
                const realWidth = Math.max(((g.endM - g.startM) / 12) * 100, 1.5);
                return (
                  <div key={g.id} style={S.ganttRow}>
                    <div style={{ ...S.ganttLabelCol, paddingLeft: 8 }}>
                      <span style={{ ...S.ganttRowDot, background: c }} />
                      <span style={S.ganttRowLabel}>{g.title}</span>
                    </div>
                    <div style={S.ganttGrid}>
                      {MONTHS.map((_, i) => <div key={i} style={S.ganttCell} />)}
                      <div style={{ ...S.ganttBar, left: `${left}%`, width: `${realWidth}%`, background: c }} title={`${g.pillar} · ${weekLabel(g.startM)}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 26px", color: "#26241F", boxSizing: "border-box" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif" },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
  pillarPicker: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 },
  pillarChip: { display: "flex", alignItems: "center", gap: 7, border: "1px solid #E0DDD5", background: "#fff", padding: "7px 13px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  list: { background: "#fff", borderRadius: 12, padding: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  row: { display: "flex", alignItems: "center", gap: 9, padding: "9px 10px", borderRadius: 8 },
  caret: { border: "none", background: "none", cursor: "pointer", color: "#6B675E", display: "grid", placeItems: "center", padding: 0, width: 18, height: 18, flexShrink: 0 },
  horizonTag: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", border: "1px solid", borderRadius: 5, padding: "2px 6px", flexShrink: 0 },
  title: { fontSize: 14, fontWeight: 500, lineHeight: 1.3, flex: 1 },
  periodTag: { fontSize: 11, fontWeight: 600, color: "#6B675E", background: "#F2F1EC", padding: "3px 8px", borderRadius: 12, flexShrink: 0 },
  rowAdd: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, flexShrink: 0 },
  rootAdd: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6B675E", background: "none", border: "1px dashed #D9D6CE", borderRadius: 8, padding: "9px 12px", cursor: "pointer", fontWeight: 600, fontFamily: "inherit", marginTop: 6, width: "100%", justifyContent: "center" },
  addBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 0 6px 28px" },
  input: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", flex: 1 },
  monthSelect: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px 8px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },

  // gantt
  ganttWrap: { background: "#fff", borderRadius: 12, padding: "16px 14px", marginTop: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  ganttTop: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  ganttTitle: { fontSize: 13, fontWeight: 700, color: "#4A463E", fontFamily: "'Fraunces', Georgia, serif" },
  ganttMultiSelect: { display: "flex", gap: 6, flexWrap: "wrap" },
  msChip: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "5px 10px", borderRadius: 16, fontSize: 11.5, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  ganttEmpty: { fontSize: 13, color: "#9A968C", padding: "24px 12px", textAlign: "center" },
  ganttScroll: { overflowX: "auto" },
  ganttInner: { minWidth: 640 },
  ganttHeader: { display: "flex", marginBottom: 6 },
  ganttLabelCol: { width: 200, flexShrink: 0, display: "flex", alignItems: "center", gap: 7 },
  ganttGrid: { position: "relative", flex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)" },
  ganttMonth: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" },
  ganttRow: { display: "flex", alignItems: "center", height: 30 },
  ganttRowDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  ganttRowLabel: { fontSize: 12, fontWeight: 500, color: "#3A372F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  ganttCell: { borderLeft: "1px solid #F0EEE8", height: 30 },
  ganttBar: { position: "absolute", top: 7, height: 16, borderRadius: 5, boxShadow: "0 1px 2px rgba(0,0,0,0.12)" },
};
