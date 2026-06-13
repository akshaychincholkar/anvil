import { useState, useEffect } from "react";
import { Pencil, Plus, SlidersHorizontal, Bell, Check, Flame, LayoutGrid, Menu, X } from "lucide-react";

// ── Five pillars ────────────────────────────────────────────────
const PILLARS = {
  Financial:    { dot: "#C9A227", soft: "rgba(201,162,39,0.12)" },
  Academic:     { dot: "#3A7CA5", soft: "rgba(58,124,165,0.12)" },
  Relationship: { dot: "#C2536B", soft: "rgba(194,83,107,0.12)" },
  Health:       { dot: "#4C9A6B", soft: "rgba(76,154,107,0.12)" },
  Spiritual:    { dot: "#8268B0", soft: "rgba(130,104,176,0.12)" },
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_LABEL = "June 2026";

// Each habit: pillar, target/week, and a completion set keyed by day-of-month (1–30).
const SEED = [
  { id: "h1", name: "Morning exercise", pillar: "Health",    target: 6, done: new Set([1,2,3,5,6,8,9,10,12,13]) },
  { id: "h2", name: "Read spiritual article", pillar: "Spiritual", target: 7, done: new Set([1,2,3,4,5,6,7,8,9,10,11,12,13]) },
  { id: "h3", name: "Stocks/tech learning", pillar: "Academic", target: 5, done: new Set([1,3,4,6,8,10,11,13]) },
  { id: "h4", name: "Evening Sadhna", pillar: "Spiritual",  target: 7, done: new Set([2,3,4,6,7,9,10,11,13]) },
];

// Today is the 13th for the seed; current week = days 8–14 (Mon–Sun sample).
const WEEK_DAYS = [8, 9, 10, 11, 12, 13, 14];
const TODAY = 13;

export default function HabitTracker() {
  const [habits, setHabits] = useState(SEED);
  const [selected, setSelected] = useState("ALL"); // "ALL" or a habit id
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 720;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(false); // overlay never lingers on desktop
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // On mobile, picking an item closes the overlay.
  const pick = (id) => { setSelected(id); if (isMobile) setSidebarOpen(false); };

  const toggleDay = (habitId, day) =>
    setHabits((hs) => hs.map((h) => {
      if (h.id !== habitId) return h;
      const done = new Set(h.done);
      done.has(day) ? done.delete(day) : done.add(day);
      return { ...h, done };
    }));

  const current = habits.find((h) => h.id === selected);

  // streak = consecutive done-days counting back from today
  const streakOf = (h) => {
    let s = 0;
    for (let d = TODAY; d >= 1; d--) { if (h.done.has(d)) s++; else break; }
    return s;
  };

  // Sidebar visible when docked (desktop) or opened (mobile overlay)
  const showSidebar = !isMobile || sidebarOpen;

  const sidebarStyle = {
    ...S.sidebar,
    ...(isMobile ? S.sidebarOverlay : {}),
    ...(isMobile && !sidebarOpen ? S.sidebarHidden : {}),
  };

  return (
    <div style={S.shell}>
      {/* backdrop on mobile when open */}
      {isMobile && sidebarOpen && <div style={S.backdrop} onClick={() => setSidebarOpen(false)} />}

      {/* ── SIDEBAR ─────────────────────────────────── */}
      <aside style={sidebarStyle}>
        <div style={S.sideTop}>
          <div style={S.brand}>BRTN · Habits</div>
          {isMobile && (
            <button onClick={() => setSidebarOpen(false)} style={S.closeBtn}><X size={18} /></button>
          )}
        </div>
        <button
          onClick={() => pick("ALL")}
          style={{ ...S.sideItem, ...(selected === "ALL" ? S.sideItemOn : {}) }}
        >
          <LayoutGrid size={15} />
          <span style={S.sideLabel}>All Habits</span>
          <span style={S.sideCount}>{habits.length}</span>
        </button>

        <div style={S.sideDivider} />

        {habits.map((h) => {
          const on = selected === h.id;
          const c = PILLARS[h.pillar].dot;
          return (
            <button key={h.id} onClick={() => pick(h.id)}
              style={{ ...S.sideItem, ...(on ? S.sideItemOn : {}) }}>
              <span style={{ ...S.sideDot, background: c }} />
              <span style={S.sideLabel}>{h.name}</span>
              <span style={S.sideStreak}><Flame size={11} /> {streakOf(h)}</span>
            </button>
          );
        })}
      </aside>

      {/* ── MAIN ────────────────────────────────────── */}
      <main style={S.main}>
        {isMobile && (
          <button onClick={() => setSidebarOpen(true)} style={S.hamburger}>
            <Menu size={18} />
            <span style={S.hamburgerLabel}>{selected === "ALL" ? "All Habits" : current?.name}</span>
          </button>
        )}
        {selected === "ALL"
          ? <AllHabitsWeekly habits={habits} toggleDay={toggleDay} streakOf={streakOf} />
          : <SingleHabitMonthly habit={current} toggleDay={toggleDay} streakOf={streakOf} />}
      </main>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// ALL HABITS — weekly grid
// ════════════════════════════════════════════════════════════════
function AllHabitsWeekly({ habits, toggleDay, streakOf }) {
  return (
    <div>
      <div style={S.mainHead}>
        <div>
          <div style={S.eyebrow}>Weekly view</div>
          <h1 style={S.h1}>All Habits</h1>
        </div>
      </div>

      <div style={S.weekCard}>
        <div style={S.weekHeadRow}>
          <div style={S.weekNameCol} />
          {DAYS.map((d, i) => (
            <div key={d} style={S.weekDayHead}>
              <span style={S.weekDayName}>{d}</span>
              <span style={{ ...S.weekDayNum, ...(WEEK_DAYS[i] === TODAY ? S.weekDayToday : {}) }}>{WEEK_DAYS[i]}</span>
            </div>
          ))}
          <div style={S.weekStreakCol}>Streak</div>
        </div>

        {habits.map((h) => {
          const c = PILLARS[h.pillar].dot;
          const soft = PILLARS[h.pillar].soft;
          return (
            <div key={h.id} style={S.weekRow}>
              <div style={S.weekNameCol}>
                <span style={{ ...S.sideDot, background: c }} />
                <span style={S.weekHabitName}>{h.name}</span>
              </div>
              {WEEK_DAYS.map((day) => {
                const done = h.done.has(day);
                const future = day > TODAY;
                return (
                  <div key={day} style={S.weekCell}>
                    <button
                      disabled={future}
                      onClick={() => toggleDay(h.id, day)}
                      style={{
                        ...S.tick,
                        ...(done ? { background: c, borderColor: c } : {}),
                        ...(future ? S.tickFuture : {}),
                      }}
                    >
                      {done && <Check size={14} color="#fff" strokeWidth={3} />}
                    </button>
                  </div>
                );
              })}
              <div style={S.weekStreakCol}>
                <span style={{ ...S.streakPill, background: soft, color: c }}>
                  <Flame size={12} /> {streakOf(h)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// SINGLE HABIT — monthly view + action bar
// ════════════════════════════════════════════════════════════════
function SingleHabitMonthly({ habit, toggleDay, streakOf }) {
  if (!habit) return null;
  const c = PILLARS[habit.pillar].dot;
  const soft = PILLARS[habit.pillar].soft;
  const daysInMonth = 30;
  const completed = [...habit.done].filter((d) => d <= daysInMonth).length;
  const rate = Math.round((completed / TODAY) * 100);
  // June 2026 starts on a Monday → offset 0
  const startOffset = 0;

  const actions = [
    { icon: Pencil, label: "Edit" },
    { icon: Plus, label: "Add" },
    { icon: SlidersHorizontal, label: "Modify" },
    { icon: Bell, label: "Remind" },
  ];

  return (
    <div>
      <div style={S.mainHead}>
        <div>
          <div style={S.eyebrow}><span style={{ ...S.sideDot, background: c, marginRight: 6 }} />{habit.pillar} · Monthly view</div>
          <h1 style={S.h1}>{habit.name}</h1>
        </div>
        <div style={S.actionBar}>
          {actions.map(({ icon: Icon, label }) => (
            <button key={label} style={S.actionBtn}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* stat strip */}
      <div style={S.statStrip}>
        <Stat label="Current streak" value={`${streakOf(habit)} days`} c={c} soft={soft} flame />
        <Stat label="Done this month" value={`${completed}/${TODAY}`} c={c} soft={soft} />
        <Stat label="Completion" value={`${rate}%`} c={c} soft={soft} />
        <Stat label="Weekly target" value={`${habit.target}×`} c={c} soft={soft} />
      </div>

      {/* month calendar */}
      <div style={S.monthCard}>
        <div style={S.monthTitle}>{MONTH_LABEL}</div>
        <div style={S.monthDow}>
          {DAYS.map((d) => <div key={d} style={S.monthDowCell}>{d}</div>)}
        </div>
        <div style={S.monthGrid}>
          {Array.from({ length: startOffset }).map((_, i) => <div key={`pad${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const done = habit.done.has(day);
            const future = day > TODAY;
            const isToday = day === TODAY;
            return (
              <button
                key={day}
                disabled={future}
                onClick={() => toggleDay(habit.id, day)}
                style={{
                  ...S.monthDay,
                  ...(done ? { background: c, borderColor: c, color: "#fff" } : {}),
                  ...(future ? S.monthDayFuture : {}),
                  ...(isToday && !done ? { borderColor: c, borderWidth: 2 } : {}),
                }}
              >
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
      <div style={{ ...S.statValue, color: c }}>
        {flame && <Flame size={15} />} {value}
      </div>
    </div>
  );
}

const S = {
  shell: { display: "flex", fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F6F3", minHeight: 560, color: "#26241F", position: "relative", overflow: "hidden" },

  // sidebar
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

  // main
  main: { flex: 1, padding: "26px 26px", overflowX: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid #E0DDD5", background: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 },
  mainHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 14, marginBottom: 20 },
  eyebrow: { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 5, display: "flex", alignItems: "center" },
  h1: { fontSize: 27, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif" },

  // action bar
  actionBar: { display: "flex", gap: 6, flexWrap: "wrap" },
  actionBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "7px 12px", borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },

  // weekly grid
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

  // stat strip
  statStrip: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 18 },
  stat: { borderRadius: 10, padding: "13px 14px" },
  statLabel: { fontSize: 11, fontWeight: 600, color: "#6B675E", marginBottom: 5 },
  statValue: { fontSize: 19, fontWeight: 700, display: "flex", alignItems: "center", gap: 5, fontFamily: "'Fraunces', Georgia, serif" },

  // month calendar
  monthCard: { background: "#fff", borderRadius: 12, padding: "16px 16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  monthTitle: { fontSize: 14, fontWeight: 700, marginBottom: 12, fontFamily: "'Fraunces', Georgia, serif" },
  monthDow: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 8 },
  monthDowCell: { fontSize: 10, fontWeight: 600, color: "#9A968C", textAlign: "center", textTransform: "uppercase" },
  monthGrid: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 },
  monthDay: { aspectRatio: "1", border: "1.5px solid #ECEAE3", background: "#fff", borderRadius: 8, fontSize: 12.5, fontWeight: 600, color: "#6B675E", cursor: "pointer", fontFamily: "inherit", display: "grid", placeItems: "center" },
  monthDayFuture: { opacity: 0.4, cursor: "not-allowed", background: "#FAFAF8" },
};
