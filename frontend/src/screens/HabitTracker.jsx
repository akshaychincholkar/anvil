import { useState, useEffect, useCallback, useRef, useMemo, Fragment } from "react";
import { Pencil, Plus, Bell, Check, Flame, LayoutGrid, Menu, X, MoreHorizontal, FileText, Link2, ChevronLeft, ChevronRight, Power } from "lucide-react";
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

// Local calendar date (NOT toISOString, which is UTC and shifts the day for
// timezones ahead of/behind UTC, especially around midnight).
const toISO = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
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

// Remaining cooldown (ms) before the next interval-gated entry on `date`.
// > 0 means the habit is currently waiting between entries on that day.
const cooldownMs = (habit, date) => {
  const interval = Number(habit?.min_interval_min) || 0;
  if (interval <= 0 || date !== todayISO()) return 0;
  const lastAt = habit.log_count_times?.[date];
  if (!lastAt) return 0;
  return Math.max(0, new Date(lastAt).getTime() + interval * 60000 - Date.now());
};
const fmtWait = (ms) => {
  const s = Math.ceil(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

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
  const [inlineCounter, setInlineCounter] = useState(null); // { habitId, date } — shown when in interval cooldown
  const [newHabit, setNewHabit] = useState({ name: "", pillar: "Health", target_per_week: 7, type: "regular", target_count: null, period: "week", days: [], min_interval_min: 0 });
  const [reordering, setReordering] = useState(false);
  const [habitOrder, setHabitOrder] = useState([]);

  const load = useCallback(() => api.getHabits().then(setHabits).catch(console.error), []);
  useEffect(() => { load(); }, [load]);

  // Merge a single updated habit (returned by log/count/clear endpoints) into
  // state so the UI updates instantly instead of refetching every habit.
  const mergeHabit = useCallback((updated) => {
    if (updated && updated.id != null) setHabits((hs) => hs.map((h) => (h.id === updated.id ? updated : h)));
  }, []);

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

  // Enabled habits only — used for the sidebar list and the All Habits grid.
  // (Disabled habits stay in `sortedHabits` so the reorder/edit modal can show them.)
  const activeHabits = useMemo(() => sortedHabits.filter((h) => h.active !== false), [sortedHabits]);

  // If the open habit gets disabled, drop back to the All Habits view.
  useEffect(() => {
    if (selected !== "ALL" && habits.some((h) => h.id === selected && h.active === false)) {
      setSelected("ALL");
    }
  }, [habits, selected]);

  const saveOrder = async (ids) => {
    setHabitOrder(ids);
    await api.setSetting("habit_order", ids);
    setReordering(false);
  };

  const toggleActive = async (habitId, active) => {
    mergeHabit(await api.updateHabit(habitId, { active }));
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
  // While a habit is inside its interval cooldown, show the counter inline (below
  // the row) instead of the popup, so the countdown is visible without a modal.
  const dayAction = (habit, dateStr) => {
    if ((habit.type === "minimum" || habit.type === "maximum") && habit.period === "day") {
      if (cooldownMs(habit, dateStr) > 0) {
        setInlineCounter((c) => (c && c.habitId === habit.id && c.date === dateStr ? null : { habitId: habit.id, date: dateStr }));
      } else {
        setCountPopup({ habit, date: dateStr });
      }
    } else {
      toggleDay(habit.id, dateStr);
    }
  };
  const toggleDay = async (habitId, dateStr) => { mergeHabit(await api.toggleHabitLog(habitId, dateStr)); };
  const saveCount = async (habitId, dateStr, count, note) => {
    try { mergeHabit(await api.setHabitLogCount(habitId, dateStr, count, note)); setCountPopup(null); }
    catch (e) { alert(e.message || "Could not save."); }
  };
  const clearLog = async (habitId, dateStr) => { mergeHabit(await api.clearHabitLog(habitId, dateStr)); setCountPopup(null); };

  // Render the inline cooldown counter under a habit's row, if it's the active one.
  // `habit` is the live habit object (from state) so the countdown stays fresh.
  const renderInline = (habit) => {
    if (!inlineCounter || inlineCounter.habitId !== habit.id) return null;
    return (
      <InlineCounter
        key={inlineCounter.date + ":" + (habit.log_count_times?.[inlineCounter.date] || "")}
        habit={habit}
        date={inlineCounter.date}
        onSave={async (count) => {
          try { await api.setHabitLogCount(habit.id, inlineCounter.date, count, habit.log_notes?.[inlineCounter.date] ?? "").then(mergeHabit); }
          catch (e) { alert(e.message || "Could not save."); }
        }}
        onOpen={() => { setInlineCounter(null); setCountPopup({ habit, date: inlineCounter.date }); }}
        onClose={() => setInlineCounter(null)}
      />
    );
  };

  const createHabit = async () => {
    if (!newHabit.name.trim()) return;
    const needsCount = newHabit.type === "minimum" || newHabit.type === "maximum";
    const isWeekly = newHabit.type === "weekly";
    if (isWeekly && newHabit.days.length === 0) return; // a weekly habit needs at least one day
    const body = {
      name: newHabit.name.trim(),
      pillar: newHabit.pillar,
      target_per_week: Number(newHabit.target_per_week) || 7,
      type: newHabit.type,
      target_count: needsCount ? Number(newHabit.target_count) || 1 : null,
      period: needsCount ? newHabit.period : null,
      days: isWeekly ? newHabit.days : null,
      // Interval only applies to per-day counts (multiple entries in one day).
      min_interval_min: (needsCount && newHabit.period === "day") ? Number(newHabit.min_interval_min) || 0 : 0,
    };
    await api.createHabit(body);
    setNewHabit({ name: "", pillar: "Health", target_per_week: 7, type: "regular", target_count: null, period: "week", days: [], min_interval_min: 0 });
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

        {activeHabits.map((h) => {
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
          ? <AllHabitsWeekly habits={activeHabits} dayAction={dayAction} logSet={logSet}
              onDelete={deleteHabit}
              onEdit={(h) => setEditingHabit(h)}
              renderInline={renderInline} />
          : <SingleHabitMonthly habit={current} dayAction={dayAction} logSet={logSet}
              onDelete={() => deleteHabit(current.id, current.name)}
              onEdit={() => setEditingHabit(current)}
              onToggleActive={toggleActive}
              renderInline={renderInline}
              setNote={(date, note) => api.setHabitLogNote(current.id, date, note).then(mergeHabit)} />}

        {/* Yearly bar chart always shown in All view */}
        {selected === "ALL" && <YearlyChart year={THIS_YEAR} />}
      </main>

      {reordering && (
        <ReorderModal
          habits={sortedHabits}
          onSave={saveOrder}
          onToggleActive={toggleActive}
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

function DayPicker({ days, onToggle }) {
  return (
    <div style={S.dayPick}>
      {DAYS.map((d, i) => (
        <button key={d} type="button" onClick={() => onToggle(i)}
          style={{ ...S.dayChip, ...(days.includes(i) ? S.dayChipOn : {}) }}>{d}</button>
      ))}
    </div>
  );
}

function AddHabitForm({ habit, onChange, onSave, onCancel }) {
  const needsCount = habit.type === "minimum" || habit.type === "maximum";
  const isWeekly = habit.type === "weekly";
  const toggleDay = (i) => onChange((n) => ({ ...n, days: n.days.includes(i) ? n.days.filter((x) => x !== i) : [...n.days, i].sort((a, b) => a - b) }));
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
        <option value="weekly">Weekly (specific days)</option>
        <option value="minimum">Minimum (at least N)</option>
        <option value="maximum">Maximum (no more than N)</option>
      </select>
      {isWeekly && (
        <>
          <div style={S.pickHint}>Do this on…</div>
          <DayPicker days={habit.days} onToggle={toggleDay} />
        </>
      )}
      {needsCount && (
        <>
          <div style={{ display: "flex", gap: 6 }}>
            <input type="number" min={1} placeholder="N" value={habit.target_count || ""}
              onChange={(e) => onChange((n) => ({ ...n, target_count: e.target.value }))}
              style={{ ...S.sideInput, width: 60 }} />
            <select value={habit.period} onChange={(e) => onChange((n) => ({ ...n, period: e.target.value }))} style={S.sideInput}>
              {["day","week","month","year"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          {habit.period === "day" && (
            <>
              <div style={S.pickHint}>Min gap between entries (minutes)</div>
              <input type="number" min={0} placeholder="0" value={habit.min_interval_min ?? 0}
                onChange={(e) => onChange((n) => ({ ...n, min_interval_min: e.target.value }))}
                style={S.sideInput} />
            </>
          )}
        </>
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
  const [days, setDays] = useState(habit.days || []);
  const [interval, setInterval_] = useState(habit.min_interval_min ?? 0);

  const needsCount = type === "minimum" || type === "maximum";
  const isWeekly = type === "weekly";
  const toggleDay = (i) => setDays((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i].sort((a, b) => a - b)));

  const save = () => {
    if (isWeekly && days.length === 0) return;
    onSave({
      name: name.trim(), type,
      target_count: needsCount ? Number(targetCount) : null,
      period: needsCount ? period : null,
      days: isWeekly ? days : [],
      reminder_time: reminder || null,
      // Interval only applies to per-day counts (multiple entries in one day).
      min_interval_min: (needsCount && period === "day") ? Number(interval) || 0 : 0,
    });
  };

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalHead}>Edit Habit<button onClick={onClose} style={S.closeBtn}><X size={16} /></button></div>
        <label style={S.modalLabel}>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} style={S.sideInput} />
        <label style={S.modalLabel}>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} style={S.sideInput}>
          <option value="regular">Regular (yes/no)</option>
          <option value="weekly">Weekly (specific days)</option>
          <option value="minimum">Minimum (at least N)</option>
          <option value="maximum">Maximum (no more than N)</option>
        </select>
        {isWeekly && (
          <>
            <label style={S.modalLabel}>Days</label>
            <DayPicker days={days} onToggle={toggleDay} />
          </>
        )}
        {needsCount && (
          <>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
              <input type="number" min={1} value={targetCount} onChange={(e) => setTargetCount(e.target.value)} style={{ ...S.sideInput, width: 70 }} />
              <select value={period} onChange={(e) => setPeriod(e.target.value)} style={S.sideInput}>
                {["day","week","month","year"].map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            {period === "day" && (
              <>
                <label style={S.modalLabel}>Min gap between entries (minutes)</label>
                <input type="number" min={0} value={interval} onChange={(e) => setInterval_(e.target.value)} style={S.sideInput} />
              </>
            )}
          </>
        )}
        <label style={S.modalLabel}>Reminder time</label>
        <input type="time" value={reminder} onChange={(e) => setReminder(e.target.value)} style={S.sideInput} />
        <button onClick={save} style={{ ...S.sideAddBtn, width: "100%", marginTop: 10, height: 36 }}>Save</button>
      </div>
    </div>
  );
}

// Compact inline counter shown below a habit row while it's in interval cooldown.
// Stage-then-confirm: + (one above saved) / − stage locally; Set commits.
function InlineCounter({ habit, date, onSave, onOpen, onClose }) {
  const [now, setNow] = useState(Date.now());
  const saved = habit.log_counts?.[date] ?? 0;
  const [count, setCount] = useState(saved);
  const interval = Number(habit.min_interval_min) || 0;
  const target = habit.target_count;
  const lastAt = habit.log_count_times?.[date];
  const nextAllowed = lastAt ? new Date(lastAt).getTime() + interval * 60000 : 0;
  const waitMs = Math.max(0, nextAllowed - now);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const plusLocked = count >= saved + 1 || waitMs > 0;
  const minusLocked = count <= 0;
  const dirty = count !== saved;

  const c = PILLARS[habit.pillar]?.dot || "#9A968C";
  const meets = habit.type === "minimum" ? count >= target : (count > 0 && count <= target);

  return (
    <div style={S.inlineCounter}>
      <span style={{ ...S.inlineCount, color: meets ? "#4C9A6B" : c }}>{count}<span style={S.inlineTarget}>/{target}</span></span>
      <button onClick={() => !minusLocked && setCount((n) => Math.max(0, n - 1))} disabled={minusLocked}
        style={{ ...S.inlinePlus, ...(minusLocked ? { opacity: 0.45, cursor: "not-allowed" } : {}) }}>−</button>
      <button onClick={() => !plusLocked && setCount((n) => n + 1)} disabled={plusLocked}
        style={{ ...S.inlinePlus, ...(plusLocked ? { opacity: 0.45, cursor: "not-allowed" } : { background: c, borderColor: c, color: "#fff" }) }}
        title={waitMs > 0 ? "Wait for the interval" : (count >= saved + 1 ? "Press Set to confirm" : "Stage an entry")}>+</button>
      <button onClick={() => onSave(count)} disabled={!dirty}
        style={{ ...S.inlineSet, ...(dirty ? { background: c, borderColor: c, color: "#fff" } : { opacity: 0.5, cursor: "not-allowed" }) }}>Set</button>
      {waitMs > 0
        ? <span style={S.inlineWait}>Wait {fmtWait(waitMs)}</span>
        : <span style={S.inlineReady}>{dirty ? "Press Set to confirm" : "Tap + to add"}</span>}
      <button onClick={onOpen} style={S.inlineMore} title="Open details">⋯</button>
      <button onClick={onClose} style={S.inlineMore} title="Hide"><X size={13} /></button>
    </div>
  );
}

function CountPopup({ habit, date, initialCount, initialNote, onSave, onClear, onClose }) {
  const saved = initialCount ?? 0;            // committed count on the server
  const [count, setCount] = useState(saved);   // staged (local) count
  const [note, setNote] = useState(initialNote ?? "");
  const [now, setNow] = useState(Date.now());
  const target = habit.target_count;
  const meets = habit.type === "minimum" ? count >= target : (count > 0 && count <= target);
  const over = habit.type === "maximum" && count > target;
  const statusColor = meets ? "#4C9A6B" : (over ? "#C2536B" : "#C2773B");
  const statusText = meets ? "✓ Goal met" : (over ? "Over the limit" : "Not met yet");

  // Min-interval gating: only for today's entry on a habit that defines a gap.
  const interval = Number(habit.min_interval_min) || 0;
  const isToday = date === todayISO();
  const gated = interval > 0 && isToday;
  const lastAt = habit.log_count_times?.[date];
  const nextAllowed = gated && lastAt ? new Date(lastAt).getTime() + interval * 60000 : 0;
  const waitMs = Math.max(0, nextAllowed - now);

  // Tick every second while we're inside a cooldown so the countdown updates live.
  useEffect(() => {
    if (!gated || waitMs <= 0) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [gated, waitMs]);

  // Stage-then-confirm for gated habits: + raises the local count by at most one
  // above the saved value (then disables), - lowers it; Set commits to the server,
  // where the interval gap is enforced on an increase.
  const staged = count - saved;               // +1 means an entry is staged
  const plusLocked = gated && (count >= saved + 1 || waitMs > 0);
  const minusLocked = count <= 0;
  const inc = () => { if (!plusLocked) setCount((n) => n + 1); };
  const dec = () => { if (!minusLocked) setCount((n) => Math.max(0, n - 1)); };
  const dirty = count !== saved || note !== (initialNote ?? "");

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <div style={S.modalHead}>{habit.name}<button onClick={onClose} style={S.closeBtn}><X size={16} /></button></div>
        <div style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 2 }}>
          {date} · {habit.type === "minimum" ? `at least ${target}` : `no more than ${target}`} / {habit.period}
          {interval > 0 && <> · {interval}m between entries</>}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, margin: "14px 0 6px" }}>
          <button onClick={dec} disabled={minusLocked}
            style={{ ...S.counterBtn, ...(minusLocked ? { opacity: 0.45, cursor: "not-allowed" } : {}) }}>−</button>
          <span style={{ fontSize: 38, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 52, textAlign: "center", color: statusColor }}>{count}</span>
          <button onClick={inc} disabled={plusLocked}
            style={{ ...S.counterBtn, ...(plusLocked ? { opacity: 0.45, cursor: "not-allowed" } : {}) }}
            title={gated && waitMs > 0 ? "Wait for the interval before the next entry" : (gated && count >= saved + 1 ? "Press Set to confirm this entry" : undefined)}>+</button>
        </div>
        {gated && waitMs > 0 && (
          <div style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "#C2773B", marginBottom: 8 }}>
            Wait {fmtWait(waitMs)} before the next entry
          </div>
        )}
        {gated && waitMs <= 0 && (
          <div style={{ textAlign: "center", fontSize: 11.5, color: "var(--text-3)", marginBottom: 8 }}>
            {staged > 0 ? "Press Set to confirm this entry" : `Tap + to add an entry (each at least ${interval}m apart)`}
          </div>
        )}
        <div style={{ textAlign: "center", fontSize: 12.5, fontWeight: 700, color: statusColor, marginBottom: 12 }}>{statusText}</div>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a comment (optional)…"
          style={{ ...S.sideInput, minHeight: 56, resize: "vertical" }} />
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button onClick={onClear} style={{ ...S.actionBtn, color: "#C2536B", borderColor: "#C2536B" }}><X size={14} /> Delete</button>
          <button onClick={() => onSave(count, note)} disabled={!dirty}
            style={{ ...S.sideAddBtn, flex: 1, justifyContent: "center", height: 38, ...(dirty ? {} : { opacity: 0.5, cursor: "not-allowed" }) }}>
            <Check size={14} /> Set
          </button>
        </div>
      </div>
    </div>
  );
}

function RingStat({ pct, label, sub, color }) {
  const R = 26, C = 2 * Math.PI * R;
  const off = C * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return (
    <div style={S.ringStat}>
      <div style={S.ringBox}>
        <svg width="70" height="70" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r={R} fill="none" stroke="var(--border)" strokeWidth="7" />
          <circle cx="35" cy="35" r={R} fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={off} transform="rotate(-90 35 35)" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div style={{ ...S.ringPct, color }}>{pct}%</div>
      </div>
      <div>
        <div style={S.ringLabel}>{label}</div>
        <div style={S.ringSub}>{sub}</div>
      </div>
    </div>
  );
}

function AllHabitsWeekly({ habits, dayAction, logSet, onDelete, onEdit, renderInline }) {
  const [weekOffset, setWeekOffset] = useState(0);
  const weekDates = getWeekDates(weekOffset);
  const weekLabel = `${fmtShort(weekDates[0])} – ${fmtShort(weekDates[6])}${weekOffset === 0 ? " · This week" : ""}`;

  // ── Completion metrics (chain-aware) ──
  const weekDatesOf = (ds) => {
    const dt = new Date(ds + "T00:00:00");
    const dow = dt.getDay();
    const mon = new Date(dt); mon.setDate(dt.getDate() + (dow === 0 ? -6 : 1 - dow));
    return Array.from({ length: 7 }, (_, i) => { const x = new Date(mon); x.setDate(mon.getDate() + i); return toISO(x); });
  };
  const allLogs = (h) => h.logs || [];
  const weekMet = (h, wk) => h.type === "minimum" && h.period === "week" && wk.filter((d) => logSet(h).has(d)).length >= (h.target_count || 0);
  const monthMet = (h, ym) => h.type === "minimum" && h.period === "month" && allLogs(h).filter((d) => d.slice(0, 7) === ym).length >= (h.target_count || 0);
  const yearMet = (h, y) => h.type === "minimum" && h.period === "year" && allLogs(h).filter((d) => d.slice(0, 4) === y).length >= (h.target_count || 0);

  // Actual completion on a specific day.
  const actualDone = (h, d) => {
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      const c = h.log_counts?.[d];
      if (c === undefined || c === null) return false;
      return h.type === "minimum" ? c >= (h.target_count || 0) : (c > 0 && c <= (h.target_count || 0));
    }
    return logSet(h).has(d);
  };
  // A formed chain for the surrounding period counts the day as complete.
  const chainCoversDay = (h, d) => {
    if (h.type !== "minimum") return false;
    if (h.period === "week") return weekMet(h, weekDatesOf(d));
    if (h.period === "month") return monthMet(h, d.slice(0, 7));
    if (h.period === "year") return yearMet(h, d.slice(0, 4));
    return false;
  };
  const isDoneOn = (h, d) => actualDone(h, d) || chainCoversDay(h, d);

  const doneToday = habits.filter((h) => isDoneOn(h, TODAY)).length;
  const dailyPct = habits.length ? Math.round((doneToday / habits.length) * 100) : 0;

  const weeklyProgress = (h) => {
    // A formed monthly/yearly chain counts the whole week as complete.
    if (h.type === "minimum" && h.period === "month" && (monthMet(h, weekDates[0].slice(0, 7)) || monthMet(h, weekDates[6].slice(0, 7)))) return 1;
    if (h.type === "minimum" && h.period === "year" && (yearMet(h, weekDates[0].slice(0, 4)) || yearMet(h, weekDates[6].slice(0, 4)))) return 1;
    if (h.type === "minimum" && h.period === "week" && weekMet(h, weekDates)) return 1;
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      return Math.min(1, weekDates.filter((d) => actualDone(h, d)).length / 7);
    }
    const logs = logSet(h);
    const doneDays = weekDates.filter((d) => logs.has(d)).length;
    const target = (h.type === "minimum" && h.period === "week") ? (h.target_count || 1) : (h.target_per_week || 7);
    return target > 0 ? Math.min(1, doneDays / target) : 0;
  };
  const weeklyPct = habits.length ? Math.round((habits.reduce((s, h) => s + weeklyProgress(h), 0) / habits.length) * 100) : 0;

  // This month (current calendar month)
  const mNow = new Date();
  const mYM = `${mNow.getFullYear()}-${String(mNow.getMonth() + 1).padStart(2, "0")}`;
  const mDays = new Date(mNow.getFullYear(), mNow.getMonth() + 1, 0).getDate();
  const mWeeks = mDays / 7;
  const monthlyProgress = (h) => {
    if (h.type === "minimum" && h.period === "month" && monthMet(h, mYM)) return 1;
    if (h.type === "minimum" && h.period === "year" && yearMet(h, mYM.slice(0, 4))) return 1;
    if ((h.type === "minimum" || h.type === "maximum") && h.period === "day") {
      let met = 0;
      for (let day = 1; day <= mDays; day++) { if (actualDone(h, `${mYM}-${String(day).padStart(2, "0")}`)) met++; }
      return Math.min(1, met / mDays);
    }
    const doneMonth = allLogs(h).filter((d) => d.slice(0, 7) === mYM).length;
    let target;
    if (h.type === "minimum" && h.period === "week") target = (h.target_count || 1) * mWeeks;
    else if (h.type === "minimum" && h.period === "month") target = (h.target_count || 1);
    else if (h.type === "minimum" && h.period === "year") target = (h.target_count || 1) / 12;
    else target = (h.target_per_week || 7) * mWeeks;
    return target > 0 ? Math.min(1, doneMonth / target) : 0;
  };
  const monthlyPct = habits.length ? Math.round((habits.reduce((s, h) => s + monthlyProgress(h), 0) / habits.length) * 100) : 0;

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
          const isWeekly = h.type === "weekly";
          const sched = new Set(h.days || []);
          // Weekly habits: once every scheduled day in the week is done, the whole
          // week row chains together — same rule as the "minimum per week" habits.
          const schedIdx = [0, 1, 2, 3, 4, 5, 6].filter((i) => sched.has(i));
          const wkRowAchieved = isWeekly && schedIdx.length > 0 && schedIdx.every((i) => logs.has(weekDates[i]));
          const wkConnected = isWeekly ? Array(7).fill(wkRowAchieved) : null;
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
            <Fragment key={h.id}>
            <div style={S.weekRow}>
              <div style={{ ...S.weekNameCol, flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ ...S.sideDot, background: c }} />
                  <span style={S.weekHabitName}>{h.name}</span>
                </div>
                {h.type === "weekly" ? (
                  <span style={S.typeBadge}>{(h.days || []).map((i) => DAYS[i]).join("·") || "—"}</span>
                ) : h.type !== "regular" ? (
                  <span style={S.typeBadge}>{h.type === "minimum" ? `≥${h.target_count}/${h.period}` : `≤${h.target_count}/${h.period}`}</span>
                ) : null}
              </div>

              {weekDates.map((dateStr, di) => {
                if (isWeekly && !sched.has(di)) {
                  return (
                    <div key={dateStr} style={{ ...S.weekCell, position: "relative", zIndex: 0 }}>
                      {wkConnected[di] && <span style={{ ...S.chainLine, background: c, left: wkConnected[di - 1] ? 0 : "50%", right: wkConnected[di + 1] ? 0 : "50%" }} />}
                      <span style={{ ...S.offDay, position: "relative", zIndex: 1 }} title="Not scheduled">·</span>
                    </div>
                  );
                }
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
                  <div key={dateStr} style={{ ...S.weekCell, position: "relative", zIndex: 0 }}>
                    {ach && <span style={{ ...S.chainLine, background: c, left: prevAch ? 0 : "50%", right: nextAch ? 0 : "50%" }} />}
                    {isWeekly && wkConnected[di] && <span style={{ ...S.chainLine, background: c, left: wkConnected[di - 1] ? 0 : "50%", right: wkConnected[di + 1] ? 0 : "50%" }} />}
                    <button disabled={future} onClick={() => dayAction(h, dateStr)}
                      style={{
                        ...S.tick,
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
                {wkRowAchieved
                  ? <span style={{ ...S.streakPill, background: soft, color: c }}><Link2 size={12} /> {schedIdx.length}/{schedIdx.length}</span>
                  : rowAchieved
                  ? <span style={{ ...S.streakPill, background: soft, color: c }}><Link2 size={12} /> {periodCount}/{target}</span>
                  : <span style={{ ...S.streakPill, background: soft, color: c }}><Flame size={12} /> {h.streak}</span>}
              </div>
            </div>
            {renderInline && renderInline(h)}
            </Fragment>
          );
        })}

        {habits.length === 0 && (
          <div style={{ fontSize: 13, color: "var(--text-3)", padding: "24px 12px", textAlign: "center" }}>
            No habits yet — add one from the sidebar.
          </div>
        )}
      </div>

      {habits.length > 0 && (
        <div style={{ ...S.progressCard, marginTop: 18, marginBottom: 0 }}>
          <RingStat pct={dailyPct} label="Today" sub={`${doneToday}/${habits.length} done`} color="#4C9A6B" />
          <div style={S.progressDivider} />
          <RingStat pct={weeklyPct} label="This week" sub="of weekly targets" color="#3A7CA5" />
          <div style={S.progressDivider} />
          <RingStat pct={monthlyPct} label="This month" sub="of monthly targets" color="#8268B0" />
        </div>
      )}
    </div>
  );
}

function SingleHabitMonthly({ habit, dayAction, logSet, onDelete, onEdit, setNote, onToggleActive, renderInline }) {
  const [menuDate, setMenuDate] = useState(null);
  const [noteInput, setNoteInput] = useState("");
  const [noteDate, setNoteDate] = useState(null);
  const [monthOffset, setMonthOffset] = useState(0);
  const longPressTimer = useRef(null);

  if (!habit) return null;
  const c = PILLARS[habit.pillar]?.dot || "#9A968C";
  const soft = PILLARS[habit.pillar]?.soft || "rgba(0,0,0,0.05)";
  const logs = logSet(habit);
  const isWeekly = habit.type === "weekly";
  const sched = new Set(habit.days || []);
  const weekdayOf = (d) => (new Date(d + "T00:00").getDay() + 6) % 7; // Mon=0..Sun=6
  const onSchedule = (d) => !isWeekly || sched.has(weekdayOf(d));
  // Which cells in the Mon–Sun week of `dateStr` chain together: once every scheduled
  // day in that week is done, the whole week connects (same rule as "minimum per week").
  const weekConnected = (dateStr) => {
    const d = new Date(dateStr + "T00:00"); const dow = d.getDay();
    const mon = new Date(d); mon.setDate(d.getDate() + (dow === 0 ? -6 : 1 - dow));
    const wk = Array.from({ length: 7 }, (_, k) => { const x = new Date(mon); x.setDate(mon.getDate() + k); return toISO(x); });
    const schedIdx = [0, 1, 2, 3, 4, 5, 6].filter((i) => sched.has(i));
    const achieved = schedIdx.length > 0 && schedIdx.every((i) => logs.has(wk[i]));
    return Array(7).fill(achieved);
  };
  const { dates: monthDates, startOffset: monthGridOffset, label: monthLabel, year: viewYear } = getMonthInfo(monthOffset);
  const completed = monthDates.filter((d) => d <= TODAY && onSchedule(d) && logs.has(d)).length;
  const daysPassed = monthDates.filter((d) => d <= TODAY && onSchedule(d)).length;
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
        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
          <button onClick={onEdit} style={S.actionBtn}><Pencil size={14} /> Edit</button>
          <button onClick={() => onToggleActive(habit.id, habit.active === false)}
            style={{ ...S.actionBtn, ...(habit.active === false ? { color: "#4C9A6B", borderColor: "#4C9A6B" } : {}) }}>
            {habit.active === false ? <><Check size={14} /> Enable</> : <><Power size={14} /> Disable</>}
          </button>
          <button onClick={onDelete} style={{ ...S.actionBtn, color: "#C2536B", borderColor: "#C2536B" }}><X size={14} /> Delete</button>
          {habit.reminder_time && <button style={S.actionBtn}><Bell size={14} /> {habit.reminder_time}</button>}
        </div>
      </div>

      <div style={S.statStrip}>
        <Stat label="Current streak" value={`${habit.streak} days`} c={c} soft={soft} flame />
        <Stat label="Best streak" value={`${habit.max_streak ?? habit.streak} days`} c={c} soft={soft} flame />
        <Stat label="Done this month" value={`${completed}/${daysPassed}`} c={c} soft={soft} />
        <Stat label="Completion" value={`${rate}%`} c={c} soft={soft} />
        {habit.type === "regular"
          ? <Stat label="Weekly target" value={`${habit.target_per_week}×`} c={c} soft={soft} />
          : habit.type === "weekly"
          ? <Stat label="Days" value={(habit.days || []).map((i) => DAYS[i]).join(", ") || "—"} c={c} soft={soft} />
          : <Stat label={habit.type === "minimum" ? "Min target" : "Max allowed"} value={`${habit.target_count}/${habit.period}`} c={c} soft={soft} />}
      </div>

      {renderInline && renderInline(habit)}

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
            if (isWeekly && !onSchedule(dateStr)) {
              const owd = weekdayOf(dateStr); const oconn = weekConnected(dateStr); const ocol = (monthGridOffset + i) % 7;
              return (
                <div key={dateStr} style={{ position: "relative" }}>
                  {oconn[owd] && <span style={{ ...S.chainLine, background: c, ...(ocol === 0 ? { left: "50%" } : { left: oconn[owd - 1] ? -6 : "50%" }), ...(ocol === 6 ? { right: "50%" } : { right: oconn[owd + 1] ? -6 : "50%" }) }} />}
                  <div style={{ ...S.monthDay, ...S.monthDayOff, width: "100%", position: "relative", zIndex: 1 }}>{day}</div>
                </div>
              );
            }
            const done = logs.has(dateStr);
            const future = dateStr > TODAY;
            const isToday = dateStr === TODAY;
            const hasNote = !!habit.log_notes?.[dateStr];
            const isPerDayCount = (habit.type === "minimum" || habit.type === "maximum") && habit.period === "day";
            const count = habit.log_counts?.[dateStr];
            const hasCount = count !== undefined && count !== null;
            const ach = cellAchieved(dateStr);
            const softFill = ach && !done; // part of an achieved period, but not actually done this day
            const col = (monthGridOffset + i) % 7;
            return (
              <div key={dateStr} style={{ position: "relative" }}>
                {ach && (
                  <span style={{ ...S.chainLine, background: c, ...(col === 0 ? { left: "50%" } : { left: -6 }), ...(col === 6 ? { right: "50%" } : { right: -6 }) }} />
                )}
                {isWeekly && (() => { const wd = weekdayOf(dateStr); const conn = weekConnected(dateStr); return conn[wd] ? <span style={{ ...S.chainLine, background: c, ...(col === 0 ? { left: "50%" } : { left: conn[wd - 1] ? -6 : "50%" }), ...(col === 6 ? { right: "50%" } : { right: conn[wd + 1] ? -6 : "50%" }) }} /> : null; })()}
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
                    ...(done ? { background: c, borderColor: c, color: "#fff" } : {}),
                    ...(softFill ? { background: soft, borderColor: c, color: c } : {}),
                    ...(isPerDayCount && hasCount && !done ? { borderColor: c, color: c } : {}),
                    ...(future && !done ? S.monthDayFuture : {}),
                    ...(isToday && !done ? { borderColor: c, borderWidth: 2 } : {}),
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

function ReorderModal({ habits, onSave, onToggleActive, onClose }) {
  // Track order locally; pull live `active` state from the latest `habits` prop.
  const [order, setOrder] = useState(() => habits.map((h) => h.id));
  const byId = useMemo(() => { const m = {}; habits.forEach((h) => (m[h.id] = h)); return m; }, [habits]);
  const items = order.map((id) => byId[id]).filter(Boolean);

  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
  };

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={{ ...S.modal, maxHeight: "80vh", overflow: "hidden" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ ...S.modalHead, flexShrink: 0 }}>
          Edit Habits
          <button onClick={onClose} style={S.closeBtn}><X size={16} /></button>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-3)", margin: "0 0 10px", flexShrink: 0 }}>Reorder with the arrows. Toggle a habit off to hide it from your views (its history is kept).</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, overflowY: "auto", minHeight: 0 }}>
          {items.map((h, i) => {
            const c = PILLARS[h.pillar]?.dot || "#9A968C";
            const isOn = h.active !== false;
            return (
              <div key={h.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", background: "var(--bg)", borderRadius: 9, border: "1px solid var(--border)", opacity: isOn ? 1 : 0.5 }}>
                <span style={{ ...S.sideDot, background: c }} />
                <span style={{ flex: 1, fontSize: 13, fontWeight: 500, textDecoration: isOn ? "none" : "line-through" }}>{h.name}</span>
                <button
                  onClick={() => onToggleActive(h.id, !isOn)}
                  title={isOn ? "Disable (hide) habit" : "Enable habit"}
                  style={{ ...S.activeToggle, ...(isOn ? S.activeToggleOn : {}) }}
                  role="switch" aria-checked={isOn}>
                  <span style={{ ...S.activeKnob, ...(isOn ? S.activeKnobOn : {}) }} />
                </button>
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
        <button onClick={() => onSave(order)}
          style={{ ...S.sideAddBtn, width: "100%", marginTop: 14, height: 38, justifyContent: "center", flexShrink: 0 }}>
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
  progressCard: { background: "var(--surface)", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" },
  progressDivider: { width: 1, alignSelf: "stretch", background: "var(--border)", minHeight: 48 },
  ringStat: { display: "flex", alignItems: "center", gap: 12, flex: "1 1 160px" },
  ringBox: { position: "relative", width: 70, height: 70, display: "grid", placeItems: "center", flexShrink: 0 },
  ringPct: { position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: 16, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  ringLabel: { fontSize: 14, fontWeight: 700, color: "var(--text)" },
  ringSub: { fontSize: 11.5, color: "var(--text-3)", fontWeight: 500, marginTop: 2 },
  weekCard: { background: "var(--surface)", borderRadius: 12, padding: "8px 14px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", overflowX: "auto" },
  weekHeadRow: { display: "flex", alignItems: "flex-end", padding: "10px 0", borderBottom: "1px solid var(--border)", minWidth: 480, position: "relative", zIndex: 0 },
  weekNameCol: { width: 160, flexShrink: 0, alignSelf: "stretch", display: "flex", alignItems: "center", gap: 8, position: "sticky", left: 0, zIndex: 5, background: "var(--surface)", boxShadow: "6px 0 6px -6px rgba(0,0,0,0.15)" },
  weekDayHead: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  weekDayName: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" },
  weekDayNum: { fontSize: 12, fontWeight: 600, color: "var(--text-2)", width: 22, height: 22, display: "grid", placeItems: "center", borderRadius: "50%" },
  weekDayToday: { background: "var(--accent-strong)", color: "#fff" },
  weekStreakCol: { width: 64, flexShrink: 0, textAlign: "center", fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" },
  weekRow: { display: "flex", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #F4F2EC", minWidth: 480, position: "relative", zIndex: 0 },
  weekHabitName: { fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  weekCell: { flex: 1, display: "grid", placeItems: "center" },
  typeBadge: { fontSize: 10, color: "var(--text-3)", background: "var(--hover)", padding: "1px 6px", borderRadius: 8, fontWeight: 600 },
  tick: { width: 26, height: 26, borderRadius: 7, border: "2px solid var(--border)", background: "var(--surface)", cursor: "pointer", display: "grid", placeItems: "center", padding: 0, position: "relative", zIndex: 1 },
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
  monthDayOff: { background: "var(--surface-2)", borderStyle: "dashed", color: "var(--text-3)", opacity: 0.5, cursor: "default" },
  dayPick: { display: "flex", gap: 4, flexWrap: "wrap" },
  dayChip: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", borderRadius: 7, padding: "5px 7px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", minWidth: 34 },
  dayChipOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  pickHint: { fontSize: 11, color: "var(--text-3)", fontWeight: 600 },
  offDay: { color: "var(--text-3)", opacity: 0.4, fontSize: 18, lineHeight: 1, userSelect: "none" },
  noteIndicator: { position: "absolute", top: 3, right: 3, width: 5, height: 5, borderRadius: "50%", background: "#3A7CA5" },
  cellNoteBubble: { position: "absolute", top: 2, right: "calc(50% - 16px)", width: 5, height: 5, borderRadius: "50%", background: "#3A7CA5" },
  countBadge: { position: "absolute", bottom: 2, right: 2, minWidth: 13, height: 13, padding: "0 2px", borderRadius: 7, color: "#fff", fontSize: 9, fontWeight: 700, display: "grid", placeItems: "center", lineHeight: 1 },
  counterBtn: { width: 44, height: 44, borderRadius: "50%", border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontSize: 24, fontWeight: 700, cursor: "pointer", display: "grid", placeItems: "center", fontFamily: "inherit", lineHeight: 1 },
  inlineCounter: { display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", margin: "2px 0 8px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, flexWrap: "wrap" },
  inlineCount: { fontSize: 20, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1 },
  inlineTarget: { fontSize: 12, fontWeight: 600, color: "var(--text-3)", marginLeft: 1 },
  inlinePlus: { width: 30, height: 30, borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontSize: 18, fontWeight: 700, cursor: "pointer", display: "grid", placeItems: "center", fontFamily: "inherit", lineHeight: 1, flexShrink: 0 },
  inlineSet: { height: 30, padding: "0 12px", borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--text)", fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 },
  inlineWait: { fontSize: 12, fontWeight: 700, color: "#C2773B" },
  inlineReady: { fontSize: 12, fontWeight: 700, color: "#4C9A6B" },
  inlineMore: { marginLeft: "auto", border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", fontSize: 16, fontWeight: 700, lineHeight: 1 },
  activeToggle: { position: "relative", width: 38, height: 22, borderRadius: 11, border: "none", background: "var(--border)", cursor: "pointer", flexShrink: 0, transition: "background 0.2s", padding: 0 },
  activeToggleOn: { background: "#4C9A6B" },
  activeKnob: { position: "absolute", top: 3, left: 3, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" },
  activeKnobOn: { left: 19 },
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
