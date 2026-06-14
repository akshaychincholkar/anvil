import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronDown, Plus, Target, X, Check, Pencil } from "lucide-react";
import { api } from "../api.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

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
const QUARTERS = [
  { label: "Q1 · Jan–Mar", startMonth: 0 },
  { label: "Q2 · Apr–Jun", startMonth: 3 },
  { label: "Q3 · Jul–Sep", startMonth: 6 },
  { label: "Q4 · Oct–Dec", startMonth: 9 },
];
const YEAR = new Date().getFullYear();

const nextHorizon = (h) => HORIZONS[Math.min(HORIZONS.indexOf(h) + 1, HORIZONS.length - 1)];

// Months (0-indexed) the child of `parentGoal` is allowed to span.
// Null parent (top-level) → the whole year.
const allowedMonths = (parentGoal) => {
  if (!parentGoal || !parentGoal.start_date) return Array.from({ length: 12 }, (_, i) => i);
  const s = new Date(parentGoal.start_date + "T00:00:00");
  const e = new Date(parentGoal.end_date + "T00:00:00");
  const sm = s.getFullYear() < YEAR ? 0 : s.getMonth();
  const em = e.getFullYear() > YEAR ? 11 : e.getMonth();
  return Array.from({ length: em - sm + 1 }, (_, i) => sm + i);
};

// ── Date helpers ─────────────────────────────────────────────────

const weekDates = (year, month, week) => {
  // week: 1-4, month: 0-indexed
  const startDay = (week - 1) * 7 + 1;
  const endDay = Math.min(startDay + 6, new Date(year, month + 1, 0).getDate());
  const m = String(month + 1).padStart(2, "0");
  return {
    start_date: `${year}-${m}-${String(startDay).padStart(2, "0")}`,
    end_date:   `${year}-${m}-${String(endDay).padStart(2, "0")}`,
  };
};

const horizonDates = (horizon, month, week = 1) => {
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
      return weekDates(y, month, week);
    default:
      return { start_date: `${y}-01-01`, end_date: `${y}-12-31` };
  }
};

// Fractional month position (0–12) for the gantt's 12 equal-width columns.
// Uses the real number of days in the month so bars line up with their dates;
// inclusiveEnd extends the bar to cover the whole end day.
const toFractM = (dateStr, inclusiveEnd = false) => {
  if (!dateStr) return 0;
  const d = new Date(dateStr + "T00:00:00");
  if (d.getFullYear() > YEAR) return 12;
  if (d.getFullYear() < YEAR) return 0;
  const daysInMonth = new Date(YEAR, d.getMonth() + 1, 0).getDate();
  const day = d.getDate() - (inclusiveEnd ? 0 : 1);
  return d.getMonth() + day / daysInMonth;
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
  const [draftWeek, setDraftWeek] = useState(1);
  const [editing, setEditing] = useState(null); // { id, title, pillar, start_date, end_date }

  const load = useCallback(() => {
    api.getGoals().then(setGoals).catch(console.error);
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteGoal, api.restoreGoal, load
  );

  const p = PILLARS[pillar];
  const pillarGoals = goals.filter((g) => g.pillar === pillar);
  const roots = pillarGoals.filter((g) => !g.parent_goal_id);
  const childrenOf = (parentId) => pillarGoals.filter((g) => g.parent_goal_id === parentId);
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));
  const toggleGanttPillar = (name) =>
    setGanttPillars((cur) => cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]);

  const startAdd = (parentId, parentGoal = null) => {
    setAdding(parentId);
    setDraft("");
    setDraftWeek(1);
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentGoal?.horizon);
    const months = parentId === "ROOT" ? [0] : allowedMonths(parentGoal);
    // Quarterly picks a quarter (start month 0/3/6/9); others pick the first allowed month.
    setDraftMonth(horizon === "Quarterly" ? Math.floor(months[0] / 3) * 3 : months[0] ?? 0);
  };

  const commitAdd = async (parentId, parentHorizon) => {
    if (!draft.trim()) return;
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    const { start_date, end_date } = horizonDates(horizon, draftMonth, draftWeek);
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

  const startEdit = (goal) => {
    const d = goal.start_date ? new Date(goal.start_date + "T00:00:00") : new Date();
    const month = d.getMonth();
    const week = Math.min(Math.max(Math.ceil(d.getDate() / 7), 1), 4);
    setEditing({
      id: goal.id,
      title: goal.title,
      pillar: goal.pillar,
      horizon: goal.horizon,
      parentGoal: goals.find((x) => x.id === goal.parent_goal_id) || null,
      month: goal.horizon === "Quarterly" ? Math.floor(month / 3) * 3 : month,
      week,
    });
  };

  const commitEdit = async () => {
    if (!editing || !editing.title.trim()) return;
    let month = editing.month;
    if (editing.horizon === "Weekly") month = allowedMonths(editing.parentGoal)[0]; // inherit parent month
    const { start_date, end_date } = horizonDates(editing.horizon, month, editing.week);
    await api.updateGoal(editing.id, {
      title: editing.title.trim(),
      pillar: editing.pillar,
      start_date,
      end_date,
    });
    setEditing(null);
    load();
  };

  const AddInline = ({ parentId, parentGoal, depth }) => {
    const parentHorizon = parentGoal?.horizon ?? null;
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    const months = parentId === "ROOT" ? Array.from({ length: 12 }, (_, i) => i) : allowedMonths(parentGoal);
    const quarters = QUARTERS.filter((q) => months.includes(q.startMonth));
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
        {horizon === "Quarterly" && (
          <select value={draftMonth} onChange={(e) => setDraftMonth(Number(e.target.value))} style={S.monthSelect}>
            {quarters.map((q) => <option key={q.startMonth} value={q.startMonth}>{q.label}</option>)}
          </select>
        )}
        {horizon === "Monthly" && (
          <select value={draftMonth} onChange={(e) => setDraftMonth(Number(e.target.value))} style={S.monthSelect}>
            {months.map((i) => <option key={i} value={i}>{MONTHS[i]}</option>)}
          </select>
        )}
        {horizon === "Weekly" && (
          <>
            <span style={S.inheritTag}>{MONTHS[months[0]]}</span>
            <select value={draftWeek} onChange={(e) => setDraftWeek(Number(e.target.value))} style={S.monthSelect}>
              {[1,2,3,4].map((w) => <option key={w} value={w}>Week {w}</option>)}
            </select>
          </>
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
    const isEditing = editing?.id === goal.id;

    if (isEditing) {
      const eMonths = allowedMonths(editing.parentGoal);
      const eQuarters = QUARTERS.filter((q) => eMonths.includes(q.startMonth));
      return (
        <div style={{ ...S.editBox, marginLeft: depth * 24 }}>
          <input
            autoFocus
            value={editing.title}
            onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && commitEdit()}
            style={{ ...S.input, flex: 1 }}
          />
          <select value={editing.pillar} onChange={(e) => setEditing({ ...editing, pillar: e.target.value })} style={S.monthSelect}>
            {PILLAR_NAMES.map((n) => <option key={n}>{n}</option>)}
          </select>
          {editing.horizon === "Quarterly" && (
            <select value={editing.month} onChange={(e) => setEditing({ ...editing, month: Number(e.target.value) })} style={S.monthSelect}>
              {eQuarters.map((q) => <option key={q.startMonth} value={q.startMonth}>{q.label}</option>)}
            </select>
          )}
          {editing.horizon === "Monthly" && (
            <select value={editing.month} onChange={(e) => setEditing({ ...editing, month: Number(e.target.value) })} style={S.monthSelect}>
              {eMonths.map((i) => <option key={i} value={i}>{MONTHS[i]}</option>)}
            </select>
          )}
          {editing.horizon === "Weekly" && (
            <>
              <span style={S.inheritTag}>{MONTHS[eMonths[0]]}</span>
              <select value={editing.week} onChange={(e) => setEditing({ ...editing, week: Number(e.target.value) })} style={S.monthSelect}>
                {[1,2,3,4].map((w) => <option key={w} value={w}>Week {w}</option>)}
              </select>
            </>
          )}
          <button onClick={commitEdit} style={S.saveBtn}><Check size={14} /></button>
          <button onClick={() => setEditing(null)} style={S.cancelBtn}><X size={14} /></button>
        </div>
      );
    }

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
          <span style={{ ...S.horizonTag, color: PILLARS[goal.pillar]?.dot || p.dot, borderColor: PILLARS[goal.pillar]?.dot || p.dot }}>{goal.horizon}</span>
          <span style={S.title}>{goal.title}</span>
          <span style={S.periodTag}>{periodLabel(goal)}</span>
          <button onClick={() => startEdit(goal)} style={S.rowAdd} title="Edit"><Pencil size={12} /></button>
          {canNest && (
            <button
              onClick={() => { setOpen((o) => ({ ...o, [goal.id]: true })); startAdd(goal.id, goal); }}
              style={S.rowAdd}
              title="Add sub-goal"
            >
              <Plus size={13} />
            </button>
          )}
          <button onClick={() => softDelete(goal.id, goal.title)} style={{ ...S.rowAdd, color: "#C3BFB5" }} title="Delete">
            <X size={13} />
          </button>
        </div>
        {isOpen && kids.map((k) => <Node key={k.id} goal={k} depth={depth + 1} />)}
        {isOpen && adding === goal.id && (
          <AddInline parentId={goal.id} parentGoal={goal} depth={depth + 1} />
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

      {/* Item 6: flex-wrap ensures mobile containment */}
      <div style={S.pillarPicker}>
        {PILLAR_NAMES.map((name) => {
          const on = name === pillar;
          return (
            <button key={name} onClick={() => { setPillar(name); setAdding(null); setEditing(null); }}
              style={{ ...S.pillarChip, ...(on ? { background: PILLARS[name].dot, color: "#fff", borderColor: PILLARS[name].dot } : {}) }}>
              <span style={{ ...S.dot, background: on ? "#fff" : PILLARS[name].dot }} />
              {name}
            </button>
          );
        })}
      </div>

      <div style={S.list}>
        {roots.map((g) => <Node key={g.id} goal={g} depth={0} />)}
        {adding === "ROOT" && <AddInline parentId="ROOT" parentGoal={null} depth={0} />}
        {adding !== "ROOT" && (
          <button onClick={() => startAdd("ROOT", null)} style={S.rootAdd}>
            <Plus size={14} /> Add top-level goal
          </button>
        )}
      </div>

      {/* Gantt */}
      <div style={S.ganttWrap}>
        <div style={S.ganttTop}>
          <div style={S.ganttTitle}>{YEAR} · Weekly Timeline</div>
          {/* Item 6: flex-wrap on multi-select chips */}
          <div style={S.ganttMultiSelect}>
            {(() => {
              const allOn = PILLAR_NAMES.every((n) => ganttPillars.includes(n));
              return (
                <button onClick={() => setGanttPillars(allOn ? [] : [...PILLAR_NAMES])}
                  style={{ ...S.msChip, ...(allOn ? { background: "#26241F", color: "#fff", borderColor: "#26241F" } : {}) }}>
                  All
                </button>
              );
            })()}
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
                const startFM = toFractM(g.start_date, false);
                const endFM = toFractM(g.end_date, true);
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

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 26px", color: "#26241F", boxSizing: "border-box", maxWidth: "100%", overflowX: "hidden" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
  pillarPicker: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 },
  pillarChip: { display: "flex", alignItems: "center", gap: 7, border: "1px solid #E0DDD5", background: "#fff", padding: "7px 13px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  list: { background: "#fff", borderRadius: 12, padding: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", overflowX: "hidden" },
  row: { display: "flex", alignItems: "center", gap: 9, padding: "9px 10px", borderRadius: 8, flexWrap: "nowrap" },
  caret: { border: "none", background: "none", cursor: "pointer", color: "#6B675E", display: "grid", placeItems: "center", padding: 0, width: 18, height: 18, flexShrink: 0 },
  horizonTag: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", border: "1px solid", borderRadius: 5, padding: "2px 6px", flexShrink: 0 },
  title: { fontSize: 14, fontWeight: 500, lineHeight: 1.3, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  periodTag: { fontSize: 11, fontWeight: 600, color: "#6B675E", background: "#F2F1EC", padding: "3px 8px", borderRadius: 12, flexShrink: 0 },
  rowAdd: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, flexShrink: 0 },
  rootAdd: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6B675E", background: "none", border: "1px dashed #D9D6CE", borderRadius: 8, padding: "9px 12px", cursor: "pointer", fontWeight: 600, fontFamily: "inherit", marginTop: 6, width: "100%", justifyContent: "center" },
  addBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 0 6px 28px", flexWrap: "wrap" },
  editBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", flexWrap: "wrap", background: "#F7F6F3", borderRadius: 8, margin: "4px 0" },
  input: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 120 },
  monthSelect: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  inheritTag: { fontSize: 11.5, fontWeight: 600, color: "#6B675E", background: "#F2F1EC", padding: "6px 9px", borderRadius: 7, flexShrink: 0 },
  dateInput: { border: "1px solid #D9D6CE", borderRadius: 7, padding: "8px", fontSize: 12, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  ganttWrap: { background: "#fff", borderRadius: 12, padding: "16px 14px", marginTop: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  ganttTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  ganttTitle: { fontSize: 13, fontWeight: 700, color: "#4A463E", fontFamily: "'Fraunces',Georgia,serif" },
  ganttMultiSelect: { display: "flex", gap: 6, flexWrap: "wrap" },
  msChip: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "5px 10px", borderRadius: 16, fontSize: 11.5, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  ganttEmpty: { fontSize: 13, color: "#9A968C", padding: "24px 12px", textAlign: "center" },
  ganttScroll: { overflowX: "auto" },
  ganttInner: { minWidth: 500 },
  ganttHeader: { display: "flex", marginBottom: 6 },
  ganttLabelCol: { width: 160, flexShrink: 0, display: "flex", alignItems: "center", gap: 7, minWidth: 0 },
  ganttGrid: { position: "relative", flex: 1, display: "grid", gridTemplateColumns: "repeat(12,1fr)" },
  ganttMonth: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" },
  ganttRow: { display: "flex", alignItems: "center", height: 30 },
  ganttRowDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  ganttRowLabel: { fontSize: 12, fontWeight: 500, color: "#3A372F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  ganttCell: { borderLeft: "1px solid #F0EEE8", height: 30 },
  ganttBar: { position: "absolute", top: 7, height: 16, borderRadius: 5, boxShadow: "0 1px 2px rgba(0,0,0,0.12)" },
};
