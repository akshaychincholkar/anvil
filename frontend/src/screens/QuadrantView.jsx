import { useState, useEffect, useCallback } from "react";
import { Plus, Clock, CalendarPlus, Check, X } from "lucide-react";
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
  const [adding, setAdding]       = useState(null);
  const [draft, setDraft]         = useState(EMPTY_DRAFT());
  const [gcal, setGcal]           = useState({ connected: false, configured: false });

  const load = useCallback(() => api.getTasks().then(setTasks).catch(console.error), []);

  useEffect(() => {
    load();
    api.getGcalStatus().then(setGcal).catch(() => {});
  }, [load]);

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteTask, api.restoreTask, load
  );

  const byQ = (q) => tasks.filter((t) => t.quadrant === q);
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
      pillar: draft.pillar,
      title: draft.title,
      quadrant: q,
      time_estimate_min: Number(draft.est) || 30,
      start_datetime,
    });
    setDraft(EMPTY_DRAFT());
    setAdding(null);
    load();
  };

  const deleteTask = (id, title) => softDelete(id, title);

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

      <div style={S.grid}>
        {QUADRANTS.map((quad) => (
          <section key={quad.id} style={{ ...S.quad, borderTop: `3px solid ${quad.accent}` }}>
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
                return (
                  <div key={t.id} style={{ ...S.card, background: p.soft }}>
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
                      <button onClick={() => deleteTask(t.id, t.title)} style={S.delBtn}><X size={13} /></button>
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
                    <select
                      value={draft.pillar}
                      onChange={(e) => setDraft({ ...draft, pillar: e.target.value })}
                      style={S.select}
                    >
                      {Object.keys(PILLARS).map((p) => <option key={p}>{p}</option>)}
                    </select>
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
      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 26px", color: "#26241F", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 22 },
  headRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 30, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif" },
  legend: { display: "flex", gap: 14, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B675E", fontWeight: 500 },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
  gcalBadgeOn:  { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "#4C9A6B", background: "rgba(76,154,107,0.10)", border: "1px solid rgba(76,154,107,0.3)", borderRadius: 20, padding: "5px 12px", cursor: "pointer" },
  gcalBadgeOff: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: "#6B675E", background: "#fff", border: "1px solid #DCDAD3", borderRadius: 20, padding: "5px 12px", cursor: "pointer" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 },
  quad: { background: "#fff", borderRadius: 12, padding: "16px 16px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.04),0 1px 2px rgba(0,0,0,0.06)" },
  quadHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 },
  quadTitleRow: { display: "flex", gap: 10, alignItems: "center" },
  symbol: { fontSize: 20, lineHeight: 1 },
  quadTitle: { fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em" },
  quadSub: { fontSize: 11, color: "#9A968C", marginTop: 1, letterSpacing: "0.02em" },
  quadTotal: { fontSize: 12, fontWeight: 600, color: "#6B675E", background: "#F2F1EC", padding: "3px 9px", borderRadius: 20 },
  list: { display: "flex", flexDirection: "column", gap: 8 },
  card: { display: "flex", alignItems: "stretch", gap: 10, borderRadius: 9, padding: "10px 10px 10px 0", overflow: "hidden" },
  cardBar: { width: 3, borderRadius: 3, flexShrink: 0 },
  cardBody: { flex: 1, minWidth: 0 },
  cardTitle: { fontSize: 13.5, fontWeight: 500, lineHeight: 1.35, marginBottom: 4 },
  eventTime: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#3A7CA5", fontWeight: 500, marginBottom: 5 },
  syncedDot: { width: 6, height: 6, borderRadius: "50%", background: "#4C9A6B", display: "inline-block", marginLeft: 2 },
  cardMeta: { display: "flex", gap: 8, flexWrap: "wrap" },
  metaPill: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6B675E", fontWeight: 500 },
  cardActions: { display: "flex", flexDirection: "column", gap: 4, alignSelf: "center", flexShrink: 0 },
  calDoneIcon: { width: 30, height: 30, borderRadius: 8, background: "#4C9A6B", color: "#fff", display: "grid", placeItems: "center" },
  delBtn: { width: 30, height: 30, borderRadius: 8, border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", display: "grid", placeItems: "center" },
  addTrigger: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#9A968C", background: "none", border: "1px dashed #D9D6CE", borderRadius: 8, padding: "8px 10px", cursor: "pointer", fontWeight: 500, marginTop: 2 },
  addBox: { border: "1px solid #E4E2DA", borderRadius: 9, padding: 10, display: "flex", flexDirection: "column", gap: 8 },
  // Date/time row
  dateTimeRow: { display: "flex", gap: 8, alignItems: "flex-end" },
  dateTimeGroup: { display: "flex", flexDirection: "column", gap: 3, flex: 1 },
  dtLabel: { fontSize: 10, fontWeight: 600, color: "#9A968C", letterSpacing: "0.08em", textTransform: "uppercase" },
  dtInput: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "6px 8px", fontSize: 12.5, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  dtEndValue: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "6px 8px", fontSize: 12.5, color: "#6B675E", background: "#F7F6F3" },
  // Bottom row
  addRow: { display: "flex", alignItems: "center", gap: 6 },
  input: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 0 },
  select: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "7px 8px", fontSize: 12.5, fontFamily: "inherit", flex: 1 },
  minLabel: { fontSize: 11, color: "#9A968C" },
  gcalHint: { color: "#3A7CA5", display: "grid", placeItems: "center" },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
  cancelBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
};
