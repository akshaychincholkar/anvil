import { useState, useEffect, useCallback, useRef } from "react";
import { Plus, Clock, CalendarPlus, Check, X, Pencil } from "lucide-react";
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

const QUADRANTS = [
  { id: "Q1", symbol: "™", title: "Do Now",    sub: "Important · Urgent",         accent: "#C2536B" },
  { id: "Q2", symbol: "©", title: "Schedule",  sub: "Important · Not Urgent",     accent: "#3A7CA5" },
  { id: "Q3", symbol: "®", title: "Delegate",  sub: "Not Important · Urgent",     accent: "#C9A227" },
  { id: "Q4", symbol: "•", title: "Drop",      sub: "Not Important · Not Urgent", accent: "#8A8780" },
];

function todayISO() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

function defaultTime() {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const mins = now.getMinutes();
  const rounded = mins < 30 ? 30 : 0;
  const hours = rounded === 0 ? now.getHours() + 1 : now.getHours();
  return `${String(hours % 24).padStart(2, "0")}:${String(rounded).padStart(2, "0")}`;
}

function addMinutes(timeStr, mins) {
  const [h, m] = timeStr.split(":").map(Number);
  const total = h * 60 + m + mins;
  return `${String(Math.floor(total / 60) % 24).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function fmtEventTime(isoStr) {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  return d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric", month: "short",
    hour: "2-digit", minute: "2-digit",
    hour12: true,
  });
}

const EMPTY_DRAFT = () => ({
  title: "", pillar: "Financial", est: 30,
  date: todayISO(), startTime: defaultTime(),
});

export default function QuadrantView() {
  const [tasks, setTasks]         = useState([]);
  const [goals, setGoals]         = useState([]);
  const [pillarFilter, setPillarFilter] = useState("All");
  const [goalSel, setGoalSel]     = useState(null); // selected weekly goal id, or null = all
  const [adding, setAdding]       = useState(null);
  const [draft, setDraft]         = useState(EMPTY_DRAFT());
  const [editing, setEditing]     = useState(null);
  const [editDraft, setEditDraft] = useState(EMPTY_DRAFT());
  const [gcal, setGcal]           = useState({ connected: false, configured: false });

  const load = useCallback(() => api.getTasks().then(setTasks).catch(console.error), []);

  useEffect(() => {
    load();
    api.getGcalStatus().then(setGcal).catch(() => {});
    api.getGoals().then((gs) => setGoals(gs.filter((g) => g.horizon === "Weekly"))).catch(() => {});
  }, [load]);

  const PILLAR_NAMES = Object.keys(PILLARS);
  const weeklyGoals = goals.filter((g) => pillarFilter === "All" || g.pillar === pillarFilter);
  const selGoal = goals.find((g) => g.id === goalSel) || null;
  const visibleTasks = tasks.filter((t) => {
    if (goalSel != null) return t.goal_id === goalSel;
    if (pillarFilter !== "All") return t.pillar === pillarFilter;
    return true;
  });
  const pickPillar = (name) => { setPillarFilter(name); setGoalSel(null); setAdding(null); setDraft((d) => ({ ...d, pillar: name === "All" ? "Financial" : name })); };
  const pickGoal = (id) => { setGoalSel(id); setAdding(null); const g = goals.find((x) => x.id === id); if (g) setDraft((d) => ({ ...d, pillar: g.pillar })); };

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteTask, api.restoreTask, load
  );

  const byQ = (q) => visibleTasks.filter((t) => t.quadrant === q);
  const totalMin = (q) => byQ(q).reduce((s, t) => s + t.time_estimate_min, 0);
  const fmt = (m) => m >= 60 ? `${Math.floor(m/60)}h${m%60 ? ` ${m%60}m` : ""}` : `${m}m`;

  const calendarTitle = (t) => {
    const sym = QUADRANTS.find((q) => q.id === t.quadrant)?.symbol ?? "";
    return `${sym} ${t.title}`;
  };

  const addTask = async (q) => {
    if (!draft.title.trim()) return;
    const start_datetime = draft.date && draft.startTime
      ? `${draft.date}T${draft.startTime}:00`
      : null;
    await api.createTask({
      pillar: selGoal ? selGoal.pillar : draft.pillar,
      title: draft.title,
      quadrant: q,
      time_estimate_min: Number(draft.est) || 30,
      start_datetime,
      goal_id: goalSel ?? null,
    });
    setDraft(EMPTY_DRAFT());
    setAdding(null);
    load();
  };

  const deleteTask = (id, title) => softDelete(id, title);

  const startEdit = (t) => {
    const parts = t.start_datetime ? t.start_datetime.split("T") : [];
    setEditing(t.id);
    setAdding(null);
    setEditDraft({
      title: t.title, pillar: t.pillar, est: t.time_estimate_min,
      date: parts[0] || todayISO(),
      startTime: (parts[1] || "").slice(0, 5) || defaultTime(),
    });
  };
  const saveEdit = async (t) => {
    if (!editDraft.title.trim()) return;
    const start_datetime = editDraft.date && editDraft.startTime ? `${editDraft.date}T${editDraft.startTime}:00` : null;
    await api.updateTask(t.id, {
      title: editDraft.title.trim(),
      pillar: editDraft.pillar,
      time_estimate_min: Number(editDraft.est) || 30,
      start_datetime,
    });
    setEditing(null);
    load();
  };

  // ── Drag a task between quadrants (kanban) ──
  const dragRef = useRef(null);
  const holdTimer = useRef(null);
  const [dragView, setDragView] = useState(null);
  const quadAt = (x, y) => {
    const el = document.elementFromPoint(x, y);
    return el && el.closest ? (el.closest("[data-quad]")?.getAttribute("data-quad") || null) : null;
  };
  useEffect(() => {
    const onMove = (e) => {
      const d = dragRef.current;
      if (!d) return;
      const dist = Math.hypot(e.clientX - d.startX, e.clientY - d.startY);
      if (!d.active) {
        if (d.pointerType !== "mouse") { if (dist > 12) { clearTimeout(holdTimer.current); dragRef.current = null; } return; }
        if (dist < 6) return;
        d.active = true;
        document.body.style.userSelect = "none";
      }
      if (e.cancelable) e.preventDefault();
      d.overQ = quadAt(e.clientX, e.clientY);
      setDragView({ id: d.task.id, title: d.task.title, x: e.clientX, y: e.clientY, overQ: d.overQ });
    };
    const onUp = () => {
      clearTimeout(holdTimer.current);
      const d = dragRef.current;
      dragRef.current = null;
      document.body.style.userSelect = "";
      document.body.style.touchAction = "";
      setDragView(null);
      if (d && d.active && d.overQ && d.overQ !== d.task.quadrant) {
        api.updateTask(d.task.id, { quadrant: d.overQ }).then(load).catch(() => {});
      }
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [load]);

  const startCardDrag = (e, task) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragRef.current = { task, startX: e.clientX, startY: e.clientY, active: false, pointerType: e.pointerType, overQ: null };
    if (e.pointerType !== "mouse") {
      holdTimer.current = setTimeout(() => {
        const d = dragRef.current;
        if (!d) return;
        d.active = true;
        document.body.style.touchAction = "none";
        setDragView({ id: d.task.id, title: d.task.title, x: d.startX, y: d.startY, overQ: d.task.quadrant });
      }, 280);
    }
  };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Weekly Routing</div>
          <h1 style={S.h1}>Weekly Routing</h1>
        </div>
        <div style={S.headRight}>
          <div style={S.legend}>
            {Object.entries(PILLARS).map(([name, c]) => (
              <span key={name} style={S.legendItem}>
                <span style={{ ...S.dot, background: c.dot }} />
                {name}
              </span>
            ))}
          </div>
          {/* Google Calendar connection badge */}
          {gcal.configured && (
            gcal.connected ? (
              <button
                style={S.gcalBadgeOn}
                title="Disconnect Google Calendar"
                onClick={() => api.disconnectGoogle().then(() => setGcal({ ...gcal, connected: false }))}
              >
                <CalendarPlus size={13} /> Google Calendar connected
              </button>
            ) : (
              <button style={S.gcalBadgeOff} onClick={() => api.connectGoogle()}>
                <CalendarPlus size={13} /> Connect Google Calendar
              </button>
            )
          )}
        </div>
      </div>

      {/* Pillar filter */}
      <div style={S.filterBar}>
        {["All", ...PILLAR_NAMES].map((name) => {
          const on = pillarFilter === name;
          const c = PILLARS[name];
          return (
            <button key={name} onClick={() => pickPillar(name)}
              style={{ ...S.pillChip, ...(on ? (c ? { background: c.dot, color: "#fff", borderColor: c.dot } : { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" }) : {}) }}>
              {c && <span style={{ ...S.dot, background: on ? "#fff" : c.dot }} />}
              {name === "All" ? "All" : name}
            </button>
          );
        })}
      </div>

      {/* Weekly goals selector */}
      <div style={S.goalBar}>
        <button onClick={() => setGoalSel(null)} style={{ ...S.goalChip, ...(goalSel == null ? S.goalChipOn : {}) }}>All goals</button>
        {weeklyGoals.map((g) => {
          const c = PILLARS[g.pillar]?.dot || "#9A968C";
          const on = goalSel === g.id;
          return (
            <button key={g.id} onClick={() => pickGoal(g.id)}
              style={{ ...S.goalChip, ...(on ? { background: c, color: "#fff", borderColor: c } : {}) }} title={g.title}>
              <span style={{ ...S.dot, background: on ? "#fff" : c }} />
              <span style={S.goalChipText}>{g.title}</span>
            </button>
          );
        })}
        {weeklyGoals.length === 0 && <span style={S.goalEmpty}>No weekly goals{pillarFilter !== "All" ? ` for ${pillarFilter}` : ""} — create them in Goals.</span>}
      </div>

      <div style={S.grid}>
        {QUADRANTS.map((quad) => (
          <section key={quad.id} data-quad={quad.id}
            style={{ ...S.quad, borderTop: `3px solid ${quad.accent}`, ...(dragView && dragView.overQ === quad.id && dragView.overQ !== tasks.find((t) => t.id === dragView.id)?.quadrant ? { outline: `2px dashed ${quad.accent}`, outlineOffset: 2, background: "var(--hover)" } : {}) }}>
            <header style={S.quadHead}>
              <div style={S.quadTitleRow}>
                <span style={{ ...S.symbol, color: quad.accent }}>{quad.symbol}</span>
                <div>
                  <div style={S.quadTitle}>{quad.title}</div>
                  <div style={S.quadSub}>{quad.sub}</div>
                </div>
              </div>
              <span style={S.quadTotal}>{fmt(totalMin(quad.id))}</span>
            </header>

            <div style={S.list}>
              {byQ(quad.id).map((t) => {
                const p = PILLARS[t.pillar] || PILLARS.Financial;
                const scheduled = !!t.gcal_event_id;
                if (editing === t.id) {
                  return (
                    <div key={t.id} style={S.addBox}>
                      <input autoFocus placeholder="Task title" value={editDraft.title}
                        onChange={(e) => setEditDraft({ ...editDraft, title: e.target.value })}
                        onKeyDown={(e) => e.key === "Enter" && saveEdit(t)} style={S.input} />
                      <div style={S.dateTimeRow}>
                        <div style={S.dateTimeGroup}>
                          <label style={S.dtLabel}>Date</label>
                          <input type="date" value={editDraft.date} onChange={(e) => setEditDraft({ ...editDraft, date: e.target.value })} style={S.dtInput} />
                        </div>
                        <div style={S.dateTimeGroup}>
                          <label style={S.dtLabel}>Start</label>
                          <input type="time" value={editDraft.startTime} onChange={(e) => setEditDraft({ ...editDraft, startTime: e.target.value })} style={S.dtInput} />
                        </div>
                        <div style={S.dateTimeGroup}>
                          <label style={S.dtLabel}>End</label>
                          <div style={S.dtEndValue}>{addMinutes(editDraft.startTime, Number(editDraft.est) || 30)}</div>
                        </div>
                      </div>
                      <div style={S.addRow}>
                        <select value={editDraft.pillar} onChange={(e) => setEditDraft({ ...editDraft, pillar: e.target.value })} style={S.select}>
                          {Object.keys(PILLARS).map((pp) => <option key={pp}>{pp}</option>)}
                        </select>
                        <input type="number" value={editDraft.est} onChange={(e) => setEditDraft({ ...editDraft, est: e.target.value })} style={{ ...S.input, width: 60 }} />
                        <span style={S.minLabel}>min</span>
                        <button onClick={() => saveEdit(t)} style={S.saveBtn}><Check size={14} /></button>
                        <button onClick={() => setEditing(null)} style={S.cancelBtn}><X size={14} /></button>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={t.id}
                    onPointerDown={(e) => startCardDrag(e, t)}
                    style={{ ...S.card, background: p.soft, cursor: "grab", touchAction: "pan-y", ...(dragView?.id === t.id ? { opacity: 0.4 } : {}) }}>
                    <span style={{ ...S.cardBar, background: p.dot }} />
                    <div style={S.cardBody}>
                      <div style={S.cardTitle}>{t.title}</div>
                      {t.start_datetime && (
                        <div style={S.eventTime}>
                          <CalendarPlus size={10} />
                          {fmtEventTime(t.start_datetime)}
                          {scheduled && <span style={S.syncedDot} title="Synced to Google Calendar" />}
                        </div>
                      )}
                      <div style={S.cardMeta}>
                        <span style={S.metaPill}>
                          <span style={{ ...S.dot, background: p.dot, width: 7, height: 7 }} />
                          {t.pillar}
                        </span>
                        <span style={S.metaPill}><Clock size={11} /> {fmt(t.time_estimate_min)}</span>
                      </div>
                    </div>
                    <div style={S.cardActions}>
                      {scheduled && (
                        <span title={`On calendar as "${calendarTitle(t)}"`} style={S.calDoneIcon}>
                          <Check size={14} />
                        </span>
                      )}
                      <button onClick={() => startEdit(t)} onPointerDown={(e) => e.stopPropagation()} style={S.delBtn} title="Edit"><Pencil size={12} /></button>
                      <button onClick={() => deleteTask(t.id, t.title)} onPointerDown={(e) => e.stopPropagation()} style={S.delBtn}><X size={13} /></button>
                    </div>
                  </div>
                );
              })}

              {adding === quad.id ? (
                <div style={S.addBox}>
                  {/* Title */}
                  <input
                    autoFocus
                    placeholder="Task title"
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && addTask(quad.id)}
                    style={S.input}
                  />

                  {/* Date + Time row — Google Calendar style */}
                  <div style={S.dateTimeRow}>
                    <div style={S.dateTimeGroup}>
                      <label style={S.dtLabel}>Date</label>
                      <input
                        type="date"
                        value={draft.date}
                        onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                        style={S.dtInput}
                      />
                    </div>
                    <div style={S.dateTimeGroup}>
                      <label style={S.dtLabel}>Start</label>
                      <input
                        type="time"
                        value={draft.startTime}
                        onChange={(e) => setDraft({ ...draft, startTime: e.target.value })}
                        style={S.dtInput}
                      />
                    </div>
                    <div style={S.dateTimeGroup}>
                      <label style={S.dtLabel}>End</label>
                      <div style={S.dtEndValue}>
                        {addMinutes(draft.startTime, Number(draft.est) || 30)}
                      </div>
                    </div>
                  </div>

                  {/* Pillar + duration row */}
                  <div style={S.addRow}>
                    {selGoal ? (
                      <span style={S.goalPillarTag}>
                        <span style={{ ...S.dot, background: PILLARS[selGoal.pillar]?.dot }} /> {selGoal.pillar}
                      </span>
                    ) : (
                      <select
                        value={draft.pillar}
                        onChange={(e) => setDraft({ ...draft, pillar: e.target.value })}
                        style={S.select}
                      >
                        {Object.keys(PILLARS).map((p) => <option key={p}>{p}</option>)}
                      </select>
                    )}
                    <input
                      type="number"
                      value={draft.est}
                      onChange={(e) => setDraft({ ...draft, est: e.target.value })}
                      style={{ ...S.input, width: 60 }}
                    />
                    <span style={S.minLabel}>min</span>
                    {gcal.connected && (
                      <span style={S.gcalHint} title="Will sync to Google Calendar">
                        <CalendarPlus size={12} />
                      </span>
                    )}
                    <button onClick={() => addTask(quad.id)} style={S.saveBtn}><Check size={14} /></button>
                    <button onClick={() => { setAdding(null); setDraft(EMPTY_DRAFT()); }} style={S.cancelBtn}><X size={14} /></button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setAdding(quad.id)} style={S.addTrigger}>
                  <Plus size={13} /> Add task
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
      {dragView && (
        <div style={{ ...S.dragClone, left: dragView.x + 12, top: dragView.y + 12 }}>{dragView.title}</div>
      )}
      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter', system-ui, sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 26px", color: "var(--text)", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 22 },
  headRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 30, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif" },
  legend: { display: "flex", gap: 14, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-2)", fontWeight: 500 },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
  gcalBadgeOn:  { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "#4C9A6B", background: "rgba(76,154,107,0.10)", border: "1px solid rgba(76,154,107,0.3)", borderRadius: 20, padding: "5px 12px", cursor: "pointer" },
  gcalBadgeOff: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "var(--text-2)", background: "var(--surface)", border: "1px solid #DCDAD3", borderRadius: 20, padding: "5px 12px", cursor: "pointer" },
  filterBar: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 10 },
  pillChip: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 12px", borderRadius: 18, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  goalBar: { display: "flex", gap: 7, flexWrap: "wrap", alignItems: "center", marginBottom: 18, paddingBottom: 14, borderBottom: "1px solid var(--border)" },
  goalChip: { display: "inline-flex", alignItems: "center", gap: 6, maxWidth: 220, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 12px", borderRadius: 18, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  goalChipOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  goalChipText: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  goalEmpty: { fontSize: 12, color: "var(--text-3)", fontStyle: "italic" },
  goalPillarTag: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "7px 10px", borderRadius: 6, flex: 1 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 },
  quad: { background: "var(--surface)", borderRadius: 12, padding: "16px 16px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)" },
  quadHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 },
  quadTitleRow: { display: "flex", gap: 10, alignItems: "center" },
  symbol: { fontSize: 20, lineHeight: 1 },
  quadTitle: { fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em" },
  quadSub: { fontSize: 11, color: "var(--text-3)", marginTop: 1, letterSpacing: "0.02em" },
  quadTotal: { fontSize: 12, fontWeight: 600, color: "var(--text-2)", background: "var(--hover)", padding: "3px 9px", borderRadius: 20 },
  list: { display: "flex", flexDirection: "column", gap: 8 },
  card: { display: "flex", alignItems: "stretch", gap: 10, borderRadius: 9, padding: "10px 10px 10px 0", overflow: "hidden" },
  cardBar: { width: 3, borderRadius: 3, flexShrink: 0 },
  cardBody: { flex: 1, minWidth: 0 },
  cardTitle: { fontSize: 13.5, fontWeight: 500, lineHeight: 1.35, marginBottom: 4 },
  eventTime: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#3A7CA5", fontWeight: 500, marginBottom: 5 },
  syncedDot: { width: 6, height: 6, borderRadius: "50%", background: "#4C9A6B", display: "inline-block", marginLeft: 2 },
  cardMeta: { display: "flex", gap: 8, flexWrap: "wrap" },
  metaPill: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "var(--text-2)", fontWeight: 500 },
  cardActions: { display: "flex", flexDirection: "column", gap: 4, alignSelf: "center", flexShrink: 0 },
  calDoneIcon: { width: 30, height: 30, borderRadius: 8, background: "#4C9A6B", color: "#fff", display: "grid", placeItems: "center" },
  delBtn: { width: 30, height: 30, borderRadius: 8, border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", display: "grid", placeItems: "center" },
  addTrigger: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "var(--text-3)", background: "none", border: "1px dashed var(--border)", borderRadius: 8, padding: "8px 10px", cursor: "pointer", fontWeight: 500, marginTop: 2 },
  addBox: { border: "1px solid var(--border)", borderRadius: 9, padding: 10, display: "flex", flexDirection: "column", gap: 8 },
  // Date/time row
  dateTimeRow: { display: "flex", gap: 8, alignItems: "flex-end" },
  dateTimeGroup: { display: "flex", flexDirection: "column", gap: 3, flex: 1 },
  dtLabel: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase" },
  dtInput: { border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px", fontSize: 12.5, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  dtEndValue: { border: "1px solid var(--border)", borderRadius: 6, padding: "6px 8px", fontSize: 12.5, color: "var(--text-2)", background: "var(--bg)" },
  // Bottom row
  addRow: { display: "flex", alignItems: "center", gap: 6 },
  input: { border: "1px solid var(--border)", borderRadius: 6, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 0 },
  select: { border: "1px solid var(--border)", borderRadius: 6, padding: "7px 8px", fontSize: 12.5, fontFamily: "inherit", flex: 1 },
  minLabel: { fontSize: 11, color: "var(--text-3)" },
  gcalHint: { color: "#3A7CA5", display: "grid", placeItems: "center" },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
  cancelBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
  dragClone: { position: "fixed", zIndex: 1000, pointerEvents: "none", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 12px", fontSize: 13, fontWeight: 600, color: "var(--text)", boxShadow: "0 8px 24px rgba(0,0,0,0.25)", maxWidth: 220, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
};
