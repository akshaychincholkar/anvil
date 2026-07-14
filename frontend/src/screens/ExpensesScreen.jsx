import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus, X, Check, Pencil, ChevronLeft, ChevronRight, ReceiptText, Tag,
  TrendingUp, TrendingDown, Minus, ChevronUp, ChevronDown,
  Carrot, ShoppingCart, Clapperboard, ShoppingBag, Fuel, Sparkles, Shirt,
  WashingMachine, Zap, Tv, Droplet, Coffee, Utensils, Bus, Train, Plane,
  Home, Heart, Gift, Book, Dumbbell, Pill, Phone, Wifi, Gamepad2, Music,
  Scissors, PawPrint, Baby, GraduationCap, Briefcase, Car, Bike,
} from "lucide-react";
import { api } from "../api.js";
import HelpButton from "../components/HelpButton.jsx";
import { effectiveTodayISO } from "../dayStart.js";
import { useCurrency, fmtMoney } from "../currency.js";
import { useMonthStartDay, cycleRange } from "../monthCycle.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";
import Dropdown from "../components/Dropdown.jsx";

const ACCENT = "#C9772E";

// Curated icon set users can pick from when customizing a category.
const ICONS = {
  Carrot, ShoppingCart, Clapperboard, ShoppingBag, Fuel, Sparkles, Shirt,
  WashingMachine, Zap, Tv, Droplet, Coffee, Utensils, Bus, Train, Plane,
  Home, Heart, Gift, Book, Dumbbell, Pill, Phone, Wifi, Gamepad2, Music,
  Scissors, PawPrint, Baby, GraduationCap, Briefcase, Car, Bike,
};
const IconFor = ({ name, ...props }) => { const I = ICONS[name] || ShoppingBag; return <I {...props} />; };

const COLORS = ["#C9772E", "#4C9A6B", "#3A7CA5", "#8268B0", "#C2536B", "#C9A227", "#D1556E", "#5B7C99", "#A23E57", "#3E9E6B"];

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const TODAY = effectiveTodayISO(); // honours the start-of-day hour (Settings)

// Cap the note length so a long comment can't push the amount off-screen.
const NOTE_MAX = 120;

function useIsMobile(bp = 760) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

export default function ExpensesScreen() {
  const isMobile = useIsMobile();
  const cur = useCurrency();
  const monthStartDay = useMonthStartDay();
  const [categories, setCategories] = useState([]);
  const [logs, setLogs] = useState([]);
  const [txns, setTxns] = useState([]);             // income + legacy expenses (for the daily budget)
  const [investments, setInvestments] = useState([]); // money set aside this cycle
  const [loaded, setLoaded] = useState(false);
  const [selDate, setSelDate] = useState(TODAY);
  // Anchor on *today* so the calendar opens on the current billing cycle
  // (cycleRange maps this to the right cycle for any month-start day).
  const [calMonth, setCalMonth] = useState(() => new Date());
  const [addCat, setAddCat] = useState(null);     // category clicked → opens amount entry
  const [editLog, setEditLog] = useState(null);   // existing log clicked → opens edit modal
  // Donut category filter — multi-select. "ALL" shows every transaction in the
  // period; otherwise it's a Set of selected category ids (empty = closed).
  const [drillCats, setDrillCats] = useState(new Set());
  const [drillAll, setDrillAll] = useState(false);
  const toggleDrillCat = (id) => setDrillCats((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const toggleDrillAll = () => { setDrillAll((v) => !v); setDrillCats(new Set()); };
  const drillOpen = drillAll || drillCats.size > 0;
  const closeDrill = () => { setDrillAll(false); setDrillCats(new Set()); };
  const [catForm, setCatForm] = useState(null);   // add/edit category modal
  const [manageOpen, setManageOpen] = useState(false);
  const [scope, setScope] = useState("day");       // "day" | "month" | "year" | "all" — drives totals + pie chart
  // Month "tag" = the ISO start-date of that billing cycle (per the Settings month-start-day), not a calendar YYYY-MM.
  const [cmpMonth, setCmpMonth] = useState(() => cycleRange(new Date(), monthStartDay)[0]);
  // Trend comparison category filter — multi-select. Empty set = "All categories".
  const [cmpCats, setCmpCats] = useState(new Set());
  const toggleCmpCat = (id) => setCmpCats((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const load = useCallback(() => {
    Promise.all([api.getExpenses(), api.getTxns(), api.getInvestments()])
      .then(([d, t, inv]) => {
        setCategories(d.categories); setLogs(d.logs);
        setTxns(Array.isArray(t) ? t : []); setInvestments(Array.isArray(inv) ? inv : []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem: deleteLog, toasts, handleUndo, handleDismiss } = useUndoableDelete(api.deleteExpenseLog, api.restoreExpenseLog, load);

  const catById = useMemo(() => { const m = {}; categories.forEach((c) => (m[c.id] = c)); return m; }, [categories]);

  const money = (n) => fmtMoney(n, cur.code);

  // ── Day logs (for the selected calendar day) ──
  const dayLogs = useMemo(() => logs.filter((l) => l.date === selDate), [logs, selDate]);
  const dayTotal = dayLogs.reduce((n, l) => n + l.amount, 0);

  // Daily budget: what's left this cycle (income − expenses − invested, same
  // maths as the Wallet's "Remaining") spread over the days until the next
  // month-start. Tells you how much you can safely spend per day.
  const dailyBudget = useMemo(() => {
    const [lo, hi] = cycleRange(new Date(), monthStartDay);
    const inCycle = (d) => d >= lo && d <= hi;
    const income = txns.filter((t) => t.kind === "income" && inCycle(t.date)).reduce((n, t) => n + t.amount, 0);
    const legacyExp = txns.filter((t) => t.kind === "expense" && inCycle(t.date)).reduce((n, t) => n + t.amount, 0);
    const spent = logs.filter((l) => inCycle(l.date)).reduce((n, l) => n + l.amount, 0);
    const invested = investments.filter((i) => inCycle(i.date)).reduce((n, i) => n + i.invested, 0);
    const remaining = income - legacyExp - spent - invested;
    const daysLeft = Math.max(1, Math.round((new Date(hi + "T00:00") - new Date(TODAY + "T00:00")) / 86400000) + 1);
    return { remaining, daysLeft, perDay: remaining / daysLeft };
  }, [txns, logs, investments, monthStartDay]);

  // Today vs Yesterday vs Day-before spend (like the Grove daily comparison).
  const threeDay = useMemo(() => {
    const dayISO = (offset) => { const d = new Date(TODAY + "T12:00:00"); d.setDate(d.getDate() + offset); return iso(d); };
    const totalOn = (ds) => logs.filter((l) => l.date === ds).reduce((n, l) => n + l.amount, 0);
    return [
      { label: "Today", value: totalOn(dayISO(0)), color: ACCENT },
      { label: "Yesterday", value: totalOn(dayISO(-1)), color: "var(--text-3)" },
      { label: "Day before", value: totalOn(dayISO(-2)), color: "var(--text-3)" },
    ];
  }, [logs]);

  // ── Scope used for the headline total + pie chart ──
  const scopedLogs = useMemo(() => {
    if (scope === "day") return dayLogs;
    if (scope === "month") {
      const [lo, hi] = cycleRange(new Date(selDate + "T00:00"), monthStartDay);
      return logs.filter((l) => l.date >= lo && l.date <= hi);
    }
    if (scope === "year") {
      const y = selDate.slice(0, 4);
      return logs.filter((l) => l.date.slice(0, 4) === y);
    }
    return logs;
  }, [logs, dayLogs, scope, selDate, monthStartDay]);
  const scopedTotal = scopedLogs.reduce((n, l) => n + l.amount, 0);

  const byCat = useMemo(() => {
    const m = {};
    scopedLogs.forEach((l) => { m[l.category_id] = (m[l.category_id] || 0) + l.amount; });
    return Object.entries(m)
      .map(([cid, amount]) => ({ cat: catById[cid], amount }))
      .filter((x) => x.cat)
      .sort((a, b) => b.amount - a.amount);
  }, [scopedLogs, catById]);

  // ── Month tag chips: recent billing cycles that actually have logs, newest first ──
  // Each tag is the cycle's ISO start date (so a non-1st month-start day still buckets correctly).
  const cycleStartFor = (dateStr) => cycleRange(new Date(dateStr + "T00:00"), monthStartDay)[0];
  const monthTags = useMemo(() => {
    const set = new Set(logs.map((l) => cycleStartFor(l.date)));
    set.add(cycleRange(new Date(), monthStartDay)[0]);
    return Array.from(set).sort().reverse().slice(0, 12);
  }, [logs, monthStartDay]);

  const monthLabelOf = (cycleStart) => new Date(cycleStart + "T00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const prevCycleStart = (cycleStart, back) => cycleRange(new Date(cycleStart + "T00:00"), monthStartDay, -back)[0];

  // ── Filtered-by-category logs for the selected comparison cycle + prior two ──
  const cmpFilter = (l) => cmpCats.size === 0 || cmpCats.has(l.category_id);
  const cmpMonths = [cmpMonth, prevCycleStart(cmpMonth, 1), prevCycleStart(cmpMonth, 2)];
  const cmpTotals = cmpMonths.map((cs) => {
    const [lo, hi] = cycleRange(new Date(cs + "T00:00"), monthStartDay);
    return logs.filter((l) => l.date >= lo && l.date <= hi && cmpFilter(l)).reduce((n, l) => n + l.amount, 0);
  });
  const [cmpTotal, cmpPrev, cmpPrev2] = cmpTotals;
  const cmpDelta = cmpPrev > 0 ? Math.round(((cmpTotal - cmpPrev) / cmpPrev) * 100) : (cmpTotal > 0 ? 100 : 0);
  const CmpTrendIcon = cmpDelta > 0 ? TrendingUp : cmpDelta < 0 ? TrendingDown : Minus;
  const cmpTrendColor = cmpDelta > 0 ? "#C2536B" : cmpDelta < 0 ? "#4C9A6B" : "#9A968C"; // for spending, up = bad (red), down = good (green)

  // ── Category distribution for the selected trend cycle (respects the category tag filter) ──
  const cmpByCat = useMemo(() => {
    const [lo, hi] = cycleRange(new Date(cmpMonth + "T00:00"), monthStartDay);
    const m = {};
    logs.filter((l) => l.date >= lo && l.date <= hi && cmpFilter(l)).forEach((l) => { m[l.category_id] = (m[l.category_id] || 0) + l.amount; });
    return Object.entries(m)
      .map(([cid, amount]) => ({ cat: catById[cid], amount }))
      .filter((x) => x.cat)
      .sort((a, b) => b.amount - a.amount);
  }, [logs, cmpMonth, cmpCats, catById, monthStartDay]);
  let cmpAcc = 0;
  const cmpSegs = cmpByCat.map((d) => {
    const start = cmpTotal > 0 ? (cmpAcc / cmpTotal) * 100 : 0;
    cmpAcc += d.amount;
    const end = cmpTotal > 0 ? (cmpAcc / cmpTotal) * 100 : 0;
    return { ...d, start, end, pct: cmpTotal > 0 ? (d.amount / cmpTotal) * 100 : 0 };
  });
  const cmpGradient = cmpSegs.length
    ? `conic-gradient(${cmpSegs.map((s) => `${s.cat.color} ${s.start}% ${s.end}%`).join(", ")})`
    : "var(--surface-2)";

  // ── Calendar grid for the visible billing cycle ──
  // When the month starts on the 1st this is just the calendar month; for any
  // other start day (e.g. 25) the grid spans the cycle, 25th → 24th next month.
  const calDays = useMemo(() => {
    const [lo, hi] = cycleRange(calMonth, monthStartDay);
    const start = new Date(lo + "T00:00");
    const end = new Date(hi + "T00:00");
    const startDow = (start.getDay() + 6) % 7; // Monday-first
    const totalsByDate = {};
    logs.forEach((l) => { if (l.date >= lo && l.date <= hi) totalsByDate[l.date] = (totalsByDate[l.date] || 0) + l.amount; });
    const cells = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      const ds = iso(dt);
      cells.push({ date: ds, day: dt.getDate(), total: totalsByDate[ds] || 0 });
    }
    return cells;
  }, [calMonth, logs, monthStartDay]);

  // Shift by a whole cycle. Anchor on the cycle's start so repeated shifts stay aligned.
  const shiftMonth = (delta) => setCalMonth((m) => {
    const [lo] = cycleRange(m, monthStartDay, delta);
    return new Date(lo + "T00:00");
  });
  const monthLabel = useMemo(() => {
    const [lo, hi] = cycleRange(calMonth, monthStartDay);
    if (monthStartDay === 1) return new Date(lo + "T00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const f = (s) => new Date(s + "T00:00").toLocaleDateString("en-US", { day: "numeric", month: "short" });
    return `${f(lo)} – ${f(hi)}`;
  }, [calMonth, monthStartDay]);

  // ── Add expense ──
  const openAdd = (cat) => setAddCat({ cat, amount: "", note: "" });
  const saveAdd = async () => {
    const amt = parseFloat(addCat.amount);
    if (!amt || amt <= 0) return;
    await api.createExpenseLog({ category_id: addCat.cat.id, amount: amt, note: addCat.note.trim().slice(0, NOTE_MAX), date: selDate });
    setAddCat(null);
    load();
  };

  // ── Edit / delete an existing expense ──
  const openEdit = (l) => setEditLog({ id: l.id, category_id: l.category_id, amount: String(l.amount), note: l.note || "", date: l.date });
  const saveEdit = async () => {
    const amt = parseFloat(editLog.amount);
    if (!amt || amt <= 0) return;
    await api.updateExpenseLog(editLog.id, {
      category_id: editLog.category_id,
      amount: amt,
      note: editLog.note.trim().slice(0, NOTE_MAX),
      date: editLog.date,
    });
    setEditLog(null);
    load();
  };

  // ── Category add/edit ──
  const openAddCat = () => setCatForm({ id: null, name: "", icon: "ShoppingBag", color: COLORS[categories.length % COLORS.length] });
  const openEditCat = (c) => setCatForm({ id: c.id, name: c.name, icon: c.icon, color: c.color });
  const saveCat = async () => {
    const name = catForm.name.trim();
    if (!name) return;
    if (catForm.id) await api.updateExpenseCategory(catForm.id, { name, icon: catForm.icon, color: catForm.color });
    else await api.createExpenseCategory({ name, icon: catForm.icon, color: catForm.color });
    setCatForm(null);
    load();
  };
  const removeCat = async (c) => {
    const n = logs.filter((l) => l.category_id === c.id).length;
    const msg = n > 0
      ? `Delete "${c.name}"? Its ${n} transaction${n === 1 ? "" : "s"} will be moved to "Other".`
      : `Delete "${c.name}"?`;
    if (!window.confirm(msg)) return;
    await api.deleteExpenseCategory(c.id);
    load();
  };

  // Move a category one slot up/down; persist the new order immediately. We
  // optimistically reorder the local list so the UI responds instantly.
  const moveCat = async (index, dir) => {
    const next = index + dir;
    if (next < 0 || next >= categories.length) return;
    const reordered = [...categories];
    [reordered[index], reordered[next]] = [reordered[next], reordered[index]];
    setCategories(reordered);
    await api.arrangeExpenseCategories(reordered.map((c) => c.id)).catch(() => {});
    load();
  };

  const fmtSelDate = new Date(selDate + "T00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });

  // pie chart gradient
  let acc = 0;
  const segs = byCat.map((d) => {
    const start = scopedTotal > 0 ? (acc / scopedTotal) * 100 : 0;
    acc += d.amount;
    const end = scopedTotal > 0 ? (acc / scopedTotal) * 100 : 0;
    return { ...d, start, end, pct: scopedTotal > 0 ? (d.amount / scopedTotal) * 100 : 0 };
  });
  const gradient = segs.length
    ? `conic-gradient(${segs.map((s) => `${s.cat.color} ${s.start}% ${s.end}%`).join(", ")})`
    : "var(--surface-2)";

  return (
    <div style={{ ...S.page, ...(isMobile ? { padding: "20px 14px" } : {}) }}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Expenses</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h1 style={S.h1}>Expenses</h1>
            <HelpButton id="expenses" />
          </div>
          <div style={S.subhead}>Log day-to-day spending by category and see where it goes.</div>
        </div>
      </div>

      {/* Total spent */}
      <div style={S.totalCard}>
        <div style={S.totalLeft}>
          <ReceiptText size={20} color={ACCENT} />
          <div>
            <div style={S.totalLabel}>
              Total spent {scope === "day" ? "today" : scope === "month" ? "this month" : scope === "year" ? "this year" : "all time"}
            </div>
            <div style={S.totalVal}>{money(scopedTotal)}</div>
            <div style={{ ...S.budgetLine, color: dailyBudget.perDay >= 0 ? "#4C9A6B" : "#C2536B" }}>
              {dailyBudget.perDay >= 0
                ? <>You can spend ≈ <b>{money(dailyBudget.perDay)}/day</b> · {dailyBudget.daysLeft} day{dailyBudget.daysLeft === 1 ? "" : "s"} till next cycle</>
                : <>Overspent this cycle by {money(Math.abs(dailyBudget.remaining))} · {dailyBudget.daysLeft} day{dailyBudget.daysLeft === 1 ? "" : "s"} left</>}
            </div>
          </div>
        </div>
        <div style={S.scopeRow}>
          {[["day", "Day"], ["month", "Month"], ["year", "Year"], ["all", "All"]].map(([id, lbl]) => (
            <button key={id} onClick={() => setScope(id)} style={{ ...S.scopeBtn, ...(scope === id ? S.scopeBtnOn : {}) }}>{lbl}</button>
          ))}
        </div>
      </div>

      {/* Last-3-days comparison */}
      <div style={{ ...S.card, marginBottom: 16 }}>
        <div style={S.threeDayTitle}>Last 3 days</div>
        <TrendBars items={threeDay} money={money} />
      </div>

      <div style={{ ...S.cols, gridTemplateColumns: isMobile ? "minmax(0,1fr)" : "320px minmax(0,1fr)" }}>
        {/* Calendar */}
        <div style={{ ...S.card, minWidth: 0, ...(isMobile ? { padding: 12 } : {}) }}>
          <div style={S.calHead}>
            <button onClick={() => shiftMonth(-1)} style={S.calNav}><ChevronLeft size={16} /></button>
            <span style={S.calTitle}>{monthLabel}</span>
            <button onClick={() => shiftMonth(1)} style={S.calNav}><ChevronRight size={16} /></button>
          </div>
          <div style={S.calGrid}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <div key={i} style={S.calDow}>{d}</div>)}
            {calDays.map((c, i) => c === null ? <div key={i} /> : (
              <button key={c.date} onClick={() => setSelDate(c.date)}
                style={{ ...S.calCell, ...(c.date === selDate ? S.calCellOn : {}), ...(c.date === TODAY && c.date !== selDate ? S.calCellToday : {}) }}>
                <span>{c.day}</span>
                {c.total > 0 && <span style={{ ...S.calDot, background: c.date === selDate ? "#fff" : ACCENT }} />}
              </button>
            ))}
          </div>
        </div>

        {/* Selected day: add expense + log list */}
        <div>
          <div style={S.card}>
            <div style={S.cardTitleRow}>
              <div>
                <div style={S.cardTitle}>{fmtSelDate}</div>
                <div style={S.cardSub}>Tap a category to log an expense for this day.</div>
              </div>
              <div style={S.dayTotal}>{money(dayTotal)}</div>
            </div>

            <div style={S.iconGrid}>
              {categories.map((c) => (
                <div key={c.id} style={S.iconCell}>
                  <button onClick={() => openAdd(c)} style={{ ...S.iconBtn, background: c.color + "1A", color: c.color, borderColor: c.color + "44" }}>
                    <IconFor name={c.icon} size={22} />
                  </button>
                  <span style={S.iconLabel}>{c.name}</span>
                </div>
              ))}
              <div style={S.iconCell}>
                <button onClick={openAddCat} style={S.iconBtnAdd}><Plus size={20} /></button>
                <span style={S.iconLabel}>Add</span>
              </div>
            </div>
            <button onClick={() => setManageOpen(true)} style={S.manageLink}><Pencil size={11} /> Customize categories</button>

            {dayLogs.length > 0 && (
              <div style={S.logList}>
                {dayLogs.map((l) => {
                  const c = catById[l.category_id];
                  return (
                    <div key={l.id} style={S.logRow}>
                      <span style={{ ...S.logIcon, background: (c?.color || "#9A968C") + "1A", color: c?.color || "#9A968C" }}>
                        <IconFor name={c?.icon} size={14} />
                      </span>
                      <button onClick={() => openEdit(l)} style={S.logInfoBtn} title="Edit this expense">
                        <div style={S.logCat}>{c?.name || "Deleted category"}</div>
                        {l.note && <div style={S.logNote}>{l.note}</div>}
                      </button>
                      <span style={S.logAmt}>{money(l.amount)}</span>
                      <button onClick={() => openEdit(l)} style={S.editBtn} title="Edit"><Pencil size={13} /></button>
                      <button onClick={() => deleteLog(l.id, c?.name || "Expense")} style={S.delBtn}><X size={14} /></button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pie chart */}
          <div style={S.card}>
            <div style={S.cardTitleRow}>
              <div>
                <div style={S.cardTitle}>Spending by category</div>
                <div style={S.cardSub}>{scope === "day" ? "Today" : scope === "month" ? "This month" : scope === "year" ? "This year" : "All time"} — percentage &amp; amount</div>
              </div>
            </div>
            {byCat.length === 0 ? <div style={S.muted}>No expenses logged for this period yet.</div> : (
              <div style={S.pieWrap}>
                <div style={S.pieChart}>
                  <div style={{ ...S.pieDisc, background: gradient }} />
                  <div style={S.pieHole}>
                    <span style={S.pieHoleVal}>{money(scopedTotal)}</span>
                    <span style={S.pieHoleLbl}>total</span>
                  </div>
                </div>
                <div style={S.pieLegend}>
                  {segs.map((s) => {
                    const on = drillCats.has(s.cat.id);
                    return (
                      <button key={s.cat.id}
                        onClick={() => { setDrillAll(false); toggleDrillCat(s.cat.id); }}
                        title="Show these expenses"
                        style={{ ...S.legendRow, ...S.legendRowBtn, ...(on ? { background: s.cat.color + "1A" } : {}) }}>
                        <span style={{ ...S.dot, background: s.cat.color }} />
                        <IconFor name={s.cat.icon} size={13} style={{ color: s.cat.color, flexShrink: 0 }} />
                        <span style={S.legendName}>{s.cat.name}</span>
                        <span style={S.legendPct}>{Math.round(s.pct)}%</span>
                        <span style={S.legendAmt}>{money(s.amount)}</span>
                        {on && <Check size={13} style={{ color: s.cat.color, flexShrink: 0 }} />}
                      </button>
                    );
                  })}
                  <button onClick={toggleDrillAll}
                    title="Show every transaction in this period"
                    style={{ ...S.legendRow, ...S.legendRowBtn, ...(drillAll ? { background: "var(--hover)" } : {}) }}>
                    <Tag size={13} style={{ color: "var(--text-2)", flexShrink: 0 }} />
                    <span style={{ ...S.legendName, fontWeight: 700 }}>All categories</span>
                    <span style={S.legendAmt}>{money(scopedTotal)}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Drill-down: every expense in the selected category/categories —
                or all of them — for this period, editable in place. */}
            {drillOpen && (() => {
              const catLogs = scopedLogs.filter((l) => drillAll || drillCats.has(l.category_id))
                .slice().sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
              const catTotal = catLogs.reduce((n, l) => n + l.amount, 0);
              const selCats = drillAll ? [] : [...drillCats].map((id) => catById[id]).filter(Boolean);
              const heading = drillAll ? "All categories" : selCats.map((c) => c.name).join(", ") || "Category";
              const showCatIcon = drillAll || selCats.length > 1;
              return (
                <div style={S.drillBox}>
                  <div style={S.drillHead}>
                    <span style={{ ...S.iconBadge, background: (!drillAll && selCats.length === 1 ? selCats[0].color : "#9A968C") + "1A", color: !drillAll && selCats.length === 1 ? selCats[0].color : "#9A968C" }}>
                      {drillAll || selCats.length !== 1 ? <Tag size={15} /> : <IconFor name={selCats[0].icon} size={15} />}
                    </span>
                    <span style={S.drillTitle}>{heading} · {catLogs.length} transaction{catLogs.length === 1 ? "" : "s"} · {money(catTotal)}</span>
                    <button onClick={closeDrill} style={S.delBtn} title="Close"><X size={15} /></button>
                  </div>
                  {catLogs.length === 0 ? <div style={S.muted}>No expenses in this period.</div> : (
                    <div style={{ ...S.logList, ...S.drillList }}>
                      {catLogs.map((l) => {
                        const rowCat = catById[l.category_id];
                        return (
                          <div key={l.id} style={S.logRow}>
                            {showCatIcon && (
                              <span style={{ ...S.logIcon, background: (rowCat?.color || "#9A968C") + "1A", color: rowCat?.color || "#9A968C" }}>
                                <IconFor name={rowCat?.icon} size={14} />
                              </span>
                            )}
                            <button onClick={() => openEdit(l)} style={S.logInfoBtn} title="Edit this expense">
                              <div style={S.logCat}>
                                {showCatIcon ? `${rowCat?.name || "Other"} · ` : ""}
                                {new Date(l.date + "T00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                              </div>
                              {l.note && <div style={S.logNote}>{l.note}</div>}
                            </button>
                            <span style={S.logAmt}>{money(l.amount)}</span>
                            <button onClick={() => openEdit(l)} style={S.editBtn} title="Edit"><Pencil size={13} /></button>
                            <button onClick={() => deleteLog(l.id, rowCat?.name || "Expense")} style={S.delBtn}><X size={14} /></button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>

          {/* Monthly comparison */}
          <div style={S.card}>
            <div style={S.cardTitleRow}>
              <div>
                <div style={S.cardTitle}>Monthly trend</div>
                <div style={S.cardSub}>Compare a month against the previous two</div>
              </div>
            </div>

            <div style={S.tagRow}>
              {monthTags.map((ym) => (
                <button key={ym} onClick={() => setCmpMonth(ym)} style={{ ...S.tagChip, ...(cmpMonth === ym ? S.tagChipOn : {}) }}>
                  <Tag size={11} /> {monthLabelOf(ym)}
                </button>
              ))}
            </div>

            <div style={{ ...S.tagRow, marginTop: 8 }}>
              <button onClick={() => setCmpCats(new Set())} style={{ ...S.tagChip, ...(cmpCats.size === 0 ? S.tagChipOn : {}) }}>
                <Tag size={11} /> All categories
              </button>
              {categories.map((c) => {
                const on = cmpCats.has(c.id);
                return (
                  <button key={c.id} onClick={() => toggleCmpCat(c.id)} style={{ ...S.tagChip, ...(on ? S.tagChipOn : {}) }}>
                    <IconFor name={c.icon} size={11} /> {c.name}{on && <Check size={11} style={{ marginLeft: 2 }} />}
                  </button>
                );
              })}
            </div>

            <div style={{ ...S.trend3, marginTop: 16 }}>
              <div style={S.trendCol}><div style={S.trendVal}>{money(cmpTotal)}</div><div style={S.trendLbl}>{monthLabelOf(cmpMonths[0])}</div></div>
              <div style={S.trendCol}><div style={{ ...S.trendVal, color: "var(--text-2)" }}>{money(cmpPrev)}</div><div style={S.trendLbl}>{monthLabelOf(cmpMonths[1])}</div></div>
              <div style={S.trendCol}><div style={{ ...S.trendVal, color: "var(--text-3)" }}>{money(cmpPrev2)}</div><div style={S.trendLbl}>{monthLabelOf(cmpMonths[2])}</div></div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
              <div style={{ ...S.trendBadge, color: cmpTrendColor, background: cmpTrendColor + "1A" }}>
                <CmpTrendIcon size={15} /> {cmpDelta > 0 ? "+" : ""}{cmpDelta}% vs {monthLabelOf(cmpMonths[1])}
              </div>
            </div>
            <TrendBars items={[
              { label: monthLabelOf(cmpMonths[0]), value: cmpTotal, color: ACCENT },
              { label: monthLabelOf(cmpMonths[1]), value: cmpPrev, color: "var(--text-3)" },
              { label: monthLabelOf(cmpMonths[2]), value: cmpPrev2, color: "var(--text-3)" },
            ]} money={money} />

            <div style={S.trendDivider} />
            <div style={S.cardSub}>Category split for {monthLabelOf(cmpMonth)}</div>
            {cmpByCat.length === 0 ? <div style={S.muted}>No expenses logged for this month yet.</div> : (
              <div style={{ ...S.pieWrap, marginTop: 10 }}>
                <div style={S.pieChart}>
                  <div style={{ ...S.pieDisc, background: cmpGradient }} />
                  <div style={S.pieHole}>
                    <span style={S.pieHoleVal}>{money(cmpTotal)}</span>
                    <span style={S.pieHoleLbl}>total</span>
                  </div>
                </div>
                <div style={S.pieLegend}>
                  {cmpSegs.map((s) => (
                    <div key={s.cat.id} style={S.legendRow}>
                      <span style={{ ...S.dot, background: s.cat.color }} />
                      <IconFor name={s.cat.icon} size={13} style={{ color: s.cat.color, flexShrink: 0 }} />
                      <span style={S.legendName}>{s.cat.name}</span>
                      <span style={S.legendPct}>{Math.round(s.pct)}%</span>
                      <span style={S.legendAmt}>{money(s.amount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Transactions for the selected categories (all when none picked),
                listed under the donut — editable in place. */}
            {(() => {
              const [tLo, tHi] = cycleRange(new Date(cmpMonth + "T00:00"), monthStartDay);
              const trendLogs = logs.filter((l) => l.date >= tLo && l.date <= tHi && cmpFilter(l))
                .slice().sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
              if (trendLogs.length === 0) return null;
              const selNames = cmpCats.size === 0
                ? "All categories"
                : [...cmpCats].map((id) => catById[id]?.name).filter(Boolean).join(", ");
              const trendTotal = trendLogs.reduce((n, l) => n + l.amount, 0);
              return (
                <div style={S.drillBox}>
                  <div style={S.drillHead}>
                    <span style={{ ...S.iconBadge, background: "#9A968C1A", color: "#9A968C" }}><Tag size={15} /></span>
                    <span style={S.drillTitle}>{selNames} · {monthLabelOf(cmpMonth)} · {trendLogs.length} transaction{trendLogs.length === 1 ? "" : "s"} · {money(trendTotal)}</span>
                  </div>
                  <div style={{ ...S.logList, ...S.drillList }}>
                    {trendLogs.map((l) => {
                      const rowCat = catById[l.category_id];
                      return (
                        <div key={l.id} style={S.logRow}>
                          <span style={{ ...S.logIcon, background: (rowCat?.color || "#9A968C") + "1A", color: rowCat?.color || "#9A968C" }}>
                            <IconFor name={rowCat?.icon} size={14} />
                          </span>
                          <button onClick={() => openEdit(l)} style={S.logInfoBtn} title="Edit this expense">
                            <div style={S.logCat}>
                              {rowCat?.name || "Other"} · {new Date(l.date + "T00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                            </div>
                            {l.note && <div style={S.logNote}>{l.note}</div>}
                          </button>
                          <span style={S.logAmt}>{money(l.amount)}</span>
                          <button onClick={() => openEdit(l)} style={S.editBtn} title="Edit"><Pencil size={13} /></button>
                          <button onClick={() => deleteLog(l.id, rowCat?.name || "Expense")} style={S.delBtn}><X size={14} /></button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Add-expense amount modal */}
      {addCat && (
        <div style={S.overlay} onClick={() => setAddCat(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={{ ...S.modalTitle, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ ...S.iconBadge, background: addCat.cat.color + "1A", color: addCat.cat.color }}><IconFor name={addCat.cat.icon} size={16} /></span>
                {addCat.cat.name}
              </span>
              <button onClick={() => setAddCat(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <label style={S.label}>Amount *</label>
            <input autoFocus type="number" inputMode="decimal" value={addCat.amount}
              onChange={(e) => setAddCat((f) => ({ ...f, amount: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveAdd()} placeholder="0" style={S.input} />
            <label style={S.label}>Note (optional)</label>
            <input value={addCat.note} maxLength={NOTE_MAX} onChange={(e) => setAddCat((f) => ({ ...f, note: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveAdd()} placeholder="What was it for?" style={S.input} />
            <div style={S.noteCount}>{addCat.note.length}/{NOTE_MAX}</div>
            <div style={S.modalActions}>
              <button onClick={() => setAddCat(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveAdd} disabled={!addCat.amount} style={{ ...S.saveBtn, ...(!addCat.amount ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit-expense modal */}
      {editLog && (() => {
        const c = catById[editLog.category_id];
        return (
        <div style={S.overlay} onClick={() => setEditLog(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>Edit expense</span>
              <button onClick={() => setEditLog(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <label style={S.label}>Category</label>
            <Dropdown value={editLog.category_id}
              options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
              onChange={(v) => setEditLog((f) => ({ ...f, category_id: Number(v) }))}
              style={{ marginBottom: 8 }} />
            <label style={S.label}>Amount *</label>
            <input autoFocus type="number" inputMode="decimal" value={editLog.amount}
              onChange={(e) => setEditLog((f) => ({ ...f, amount: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()} placeholder="0" style={S.input} />
            <label style={S.label}>Date</label>
            <input type="date" value={editLog.date} onChange={(e) => setEditLog((f) => ({ ...f, date: e.target.value }))} style={S.input} />
            <label style={S.label}>Note (optional)</label>
            <input value={editLog.note} maxLength={NOTE_MAX} onChange={(e) => setEditLog((f) => ({ ...f, note: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveEdit()} placeholder="What was it for?" style={S.input} />
            <div style={S.noteCount}>{editLog.note.length}/{NOTE_MAX}</div>
            <div style={S.modalActions}>
              <button onClick={() => setEditLog(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveEdit} disabled={!editLog.amount} style={{ ...S.saveBtn, ...(!editLog.amount ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> Save
              </button>
            </div>
          </div>
        </div>
        );
      })()}

      {/* Manage categories modal */}
      {manageOpen && (
        <div style={S.overlay} onClick={() => setManageOpen(false)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>Customize categories</span>
              <button onClick={() => setManageOpen(false)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <div style={S.manageHint}>Use the arrows to reorder how categories appear.</div>
            <div style={S.manageList}>
              {categories.map((c, i) => (
                <div key={c.id} style={S.manageRow}>
                  <div style={S.reorderCol}>
                    <button onClick={() => moveCat(i, -1)} disabled={i === 0}
                      style={{ ...S.reorderBtn, ...(i === 0 ? S.reorderDisabled : {}) }} title="Move up"><ChevronUp size={13} /></button>
                    <button onClick={() => moveCat(i, 1)} disabled={i === categories.length - 1}
                      style={{ ...S.reorderBtn, ...(i === categories.length - 1 ? S.reorderDisabled : {}) }} title="Move down"><ChevronDown size={13} /></button>
                  </div>
                  <span style={{ ...S.iconBadge, background: c.color + "1A", color: c.color }}><IconFor name={c.icon} size={15} /></span>
                  <span style={{ flex: 1, fontSize: 13.5, fontWeight: 600 }}>{c.name}</span>
                  <button onClick={() => openEditCat(c)} style={S.delBtn}><Pencil size={13} /></button>
                  <button onClick={() => removeCat(c)} style={S.delBtn}><X size={14} /></button>
                </div>
              ))}
            </div>
            <button onClick={openAddCat} style={S.addColInline}><Plus size={13} /> Add category</button>
          </div>
        </div>
      )}

      {/* Add/edit category modal */}
      {catForm && (
        <div style={S.overlay} onClick={() => setCatForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <span style={S.modalTitle}>{catForm.id ? "Edit category" : "New category"}</span>
              <button onClick={() => setCatForm(null)} style={S.iconBtnPlain}><X size={16} /></button>
            </div>
            <label style={S.label}>Name *</label>
            <input autoFocus value={catForm.name} onChange={(e) => setCatForm((f) => ({ ...f, name: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && saveCat()} placeholder="e.g. Vegetables, Petrol…" style={S.input} />

            <label style={S.label}>Color</label>
            <div style={S.colorRow}>
              {COLORS.map((col) => (
                <button key={col} onClick={() => setCatForm((f) => ({ ...f, color: col }))}
                  style={{ ...S.colorSwatch, background: col, ...(catForm.color === col ? S.colorSwatchOn : {}) }} />
              ))}
            </div>

            <label style={S.label}>Icon</label>
            <div style={S.iconPickGrid}>
              {Object.keys(ICONS).map((name) => (
                <button key={name} onClick={() => setCatForm((f) => ({ ...f, icon: name }))}
                  style={{ ...S.iconPick, ...(catForm.icon === name ? { background: catForm.color + "22", borderColor: catForm.color, color: catForm.color } : {}) }}>
                  <IconFor name={name} size={17} />
                </button>
              ))}
            </div>

            <div style={S.modalActions}>
              <button onClick={() => setCatForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={saveCat} disabled={!catForm.name.trim()}
                style={{ ...S.saveBtn, ...(!catForm.name.trim() ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {catForm.id ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {!loaded && <div style={S.muted}>Loading…</div>}
      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

function TrendBars({ items, money }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div style={S.tbWrap}>
      {items.map((it, i) => (
        <div key={i} style={S.tbRow}>
          <div style={S.tbLbl}>{it.label}</div>
          <div style={S.tbTrack}><div style={{ ...S.tbBar, width: `${(it.value / max) * 100}%`, background: it.color }} /></div>
          <div style={S.tbVal}>{money(it.value)}</div>
        </div>
      ))}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "26px 22px", color: "var(--text)", boxSizing: "border-box", maxWidth: "100%", overflowX: "hidden" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },

  totalCard: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "16px 18px", marginBottom: 16, flexWrap: "wrap" },
  totalLeft: { display: "flex", alignItems: "center", gap: 12 },
  totalLabel: { fontSize: 12, color: "var(--text-3)", fontWeight: 600 },
  totalVal: { fontSize: 24, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 2 },
  budgetLine: { fontSize: 11.5, fontWeight: 600, marginTop: 4 },
  scopeRow: { display: "flex", gap: 6 },
  scopeBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 13px", borderRadius: 8, fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  scopeBtnOn: { background: ACCENT, color: "#fff", borderColor: ACCENT },

  cols: { display: "grid", gap: 16, alignItems: "start" },

  card: { background: "var(--surface)", borderRadius: 16, padding: 18, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)", marginBottom: 16 },
  cardTitleRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, gap: 10 },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  cardSub: { fontSize: 11.5, color: "var(--text-3)", marginTop: 2 },
  dayTotal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap", color: ACCENT },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "14px 0" },

  calHead: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  calNav: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 28, height: 28, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  calTitle: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  calGrid: { display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: 4 },
  calDow: { fontSize: 10.5, fontWeight: 700, color: "var(--text-3)", textAlign: "center", padding: "4px 0" },
  calCell: { position: "relative", border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", borderRadius: 8, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  calCellOn: { background: ACCENT, color: "#fff", borderColor: ACCENT, fontWeight: 700 },
  calCellToday: { borderColor: ACCENT, fontWeight: 700 },
  calDot: { position: "absolute", bottom: 3, width: 4, height: 4, borderRadius: "50%" },

  iconGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))", gap: 10, marginTop: 4 },
  iconCell: { display: "flex", flexDirection: "column", alignItems: "center", gap: 5 },
  iconBtn: { width: 52, height: 52, borderRadius: 14, border: "1px solid", display: "grid", placeItems: "center", cursor: "pointer" },
  iconBtnAdd: { width: 52, height: 52, borderRadius: 14, border: "1px dashed var(--border)", background: "none", color: "var(--text-3)", display: "grid", placeItems: "center", cursor: "pointer" },
  iconLabel: { fontSize: 10.5, fontWeight: 600, color: "var(--text-2)", textAlign: "center", maxWidth: 66, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  manageLink: { display: "inline-flex", alignItems: "center", gap: 5, border: "none", background: "none", color: "var(--text-3)", fontSize: 11.5, fontWeight: 600, cursor: "pointer", marginTop: 12, padding: 0, fontFamily: "inherit" },

  logList: { marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 8 },
  logRow: { display: "flex", alignItems: "center", gap: 10, minWidth: 0 },
  logIcon: { width: 28, height: 28, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
  logInfoBtn: { flex: 1, minWidth: 0, border: "none", background: "none", padding: 0, cursor: "pointer", textAlign: "left", fontFamily: "inherit", overflow: "hidden", color: "inherit" },
  logCat: { fontSize: 13, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  logNote: { fontSize: 11, color: "var(--text-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  logAmt: { fontSize: 13.5, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", whiteSpace: "nowrap", flexShrink: 0 },
  editBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", flexShrink: 0 },
  delBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", flexShrink: 0 },
  noteCount: { fontSize: 10.5, color: "var(--text-3)", textAlign: "right", marginTop: 3 },

  pieWrap: { display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" },
  pieChart: { position: "relative", width: 132, height: 132, flexShrink: 0, margin: "0 auto" },
  pieDisc: { width: "100%", height: "100%", borderRadius: "50%" },
  pieHole: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 80, height: 80, borderRadius: "50%", background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  pieHoleVal: { fontSize: 14, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  pieHoleLbl: { fontSize: 10, color: "var(--text-3)", fontWeight: 600 },
  pieLegend: { flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 8 },
  legendRow: { display: "flex", alignItems: "center", gap: 7 },
  legendRowBtn: { width: "100%", border: "none", background: "none", cursor: "pointer", fontFamily: "inherit", padding: "5px 7px", borderRadius: 8, textAlign: "left", color: "var(--text)" },
  drillBox: { marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--border)" },
  drillList: { maxHeight: 320, overflowY: "auto", paddingRight: 4 },
  drillHead: { display: "flex", alignItems: "center", gap: 9, marginBottom: 4 },
  drillTitle: { flex: 1, fontSize: 13, fontWeight: 700, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  dot: { width: 9, height: 9, borderRadius: 3, flexShrink: 0 },
  legendName: { flex: 1, fontSize: 12.5, fontWeight: 600, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  legendPct: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 600, width: 34, textAlign: "right" },
  legendAmt: { fontSize: 12.5, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 64, textAlign: "right" },

  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 440, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtnPlain: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  iconBadge: { width: 28, height: 28, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
  label: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)", marginBottom: 8 },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "#4C9A6B", color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  manageHint: { fontSize: 11.5, color: "var(--text-3)", marginBottom: 8 },
  manageList: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 10, maxHeight: 320, overflowY: "auto" },
  manageRow: { display: "flex", alignItems: "center", gap: 10, padding: "6px 2px" },
  reorderCol: { display: "flex", flexDirection: "column", gap: 1, flexShrink: 0 },
  reorderBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 22, height: 17, borderRadius: 5, cursor: "pointer", display: "grid", placeItems: "center", padding: 0 },
  reorderDisabled: { opacity: 0.35, cursor: "not-allowed" },
  addColInline: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px dashed var(--border)", background: "none", color: "var(--text-2)", padding: "9px 12px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", width: "100%", justifyContent: "center" },

  colorRow: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 4 },
  colorSwatch: { width: 26, height: 26, borderRadius: "50%", border: "2px solid transparent", cursor: "pointer", padding: 0 },
  colorSwatchOn: { border: "2px solid var(--text)", boxShadow: "0 0 0 2px var(--surface)" },

  iconPickGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 4 },
  iconPick: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", borderRadius: 9, height: 36, display: "grid", placeItems: "center", cursor: "pointer" },

  tagRow: { display: "flex", gap: 6, flexWrap: "wrap" },
  tagChip: { display: "inline-flex", alignItems: "center", gap: 4, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 11px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tagChipOn: { background: ACCENT, color: "#fff", borderColor: ACCENT },

  trendDivider: { height: 1, background: "var(--border)", margin: "16px 0 12px" },
  trend3: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, gap: 8 },
  trendCol: { textAlign: "center", flex: 1 },
  trendVal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  trendLbl: { fontSize: 11, color: "var(--text-3)", marginTop: 2 },
  trendBadge: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 800, padding: "6px 12px", borderRadius: 20, width: "fit-content" },
  threeDayTitle: { fontSize: 13, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  tbWrap: { display: "flex", flexDirection: "column", gap: 8 },
  tbRow: { display: "flex", alignItems: "center", gap: 8 },
  tbLbl: { width: 78, fontSize: 11, color: "var(--text-2)", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  tbTrack: { flex: 1, height: 14, background: "#F2F0EA", borderRadius: 7, overflow: "hidden" },
  tbBar: { height: "100%", borderRadius: 7, transition: "width 0.3s" },
  tbVal: { width: 64, fontSize: 11, color: "var(--text-2)", fontWeight: 700, flexShrink: 0, textAlign: "right" },
};
