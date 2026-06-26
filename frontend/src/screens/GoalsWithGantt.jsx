import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronRight, ChevronDown, Plus, Target, X, Check, Pencil, Eye, EyeOff, PanelLeftClose, PanelLeftOpen, GripVertical, Settings, AlertTriangle } from "lucide-react";
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
const YEAR_OPTIONS = Array.from({ length: 8 }, (_, i) => YEAR - 1 + i); // last year … +6

function useIsMobile(bp = 720) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

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
const HZ_SHORT = { Yearly: "Y", Quarterly: "Q", Monthly: "M", Weekly: "W" }; // compact, for mobile
const HZ_RANK = { Yearly: 0, Quarterly: 1, Monthly: 2, Weekly: 3 };

const nextHorizon = (h) => HORIZONS[Math.min(HORIZONS.indexOf(h) + 1, HORIZONS.length - 1)];

// Months (0-indexed) the child of `parentGoal` is allowed to span.
// Null parent (top-level) → the whole year.
const allowedMonths = (parentGoal) => {
  if (!parentGoal || !parentGoal.start_date) return Array.from({ length: 12 }, (_, i) => i);
  const s = new Date(parentGoal.start_date + "T00:00:00");
  const e = new Date(parentGoal.end_date + "T00:00:00");
  const py = s.getFullYear();
  const sm = s.getMonth();
  const em = e.getFullYear() > py ? 11 : e.getMonth();
  return Array.from({ length: em - sm + 1 }, (_, i) => sm + i);
};
const yearOf = (dateStr) => new Date(dateStr + "T00:00:00").getFullYear();

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

const horizonDates = (horizon, year, month, week = 1) => {
  const y = year;
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

// Add days to an ISO date (timezone-safe).
const addDaysISO = (iso, n) => {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const spanDays = (a, b) => Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / DAY_MS) + 1;

// Keep a child's [start,end] inside its parent's dates, preserving its duration.
const clampWithin = (start, end, parent) => {
  if (!parent || !parent.start_date || !parent.end_date) return { start_date: start, end_date: end, clamped: false };
  const dur = spanDays(start, end);
  let s = start, e = end, clamped = false;
  if (s < parent.start_date) { s = parent.start_date; e = addDaysISO(s, dur - 1); clamped = true; }
  if (e > parent.end_date) { e = parent.end_date; s = addDaysISO(e, -(dur - 1)); clamped = true; if (s < parent.start_date) s = parent.start_date; }
  return { start_date: s, end_date: e, clamped };
};
const daysInMonthOf = (y, m) => new Date(y, m + 1, 0).getDate();

// Natural (un-extended) length of a goal's period, in days.
const naturalDays = (g) => {
  const s = new Date(g.start_date + "T00:00:00");
  if (g.horizon === "Monthly") return daysInMonthOf(s.getFullYear(), s.getMonth());
  if (g.horizon === "Weekly") {
    const wk = Math.min(Math.max(Math.ceil(s.getDate() / 7), 1), 4);
    const w = weekDates(s.getFullYear(), s.getMonth(), wk);
    return spanDays(w.start_date, w.end_date);
  }
  return spanDays(g.start_date, g.end_date);
};
const maxDaysFor = (g) => Math.round(naturalDays(g) * 1.5);      // tail can stretch to 1.5×
const canExtend = (g) => g.horizon === "Monthly" || g.horizon === "Weekly";

// Shift a goal by N period-units of its own type (negative = earlier).
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
    case "Yearly": {
      const ey = g.end_date ? new Date(g.end_date + "T00:00:00").getFullYear() : d.getFullYear();
      return ey > d.getFullYear() ? `${d.getFullYear()}–${ey}` : `${d.getFullYear()}`;
    }
    case "Quarterly": return `Q${Math.floor(m/3)+1} ${d.getFullYear()}`;
    case "Monthly":   return `${MONTHS[m]} ${d.getFullYear()}`;
    case "Weekly":    return `${MONTHS[m]} W${Math.ceil(d.getDate()/7)}`;
    default:          return "";
  }
};

export default function GoalsWithGantt() {
  const [goals, setGoals] = useState([]);
  const [pillar, setPillar] = useState("All");
  const [ganttOverride, setGanttOverride] = useState({}); // goalId → bool (overrides the horizon default)
  const [open, setOpen] = useState({});
  const [adding, setAdding] = useState(null);
  const [draft, setDraft] = useState("");
  const [draftMonth, setDraftMonth] = useState(0);
  const [draftWeek, setDraftWeek] = useState(1);
  const [draftYear, setDraftYear] = useState(YEAR);
  const [draftEndYear, setDraftEndYear] = useState(YEAR); // Yearly goals may span multiple years
  const [draftHorizon, setDraftHorizon] = useState("Yearly"); // chosen horizon for a new top-level goal
  const [draftPillar, setDraftPillar] = useState(PILLAR_NAMES[0]); // pillar for a new top-level goal (used in All view)
  const [editing, setEditing] = useState(null); // { id, title, pillar, year, endYear, month, week, ... }

  const isMobile = useIsMobile();
  const [showLabels, setShowLabels] = useState(!isMobile); // gantt left column; hidden on mobile by default
  const [zoom, setZoom] = useState("day"); // 'day' | 'month'
  const [drag, setDrag] = useState(null); // { id, startX, dx, g }
  const dragRef = useRef(null);
  useEffect(() => { dragRef.current = drag; }, [drag]);
  const goalsRef = useRef(goals);
  useEffect(() => { goalsRef.current = goals; }, [goals]);
  const [resize, setResize] = useState(null); // { id, startX, dx, g }
  const resizeRef = useRef(null);
  useEffect(() => { resizeRef.current = resize; }, [resize]);
  const scrollRef = useRef(null);
  const pointerXRef = useRef(0); // latest pointer X during a drag (for edge auto-scroll)
  const [warning, setWarning] = useState(null); // transient floating warning message
  const warnTimer = useRef(null);
  const flashWarn = useCallback((msg) => {
    setWarning(msg);
    clearTimeout(warnTimer.current);
    warnTimer.current = setTimeout(() => setWarning(null), 2800);
  }, []);

  // Press-and-hold a goal name to reveal its full text (for truncated names on mobile).
  const [held, setHeld] = useState(null);
  const holdTimer = useRef(null);
  const [menuFor, setMenuFor] = useState(null); // goal id whose mobile action menu is open
  const [menuPos, setMenuPos] = useState(null); // fixed-position coords for that menu
  const openGoalMenu = (e, id) => {
    if (menuFor === id) { setMenuFor(null); return; }
    const r = e.currentTarget.getBoundingClientRect();
    const below = r.bottom + 220 < window.innerHeight;
    setMenuPos({
      right: Math.max(8, window.innerWidth - r.right),
      ...(below ? { top: r.bottom + 4 } : { bottom: window.innerHeight - r.top + 4 }),
    });
    setMenuFor(id);
  };
  const startHold = (id) => { clearTimeout(holdTimer.current); holdTimer.current = setTimeout(() => setHeld(id), 350); };
  const endHold = () => { clearTimeout(holdTimer.current); setHeld(null); };

  const load = useCallback(() => {
    api.getGoals().then(setGoals).catch(console.error);
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteGoal, api.restoreGoal, load
  );

  // Drag-to-reschedule on the timeline: on release, snap to the goal's period and save.
  const finalizeDrag = useCallback(async () => {
    const d = dragRef.current;
    setDrag(null);
    if (!d) return;
    // Free drag: shift the whole goal by however many days were dragged, keeping its
    // duration. This lets a goal slide smoothly anywhere (e.g. to year-end), instead
    // of snapping one period at a time.
    const dayShift = Math.round(d.dx / (d.pxPerDay || COL_W));
    if (!dayShift) return;
    let start_date = addDaysISO(d.g.start_date, dayShift);
    let end_date = addDaysISO(d.g.end_date, dayShift);
    // A sub-goal can't move outside its parent's dates — clamp and warn.
    if (d.g.parent_goal_id) {
      const parent = goalsRef.current.find((x) => x.id === d.g.parent_goal_id);
      const c = clampWithin(start_date, end_date, parent);
      if (c.clamped) flashWarn(`Can't move past "${parent?.title || "parent goal"}" — kept within its dates.`);
      start_date = c.start_date; end_date = c.end_date;
    }
    if (start_date !== d.g.start_date || end_date !== d.g.end_date) {
      await api.updateGoal(d.g.id, { pillar: d.g.pillar, start_date, end_date });
      load();
    }
  }, [load, flashWarn]);

  const dragging = !!drag;
  useEffect(() => {
    if (!dragging) return;
    const move = (e) => { pointerXRef.current = e.clientX; setDrag((d) => (d ? { ...d, dx: e.clientX - d.startX } : d)); };
    const up = () => finalizeDrag();
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);

    // Edge auto-scroll: when the pointer hovers near the timeline's left/right edge
    // (e.g. on a narrow mobile screen), keep scrolling so the goal can be dragged
    // all the way across. The scrolled distance is folded into the drag so the bar
    // tracks the finger and the final day-shift stays correct.
    const EDGE = 44, SPEED = 16;
    const tick = setInterval(() => {
      const el = scrollRef.current;        // only the day-view timeline scrolls
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = pointerXRef.current;
      let dir = 0;
      if (x < r.left + EDGE) dir = -1;
      else if (x > r.right - EDGE) dir = 1;
      if (!dir) return;
      const before = el.scrollLeft;
      el.scrollLeft = Math.max(0, Math.min(before + dir * SPEED, el.scrollWidth - el.clientWidth));
      const applied = el.scrollLeft - before;
      if (applied) setDrag((d) => (d ? { ...d, startX: d.startX - applied, dx: x - (d.startX - applied) } : d));
    }, 16);

    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); clearInterval(tick); };
  }, [dragging, finalizeDrag]);

  // Tail resize: extend a Monthly/Weekly goal up to 1.5× its natural length.
  const finalizeResize = useCallback(async () => {
    const r = resizeRef.current;
    setResize(null);
    if (!r) return;
    const g = r.g;
    const natural = naturalDays(g);
    const maxDays = maxDaysFor(g);
    const newDur = Math.max(natural, Math.min(maxDays, spanDays(g.start_date, g.end_date) + Math.round(r.dx / COL_W)));
    let newEnd = addDaysISO(g.start_date, newDur - 1);
    // Don't let a sub-goal's tail extend past its parent's end date.
    if (g.parent_goal_id) {
      const parent = goalsRef.current.find((x) => x.id === g.parent_goal_id);
      if (parent?.end_date && newEnd > parent.end_date) {
        newEnd = parent.end_date;
        flashWarn(`Can't extend past "${parent?.title || "parent goal"}" — kept within its dates.`);
      }
    }
    if (newEnd !== g.end_date && newEnd >= g.start_date) {
      await api.updateGoal(g.id, { end_date: newEnd });
      load();
    }
  }, [load, flashWarn]);

  const resizing = !!resize;
  useEffect(() => {
    if (!resizing) return;
    const move = (e) => setResize((r) => (r ? { ...r, dx: e.clientX - r.startX } : r));
    const up = () => finalizeResize();
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
  }, [resizing, finalizeResize]);

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
    const startYear = parentGoal ? yearOf(parentGoal.start_date) : YEAR;
    setDraftYear(startYear);
    setDraftEndYear(startYear);
    // In the All view there's no active pillar — default the picker to the current pillar or the first one.
    if (parentId === "ROOT") setDraftPillar(isAll ? PILLAR_NAMES[0] : pillar);
    // Top-level goals can be any horizon (default Yearly); sub-goals step down a level.
    const horizon = parentId === "ROOT" ? "Yearly" : nextHorizon(parentGoal?.horizon);
    setDraftHorizon(horizon);
    const months = parentId === "ROOT" ? Array.from({ length: 12 }, (_, i) => i) : allowedMonths(parentGoal);
    // Quarterly picks a quarter (start month 0/3/6/9); others pick the first allowed month.
    setDraftMonth(horizon === "Quarterly" ? Math.floor(months[0] / 3) * 3 : months[0] ?? 0);
  };

  const commitAdd = async (parentId, parentGoal) => {
    if (!draft.trim()) return;
    const parentHorizon = parentGoal?.horizon ?? null;
    // Top-level: any chosen horizon. Sub-goals: one level below the parent.
    const horizon = parentId === "ROOT" ? draftHorizon : nextHorizon(parentHorizon);
    // Sub-goals inherit their parent's pillar; top-level uses the chosen pillar.
    const goalPillar = parentId === "ROOT" ? draftPillar : (parentGoal?.pillar || pillar);
    let start_date, end_date;
    if (horizon === "Yearly") {
      // Yearly goals may span multiple calendar years (start year → end year).
      const sy = Number(draftYear);
      const ey = Math.max(sy, Number(draftEndYear) || sy);
      start_date = `${sy}-01-01`;
      end_date = `${ey}-12-31`;
    } else {
      // Quarterly/Monthly/Weekly chooses its own year at top level; sub-goals inherit the parent's year.
      const year = parentGoal ? yearOf(parentGoal.start_date) : Number(draftYear);
      ({ start_date, end_date } = horizonDates(horizon, year, draftMonth, draftWeek));
    }
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
      year: yearOf(goal.start_date),
      endYear: yearOf(goal.end_date),
      month: goal.horizon === "Quarterly" ? Math.floor(month / 3) * 3 : month,
      week,
    });
  };

  const commitEdit = async () => {
    if (!editing || !editing.title.trim()) return;
    let start_date, end_date;
    if (editing.horizon === "Yearly") {
      const sy = Number(editing.year);
      const ey = Math.max(sy, Number(editing.endYear) || sy);
      start_date = `${sy}-01-01`;
      end_date = `${ey}-12-31`;
    } else {
      let month = editing.month;
      // Weekly sub-goals inherit the parent's month; top-level weeklies pick their own.
      if (editing.horizon === "Weekly" && editing.parentGoal) month = allowedMonths(editing.parentGoal)[0];
      // Sub-goals inherit the parent's year; top-level keeps its own.
      const year = editing.parentGoal ? yearOf(editing.parentGoal.start_date) : Number(editing.year);
      ({ start_date, end_date } = horizonDates(editing.horizon, year, month, editing.week));
    }
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
    const isRoot = parentId === "ROOT";
    const horizon = isRoot ? draftHorizon : nextHorizon(parentGoal?.horizon ?? null);
    const months = isRoot ? Array.from({ length: 12 }, (_, i) => i) : allowedMonths(parentGoal);
    const quarters = QUARTERS.filter((q) => months.includes(q.startMonth));
    // When the top-level horizon changes, reset the period selector sensibly.
    const onHorizonChange = (h) => {
      setDraftHorizon(h);
      setDraftMonth(h === "Quarterly" ? 0 : 0);
      setDraftWeek(1);
      setDraftEndYear(draftYear);
    };
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
        {isRoot && isAll && (
          <select value={draftPillar} onChange={(e) => setDraftPillar(e.target.value)} style={S.monthSelect} title="Pillar">
            {PILLAR_NAMES.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        )}
        {isRoot && (
          <select value={draftHorizon} onChange={(e) => onHorizonChange(e.target.value)} style={S.monthSelect} title="Goal level">
            {HORIZONS.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
        )}
        {horizon === "Yearly" && (
          <>
            <select value={draftYear} onChange={(e) => { const y = Number(e.target.value); setDraftYear(y); if (draftEndYear < y) setDraftEndYear(y); }} style={S.monthSelect} title="Start year">
              {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <span style={S.toTag}>to</span>
            <select value={draftEndYear} onChange={(e) => setDraftEndYear(Number(e.target.value))} style={S.monthSelect} title="End year (spans multiple years)">
              {YEAR_OPTIONS.filter((y) => y >= draftYear).map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </>
        )}
        {horizon !== "Yearly" && isRoot && (
          <select value={draftYear} onChange={(e) => setDraftYear(Number(e.target.value))} style={S.monthSelect} title="Year">
            {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        )}
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
            {isRoot ? (
              <select value={draftMonth} onChange={(e) => setDraftMonth(Number(e.target.value))} style={S.monthSelect}>
                {months.map((i) => <option key={i} value={i}>{MONTHS[i]}</option>)}
              </select>
            ) : (
              <span style={S.inheritTag}>{MONTHS[months[0]]}</span>
            )}
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
      const eIsRoot = !editing.parentGoal; // top-level: month + year are editable
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
          {editing.horizon === "Yearly" && (
            <>
              <select value={editing.year} onChange={(e) => { const y = Number(e.target.value); setEditing({ ...editing, year: y, endYear: Math.max(y, editing.endYear) }); }} style={S.monthSelect} title="Start year">
                {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
              <span style={S.toTag}>to</span>
              <select value={editing.endYear} onChange={(e) => setEditing({ ...editing, endYear: Number(e.target.value) })} style={S.monthSelect} title="End year (spans multiple years)">
                {YEAR_OPTIONS.filter((y) => y >= editing.year).map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </>
          )}
          {editing.horizon !== "Yearly" && eIsRoot && (
            <select value={editing.year} onChange={(e) => setEditing({ ...editing, year: Number(e.target.value) })} style={S.monthSelect} title="Year">
              {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          )}
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
              {eIsRoot ? (
                <select value={editing.month} onChange={(e) => setEditing({ ...editing, month: Number(e.target.value) })} style={S.monthSelect}>
                  {eMonths.map((i) => <option key={i} value={i}>{MONTHS[i]}</option>)}
                </select>
              ) : (
                <span style={S.inheritTag}>{MONTHS[eMonths[0]]}</span>
              )}
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
          <span style={{ ...S.horizonTag, color: PILLARS[goal.pillar]?.dot || p.dot, borderColor: PILLARS[goal.pillar]?.dot || p.dot }}
            title={goal.horizon}>{isMobile ? HZ_SHORT[goal.horizon] : goal.horizon}</span>
          <div style={S.nameCol}>
            <span
              style={{ ...S.title, ...(held === goal.id ? S.titleFull : {}) }}
              title={goal.title}
              onPointerDown={() => startHold(goal.id)}
              onPointerUp={endHold}
              onPointerLeave={endHold}
              onPointerCancel={endHold}
            >{goal.title}</span>
            <span style={S.whenSub}>{periodLabel(goal)}</span>
          </div>

          {isMobile ? (
            <>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <button onClick={(e) => openGoalMenu(e, goal.id)} style={S.rowAdd} title="Options">
                  <Settings size={15} />
                </button>
                {menuFor === goal.id && (
                  <>
                    <div style={S.menuBackdrop} onClick={() => setMenuFor(null)} />
                    <div style={{ ...S.goalMenu, ...menuPos }}>
                    <button style={S.menuItem} onClick={() => { startEdit(goal); setMenuFor(null); }}><Pencil size={14} /> Edit</button>
                    {canNest && (
                      <button style={S.menuItem} onClick={() => { setOpen((o) => ({ ...o, [goal.id]: true })); startAdd(goal.id, goal); setMenuFor(null); }}>
                        <Plus size={14} /> Add sub-goal
                      </button>
                    )}
                    <button style={{ ...S.menuItem, color: "#C2536B" }} onClick={() => { softDelete(goal.id, goal.title); setMenuFor(null); }}>
                      <X size={14} /> Delete
                    </button>
                  </div>
                </>
              )}
              </div>
              <button
                onClick={() => toggleGantt(goal)}
                style={{ ...S.rowAdd, color: isOnGantt(goal) ? (PILLARS[goal.pillar]?.dot || p.dot) : "var(--text-3)" }}
                title={isOnGantt(goal) ? "Showing on timeline" : "Hidden from timeline"}
              >
                {isOnGantt(goal) ? <Eye size={14} /> : <EyeOff size={14} />}
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
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
  const isMonthZoom = zoom === "month";

  // Month-zoom geometry: fluid % columns that fill the width (whole range fits, no scroll).
  const baseY = gRange ? gRange.start.getFullYear() : 0;
  const baseM = gRange ? gRange.start.getMonth() : 0;
  const monthsList = (() => {
    if (!gRange) return [];
    const out = [];
    let y = baseY, m = baseM;
    const endY = gRange.end.getFullYear(), endM = gRange.end.getMonth();
    while (y < endY || (y === endY && m <= endM)) { out.push({ y, m }); m++; if (m > 11) { m = 0; y++; } }
    return out;
  })();
  const N = monthsList.length || 1;
  const monthFrac = (ds, incl) => {
    const d = parseD(ds);
    const mi = (d.getFullYear() - baseY) * 12 + d.getMonth() - baseM;
    const dim = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    return mi + (d.getDate() - (incl ? 0 : 1)) / dim;
  };
  const xPct = (ds, incl) => (monthFrac(ds, incl) / N) * 100;
  const gtodayStr = `${gToday.getFullYear()}-${String(gToday.getMonth() + 1).padStart(2, "0")}-${String(gToday.getDate()).padStart(2, "0")}`;
  const todayPct = gRange ? xPct(gtodayStr, false) : 0;

  // Auto-scroll the day timeline so today sits in view (month view fits — no scroll).
  const todayX = (showLabels ? GLABEL_W : 0) + todayIdx * COL_W;
  const rangeKey = gRange ? `${gRange.start.getTime()}-${gRange.end.getTime()}` : "";
  useEffect(() => {
    if (isMonthZoom || !todayInRange) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = Math.max(0, todayX - el.clientWidth / 2 + COL_W / 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeKey, todayIdx, showLabels, todayInRange, isMonthZoom]);

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
        {adding === "ROOT" && <AddInline parentId="ROOT" parentGoal={null} depth={0} />}
        {adding !== "ROOT" && (
          <button onClick={() => startAdd("ROOT", null)} style={S.rootAdd}>
            <Plus size={14} /> Add new goal
          </button>
        )}
      </div>

      {/* Gantt */}
      <div style={S.ganttWrap}>
        <div style={S.ganttTop}>
          <div style={S.ganttTitle}>{isMonthZoom ? "Monthly" : "Daily"} Timeline{gRange ? ` · ${shortDate(gRange.start)} – ${shortDate(gRange.end)}` : ""}</div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <div style={S.zoomToggle}>
              <button onClick={() => setZoom("day")} style={{ ...S.zoomBtn, ...(!isMonthZoom ? S.zoomBtnOn : {}) }}>Day</button>
              <button onClick={() => setZoom("month")} style={{ ...S.zoomBtn, ...(isMonthZoom ? S.zoomBtnOn : {}) }}>Month</button>
            </div>
            <button onClick={() => setShowLabels((v) => !v)} style={S.labelToggle}>
              {showLabels ? <PanelLeftClose size={14} /> : <PanelLeftOpen size={14} />}
              {showLabels ? "Hide names" : "Show names"}
            </button>
          </div>
        </div>
        {!gRange ? (
          <div style={S.ganttEmpty}>No goals on the timeline. Click the eye icon on a goal to show it here.</div>
        ) : isMonthZoom ? (
          <div style={{ width: "100%", overflow: "hidden" }}>
            {/* Month band (fluid, fits width) */}
            <div style={S.gBandRow}>
              {showLabels && <div style={{ ...S.gLabelHead, zIndex: 4 }}>Goal</div>}
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: `repeat(${N}, 1fr)`, minWidth: 0 }}>
                {monthsList.map((mm, i) => (
                  <div key={i} style={S.gMonthFluid}>{MONTHS[mm.m]}{mm.m === 0 || i === 0 ? ` '${String(mm.y).slice(2)}` : ""}</div>
                ))}
              </div>
            </div>
            {ganttGroups.map((grp) => (
              <div key={grp.key}>
                <div style={S.gGroupRow}>
                  {showLabels
                    ? <div style={S.gGroupLabel}>{grp.label}<span style={S.gGroupCount}>{grp.items.length}</span></div>
                    : <div style={S.gGroupChip}>{grp.label} · {grp.items.length}</div>}
                  <div style={{ flex: 1 }} />
                </div>
                {grp.items.map((g) => {
                  const c = PILLARS[g.pillar]?.dot || "#9A968C";
                  const isDragging = drag?.id === g.id;
                  const dx = isDragging ? drag.dx : 0;
                  const leftPct = xPct(g.start_date, false);
                  const widthPct = Math.max(2, xPct(g.end_date, true) - leftPct);
                  const dur = dayDuration(g);
                  const labelInside = widthPct >= 14;
                  const tip = `${g.title} · ${g.start_date} → ${g.end_date} · ${dur} day${dur > 1 ? "s" : ""}`;
                  return (
                    <div key={g.id} style={S.gRow}>
                      {showLabels && (
                        <div style={{ ...S.gLabel, paddingLeft: 12 }}>
                          <span style={{ ...S.ganttRowDot, background: c }} />
                          <span style={{ ...S.gHzTag, color: c, borderColor: c }}>{HZ_ABBR[g.horizon]}</span>
                          <span style={S.gLabelText} title={g.title}>{g.title}</span>
                          <span style={S.gDurChip}>{dur}d</span>
                        </div>
                      )}
                      <div style={{ position: "relative", flex: 1, minHeight: 36, minWidth: 0, backgroundImage: `repeating-linear-gradient(to right, var(--border) 0, var(--border) 1px, transparent 1px, transparent calc(100% / ${N}))` }}>
                        {todayInRange && <div style={{ ...S.gTodayLine, left: `${todayPct}%` }} />}
                        <div
                          onPointerDown={(e) => { e.preventDefault(); pointerXRef.current = e.clientX; const tw = e.currentTarget.parentNode.offsetWidth; setDrag({ id: g.id, startX: e.clientX, dx: 0, g, pxPerDay: tw / totalDays }); }}
                          style={{
                            ...S.gBar, left: `${leftPct}%`, width: `${widthPct}%`, background: c,
                            cursor: isDragging ? "grabbing" : "grab",
                            transform: dx ? `translateX(${dx}px)` : "none",
                            zIndex: isDragging ? 6 : 1,
                            boxShadow: isDragging ? "0 4px 12px rgba(0,0,0,0.28)" : "0 1px 2px rgba(0,0,0,0.15)",
                            touchAction: "none",
                          }}
                          title={tip}>
                          <GripVertical size={12} style={{ opacity: 0.7, flexShrink: 0, marginRight: 2, color: "#fff" }} />
                          {labelInside && <span style={S.gBarLabel}>{g.title}</span>}
                        </div>
                        {!labelInside && (
                          <span style={{ ...S.gBarOutside, left: `calc(${leftPct + widthPct}% + 6px)` }} title={tip}>{g.title}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div style={S.ganttScroll} ref={scrollRef}>
            <div style={{ minWidth: (showLabels ? GLABEL_W : 0) + totalDays * COL_W, position: "relative" }}>
              {todayInRange && (
                <div style={{ position: "absolute", top: 0, bottom: 0, left: todayX, width: COL_W, background: "color-mix(in srgb, var(--accent) 14%, transparent)", pointerEvents: "none", zIndex: 3 }} />
              )}
              {/* Month band */}
              <div style={S.gBandRow}>
                {showLabels && <div style={{ ...S.gLabelHead, zIndex: 4 }}>Goal</div>}
                <div style={{ display: "flex" }}>
                  {monthGroups.map((mg, i) => (
                    <div key={i} style={{ ...S.gMonthCell, width: mg.days * COL_W }}>{mg.label}</div>
                  ))}
                </div>
              </div>
              {/* Day band */}
              <div style={S.gBandRow}>
                {showLabels && <div style={{ ...S.gLabelHead, zIndex: 4, fontSize: 10, color: "var(--text-3)", fontWeight: 600 }}>days →</div>}
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
                    {showLabels
                      ? <div style={S.gGroupLabel}>{grp.label}<span style={S.gGroupCount}>{grp.items.length}</span></div>
                      : <div style={S.gGroupChip}>{grp.label} · {grp.items.length}</div>}
                    <div style={{ width: totalDays * COL_W, flexShrink: 0 }} />
                  </div>
                  {grp.items.map((g) => {
                    const c = PILLARS[g.pillar]?.dot || "#9A968C";
                    const sIdx = Math.round((parseD(g.start_date) - gRange.start) / DAY_MS);
                    const dur = dayDuration(g);
                    const isDragging = drag?.id === g.id;
                    const dx = isDragging ? drag.dx : 0;
                    // tail resize (Monthly/Weekly): live width clamped to [natural, 1.5×]
                    const extendable = canExtend(g);
                    const isResizing = resize?.id === g.id;
                    const natD = extendable ? naturalDays(g) : dur;
                    const maxD = extendable ? maxDaysFor(g) : dur;
                    const dispDur = isResizing
                      ? Math.max(natD, Math.min(maxD, dur + Math.round(resize.dx / COL_W)))
                      : dur;
                    const barW = dispDur * COL_W - 4;
                    const labelInside = barW >= 54;
                    const tip = `${g.title} · ${g.start_date} → ${g.end_date} · ${dispDur} day${dispDur > 1 ? "s" : ""}${extendable ? ` (max ${maxD})` : ""}`;
                    return (
                      <div key={g.id} style={S.gRow}>
                        {showLabels && (
                          <div style={{ ...S.gLabel, paddingLeft: 12 }}>
                            <span style={{ ...S.ganttRowDot, background: c }} />
                            <span style={{ ...S.gHzTag, color: c, borderColor: c }}>{HZ_ABBR[g.horizon]}</span>
                            <span style={S.gLabelText} title={g.title}>{g.title}</span>
                            <span style={S.gDurChip}>{dispDur}d</span>
                          </div>
                        )}
                        <div style={{ ...S.gTrack, width: totalDays * COL_W }}>
                          {todayInRange && <div style={{ ...S.gTodayLine, left: todayIdx * COL_W }} />}
                          <div
                            onPointerDown={(e) => { e.preventDefault(); pointerXRef.current = e.clientX; setDrag({ id: g.id, startX: e.clientX, dx: 0, g, pxPerDay: COL_W }); }}
                            style={{
                              ...S.gBar, left: sIdx * COL_W + 2, width: barW, background: c,
                              cursor: isDragging ? "grabbing" : "grab",
                              transform: dx ? `translateX(${dx}px)` : "none",
                              zIndex: (isDragging || isResizing) ? 6 : 1,
                              boxShadow: (isDragging || isResizing) ? "0 4px 12px rgba(0,0,0,0.28)" : "0 1px 2px rgba(0,0,0,0.15)",
                              touchAction: "none",
                            }}
                            title={tip}>
                            {extendable && dispDur > natD && (
                              <div style={{ position: "absolute", left: natD * COL_W, top: 0, bottom: 0, right: 0, background: "#C2536B", borderRadius: "0 5px 5px 0" }} />
                            )}
                            <GripVertical size={12} style={{ opacity: 0.7, flexShrink: 0, marginRight: 2, color: "#fff", position: "relative", zIndex: 1 }} />
                            {labelInside && <span style={{ ...S.gBarLabel, position: "relative", zIndex: 1 }}>{g.title}</span>}
                            {extendable && (
                              <div
                                onPointerDown={(e) => { e.preventDefault(); e.stopPropagation(); setResize({ id: g.id, startX: e.clientX, dx: 0, g }); }}
                                style={S.resizeHandle}
                                title={`Drag to extend up to ${maxD} days`}>
                                <div style={S.resizeGrip} />
                              </div>
                            )}
                          </div>
                          {!labelInside && (
                            <span style={{ ...S.gBarOutside, left: sIdx * COL_W + barW + 8 + dx }} title={tip}>{g.title}</span>
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

      {warning && (
        <div style={S.warnToast}>
          <AlertTriangle size={15} style={{ flexShrink: 0 }} />
          <span>{warning}</span>
        </div>
      )}

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
  nameCol: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 1 },
  title: { fontSize: 14, fontWeight: 500, lineHeight: 1.3, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", userSelect: "none", WebkitUserSelect: "none", cursor: "default" },
  titleFull: { whiteSpace: "normal", overflow: "visible", textOverflow: "clip", wordBreak: "break-word" },
  whenSub: { fontSize: 11, fontStyle: "italic", color: "var(--text-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  periodTag: { fontSize: 11, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "3px 8px", borderRadius: 12, flexShrink: 0 },
  rowAdd: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, flexShrink: 0 },
  menuBackdrop: { position: "fixed", inset: 0, zIndex: 40 },
  goalMenu: { position: "fixed", zIndex: 41, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "0 6px 24px rgba(0,0,0,0.18)", padding: 4, minWidth: 180, display: "flex", flexDirection: "column" },
  menuItem: { display: "flex", alignItems: "center", gap: 9, width: "100%", border: "none", background: "none", padding: "10px 12px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 13.5, fontWeight: 500, color: "var(--text)", textAlign: "left" },
  rootAdd: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--text-2)", background: "none", border: "1px dashed var(--border)", borderRadius: 8, padding: "9px 12px", cursor: "pointer", fontWeight: 600, fontFamily: "inherit", marginTop: 6, width: "100%", justifyContent: "center" },
  addBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 0 6px 28px", flexWrap: "wrap" },
  editBox: { display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", flexWrap: "wrap", background: "var(--bg)", borderRadius: 8, margin: "4px 0" },
  input: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 120 },
  monthSelect: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  inheritTag: { fontSize: 11.5, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "6px 9px", borderRadius: 7, flexShrink: 0 },
  toTag: { fontSize: 11.5, fontWeight: 600, color: "var(--text-3)", flexShrink: 0 },
  warnToast: { position: "fixed", top: 18, left: "50%", transform: "translateX(-50%)", zIndex: 300, display: "flex", alignItems: "center", gap: 8, maxWidth: "90vw", background: "#C2536B", color: "#fff", padding: "10px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600, boxShadow: "0 6px 24px rgba(0,0,0,0.25)" },
  dateInput: { border: "1px solid var(--border)", borderRadius: 7, padding: "8px", fontSize: 12, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 32, height: 32, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  ganttWrap: { background: "var(--surface)", borderRadius: 12, padding: "16px 14px", marginTop: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  ganttTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 14 },
  ganttTitle: { fontSize: 13, fontWeight: 700, color: "var(--text-2)", fontFamily: "'Fraunces',Georgia,serif" },
  ganttHint: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 500 },
  labelToggle: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "5px 10px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  zoomToggle: { display: "inline-flex", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" },
  zoomBtn: { border: "none", background: "var(--surface)", color: "var(--text-2)", padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  zoomBtnOn: { background: "var(--accent-strong)", color: "#fff" },
  gMonthFluid: { borderLeft: "1px solid var(--border)", fontSize: 10, fontWeight: 700, color: "var(--text-2)", textAlign: "center", padding: "5px 0", whiteSpace: "nowrap", overflow: "hidden" },
  gGroupChip: { position: "sticky", left: 0, zIndex: 3, background: "var(--surface-2)", padding: "5px 10px", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-2)", whiteSpace: "nowrap", borderRight: "1px solid var(--border)", display: "flex", alignItems: "center" },
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
  resizeHandle: { position: "absolute", right: 0, top: 0, bottom: 0, width: 12, cursor: "ew-resize", display: "grid", placeItems: "center", touchAction: "none", zIndex: 2 },
  resizeGrip: { width: 2, height: 11, background: "rgba(255,255,255,0.9)", borderRadius: 1, boxShadow: "3px 0 0 rgba(255,255,255,0.6)" },
  gTodayLine: { position: "absolute", top: 0, bottom: 0, width: 2, background: "#C2536B", zIndex: 0, opacity: 0.6 },
  gLegend: { display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: "var(--text-3)", flexWrap: "wrap" },
  gLegendItem: { display: "flex", alignItems: "center", gap: 6, fontWeight: 600 },
  gLegendBar: { width: 18, height: 8, borderRadius: 3, background: "var(--accent)", display: "inline-block" },
  gLegendToday: { width: 2, height: 12, background: "#C2536B", display: "inline-block" },
};
