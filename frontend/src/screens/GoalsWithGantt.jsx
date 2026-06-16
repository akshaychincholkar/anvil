import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronDown, Plus, Target, X, Check, Pencil, Eye, EyeOff } from "lucide-react";
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

// Daily Gantt geometry
const DAY_MS = 86400000;
const COL_W = 30;       // px per day column
const GLABEL_W = 190;   // gantt label column width
const parseD = (s) => new Date(s + "T00:00:00");
const shortDate = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

// Gantt is grouped into horizon bands, in this order.
const GANTT_GROUPS = [
  { key: "yearly",    label: "Yearly",            horizons: ["Yearly"] },
  { key: "quarterly", label: "Quarterly",         horizons: ["Quarterly"] },
  { key: "mw",        label: "Monthly & Weekly",  horizons: ["Monthly", "Weekly"] },
];
const HZ_ABBR = { Yearly: "Yr", Quarterly: "Q", Monthly: "Mo", Weekly: "Wk" };
const HZ_RANK = { Yearly: 0, Quarterly: 1, Monthly: 2, Weekly: 3 };

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
  const [ganttOverride, setGanttOverride] = useState({}); // goalId → bool (overrides the horizon default)
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

  const isAll = pillar === "All";
  const p = PILLARS[pillar] || { dot: "var(--text-3)", soft: "transparent" };
  const pillarGoals = isAll ? goals : goals.filter((g) => g.pillar === pillar);
  const roots = pillarGoals.filter((g) => !g.parent_goal_id);
  const childrenOf = (parentId) => pillarGoals.filter((g) => g.parent_goal_id === parentId);
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  // Per-goal Gantt visibility: Monthly/Weekly show by default, Yearly/Quarterly hidden.
  const defaultOnGantt = (g) => g.horizon === "Monthly" || g.horizon === "Weekly";
  const isOnGantt = (g) => (ganttOverride[g.id] !== undefined ? ganttOverride[g.id] : defaultOnGantt(g));
  const toggleGantt = (g) => setGanttOverride((m) => ({ ...m, [g.id]: !isOnGantt(g) }));

  const startAdd = (parentId, parentGoal = null) => {
    setAdding(parentId);
    setDraft("");
    setDraftWeek(1);
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentGoal?.horizon);
    const months = parentId === "ROOT" ? [0] : allowedMonths(parentGoal);
    // Quarterly picks a quarter (start month 0/3/6/9); others pick the first allowed month.
    setDraftMonth(horizon === "Quarterly" ? Math.floor(months[0] / 3) * 3 : months[0] ?? 0);
  };

  const commitAdd = async (parentId, parentGoal) => {
    if (!draft.trim()) return;
    const parentHorizon = parentGoal?.horizon ?? null;
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentHorizon);
    // Sub-goals inherit their parent's pillar; top-level uses the selected pillar.
    const goalPillar = parentId === "ROOT" ? pillar : (parentGoal?.pillar || pillar);
    const { start_date, end_date } = horizonDates(horizon, draftMonth, draftWeek);
    await api.createGoal({
      pillar: goalPillar,
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
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentGoal?.horizon ?? null);
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
            if (e.key === "Enter") commitAdd(parentId, parentGoal);
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
        <button onClick={() => commitAdd(parentId, parentGoal)} style={S.saveBtn}><Check size={14} /></button>
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
        <div style={{ ...S.row, marginLeft: depth * 24, background: depth === 0 ? (PILLARS[goal.pillar]?.soft || "transparent") : "transparent" }}>
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
          <button
            onClick={() => toggleGantt(goal)}
            style={{ ...S.rowAdd, color: isOnGantt(goal) ? (PILLARS[goal.pillar]?.dot || p.dot) : "var(--text-3)" }}
            title={isOnGantt(goal) ? "Showing on timeline — click to hide" : "Hidden from timeline — click to show"}
          >
            {isOnGantt(goal) ? <Eye size={13} /> : <EyeOff size={13} />}
          </button>
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
          <button onClick={() => softDelete(goal.id, goal.title)} style={{ ...S.rowAdd, color: "var(--text-3)" }} title="Delete">
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

  // Daily PM-style Gantt — every enabled, dated goal that's toggled on.
  const ganttGoals = goals.filter((g) => isOnGantt(g) && g.start_date && g.end_date);

  // Grouped into horizon bands (Yearly, Quarterly, Monthly & Weekly), each sorted
  // by pillar then chronologically.
  const ganttGroups = GANTT_GROUPS
    .map((grp) => ({
      ...grp,
      items: ganttGoals
        .filter((g) => grp.horizons.includes(g.horizon))
        .sort((a, b) =>
          a.pillar.localeCompare(b.pillar) ||
          a.start_date.localeCompare(b.start_date) ||
          (HZ_RANK[a.horizon] - HZ_RANK[b.horizon]) ||
          a.end_date.localeCompare(b.end_date)),
    }))
    .filter((grp) => grp.items.length > 0);

  // Timeline window = min start → max end of the displayed goals.
  const gRange = (() => {
    if (!ganttGoals.length) return null;
    let min = ganttGoals[0].start_date, max = ganttGoals[0].end_date;
    ganttGoals.forEach((g) => { if (g.start_date < min) min = g.start_date; if (g.end_date > max) max = g.end_date; });
    return { start: parseD(min), end: parseD(max) };
  })();

  const gDays = (() => {
    if (!gRange) return [];
    const arr = [];
    for (let t = gRange.start.getTime(); t <= gRange.end.getTime(); t += DAY_MS) arr.push(new Date(t));
    return arr;
  })();
  const totalDays = gDays.length;

  const monthGroups = (() => {
    const groups = [];
    gDays.forEach((d) => {
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const last = groups[groups.length - 1];
      if (last && last.key === key) last.days++;
      else groups.push({ key, label: `${MONTHS[d.getMonth()]} '${String(d.getFullYear()).slice(2)}`, days: 1 });
    });
    return groups;
  })();

  const gToday = new Date(); gToday.setHours(0, 0, 0, 0);
  const todayIdx = gRange ? Math.round((gToday - gRange.start) / DAY_MS) : -1;
  const todayInRange = todayIdx >= 0 && todayIdx < totalDays;
  const dayDuration = (g) => Math.round((parseD(g.end_date) - parseD(g.start_date)) / DAY_MS) + 1;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Goals</div>
        <h1 style={S.h1}>{isAll ? "All Goals" : `${pillar} Goals`}</h1>
      </div>

      {/* Item 6: flex-wrap ensures mobile containment */}
      <div style={S.pillarPicker}>
        <button onClick={() => { setPillar("All"); setAdding(null); setEditing(null); }}
          style={{ ...S.pillarChip, ...(isAll ? { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" } : {}) }}>
          All Goals
        </button>
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
        {roots.length === 0 && <div style={S.ganttEmpty}>No goals yet{isAll ? "" : ` for ${pillar}`}.</div>}
        {!isAll && adding === "ROOT" && <AddInline parentId="ROOT" parentGoal={null} depth={0} />}
        {!isAll && adding !== "ROOT" && (
          <button onClick={() => startAdd("ROOT", null)} style={S.rootAdd}>
            <Plus size={14} /> Add top-level goal
          </button>
        )}
        {isAll && <div style={S.allHint}>Pick a pillar above to add new goals.</div>}
      </div>

      {/* Gantt */}
      <div style={S.ganttWrap}>
        <div style={S.ganttTop}>
          <div style={S.ganttTitle}>Daily Timeline{gRange ? ` · ${shortDate(gRange.start)} – ${shortDate(gRange.end)}` : ""}</div>
          <div style={S.ganttHint}>Toggle the <Eye size={12} style={{ verticalAlign: "-2px" }} /> on any goal to show or hide it here.</div>
        </div>
        {!gRange ? (
          <div style={S.ganttEmpty}>No goals on the timeline. Click the eye icon on a goal to show it here.</div>
        ) : (
          <div style={S.ganttScroll}>
            <div style={{ minWidth: GLABEL_W + totalDays * COL_W }}>
              {/* Month band */}
              <div style={S.gBandRow}>
                <div style={{ ...S.gLabelHead, zIndex: 4 }}>Goal</div>
                <div style={{ display: "flex" }}>
                  {monthGroups.map((mg, i) => (
                    <div key={i} style={{ ...S.gMonthCell, width: mg.days * COL_W }}>{mg.label}</div>
                  ))}
                </div>
              </div>
              {/* Day band */}
              <div style={S.gBandRow}>
                <div style={{ ...S.gLabelHead, zIndex: 4, fontSize: 10, color: "var(--text-3)", fontWeight: 600 }}>days →</div>
                <div style={{ display: "flex" }}>
                  {gDays.map((d, i) => {
                    const wknd = d.getDay() === 0 || d.getDay() === 6;
                    const isToday = i === todayIdx;
                    return (
                      <div key={i} style={{ ...S.gDayCell, ...(wknd ? S.gWeekend : {}), ...(isToday ? S.gTodayCell : {}) }}>
                        {d.getDate()}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Rows, grouped by horizon band */}
              {ganttGroups.map((grp) => (
                <div key={grp.key}>
                  <div style={S.gGroupRow}>
                    <div style={S.gGroupLabel}>{grp.label}<span style={S.gGroupCount}>{grp.items.length}</span></div>
                    <div style={{ width: totalDays * COL_W, flexShrink: 0 }} />
                  </div>
                  {grp.items.map((g) => {
                    const c = PILLARS[g.pillar]?.dot || "#9A968C";
                    const sIdx = Math.round((parseD(g.start_date) - gRange.start) / DAY_MS);
                    const dur = dayDuration(g);
                    const barW = dur * COL_W - 4;
                    const labelInside = barW >= 54;
                    const tip = `${g.title} · ${g.start_date} → ${g.end_date} · ${dur} day${dur > 1 ? "s" : ""}`;
                    return (
                      <div key={g.id} style={S.gRow}>
                        <div style={{ ...S.gLabel, paddingLeft: 12 }}>
                          <span style={{ ...S.ganttRowDot, background: c }} />
                          <span style={{ ...S.gHzTag, color: c, borderColor: c }}>{HZ_ABBR[g.horizon]}</span>
                          <span style={S.gLabelText} title={g.title}>{g.title}</span>
                          <span style={S.gDurChip}>{dur}d</span>
                        </div>
                        <div style={{ ...S.gTrack, width: totalDays * COL_W }}>
                          {todayInRange && <div style={{ ...S.gTodayLine, left: todayIdx * COL_W }} />}
                          <div style={{ ...S.gBar, left: sIdx * COL_W + 2, width: barW, background: c }} title={tip}>
                            {labelInside && <span style={S.gBarLabel}>{g.title}</span>}
                          </div>
                          {!labelInside && (
                            <span style={{ ...S.gBarOutside, left: sIdx * COL_W + barW + 8 }} title={tip}>{g.title}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
        {gRange && (
          <div style={S.gLegend}>
            <span style={S.gLegendItem}><span style={{ ...S.gLegendBar }} /> bar length = number of days</span>
            <span style={S.gLegendItem}><span style={S.gLegendToday} /> today</span>
          </div>
        )}
      </div>

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 26px", color: "var(--text)", boxSizing: "border-box", maxWidth: "100%", overflowX: "hidden" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
  pillarPicker: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 },
  pillarChip: { display: "flex", alignItems: "center", gap: 7, border: "1px solid var(--border)", background: "var(--surface)", padding: "7px 13px", borderRadius: 20, fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  list: { background: "var(--surface)", borderRadius: 12, padding: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", overflowX: "hidden" },
  row: { display: "flex", alignItems: "center", gap: 9, padding: "9px 10px", borderRadius: 8, flexWrap: "nowrap" },
  caret: { border: "none", background: "none", cursor: "pointer", color: "var(--text-2)", display: "grid", placeItems: "center", padding: 0, width: 18, height: 18, flexShrink: 0 },
  horizonTag: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", border: "1px solid", borderRadius: 5, padding: "2px 6px", flexShrink: 0 },
  title: { fontSize: 14, fontWeight: 500, lineHeight: 1.3, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  periodTag: { fontSize: 11, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "3px 8px", borderRadius: 12, flexShrink: 0 },
  rowAdd: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, flexShrink: 0 },
  rootAdd: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-2)", background: "none", border: "1px dashed var(--border)", borderRadius: 8, padding: "9px 12px", cursor: "pointer", fontWeight: 600, fontFamily: "inherit", marginTop: 6, width: "100%", justifyContent: "center" },
  addBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 0 6px 28px", flexWrap: "wrap" },
  editBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", flexWrap: "wrap", background: "var(--bg)", borderRadius: 8, margin: "4px 0" },
  input: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 120 },
  monthSelect: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  inheritTag: { fontSize: 11.5, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "6px 9px", borderRadius: 7, flexShrink: 0 },
  dateInput: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px", fontSize: 12, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  ganttWrap: { background: "var(--surface)", borderRadius: 12, padding: "16px 14px", marginTop: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  ganttTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  ganttTitle: { fontSize: 13, fontWeight: 700, color: "var(--text-2)", fontFamily: "'Fraunces',Georgia,serif" },
  ganttHint: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 500 },
  allHint: { fontSize: 12, color: "var(--text-3)", fontStyle: "italic", padding: "10px 12px" },
  ganttMultiSelect: { display: "flex", gap: 6, flexWrap: "wrap" },
  msChip: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", padding: "5px 10px", borderRadius: 16, fontSize: 11.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  ganttEmpty: { fontSize: 13, color: "var(--text-3)", padding: "24px 12px", textAlign: "center" },
  ganttScroll: { overflowX: "auto" },
  ganttInner: { minWidth: 500 },
  ganttHeader: { display: "flex", marginBottom: 6 },
  ganttLabelCol: { width: 160, flexShrink: 0, display: "flex", alignItems: "center", gap: 7, minWidth: 0 },
  ganttGrid: { position: "relative", flex: 1, display: "grid", gridTemplateColumns: "repeat(12,1fr)" },
  ganttMonth: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" },
  ganttRow: { display: "flex", alignItems: "center", height: 30 },
  ganttRowDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  ganttRowLabel: { fontSize: 12, fontWeight: 500, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  ganttCell: { borderLeft: "1px solid #F0EEE8", height: 30 },
  ganttBar: { position: "absolute", top: 7, height: 16, borderRadius: 5, boxShadow: "0 1px 2px rgba(0,0,0,0.12)" },

  // Daily PM Gantt
  gBandRow: { display: "flex", alignItems: "stretch", borderBottom: "1px solid var(--border)" },
  gLabelHead: { width: GLABEL_W, flexShrink: 0, position: "sticky", left: 0, background: "var(--surface)", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", padding: "6px 10px", fontSize: 12, fontWeight: 700, color: "var(--text-2)" },
  gMonthCell: { flexShrink: 0, borderLeft: "1px solid var(--border)", fontSize: 10.5, fontWeight: 700, color: "var(--text-2)", textAlign: "center", padding: "5px 0", whiteSpace: "nowrap", overflow: "hidden" },
  gDayCell: { width: COL_W, flexShrink: 0, textAlign: "center", fontSize: 10, color: "var(--text-3)", padding: "4px 0", borderLeft: "1px solid var(--border)", fontWeight: 600 },
  gWeekend: { background: "var(--surface-2)" },
  gTodayCell: { background: "var(--hover)", color: "var(--accent)", fontWeight: 800 },
  gGroupRow: { display: "flex", alignItems: "stretch", background: "var(--surface-2)", borderBottom: "1px solid var(--border)", borderTop: "1px solid var(--border)" },
  gGroupLabel: { width: GLABEL_W, flexShrink: 0, position: "sticky", left: 0, background: "var(--surface-2)", zIndex: 3, padding: "6px 12px", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-2)", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 7 },
  gGroupCount: { fontSize: 10, fontWeight: 700, color: "var(--text-3)", background: "var(--hover)", borderRadius: 9, padding: "1px 6px" },
  gHzTag: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", border: "1px solid", borderRadius: 4, padding: "1px 4px", flexShrink: 0 },
  gRow: { display: "flex", alignItems: "stretch", minHeight: 36, borderBottom: "1px solid var(--border)" },
  gLabel: { width: GLABEL_W, flexShrink: 0, display: "flex", alignItems: "center", gap: 7, position: "sticky", left: 0, background: "var(--surface)", zIndex: 2, borderRight: "1px solid var(--border)", paddingRight: 8, overflow: "hidden" },
  gLabelText: { flex: 1, minWidth: 0, fontSize: 12, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "var(--text)" },
  gDurChip: { fontSize: 10, fontWeight: 700, color: "var(--text-2)", background: "var(--hover)", borderRadius: 10, padding: "1px 6px", flexShrink: 0, marginRight: 6 },
  gTrack: { position: "relative", flexShrink: 0, minHeight: 36, backgroundImage: `repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent ${COL_W}px)` },
  gBar: { position: "absolute", top: 9, height: 18, borderRadius: 5, display: "flex", alignItems: "center", padding: "0 7px", boxShadow: "0 1px 2px rgba(0,0,0,0.15)", overflow: "hidden", zIndex: 1 },
  gBarLabel: { fontSize: 11, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  gBarOutside: { position: "absolute", top: 9, height: 18, display: "flex", alignItems: "center", fontSize: 11, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", pointerEvents: "none", zIndex: 1 },
  gTodayLine: { position: "absolute", top: 0, bottom: 0, width: 2, background: "#C2536B", zIndex: 0, opacity: 0.6 },
  gLegend: { display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: "var(--text-3)", flexWrap: "wrap" },
  gLegendItem: { display: "flex", alignItems: "center", gap: 6, fontWeight: 600 },
  gLegendBar: { width: 18, height: 8, borderRadius: 3, background: "var(--accent)", display: "inline-block" },
  gLegendToday: { width: 2, height: 12, background: "#C2536B", display: "inline-block" },
};
