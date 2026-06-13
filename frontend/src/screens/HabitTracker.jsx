import { useState, useEffect, useCallback } from "react";
import { Pencil, Plus, SlidersHorizontal, Bell, Check, Flame, LayoutGrid, Menu, X } from "lucide-react";
import { api } from "../api.js";

const PILLARS = {
  Financial:    { dot: "#C9A227", soft: "rgba(201,162,39,0.12)" },
  Academic:     { dot: "#3A7CA5", soft: "rgba(58,124,165,0.12)" },
  Relationship: { dot: "#C2536B", soft: "rgba(194,83,107,0.12)" },
  Health:       { dot: "#4C9A6B", soft: "rgba(76,154,107,0.12)" },
  Spiritual:    { dot: "#8268B0", soft: "rgba(130,104,176,0.12)" },
};
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

// ISO date → "YYYY-MM-DD"
const toISO = (d) => d.toISOString().slice(0, 10);
const todayISO = () => toISO(new Date());

// Monday-first week containing today
const getWeekDates = () => {
  const today = new Date();
  const dow = today.getDay(); // 0=Sun
  const offset = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(today);
  monday.setDate(today.getDate() + offset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return toISO(d);
  });
};

const monthStart = () => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), 1);
};

const daysInCurrentMonth = () => {
  const d = new Date();
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
};

const monthStartOffset = () => {
  const dow = monthStart().getDay();
  return dow === 0 ? 6 : dow - 1; // Monday-first
};

const monthDates = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = d.getMonth();
  const days = daysInCurrentMonth();
  return Array.from({ length: days }, (_, i) =>
    `${y}-${String(m+1).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`
  );
};

const MONTH_LABEL = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
const WEEK_DATES = getWeekDates();
const TODAY = todayISO();
const MONTH_DATES = monthDates();
const MONTH_OFFSET = monthStartOffset();

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [selected, setSelected] = useState("ALL");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [newHabit, setNewHabit] = useState({ name: "", pillar: "Health", target_per_week: 7 });

  const load = useCallback(() => api.getHabits().then(setHabits).catch(console.error), []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 720;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const pick = (id) => { setSelected(id); if (isMobile) setSidebarOpen(false); };

  const toggleDay = async (habitId, dateStr) => {
    await api.toggleHabitLog(habitId, dateStr);
    load();
  };

  const createHabit = async () => {
    if (!newHabit.name.trim()) return;
    await api.createHabit(newHabit);
    setNewHabit({ name: "", pillar: "Health", target_per_week: 7 });
    setAdding(false);
    load();
  };

  const renameHabit = async (id) => {
    if (!editName.trim()) return;
    await api.updateHabit(id, { name: editName.trim() });
    setEditingId(null);
    load();
  };

  const deleteHabit = async (id) => {
    await api.deleteHabit(id);
    if (selected === id) setSelected("ALL");
    load();
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

        <button onClick={() => pick("ALL")} style={{ ...S.sideItem, ...(selected === "ALL" ? S.sideItemOn : {}) }}>
          <LayoutGrid size={15} />
          <span style={S.sideLabel}>All Habits</span>
          <span style={S.sideCount}>{habits.length}</span>
        </button>
        <div style={S.sideDivider} />

        {habits.map((h) => {
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
          <div style={S.addBox}>
            <input autoFocus placeholder="Habit name" value={newHabit.name}
              onChange={(e) => setNewHabit((n) => ({ ...n, name: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && createHabit()}
              style={S.sideInput} />
            <select value={newHabit.pillar} onChange={(e) => setNewHabit((n) => ({ ...n, pillar: e.target.value }))} style={S.sideInput}>
              {Object.keys(PILLARS).map((p) => <option key={p}>{p}</option>)}
            </select>
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={createHabit} style={S.sideAddBtn}><Check size={13} /></button>
              <button onClick={() => setAdding(false)} style={S.sideCancelBtn}><X size={13} /></button>
            </div>
          </div>
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
          ? <AllHabitsWeekly habits={habits} toggleDay={toggleDay} logSet={logSet}
              onDelete={deleteHabit} onRename={(h) => { setEditingId(h.id); setEditName(h.name); }}
              editingId={editingId} editName={editName} setEditName={setEditName} renameHabit={renameHabit} />
          : <SingleHabitMonthly habit={current} toggleDay={toggleDay} logSet={logSet} />}
      </main>
    </div>
  );
}

function AllHabitsWeekly({ habits, toggleDay, logSet, onDelete, onRename, editingId, editName, setEditName, renameHabit }) {
  return (
    <div>
      <div style={S.mainHead}>
        <div style={S.eyebrow}>Weekly view</div>
        <h1 style={S.h1}>All Habits</h1>
      </div>
      <div style={S.weekCard}>
        <div style={S.weekHeadRow}>
          <div style={S.weekNameCol} />
          {DAYS.map((d, i) => (
            <div key={d} style={S.weekDayHead}>
              <span style={S.weekDayName}>{d}</span>
              <span style={{ ...S.weekDayNum, ...(WEEK_DATES[i] === TODAY ? S.weekDayToday : {}) }}>
                {new Date(WEEK_DATES[i] + "T00:00").getDate()}
              </span>
            </div>
          ))}
          <div style={S.weekStreakCol}>Streak</div>
        </div>

        {habits.map((h) => {
          const c = PILLARS[h.pillar]?.dot || "#9A968C";
          const soft = PILLARS[h.pillar]?.soft || "rgba(0,0,0,0.05)";
          const logs = logSet(h);
          return (
            <div key={h.id} style={S.weekRow}>
              <div style={{ ...S.weekNameCol, flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ ...S.sideDot, background: c }} />
                  {editingId === h.id ? (
                    <input autoFocus value={editName} onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && renameHabit(h.id)}
                      onBlur={() => renameHabit(h.id)}
                      style={{ ...S.sideInput, padding: "3px 6px", fontSize: 12 }} />
                  ) : (
                    <span style={S.weekHabitName}>{h.name}</span>
                  )}
                </div>
                <div style={{ display: "flex", gap: 4, paddingLeft: 15 }}>
                  <button onClick={() => onRename(h)} style={S.tinyBtn} title="Rename"><Pencil size={10} /></button>
                  <button onClick={() => onDelete(h.id)} style={S.tinyBtn} title="Delete"><X size={10} /></button>
                </div>
              </div>

              {WEEK_DATES.map((dateStr) => {
                const done = logs.has(dateStr);
                const future = dateStr > TODAY;
                return (
                  <div key={dateStr} style={S.weekCell}>
                    <button disabled={future} onClick={() => toggleDay(h.id, dateStr)}
                      style={{ ...S.tick, ...(done ? { background: c, borderColor: c } : {}), ...(future ? S.tickFuture : {}) }}>
                      {done && <Check size={14} color="#fff" strokeWidth={3} />}
                    </button>
                  </div>
                );
              })}
              <div style={S.weekStreakCol}>
                <span style={{ ...S.streakPill, background: soft, color: c }}>
                  <Flame size={12} /> {h.streak}
                </span>
              </div>
            </div>
          );
        })}

        {habits.length === 0 && (
          <div style={{ fontSize: 13, color: "#9A968C", padding: "24px 12px", textAlign: "center" }}>
            No habits yet — add one from the sidebar.
          </div>
        )}
      </div>
    </div>
  );
}

function SingleHabitMonthly({ habit, toggleDay, logSet }) {
  if (!habit) return null;
  const c = PILLARS[habit.pillar]?.dot || "#9A968C";
  const soft = PILLARS[habit.pillar]?.soft || "rgba(0,0,0,0.05)";
  const logs = logSet(habit);
  const completed = MONTH_DATES.filter((d) => d <= TODAY && logs.has(d)).length;
  const daysPassed = MONTH_DATES.filter((d) => d <= TODAY).length;
  const rate = daysPassed > 0 ? Math.round((completed / daysPassed) * 100) : 0;

  return (
    <div>
      <div style={S.mainHead}>
        <div>
          <div style={S.eyebrow}><span style={{ ...S.sideDot, background: c, marginRight: 6 }} />{habit.pillar} · Monthly view</div>
          <h1 style={S.h1}>{habit.name}</h1>
        </div>
      </div>

      <div style={S.statStrip}>
        <Stat label="Current streak" value={`${habit.streak} days`} c={c} soft={soft} flame />
        <Stat label="Done this month" value={`${completed}/${daysPassed}`} c={c} soft={soft} />
        <Stat label="Completion" value={`${rate}%`} c={c} soft={soft} />
        <Stat label="Weekly target" value={`${habit.target_per_week}×`} c={c} soft={soft} />
      </div>

      <div style={S.monthCard}>
        <div style={S.monthTitle}>{MONTH_LABEL}</div>
        <div style={S.monthDow}>{DAYS.map((d) => <div key={d} style={S.monthDowCell}>{d}</div>)}</div>
        <div style={S.monthGrid}>
          {Array.from({ length: MONTH_OFFSET }).map((_, i) => <div key={`pad${i}`} />)}
          {MONTH_DATES.map((dateStr, i) => {
            const day = i + 1;
            const done = logs.has(dateStr);
            const future = dateStr > TODAY;
            const isToday = dateStr === TODAY;
            return (
              <button key={dateStr} disabled={future} onClick={() => toggleDay(habit.id, dateStr)}
                style={{
                  ...S.monthDay,
                  ...(done ? { background: c, borderColor: c, color: "#fff" } : {}),
                  ...(future ? S.monthDayFuture : {}),
                  ...(isToday && !done ? { borderColor: c, borderWidth: 2 } : {}),
                }}>
                {day}
              </button>
            );
          })}
        </div>
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
  shell: { display: "flex", fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100vh", color: "#26241F", position: "relative", overflow: "hidden" },
  sidebar: { width: 230, flexShrink: 0, background: "#fff", borderRight: "1px solid #ECEAE3", padding: "20px 12px", display: "flex", flexDirection: "column", gap: 3 },
  sidebarOverlay: { position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 30, boxShadow: "4px 0 24px rgba(0,0,0,0.18)", transition: "transform 0.22s ease", transform: "translateX(0)" },
  sidebarHidden: { transform: "translateX(-105%)", boxShadow: "none" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(38,36,31,0.38)", zIndex: 20 },
  sideTop: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" },
  closeBtn: { border: "none", background: "none", color: "#6B675E", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", marginBottom: 8 },
  brand: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 700, padding: "0 6px 14px" },
  sideItem: { display: "flex", alignItems: "center", gap: 9, width: "100%", border: "none", background: "none", padding: "9px 10px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 500, color: "#4A463E", textAlign: "left" },
  sideItemOn: { background: "#F2F1EC", fontWeight: 600 },
  sideLabel: { flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  sideCount: { fontSize: 11, fontWeight: 700, color: "#9A968C", background: "#F2F1EC", borderRadius: 10, padding: "1px 7px" },
  sideStreak: { display: "flex", alignItems: "center", gap: 3, fontSize: 11, fontWeight: 600, color: "#C2773B" },
  sideDot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0, display: "inline-block" },
  sideDivider: { height: 1, background: "#ECEAE3", margin: "8px 6px" },
  addBox: { padding: "10px 6px", display: "flex", flexDirection: "column", gap: 6 },
  sideInput: { border: "1px solid #E4E2DA", borderRadius: 7, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  sideAddBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 30, height: 30, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  sideCancelBtn: { border: "1px solid #E4E2DA", background: "#fff", color: "#6B675E", width: 30, height: 30, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  sideNewBtn: { display: "flex", alignItems: "center", gap: 6, width: "100%", border: "1px dashed #D9D6CE", background: "none", borderRadius: 8, padding: "8px 10px", fontSize: 12.5, color: "#9A968C", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 6, justifyContent: "center" },
  main: { flex: 1, padding: "26px", overflowX: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid #E0DDD5", background: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 },
  mainHead: { marginBottom: 20 },
  eyebrow: { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 5 },
  h1: { fontSize: 27, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  weekCard: { background: "#fff", borderRadius: 12, padding: "8px 14px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", minWidth: 600 },
  weekHeadRow: { display: "flex", alignItems: "flex-end", padding: "10px 0", borderBottom: "1px solid #ECEAE3" },
  weekNameCol: { width: 180, flexShrink: 0, display: "flex", alignItems: "center", gap: 8 },
  weekDayHead: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  weekDayName: { fontSize: 10, fontWeight: 600, color: "#9A968C", textTransform: "uppercase" },
  weekDayNum: { fontSize: 12, fontWeight: 600, color: "#6B675E", width: 22, height: 22, display: "grid", placeItems: "center", borderRadius: "50%" },
  weekDayToday: { background: "#26241F", color: "#fff" },
  weekStreakCol: { width: 64, flexShrink: 0, textAlign: "center", fontSize: 10, fontWeight: 600, color: "#9A968C", textTransform: "uppercase" },
  weekRow: { display: "flex", alignItems: "center", padding: "9px 0", borderBottom: "1px solid #F4F2EC" },
  weekHabitName: { fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  weekCell: { flex: 1, display: "grid", placeItems: "center" },
  tick: { width: 26, height: 26, borderRadius: 7, border: "2px solid #E0DDD5", background: "#fff", cursor: "pointer", display: "grid", placeItems: "center", padding: 0 },
  tickFuture: { opacity: 0.4, cursor: "not-allowed", borderStyle: "dashed" },
  streakPill: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700, padding: "3px 9px", borderRadius: 12 },
  tinyBtn: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", padding: "2px 3px", display: "grid", placeItems: "center", borderRadius: 4 },
  statStrip: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: 10, marginBottom: 18 },
  stat: { borderRadius: 10, padding: "13px 14px" },
  statLabel: { fontSize: 11, fontWeight: 600, color: "#6B675E", marginBottom: 5 },
  statValue: { fontSize: 19, fontWeight: 700, display: "flex", alignItems: "center", gap: 5, fontFamily: "'Fraunces',Georgia,serif" },
  monthCard: { background: "#fff", borderRadius: 12, padding: "16px 16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  monthTitle: { fontSize: 14, fontWeight: 700, marginBottom: 12, fontFamily: "'Fraunces',Georgia,serif" },
  monthDow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 8 },
  monthDowCell: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase" },
  monthGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 },
  monthDay: { aspectRatio: "1", border: "1.5px solid #ECEAE3", background: "#fff", borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: "#6B675E", cursor: "pointer", fontFamily: "inherit", display: "grid", placeItems: "center" },
  monthDayFuture: { opacity: 0.4, cursor: "not-allowed", background: "#FAFAF8" },
};
