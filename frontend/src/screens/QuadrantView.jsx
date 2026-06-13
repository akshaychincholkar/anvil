import { useState, useEffect } from "react";
import { Plus, Clock, CalendarPlus, Check, X } from "lucide-react";
import { api } from "../api.js";

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

export default function QuadrantView() {
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(null);
  const [draft, setDraft] = useState({ title: "", pillar: "Financial", est: 30 });

  const load = () => api.getTasks().then(setTasks).catch(console.error);
  useEffect(() => { load(); }, []);

  const byQ = (q) => tasks.filter((t) => t.quadrant === q);
  const totalMin = (q) => byQ(q).reduce((s, t) => s + t.time_estimate_min, 0);
  const fmt = (m) => m >= 60 ? `${Math.floor(m/60)}h${m%60 ? ` ${m%60}m` : ""}` : `${m}m`;

  const calendarTitle = (t) => {
    const sym = QUADRANTS.find((q) => q.id === t.quadrant)?.symbol ?? "";
    return `${sym} ${t.title}`;
  };

  const addTask = async (q) => {
    if (!draft.title.trim()) return;
    await api.createTask({ pillar: draft.pillar, title: draft.title, quadrant: q, time_estimate_min: Number(draft.est) || 30 });
    setDraft({ title: "", pillar: "Financial", est: 30 });
    setAdding(null);
    load();
  };

  const scheduleTask = async (task) => {
    await api.scheduleTask(task.id);
    load();
  };

  const deleteTask = async (id) => {
    await api.deleteTask(id);
    load();
  };

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Weekly Routing</div>
          <h1 style={S.h1}>Weekly Routing</h1>
        </div>
        <div style={S.legend}>
          {Object.entries(PILLARS).map(([name, c]) => (
            <span key={name} style={S.legendItem}>
              <span style={{ ...S.dot, background: c.dot }} />
              {name}
            </span>
          ))}
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
                      {scheduled && (
                        <div style={S.calPreview}>
                          <CalendarPlus size={10} /> on calendar as <strong>{calendarTitle(t)}</strong>
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
                      <button
                        onClick={() => scheduleTask(t)}
                        title={scheduled ? "On calendar" : "Send to calendar"}
                        style={{ ...S.calBtn, ...(scheduled ? S.calBtnDone : {}) }}
                      >
                        {scheduled ? <Check size={14} /> : <CalendarPlus size={14} />}
                      </button>
                      <button onClick={() => deleteTask(t.id)} style={S.delBtn}><X size={13} /></button>
                    </div>
                  </div>
                );
              })}

              {adding === quad.id ? (
                <div style={S.addBox}>
                  <input
                    autoFocus
                    placeholder="Task title"
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && addTask(quad.id)}
                    style={S.input}
                  />
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
                      style={{ ...S.input, width: 64 }}
                    />
                    <span style={S.minLabel}>min</span>
                    <button onClick={() => addTask(quad.id)} style={S.saveBtn}><Check size={14} /></button>
                    <button onClick={() => setAdding(null)} style={S.cancelBtn}><X size={14} /></button>
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
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "28px 26px", color: "#26241F", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 22 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 30, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif" },
  legend: { display: "flex", gap: 14, flexWrap: "wrap" },
  legendItem: { display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#6B675E", fontWeight: 500 },
  dot: { width: 9, height: 9, borderRadius: "50%", display: "inline-block", flexShrink: 0 },
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
  cardTitle: { fontSize: 13.5, fontWeight: 500, lineHeight: 1.35, marginBottom: 6 },
  cardMeta: { display: "flex", gap: 8, flexWrap: "wrap" },
  calPreview: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#4C9A6B", fontWeight: 500, marginBottom: 6, flexWrap: "wrap" },
  metaPill: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6B675E", fontWeight: 500 },
  cardActions: { display: "flex", flexDirection: "column", gap: 4, alignSelf: "center", flexShrink: 0 },
  calBtn: { width: 30, height: 30, borderRadius: 8, border: "none", background: "#fff", color: "#6B675E", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" },
  calBtnDone: { background: "#4C9A6B", color: "#fff" },
  delBtn: { width: 30, height: 30, borderRadius: 8, border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", display: "grid", placeItems: "center" },
  addTrigger: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#9A968C", background: "none", border: "1px dashed #D9D6CE", borderRadius: 8, padding: "8px 10px", cursor: "pointer", fontWeight: 500, marginTop: 2 },
  addBox: { border: "1px solid #E4E2DA", borderRadius: 9, padding: 9, display: "flex", flexDirection: "column", gap: 8 },
  addRow: { display: "flex", alignItems: "center", gap: 6 },
  input: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", flex: 1, minWidth: 0 },
  select: { border: "1px solid #E4E2DA", borderRadius: 6, padding: "7px 8px", fontSize: 12.5, fontFamily: "inherit", flex: 1 },
  minLabel: { fontSize: 11, color: "#9A968C" },
  saveBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
  cancelBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 30, height: 30, borderRadius: 6, cursor: "pointer", display: "grid", placeItems: "center" },
};
