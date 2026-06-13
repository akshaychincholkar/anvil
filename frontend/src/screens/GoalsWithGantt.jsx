import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronDown, Plus, Target, X, Check } from "lucide-react";
import { api } from "../api.js";

const PILLARS = {
  Financial:    { dot: "#C9A227", soft: "rgba(201,162,39,0.10)" },
  Academic:     { dot: "#3A7CA5", soft: "rgba(58,124,165,0.10)" },
  Relationship: { dot: "#C2536B", soft: "rgba(194,83,107,0.10)" },
  Health:       { dot: "#4C9A6B", soft: "rgba(76,154,107,0.10)" },
  Spiritual:    { dot: "#8268B0", soft: "rgba(130,104,176,0.10)" },
};
const PILLAR_NAMES = Object.keys(PILLARS);
const HORIZONS = ["Yearly", "Quarterly", "Monthly", "Weekly"];
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const YEAR = new Date().getFullYear();

const nextHorizon = (h) => HORIZONS[Math.min(HORIZONS.indexOf(h) + 1, HORIZONS.length - 1)];

// ── Date helpers ─────────────────────────────────────────────────

const horizonDates = (horizon, month) => {
  const y = YEAR;
  switch (horizon) {
    case "Yearly":
      return { start_date: `${y}-01-01`, end_date: `${y}-12-31` };
    case "Quarterly": {
      const q = Math.floor(month / 3) * 3;
      const sm = q + 1, em = q + 3;
      const lastDay = new Date(y, em, 0).getDate();
      return {
        start_date: `${y}-${String(sm).padStart(2,"0")}-01`,
        end_date:   `${y}-${String(em).padStart(2,"0")}-${lastDay}`,
      };
    }
    case "Monthly": {
      const lastDay = new Date(y, month + 1, 0).getDate();
      return {
        start_date: `${y}-${String(month+1).padStart(2,"0")}-01`,
        end_date:   `${y}-${String(month+1).padStart(2,"0")}-${lastDay}`,
      };
    }
    case "Weekly":
      return {
        start_date: `${y}-${String(month+1).padStart(2,"0")}-01`,
        end_date:   `${y}-${String(month+1).padStart(2,"0")}-07`,
      };
    default:
      return { start_date: `${y}-01-01`, end_date: `${y}-12-31` };
  }
};

const toFractM = (dateStr) => {
  if (!dateStr) return 0;
  const d = new Date(dateStr + "T00:00:00");
  if (d.getFullYear() > YEAR) return 12;
  if (d.getFullYear() < YEAR) return 0;
  return d.getMonth() + (d.getDate() - 1) / 30;
};

const periodLabel = (g) => {
  if (!g.start_date) return "";
  const d = new Date(g.start_date + "T00:00:00");
  const m = d.getMonth();
  switch (g.horizon) {
    case "Yearly":    return `${d.getFullYear()}`;
    case "Quarterly": return `Q${Math.floor(m/3)+1} ${d.getFullYear()}`;
    case "Monthly":   return `${MONTHS[m]} ${d.getFullYear()}`;
    case "Weekly":    return `${MONTHS[m]} W${Math.ceil(d.getDate()/7)}`;
    default:          return "";
  }
};

export default function GoalsWithGantt() {
  const [goals, setGoals] = useState([]);
  const [pillar, setPillar] = useState("Financial");
  const [ganttPillars, setGanttPillars] = useState(["Academic"]);
  const [open, setOpen] = useState({});
  const [adding, setAdding] = useState(null);
  const [draft, setDraft] = useState("");
  const [draftMonth, setDraftMonth] = useState(0);

  const load = useCallback(() => {
    api.getGoals().then(setGoals).catch(console.error);
  }, []);
  useEffect(() => { load(); }, [load]);

  const p = PILLARS[pillar];
  const pillarGoals = goals.filter((g) => g.pillar === pillar);
  const roots = pillarGoals.filter((g) => !g.parent_goal_id);
  const childrenOf = (parentId) => pillarGoals.filter((g) => g.parent_goal_id === parentId);
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  const toggleGanttPillar = (name) =>
    setGanttPillars((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);

  const startAdd = (parentId) => { setAdding(parentId); setDraft(""); setDraftMonth(0); };

  const commitAdd = async (parentId, parentHorizon) => {
    if (!draft.trim()) return;
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    const { start_date, end_date } = horizonDates(horizon, draftMonth);
    await api.createGoal({
      pillar,
      title: draft.trim(),
      horizon,
      parent_goal_id: parentId === "ROOT" ? null : parentId,
      start_date,
      end_date,
    });
    if (parentId !== "ROOT") setOpen((o) => ({ ...o, [parentId]: true }));
    setAdding(null);
    setDraft("");
    load();
  };

  const deleteGoal = async (id) => {
    await api.deleteGoal(id);
    load();
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
          onKeyDown={(e) => {
            if (e.key === "Enter") commitAdd(parentId, parentHorizon);
            if (e.key === "Escape") setAdding(null);
          }}
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
            <button
              onClick={() => { setOpen((o) => ({ ...o, [goal.id]: true })); startAdd(goal.id); }}
              style={S.rowAdd}
              title="Add sub-goal"
            >
              <Plus size={13} />
            </button>
          )}
          <button onClick={() => deleteGoal(goal.id)} style={{ ...S.rowAdd, color: "#C3BFB5" }} title="Delete">
            <X size={13} />
          </button>
        </div>
        {isOpen && kids.map((k) => <Node key={k.id} goal={k} depth={depth + 1} />)}
        {isOpen && adding === goal.id && (
          <AddInline parentId={goal.id} parentHorizon={goal.horizon} depth={depth + 1} />
        )}
      </div>
    );
  };

  // Gantt: weekly goals across selected pillars
  const ganttRows = goals
    .filter((g) => g.horizon === "Weekly" && ganttPillars.includes(g.pillar))
    .sort((a, b) => a.pillar.localeCompare(b.pillar) || a.start_date.localeCompare(b.start_date));

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Goals</div>
        <h1 style={S.h1}>{pillar} Goals</h1>
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
          <button onClick={() => startAdd("ROOT")} style={S.rootAdd}>
            <Plus size={14} /> Add top-level goal
          </button>
        )}
      </div>

      {/* Gantt */}
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
          <div style={S.ganttEmpty}>Select pillars above to see their weekly goals on the timeline.</div>
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
                const startFM = toFractM(g.start_date);
                const endFM = toFractM(g.end_date);
                const left = (startFM / 12) * 100;
                const width = Math.max(((endFM - startFM) / 12) * 100, 1.5);
                return (
                  <div key={g.id} style={S.ganttRow}>
                    <div style={{ ...S.ganttLabelCol, paddingLeft: 8 }}>
                      <span style={{ ...S.ganttRowDot, background: c }} />
                      <span style={S.ganttRowLabel}>{g.title}</span>
                    </div>
                    <div style={S.ganttGrid}>
                      {MONTHS.map((_, i) => <div key={i} style={S.ganttCell} />)}
                      <div style={{ ...S.ganttBar, left: `${left}%`, width: `${width}%`, background: c }} title={`${g.pillar} · ${periodLabel(g)}`} />
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
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 26px", color: "#26241F", boxSizing: "border-box" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
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
  monthSelect: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  ganttWrap: { background: "#fff", borderRadius: 12, padding: "16px 14px", marginTop: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  ganttTop: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  ganttTitle: { fontSize: 13, fontWeight: 700, color: "#4A463E", fontFamily: "'Fraunces',Georgia,serif" },
  ganttMultiSelect: { display: "flex", gap: 6, flexWrap: "wrap" },
  msChip: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "5px 10px", borderRadius: 16, fontSize: 11.5, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  ganttEmpty: { fontSize: 13, color: "#9A968C", padding: "24px 12px", textAlign: "center" },
  ganttScroll: { overflowX: "auto" },
  ganttInner: { minWidth: 640 },
  ganttHeader: { display: "flex", marginBottom: 6 },
  ganttLabelCol: { width: 200, flexShrink: 0, display: "flex", alignItems: "center", gap: 7 },
  ganttGrid: { position: "relative", flex: 1, display: "grid", gridTemplateColumns: "repeat(12,1fr)" },
  ganttMonth: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" },
  ganttRow: { display: "flex", alignItems: "center", height: 30 },
  ganttRowDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  ganttRowLabel: { fontSize: 12, fontWeight: 500, color: "#3A372F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  ganttCell: { borderLeft: "1px solid #F0EEE8", height: 30 },
  ganttBar: { position: "absolute", top: 7, height: 16, borderRadius: 5, boxShadow: "0 1px 2px rgba(0,0,0,0.12)" },
};
