import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Pencil, Plus, Bell, Check, Flame, LayoutGrid, Menu, X, MoreHorizontal, FileText, Link2, ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "../api.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

const PILLARS = {
  Financial:    { dot: "#C9A227", soft: "rgba(201,162,39,0.12)" },
  Academic:     { dot: "#3A7CA5", soft: "rgba(58,124,165,0.12)" },
  Relationship: { dot: "#C2536B", soft: "rgba(194,83,107,0.12)" },
  Health:       { dot: "#4C9A6B", soft: "rgba(76,154,107,0.12)" },
  Spiritual:    { dot: "#8268B0", soft: "rgba(130,104,176,0.12)" },
};
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const toISO = (d) => d.toISOString().slice(0, 10);
const todayISO = () => toISO(new Date());

// weekOffset: 0 = current week, -1 = last week, +1 = next week …
const getWeekDates = (weekOffset = 0) => {
  const today = new Date();
  const dow = today.getDay();
  const mondayOffset = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset + weekOffset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return toISO(d);
  });
};

// monthOffset: 0 = current month, -1 = last month …
const getMonthInfo = (monthOffset = 0) => {
  const base = new Date();
  const d = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
  const year = d.getFullYear();
  const month = d.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dow = d.getDay();
  const startOffset = dow === 0 ? 6 : dow - 1;
  const dates = Array.from({ length: daysInMonth }, (_, i) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`);
  const label = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  return { dates, startOffset, label, year, month };
};

const fmtShort = (iso) => new Date(iso + "T00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });

const TODAY = todayISO();
const THIS_YEAR = new Date().getFullYear();

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [selected, setSelected] = useState("ALL");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editingHabit, setEditingHabit] = useState(null);
  const [countPopup, setCountPopup] = useState(null); // { habit, date }
  const [newHabit, setNewHabit] = useState({ name: "", pillar: "Health", target_per_week: 7, type: "regular", target_count: null, period: "week" });
  const [reordering, setReordering] = useState(false);
  const [habitOrder, setHabitOrder] = useState([]);

  const load = useCallback(() => api.getHabits().then(setHabits).catch(console.error), []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    api.getSetting("habit_order").then((r) => { if (Array.isArray(r?.value)) setHabitOrder(r.value); }).catch(() => {});
  }, []);

  const sortedHabits = useMemo(() => {
    if (!habitOrder.length) return habits;
    return [...habits].sort((a, b) => {
      const ai = habitOrder.indexOf(a.id), bi = habitOrder.indexOf(b.id);
      if (ai === -1 && bi === -1) return 0;
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }, [habits, habitOrder]);

  const saveOrder = async (ids) => {
    setHabitOrder(ids);
    await api.setSetting("habit_order", ids);
    setReordering(false);
  };

  useEffect(() => {
    const check = () => { const mobile = window.innerWidth < 720; setIsMobile(mobile); if (!mobile) setSidebarOpen(false); };
    check(); window.addEventListener("resize", check); return () => window.removeEventListener("resize", check);
  }, []);

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteHabit, api.restoreHabit, load
  );

  const pick = (id) => { setSelected(id); if (isMobile) setSidebarOpen(false); };

  // Per-day count habits open the counter popup; everything else toggles done/undone.
  const dayAction = (habit, dateStr) => {
    if ((habit.type === "minimum" || habit.type === "maximum") && habit.period === "day") {
      setCountPopup({ habit, date: dateStr });
    } else {
      toggleDay(habit.id, dateStr);
    }
  };
  const toggleDay = async (habitId, dateStr) => { await api.toggleHabitLog(habitId, dateStr); load(); };
  const saveCount = async (habitId, dateStr, count, note) => { await api.setHabitLogCount(habitId, dateStr, count, note); setCountPopup(null); load(); };
  const clearLog = async (habitId, dateStr) => { await api.clearHabitLog(habitId, dateStr); setCountPopup(null); load(); };

  const createHabit = async () => {
    if (!newHabit.name.trim()) return;
    const body = {
      name: newHabit.name.trim(),
      pillar: newHabit.pillar,
      target_per_week: Number(newHabit.target_per_week) || 7,
      type: newHabit.type,
      target_count: newHabit.type !== "regular" ? Number(newHabit.target_count) || 1 : null,
      period: newHabit.type !== "regular" ? newHabit.period : null,
    };
    await api.createHabit(body);
    setNewHabit({ name: "", pillar: "Health", target_per_week: 7, type: "regular", target_count: null, period: "week" });
    setAdding(false);
    load();
  };

  const deleteHabit = async (id, name) => {
    if (selected === id) setSelected("ALL");
    softDelete(id, name);
  };

  const current = habits.find((h) => h.id === selected);
  const logSet = (h) => new Set(h.logs || []);

  const sidebarStyle = {
    ...S.sidebar,
    ...(isMobile ? S.sidebarOverlay : {}),
    ...(isMobile && !sidebarOpen ? S.sidebarHidden : {}),
  };

  return (
    <div style={S.shell}>
      {isMobile && sidebarOpen && <div style={S.backdrop} onClick={() => setSidebarOpen(false)} />}

      <aside style={sidebarStyle}>
        <div style={S.sideTop}>
          <div style={S.brand}>Anvil · Habits</div>
          {isMobile && <button onClick={() => setSidebarOpen(false)} style={S.closeBtn}><X size={18} /></button>}
        </div>

        <div style={{ ...S.sideItem, ...(selected === "ALL" ? S.sideItemOn : {}), cursor: "default", padding: "2px 6px 2px 10px" }}>
          <button onClick={() => pick("ALL")} style={{ display: "flex", alignItems: "center", gap: 9, flex: 1, border: "none", background: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: selected === "ALL" ? 600 : 500, color: "var(--text-2)", padding: "7px 0" }}>
            <LayoutGrid size={15} />
            <span style={S.sideLabel}>All Habits</span>
            <span style={S.sideCount}>{habits.length}</span>
          </button>
          <button onClick={(e) => { e.stopPropagation(); setReordering(true); }} style={S.tinyBtn} title="Reorder habits">
            <Pencil size={12} />
          </button>
        </div>
        <div style={S.sideDivider} />

        {sortedHabits.map((h) => {
          const on = selected === h.id;
          const c = PILLARS[h.pillar]?.dot || "#9A968C";
          return (
            <button key={h.id} onClick={() => pick(h.id)} style={{ ...S.sideItem, ...(on ? S.sideItemOn : {}) }}>
              <span style={{ ...S.sideDot, background: c }} />
              <span style={S.sideLabel}>{h.name}</span>
              <span style={S.sideStreak}><Flame size={11} /> {h.streak}</span>
            </button>
          );
        })}

        {adding ? (
          <AddHabitForm
            habit={newHabit}
            onChange={setNewHabit}
            onSave={createHabit}
            onCancel={() => setAdding(false)}
          />
        ) : (
          <button onClick={() => setAdding(true)} style={S.sideNewBtn}><Plus size={13} /> New habit</button>
        )}
      </aside>

      <main style={S.main}>
        {isMobile && (
          <button onClick={() => setSidebarOpen(true)} style={S.hamburger}>
            <Menu size={18} />
            <span style={S.hamburgerLabel}>{selected === "ALL" ? "All Habits" : current?.name}</span>
          </button>
        )}
        {selected === "ALL"
          ? <AllHabitsWeekly habits={sortedHabits} dayAction={dayAction} logSet={logSet}
              onDelete={deleteHabit}
              onEdit={(h) => setEditingHabit(h)} />
          : <SingleHabitMonthly habit={current} dayAction={dayAction} logSet={logSet}
              onDelete={() => deleteHabit(current.id, current.name)}
              onEdit={() => setEditingHabit(current)}
              setNote={(date, note) => api.setHabitLogNote(current.id, date, note).then(load)} />}

        {/* Yearly bar chart always shown in All view */}
        {selected === "ALL" && <YearlyChart year={THIS_YEAR} />}
      </main>

      {reordering && (
        <ReorderModal
          habits={sortedHabits}
          onSave={saveOrder}
          onClose={() => setReordering(false)}
        />
      )}

      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onSave={async (updates) => { await api.updateHabit(editingHabit.id, updates); setEditingHabit(null); load(); }}
          onClose={() => setEditingHabit(null)}
        />
      )}

      {countPopup && (
        <CountPopup
          habit={countPopup.habit}
          date={countPopup.date}
          initialCount={countPopup.habit.log_counts?.[countPopup.date] ?? 0}
          initialNote={countPopup.habit.log_notes?.[countPopup.date] ?? ""}
          onSave={(count, note) => saveCount(countPopup.habit.id, countPopup.date, count, note)}
          onClear={() => clearLog(countPopup.habit.id, countPopup.date)}
          onClose={() => setCountPopup(null)}
        />
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

function AddHabitForm({ habit, onChange, onSave, onCancel }) {
  const needsCount = habit.type !== "regular";
  return (
    <div style={S.addBox}>
      <input autoFocus placeholder="Habit name" value={habit.name}
        onChange={(e) => onChange((n) => ({ ...n, name: e.target.value }))}
        onKeyDown={(e) => e.key === "Enter" && onSave()}
        style={S.sideInput} />
      <select value={habit.pillar} onChange={(e) => onChange((n) => ({ ...n, pillar: e.target.value }))} style={S.sideInput}>
        {Object.keys(PILLARS).map((p) => <option key={p}>{p}</option>)}
      </select>
      <select value={habit.type} onChange={(e) => onChange((n) => ({ ...n, type: e.target.value }))} style={S.sideInput}>
        <option value="regular">Regular (yes/no)</option>
        <option value="minimum">Minimum (at least N)</option>
        <option value="maximum">Maximum (no more than N)</option>
      </select>
      {needsCount && (
        <div style={{ display: "flex", gap: 6 }}>
          <input type="number" min={1} placeholder="N" value={habit.target_count || ""}
            onChange={(e) => onChange((n) => ({ ...n, target_count: e.target.value }))}
            style={{ ...S.sideInput, width: 60 }} />
          <select value={habit.period} onChange={(e) => onChange((n) => ({ ...n, period: e.target.value }))} style={S.sideInput}>
            {["day","week","month","year"].map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      )}
      <div style={{ display: "flex", gap: 6 }}>
        <button onClick={onSave} style={S.sideAddBtn}><Check size={13} /></button>
        <button onClick={onCancel} style={S.sideCancelBtn}><X size={13} /></button>
      </div>
    </div>
  );
}

function EditHabitModal({ habit, onSave, onClose }) {
  const [name, setName] = useState(habit.name);
  const [type, setType] = useState(habit.type || "regular");
  const [targetCount, setTargetCount] = useState(habit.target_count || "");
  const [period, setPeriod] = useState(habit.period || "week");
  const [reminder, setReminder] = useState(habit.reminder_time || "");

  const save = () => onSave({ name: name.trim(), type, target_count: type !== "regular" ? Number(targetCount) : null, period: type !== "regular" ? period : null, reminder_time: reminder || null });

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalHead}>Edit Habit<button onClick={onClose} style={S.closeBtn}><X size={16} /></button></div>
        <label style={S.modalLabel}>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={S.sideInput} />
        <label style={S.modalLabel}>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} style={S.sideInput}>
          <option value="regular">Regular (yes/no)</option>
          <option value="minimum">Minimum (at least N)</option>
          <option value="maximum">Maximum (no more than N)</option>
        </select>
        {type !== "regular" && (
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <input type="number" min={1} value={targetCount} onChange={(e) => setTargetCount(e.target.value)} style={{ ...S.sideInput, width: 70 }} />
            <select value={period} onChange={(e) => setPeriod(e.target.value)} style={S.sideInput}>
              {["day","week","month","year"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        )}
        <label style={S.modalLabel}>Reminder time</label>
        <input type="time" value={reminder} onChange={(e) => setReminder(e.target.value)} style={S.sideInput} />
        <button onClick={save} style={{ ...S.sideAddBtn, width: "100%", marginTop: 10, height: 36 }}>Save</button>
      </div>
    </div>
  );
}

function CountPopup({ habit, date, initialCount, initialNote, onSave, onClear, onClose }) {
  const [count, setCount] = useState(initialCount ?? 0);
  const [note, setNote] = useState(initialNote ?? "");
  const target = habit.target_count;
  const meets = habit.type === "minimum" ? count >= target : (count > 0 && count <= target);
  const over = habit.type === "maximum" && count > target;
  const statusColor = meets ? "#4C9A6B" : (over ? "#C2536B" : "#C2773B");
  const statusText = meets ? "✓ Goal met" : (over ? "Over the limit" : "Not met yet");

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalHead}>{habit.name}<button onClick={onClose} style={S.closeBtn}><X size={16} /></button></div>
        <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 2 }}>
          {date} · {habit.type === "minimum" ? `at least ${target}` : `no more than ${target}`} / {habit.period}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "14px 0 6px" }}>
          <button onClick={() => setCount((n) => Math.max(0, n - 1))} style={S.counterBtn}>−</button>
          <span style={{ fontSize: 38, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 52, textAlign: "center", color: statusColor }}>{count}</span>
          <button onClick={() => setCount((n) => n + 1)} style={S.counterBtn}>+</button>
        </div>
        <div style={{ textAlign: "center", fontSize: 12.5, fontWeight: 700, color: statusColor, marginBottom: 12 }}>{statusText}</div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a comment (optional)…"
          style={{ ...S.sideInput, minHeight: 56, resize: "vertical" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button onClick={onClear} style={{ ...S.actionBtn, color: "#C2536B", borderColor: "#C2536B" }}><X size={14} /> Delete</button>
          <button onClick={() => onSave(count, note)} style={{ ...S.sideAddBtn, flex: 1, justifyContent: "center", height: 38 }}><Check size={14} /> Set</button>
        </div>
      </div>
    </div>
  );
}

function AllHabitsWeekly({ habits, dayAction, logSet, onDelete, onEdit }) {
  const [weekOffset, setWeekOffset] = useState(0);
  const weekDates = getWeekDates(weekOffset);
  const weekLabel = `${fmtShort(weekDates[0])} – ${fmtShort(weekDates[6])}${weekOffset === 0 ? " · This week" : ""}`;
  return (
    <div>
      <div style={S.mainHead}>
        <div style={S.eyebrow}>Weekly view</div>
        <h1 style={S.h1}>All Habits</h1>
      </div>
      <div style={S.navBar}>
        <button onClick={() => setWeekOffset((o) => o - 1)} style={S.navBtn}><ChevronLeft size={16} /></button>
        <span style={S.navLabel}>{weekLabel}</span>
        <button onClick={() => setWeekOffset((o) => Math.min(0, o + 1))} disabled={weekOffset >= 0}
          style={{ ...S.navBtn, ...(weekOffset >= 0 ? S.navBtnDisabled : {}) }}><ChevronRight size={16} /></button>
      </div>
      <div style={S.weekCard}>
        <div style={S.weekHeadRow}>
          <div style={S.weekNameCol} />
          {DAYS.map((d, i) => (
            <div key={d} style={S.weekDayHead}>
              <span style={S.weekDayName}>{d}</span>
              <span style={{ ...S.weekDayNum, ...(weekDates[i] === TODAY ? S.weekDayToday : {}) }}>
                {new Date(weekDates[i] + "T00:00").getDate()}
              </span>
            </div>
          ))}
          <div style={S.weekStreakCol}>Streak</div>
        </div>

        {habits.map((h) => {
          const c = PILLARS[h.pillar]?.dot || "#9A968C";
          const soft = PILLARS[h.pillar]?.soft || "rgba(0,0,0,0.05)";
          const logs = logSet(h);
          // Minimum "N times a week/month/year" chains: a day is part of a connected
          // chain when its whole period (week, month or year) has met the target.
          const isMinChain = h.type === "minimum" && ["week", "month", "year"].includes(h.period);
          const target = h.target_count || 0;
          const allLogs = h.logs || [];
          const monthCount = (ym) => allLogs.filter((d) => d.slice(0, 7) === ym).length;
          const yearCount = (y) => allLogs.filter((d) => d.slice(0, 4) === y).length;
          const weekDone = weekDates.filter((d) => logs.has(d)).length;
          const cellAchieved = (dateStr) => {
            if (!isMinChain) return false;
            if (h.period === "week") return weekDone >= target;
            if (h.period === "month") return monthCount(dateStr.slice(0, 7)) >= target;
            if (h.period === "year") return yearCount(dateStr.slice(0, 4)) >= target;
            return false;
          };
          const rowAchieved = isMinChain && weekDates.some(cellAchieved);
          const periodCount = h.period === "week" ? weekDone
            : h.period === "month" ? monthCount(weekDates[0].slice(0, 7))
            : h.period === "year" ? yearCount(weekDates[0].slice(0, 4)) : 0;
          return (
            <div key={h.id} style={S.weekRow}>
              <div style={{ ...S.weekNameCol, flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ ...S.sideDot, background: c }} />
                  <span style={S.weekHabitName}>{h.name}</span>
                </div>
                {h.type !== "regular" && (
                  <span style={S.typeBadge}>{h.type === "minimum" ? `≥${h.target_count}/${h.period}` : `≤${h.target_count}/${h.period}`}</span>
                )}
              </div>

              {weekDates.map((dateStr, di) => {
                const done = logs.has(dateStr);
                const future = dateStr > TODAY;
                const isPerDayCount = (h.type === "minimum" || h.type === "maximum") && h.period === "day";
                const count = h.log_counts?.[dateStr];
                const hasCount = count !== undefined && count !== null;
                const hasNote = !!h.log_notes?.[dateStr];
                const ach = cellAchieved(dateStr);
                const prevAch = di > 0 && cellAchieved(weekDates[di - 1]);
                const nextAch = di < weekDates.length - 1 && cellAchieved(weekDates[di + 1]);
                const filled = done || ach;
                return (
                  <div key={dateStr} style={{ ...S.weekCell, position: "relative" }}>
                    {ach && <span style={{ ...S.chainLine, background: c, left: prevAch ? 0 : "50%", right: nextAch ? 0 : "50%" }} />}
                    <button disabled={future} onClick={() => dayAction(h, dateStr)}
                      style={{
                        ...S.tick,
                        position: "relative", zIndex: 1,
                        ...(filled ? { background: c, borderColor: c, color: "#fff" } : {}),
                        ...(isPerDayCount && hasCount && !done ? { borderColor: c, color: c } : {}),
                        ...(future && !filled ? S.tickFuture : {}),
                      }}>
                      {isPerDayCount
                        ? (hasCount ? <span style={{ fontSize: 12, fontWeight: 700 }}>{count}</span> : null)
                        : (done && <Check size={14} color="#fff" strokeWidth={3} />)}
                    </button>
                    {hasNote && <span style={S.cellNoteBubble} />}
                  </div>
                );
              })}
              <div style={S.weekStreakCol}>
                {rowAchieved
                  ? <span style={{ ...S.streakPill, background: soft, color: c }}><Link2 size={12} /> {periodCount}/{target}</span>
                  : <span style={{ ...S.streakPill, background: soft, color: c }}><Flame size={12} /> {h.streak}</span>}
              </div>
            </div>
          );
        })}

        {habits.length === 0 && (
          <div style={{ fontSize: 13, color: "var(--text-3)", padding: "24px 12px", textAlign: "center" }}>
            No habits yet — add one from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
}

function SingleHabitMonthly({ habit, dayAction, logSet, onDelete, onEdit, setNote }) {
  const [menuDate, setMenuDate] = useState(null);
  const [noteInput, setNoteInput] = useState("");
  const [noteDate, setNoteDate] = useState(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const longPressTimer = useRef(null);

  if (!habit) return null;
  const c = PILLARS[habit.pillar]?.dot || "#9A968C";
  const soft = PILLARS[habit.pillar]?.soft || "rgba(0,0,0,0.05)";
  const logs = logSet(habit);
  const { dates: monthDates, startOffset: monthGridOffset, label: monthLabel, year: viewYear } = getMonthInfo(monthOffset);
  const completed = monthDates.filter((d) => d <= TODAY && logs.has(d)).length;
  const daysPassed = monthDates.filter((d) => d <= TODAY).length;
  const rate = daysPassed > 0 ? Math.round((completed / daysPassed) * 100) : 0;

  // "N times a month/year" chain: the whole period connects once the target is met.
  const isMonthChain = habit.type === "minimum" && (habit.period === "month" || habit.period === "year");
  const periodDone = habit.period === "year"
    ? (habit.logs || []).filter((d) => d.startsWith(`${viewYear}-`)).length
    : monthDates.filter((d) => logs.has(d)).length;
  const periodAchieved = isMonthChain && periodDone >= (habit.target_count || 0);

  // "N times a week" chain: each Mon–Sun week that hits the target connects on its
  // own (the month grid rows are already Mon–Sun weeks).
  const isWeekChain = habit.type === "minimum" && habit.period === "week";
  const target = habit.target_count || 0;
  const weekCount = (dateStr) => {
    const d = new Date(dateStr + "T00:00");
    const dow = d.getDay();
    const mon = new Date(d); mon.setDate(d.getDate() + (dow === 0 ? -6 : 1 - dow));
    let n = 0;
    for (let k = 0; k < 7; k++) { const x = new Date(mon); x.setDate(mon.getDate() + k); if (logs.has(toISO(x))) n++; }
    return n;
  };
  const cellAchieved = (dateStr) => {
    if (isMonthChain) return periodAchieved;
    if (isWeekChain) return weekCount(dateStr) >= target;
    return false;
  };
  const thisWeekDone = isWeekChain ? weekCount(TODAY) : 0;
  const thisWeekAchieved = isWeekChain && thisWeekDone >= target;

  const startLongPress = (dateStr) => {
    longPressTimer.current = setTimeout(() => setMenuDate(dateStr), 500);
  };
  const cancelLongPress = () => clearTimeout(longPressTimer.current);

  const openNote = (dateStr) => {
    setNoteDate(dateStr);
    setNoteInput(habit.log_notes?.[dateStr] || "");
    setMenuDate(null);
  };

  return (
    <div>
      <div style={S.mainHead}>
        <div>
          <div style={S.eyebrow}><span style={{ ...S.sideDot, background: c, marginRight: 6 }} />{habit.pillar} · Monthly view</div>
          <h1 style={S.h1}>{habit.name}</h1>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={onEdit} style={S.actionBtn}><Pencil size={14} /> Edit</button>
          <button onClick={onDelete} style={{ ...S.actionBtn, color: "#C2536B", borderColor: "#C2536B" }}><X size={14} /> Delete</button>
          {habit.reminder_time && <button style={S.actionBtn}><Bell size={14} /> {habit.reminder_time}</button>}
        </div>
      </div>

      <div style={S.statStrip}>
        <Stat label="Current streak" value={`${habit.streak} days`} c={c} soft={soft} flame />
        <Stat label="Done this month" value={`${completed}/${daysPassed}`} c={c} soft={soft} />
        <Stat label="Completion" value={`${rate}%`} c={c} soft={soft} />
        {habit.type === "regular"
          ? <Stat label="Weekly target" value={`${habit.target_per_week}×`} c={c} soft={soft} />
          : <Stat label={habit.type === "minimum" ? "Min target" : "Max allowed"} value={`${habit.target_count}/${habit.period}`} c={c} soft={soft} />}
      </div>

      <div style={S.navBar}>
        <button onClick={() => setMonthOffset((o) => o - 1)} style={S.navBtn}><ChevronLeft size={16} /></button>
        <span style={S.navLabel}>{monthLabel}{monthOffset === 0 ? " · This month" : ""}</span>
        <button onClick={() => setMonthOffset((o) => Math.min(0, o + 1))} disabled={monthOffset >= 0}
          style={{ ...S.navBtn, ...(monthOffset >= 0 ? S.navBtnDisabled : {}) }}><ChevronRight size={16} /></button>
      </div>

      {isMonthChain && (
        <div style={{ ...S.chainBanner, background: periodAchieved ? soft : "var(--bg)", color: periodAchieved ? c : "var(--text-3)" }}>
          <Link2 size={15} />
          {periodAchieved
            ? `${habit.period === "year" ? "Yearly" : "Monthly"} chain complete — ${periodDone}/${habit.target_count} connected`
            : `${periodDone}/${habit.target_count} this ${habit.period} · ${(habit.target_count || 0) - periodDone} more to connect the chain`}
        </div>
      )}

      {isWeekChain && monthOffset === 0 && (
        <div style={{ ...S.chainBanner, background: thisWeekAchieved ? soft : "var(--bg)", color: thisWeekAchieved ? c : "var(--text-3)" }}>
          <Link2 size={15} />
          {thisWeekAchieved
            ? `This week's chain complete — ${thisWeekDone}/${target} connected`
            : `${thisWeekDone}/${target} this week · ${Math.max(0, target - thisWeekDone)} more to connect the chain`}
        </div>
      )}

      <div style={S.monthCard}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div style={S.monthTitle}>{monthLabel}</div>
          <span style={{ fontSize: 11, color: "var(--text-3)" }}>Long-press a day for options</span>
        </div>
        <div style={S.monthDow}>{DAYS.map((d) => <div key={d} style={S.monthDowCell}>{d}</div>)}</div>
        <div style={S.monthGrid}>
          {Array.from({ length: monthGridOffset }).map((_, i) => <div key={`pad${i}`} />)}
          {monthDates.map((dateStr, i) => {
            const day = i + 1;
            const done = logs.has(dateStr);
            const future = dateStr > TODAY;
            const isToday = dateStr === TODAY;
            const hasNote = !!habit.log_notes?.[dateStr];
            const isPerDayCount = (habit.type === "minimum" || habit.type === "maximum") && habit.period === "day";
            const count = habit.log_counts?.[dateStr];
            const hasCount = count !== undefined && count !== null;
            const ach = cellAchieved(dateStr);
            const filled = done || ach;
            const col = (monthGridOffset + i) % 7;
            return (
              <div key={dateStr} style={{ position: "relative" }}>
                {ach && (
                  <span style={{ ...S.chainLine, background: c, ...(col === 0 ? { left: "50%" } : { left: -6 }), ...(col === 6 ? { right: "50%" } : { right: -6 }) }} />
                )}
                <button
                  disabled={future}
                  onClick={() => dayAction(habit, dateStr)}
                  onMouseDown={() => !isPerDayCount && startLongPress(dateStr)}
                  onMouseUp={cancelLongPress}
                  onTouchStart={() => !isPerDayCount && startLongPress(dateStr)}
                  onTouchEnd={cancelLongPress}
                  style={{
                    ...S.monthDay,
                    position: "relative", zIndex: 1,
                    ...(filled ? { background: c, borderColor: c, color: "#fff" } : {}),
                    ...(isPerDayCount && hasCount && !done ? { borderColor: c, color: c } : {}),
                    ...(future && !filled ? S.monthDayFuture : {}),
                    ...(isToday && !filled ? { borderColor: c, borderWidth: 2 } : {}),
                    width: "100%",
                  }}>
                  {day}
                </button>
                {isPerDayCount && hasCount && (
                  <span style={{ ...S.countBadge, background: done ? "#4C9A6B" : c }}>{count}</span>
                )}
                {hasNote && <span style={S.noteIndicator} />}
                {menuDate === dateStr && (
                  <LongPressMenu
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onAddNote={() => openNote(dateStr)}
                    onRemind={onEdit}
                    onClose={() => setMenuDate(null)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {noteDate && (
        <div style={S.noteBox}>
          <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Note for {noteDate}</div>
          <textarea
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="Add a note for this day…"
            style={{ ...S.sideInput, minHeight: 60, resize: "vertical" }}
          />
          <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
            <button onClick={() => { setNote(noteDate, noteInput); setNoteDate(null); }} style={S.sideAddBtn}><Check size={13} /> Save</button>
            <button onClick={() => setNoteDate(null)} style={S.sideCancelBtn}><X size={13} /></button>
          </div>
        </div>
      )}
    </div>
  );
}

function LongPressMenu({ onEdit, onDelete, onAddNote, onRemind, onClose }) {
  return (
    <div style={S.longPressMenu}>
      <button style={S.menuItem} onClick={() => { onEdit(); onClose(); }}><Pencil size={13} /> Edit</button>
      <button style={S.menuItem} onClick={() => { onAddNote(); onClose(); }}><FileText size={13} /> Add note</button>
      <button style={S.menuItem} onClick={() => { onRemind(); onClose(); }}><Bell size={13} /> Remind</button>
      <button style={{ ...S.menuItem, color: "#C2536B" }} onClick={() => { onDelete(); onClose(); }}><X size={13} /> Delete</button>
    </div>
  );
}

function ReorderModal({ habits, onSave, onClose }) {
  const [items, setItems] = useState([...habits]);

  const move = (i, dir) => {
    const next = [...items];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setItems(next);
  };

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxHeight: "80vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalHead}>
          Reorder Habits
          <button onClick={onClose} style={S.closeBtn}><X size={16} /></button>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-3)", margin: "0 0 10px" }}>Use arrows to set the display order.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {items.map((h, i) => {
            const c = PILLARS[h.pillar]?.dot || "#9A968C";
            return (
              <div key={h.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", background: "var(--bg)", borderRadius: 9, border: "1px solid var(--border)" }}>
                <span style={{ ...S.sideDot, background: c }} />
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{h.name}</span>
                <button
                  onClick={() => move(i, -1)} disabled={i === 0}
                  style={{ ...S.navBtn, width: 28, height: 28, opacity: i === 0 ? 0.3 : 1, fontSize: 14 }}>↑</button>
                <button
                  onClick={() => move(i, 1)} disabled={i === items.length - 1}
                  style={{ ...S.navBtn, width: 28, height: 28, opacity: i === items.length - 1 ? 0.3 : 1, fontSize: 14 }}>↓</button>
              </div>
            );
          })}
        </div>
        <button onClick={() => onSave(items.map((h) => h.id))}
          style={{ ...S.sideAddBtn, width: "100%", marginTop: 14, height: 38, justifyContent: "center" }}>
          <Check size={14} /> Save Order
        </button>
      </div>
    </div>
  );
}

function YearlyChart({ year }) {
  const [data, setData] = useState([]);
  useEffect(() => { api.getHabitsYearly(year).then(setData).catch(console.error); }, [year]);

  if (!data.length) return null;

  const monthPcts = Array.from({ length: 12 }, (_, m) => {
    const total = data.reduce((sum, h) => sum + (h.monthly[m+1]?.done || 0), 0);
    const expected = data.reduce((sum, h) => sum + Math.floor(((h.monthly[m+1]?.days || 30) / 7) * 7), 0);
    return expected > 0 ? Math.round((total / expected) * 100) : 0;
  });

  const max = Math.max(...monthPcts, 1);

  return (
    <div style={{ ...S.monthCard, marginTop: 18 }}>
      <div style={S.monthTitle}>{year} Completion</div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80, marginTop: 12 }}>
        {monthPcts.map((pct, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: "100%", background: "#4C9A6B", borderRadius: "3px 3px 0 0", height: `${(pct / max) * 60}px`, minHeight: 2, opacity: pct > 0 ? 1 : 0.15 }} title={`${pct}%`} />
            <span style={{ fontSize: 9, color: "var(--text-3)", fontWeight: 600 }}>{MONTHS_SHORT[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, c, soft, flame }) {
  return (
    <div style={{ ...S.stat, background: soft }}>
      <div style={S.statLabel}>{label}</div>
      <div style={{ ...S.statValue, color: c }}>{flame && <Flame size={15} />} {value}</div>
    </div>
  );
}

const S = {
  shell: { display: "flex", fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100vh", color: "var(--text)", position: "relative", overflow: "hidden" },
  sidebar: { width: 230, flexShrink: 0, background: "var(--surface)", borderRight: "1px solid var(--border)", padding: "20px 12px", display: "flex", flexDirection: "column", gap: 3, overflowY: "auto" },
  sidebarOverlay: { position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 30, boxShadow: "4px 0 24px rgba(0,0,0,0.18)", transition: "transform 0.22s ease", transform: "translateX(0)" },
  sidebarHidden: { transform: "translateX(-105%)", boxShadow: "none" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(38,36,31,0.38)", zIndex: 20 },
  sideTop: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" },
  closeBtn: { border: "none", background: "none", color: "var(--text-2)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", marginBottom: 8 },
  brand: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700, padding: "0 6px 14px" },
  sideItem: { display: "flex", alignItems: "center", gap: 9, width: "100%", border: "none", background: "none", padding: "9px 10px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 500, color: "var(--text-2)", textAlign: "left" },
  sideItemOn: { background: "var(--hover)", fontWeight: 600 },
  sideLabel: { flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  sideCount: { fontSize: 11, fontWeight: 700, color: "var(--text-3)", background: "var(--hover)", borderRadius: 10, padding: "1px 7px" },
  sideStreak: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, fontWeight: 600, color: "#C2773B" },
  sideDot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0, display: "inline-block" },
  sideDivider: { height: 1, background: "var(--border)", margin: "8px 6px" },
  addBox: { padding: "10px 6px", display: "flex", flexDirection: "column", gap: 6 },
  sideInput: { border: "1px solid var(--border)", borderRadius: 7, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  sideAddBtn: { border: "none", background: "#4C9A6B", color: "#fff", height: 30, padding: "0 12px", borderRadius: 7, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontFamily: "inherit" },
  sideCancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  sideNewBtn: { display: "flex", alignItems: "center", gap: 6, width: "100%", border: "1px dashed var(--border)", background: "none", borderRadius: 8, padding: "8px 10px", fontSize: 12.5, color: "var(--text-3)", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 6, justifyContent: "center" },
  main: { flex: 1, padding: "26px", overflowX: "hidden", overflowY: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid var(--border)", background: "var(--surface)", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 },
  mainHead: { marginBottom: 20 },
  eyebrow: { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 5, display: "flex", alignItems: "center" },
  h1: { fontSize: 27, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  actionBtn: { display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500, color: "var(--text-2)", border: "1px solid var(--border)", background: "var(--surface)", padding: "5px 10px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit" },
  weekCard: { background: "var(--surface)", borderRadius: 12, padding: "8px 14px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", overflowX: "auto" },
  weekHeadRow: { display: "flex", alignItems: "flex-end", padding: "10px 0", borderBottom: "1px solid var(--border)", minWidth: 480 },
  weekNameCol: { width: 160, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 },
  weekDayHead: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  weekDayName: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" },
  weekDayNum: { fontSize: 12, fontWeight: 600, color: "var(--text-2)", width: 22, height: 22, display: "grid", placeItems: "center", borderRadius: "50%" },
  weekDayToday: { background: "var(--accent-strong)", color: "#fff" },
  weekStreakCol: { width: 64, flexShrink: 0, textAlign: "center", fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" },
  weekRow: { display: "flex", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #F4F2EC", minWidth: 480 },
  weekHabitName: { fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  weekCell: { flex: 1, display: "grid", placeItems: "center" },
  typeBadge: { fontSize: 10, color: "var(--text-3)", background: "var(--hover)", padding: "1px 6px", borderRadius: 8, fontWeight: 600 },
  tick: { width: 26, height: 26, borderRadius: 7, border: "2px solid var(--border)", background: "var(--surface)", cursor: "pointer", display: "grid", placeItems: "center", padding: 0 },
  tickFuture: { opacity: 0.4, cursor: "not-allowed", borderStyle: "dashed" },
  streakPill: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700, padding: "3px 9px", borderRadius: 12 },
  tinyBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: "2px 3px", display: "grid", placeItems: "center", borderRadius: 4 },
  statStrip: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 10, marginBottom: 18 },
  stat: { borderRadius: 10, padding: "13px 14px" },
  statLabel: { fontSize: 11, fontWeight: 600, color: "var(--text-2)", marginBottom: 5 },
  statValue: { fontSize: 19, fontWeight: 700, display: "flex", alignItems: "center", gap: 5, fontFamily: "'Fraunces',Georgia,serif" },
  monthCard: { background: "var(--surface)", borderRadius: 12, padding: "16px 16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  monthTitle: { fontSize: 14, fontWeight: 700, marginBottom: 12, fontFamily: "'Fraunces',Georgia,serif" },
  monthDow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 8 },
  monthDowCell: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textAlign: "center", textTransform: "uppercase" },
  monthGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 },
  monthDay: { aspectRatio: "1", border: "1.5px solid var(--border)", background: "var(--surface)", borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit", display: "grid", placeItems: "center" },
  monthDayFuture: { opacity: 0.4, cursor: "not-allowed", background: "var(--surface-2)" },
  noteIndicator: { position: "absolute", top: 3, right: 3, width: 5, height: 5, borderRadius: "50%", background: "#3A7CA5" },
  cellNoteBubble: { position: "absolute", top: 2, right: "calc(50% - 16px)", width: 5, height: 5, borderRadius: "50%", background: "#3A7CA5" },
  countBadge: { position: "absolute", bottom: 2, right: 2, minWidth: 13, height: 13, padding: "0 2px", borderRadius: 7, color: "#fff", fontSize: 9, fontWeight: 700, display: "grid", placeItems: "center", lineHeight: 1 },
  counterBtn: { width: 44, height: 44, borderRadius: "50%", border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontSize: 24, fontWeight: 700, cursor: "pointer", display: "grid", placeItems: "center", fontFamily: "inherit", lineHeight: 1 },
  chainLine: { position: "absolute", top: "calc(50% - 3px)", left: 0, right: 0, height: 6, zIndex: 0, opacity: 0.9 },
  chainBanner: { display: "flex", alignItems: "center", gap: 8, borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 12.5, fontWeight: 700, fontFamily: "'Inter',system-ui,sans-serif" },
  navBar: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 },
  navBtn: { width: 34, height: 34, borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", display: "grid", placeItems: "center", fontFamily: "inherit" },
  navBtnDisabled: { opacity: 0.4, cursor: "not-allowed" },
  navLabel: { fontSize: 13, fontWeight: 700, color: "var(--text)", minWidth: 180, textAlign: "center", fontFamily: "'Fraunces',Georgia,serif" },
  noteBox: { background: "var(--surface)", borderRadius: 10, padding: 14, marginTop: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  longPressMenu: { position: "absolute", top: "100%", left: 0, zIndex: 50, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.12)", padding: "4px 0", minWidth: 140 },
  menuItem: { display: "flex", alignItems: "center", gap: 8, width: "100%", border: "none", background: "none", padding: "8px 14px", fontSize: 13, color: "var(--text)", cursor: "pointer", fontFamily: "inherit", textAlign: "left" },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 100, display: "grid", placeItems: "center" },
  modal: { background: "var(--surface)", borderRadius: 14, padding: 24, width: 320, maxWidth: "90vw", display: "flex", flexDirection: "column", gap: 8 },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 700, fontSize: 16, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 6 },
  modalLabel: { fontSize: 11, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 },
};
