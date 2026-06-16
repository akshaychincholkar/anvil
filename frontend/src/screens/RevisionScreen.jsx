import { useState, useEffect, useCallback, useMemo } from "react";
import { Plus, X, Check, ChevronDown, ChevronRight, RotateCcw, Trophy, Pencil } from "lucide-react";
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
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const todayISO = () => new Date().toISOString().slice(0, 10);
const monthLabel = (y, m) => `${MONTHS_SHORT[m-1]} ${y}`;

const monthDates = (year, month) => {
  const days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (_, i) =>
    `${year}-${String(month).padStart(2,"0")}-${String(i+1).padStart(2,"0")}`
  );
};

const monthStartOffset = (year, month) => {
  const dow = new Date(year, month - 1, 1).getDay();
  return dow === 0 ? 6 : dow - 1;
};

export default function RevisionScreen() {
  const today = todayISO();
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const [topics, setTopics] = useState([]);
  const [dueToday, setDueToday] = useState([]);
  const [calendar, setCalendar] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [cementedOpen, setCementedOpen] = useState(false);
  const [adding, setAdding] = useState(false);
  const [newTopic, setNewTopic] = useState({ topic: "", pillar: "Academic", intervals: "1,3,7,15,30", learned_date: today });
  const [editing, setEditing] = useState(null); // { id, topic, pillar, intervals, learned_date }

  const load = useCallback(async () => {
    const [t, d, c] = await Promise.all([
      api.getTopics(),
      api.getDueToday(),
      api.getCalendar(year, month),
    ]);
    setTopics(t);
    setDueToday(d);
    setCalendar(c);
  }, [year, month]);

  useEffect(() => { load(); }, [load]);

  const toggleReview = async (reviewId) => {
    await api.toggleReviewDone(reviewId);
    load();
  };

  const createTopic = async () => {
    const intervalArr = newTopic.intervals.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n));
    if (!newTopic.topic.trim() || intervalArr.length === 0) return;
    await api.createTopic({ pillar: newTopic.pillar, topic: newTopic.topic.trim(), intervals: intervalArr, learned_date: newTopic.learned_date || today });
    setNewTopic({ topic: "", pillar: "Academic", intervals: "1,3,7,15,30", learned_date: today });
    setAdding(false);
    load();
  };

  const { deleteItem: softDeleteTopic, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteTopic, api.restoreTopic, load
  );
  const deleteTopic = (id, topic) => softDeleteTopic(id, topic);

  const startEdit = (t) => setEditing({ id: t.id, topic: t.topic, pillar: t.pillar, intervals: (t.intervals || []).join(", "), learned_date: t.learned_date });
  const commitEdit = async () => {
    if (!editing) return;
    const intervalArr = editing.intervals.split(",").map((s) => parseInt(s.trim(), 10)).filter((n) => !isNaN(n) && n >= 0);
    if (!editing.topic.trim() || intervalArr.length === 0) return;
    await api.updateTopic(editing.id, {
      topic: editing.topic.trim(),
      pillar: editing.pillar,
      learned_date: editing.learned_date,
      intervals: intervalArr,
    });
    setEditing(null);
    load();
  };

  const prevMonth = () => {
    if (month === 1) { setYear((y) => y - 1); setMonth(12); }
    else setMonth((m) => m - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (month === 12) { setYear((y) => y + 1); setMonth(1); }
    else setMonth((m) => m + 1);
    setSelectedDay(null);
  };

  const active = topics.filter((t) => !t.cemented);
  const cemented = topics.filter((t) => t.cemented);

  const dates = monthDates(year, month);
  const offset = monthStartOffset(year, month);

  // Pending reviews due per date — used to list the actual topics in each calendar cell.
  const reviewsByDate = useMemo(() => {
    const m = {};
    topics.forEach((t) => t.reviews.forEach((r) => {
      if (r.done) return;
      (m[r.due_date] = m[r.due_date] || []).push({ topic: t.topic, pillar: t.pillar, stage: r.stage });
    }));
    return m;
  }, [topics]);

  // Reviews for selected day (from topics list)
  const selectedDayReviews = selectedDay
    ? topics.flatMap((t) => t.reviews.filter((r) => r.due_date === selectedDay).map((r) => ({ ...r, topic: t.topic, pillar: t.pillar, total: t.reviews.length })))
    : [];

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Revision</div>
          <h1 style={S.h1}>Spaced Repetition</h1>
        </div>
        <button onClick={() => setAdding(true)} style={S.addBtn}><Plus size={15} /> Add topic</button>
      </div>

      {/* Add topic form */}
      {adding && (
        <div style={S.addBox}>
          <input autoFocus placeholder="What did you learn?" value={newTopic.topic}
            onChange={(e) => setNewTopic((n) => ({ ...n, topic: e.target.value }))}
            onKeyDown={(e) => e.key === "Enter" && createTopic()}
            style={S.input} />
          <div style={S.addRow}>
            <select value={newTopic.pillar} onChange={(e) => setNewTopic((n) => ({ ...n, pillar: e.target.value }))} style={S.select}>
              {PILLAR_NAMES.map((p) => <option key={p}>{p}</option>)}
            </select>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" }}>Learned on</label>
              <input type="date" value={newTopic.learned_date}
                onChange={(e) => setNewTopic((n) => ({ ...n, learned_date: e.target.value }))}
                style={{ ...S.select, fontSize: 13 }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <input value={newTopic.intervals}
                onChange={(e) => setNewTopic((n) => ({ ...n, intervals: e.target.value }))}
                placeholder="Intervals (days): 1,3,7,15,30"
                style={S.input} />
            </div>
          </div>
          <div style={S.addRow}>
            <button onClick={createTopic} style={S.saveBtn}><Check size={14} /> Save</button>
            <button onClick={() => setAdding(false)} style={S.cancelBtn}><X size={14} /> Cancel</button>
          </div>
        </div>
      )}

      {/* Due today */}
      {dueToday.length > 0 && (
        <div style={S.section}>
          <div style={S.sectionTitle}>
            <RotateCcw size={15} color="#C2536B" />
            Due Today
            <span style={S.badge}>{dueToday.length}</span>
          </div>
          {dueToday.map((r) => {
            const c = PILLARS[r.pillar]?.dot || "#9A968C";
            return (
              <div key={r.review_id} style={{ ...S.reviewCard, borderLeft: `3px solid ${c}`, ...(r.is_missed ? { opacity: 0.85 } : {}) }}>
                <button onClick={() => toggleReview(r.review_id)} style={{ ...S.checkbox, ...(r.done ? { background: "#4C9A6B", borderColor: "#4C9A6B" } : {}) }}>
                  {r.done && <Check size={12} color="#fff" strokeWidth={3} />}
                </button>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={S.reviewTopic}>{r.topic}</div>
                  <div style={S.reviewMeta}>
                    <span style={{ ...S.stageTag, background: PILLARS[r.pillar]?.soft || "rgba(0,0,0,0.05)", color: c }}>
                      Review {r.stage}/{r.total_stages}
                    </span>
                    {r.is_missed && <span style={S.missedTag}>missed · {r.due_date}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Active topics */}
      <div style={S.section}>
        <div style={S.sectionTitle}>Active Topics <span style={S.badge}>{active.length}</span></div>
        {active.length === 0 && (
          <div style={S.empty}>No active topics. Add something you learned today.</div>
        )}
        {active.map((t) => {
          const c = PILLARS[t.pillar]?.dot || "#9A968C";
          const soft = PILLARS[t.pillar]?.soft || "rgba(0,0,0,0.05)";
          const done = t.reviews.filter((r) => r.done).length;
          if (editing?.id === t.id) {
            return (
              <div key={t.id} style={S.addBox}>
                <input autoFocus value={editing.topic}
                  onChange={(e) => setEditing((n) => ({ ...n, topic: e.target.value }))}
                  onKeyDown={(e) => e.key === "Enter" && commitEdit()}
                  placeholder="Topic" style={S.input} />
                <div style={S.addRow}>
                  <select value={editing.pillar} onChange={(e) => setEditing((n) => ({ ...n, pillar: e.target.value }))} style={S.select}>
                    {PILLAR_NAMES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <label style={{ fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase" }}>Learned on</label>
                    <input type="date" value={editing.learned_date}
                      onChange={(e) => setEditing((n) => ({ ...n, learned_date: e.target.value }))}
                      style={{ ...S.select, fontSize: 13 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <input value={editing.intervals}
                      onChange={(e) => setEditing((n) => ({ ...n, intervals: e.target.value }))}
                      placeholder="Intervals (days): 1,3,7,15,30" style={S.input} />
                  </div>
                </div>
                <div style={S.editHint}>Changing the date or intervals reschedules the reviews (completed steps are kept where they still apply).</div>
                <div style={S.addRow}>
                  <button onClick={commitEdit} style={S.saveBtn}><Check size={14} /> Save plan</button>
                  <button onClick={() => setEditing(null)} style={S.cancelBtn}><X size={14} /> Cancel</button>
                </div>
              </div>
            );
          }
          return (
            <div key={t.id} style={S.topicCard}>
              <div style={S.topicHead}>
                <span style={{ ...S.dot, background: c }} />
                <span style={S.topicName}>{t.topic}</span>
                <span style={S.topicPillar}>{t.pillar}</span>
                <span style={S.topicProgress}>{done}/{t.reviews.length} done</span>
                <button onClick={() => startEdit(t)} style={S.ghostBtn} title="Edit plan"><Pencil size={12} /></button>
                <button onClick={() => deleteTopic(t.id, t.topic)} style={S.ghostBtn} title="Delete"><X size={13} /></button>
              </div>
              <div style={S.reviewDots}>
                {t.reviews.map((r) => {
                  const isPast = r.due_date < today;
                  const isToday = r.due_date === today;
                  return (
                    <button key={r.id} onClick={() => toggleReview(r.id)}
                      title={`Review ${r.stage} · ${r.due_date}${r.done ? " · Done" : ""}`}
                      style={{
                        ...S.reviewDot,
                        background: r.done ? c : (isToday ? soft : "var(--hover)"),
                        border: `2px solid ${r.done ? c : (isToday ? c : "var(--border)")}`,
                        color: r.done ? "#fff" : c,
                      }}>
                      {r.stage}
                    </button>
                  );
                })}
                <span style={S.learnedDate}>Learned {t.learned_date}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cemented */}
      {cemented.length > 0 && (
        <div style={S.section}>
          <button onClick={() => setCementedOpen((o) => !o)} style={S.cementedToggle}>
            {cementedOpen ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
            <Trophy size={14} color="#C9A227" />
            Cemented
            <span style={{ ...S.badge, background: "rgba(201,162,39,0.12)", color: "#8A6E1A" }}>{cemented.length}</span>
          </button>
          {cementedOpen && cemented.map((t) => {
            const c = PILLARS[t.pillar]?.dot || "#9A968C";
            return (
              <div key={t.id} style={{ ...S.topicCard, opacity: 0.75 }}>
                <div style={S.topicHead}>
                  <span style={{ ...S.dot, background: c }} />
                  <span style={S.topicName}>{t.topic}</span>
                  <span style={S.topicPillar}>{t.pillar}</span>
                  <Trophy size={13} color="#C9A227" style={{ marginLeft: "auto" }} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Calendar */}
      <div style={S.calCard}>
        <div style={S.calHead}>
          <button onClick={prevMonth} style={S.calNav}>‹</button>
          <div style={S.calTitle}>{monthLabel(year, month)} · Review Calendar</div>
          <button onClick={nextMonth} style={S.calNav}>›</button>
        </div>
        <div style={S.calDow}>{DAYS.map((d) => <div key={d} style={S.calDowCell}>{d}</div>)}</div>
        <div style={S.calGrid}>
          {Array.from({ length: offset }).map((_, i) => <div key={`p${i}`} />)}
          {dates.map((dateStr, i) => {
            const dayItems = reviewsByDate[dateStr] || [];
            const isToday = dateStr === today;
            const isSel = dateStr === selectedDay;
            const isPast = dateStr < today;
            const numColor = isSel ? "#fff" : (isToday ? "var(--text)" : (isPast ? "var(--text-2)" : "var(--text-3)"));
            return (
              <button key={dateStr} onClick={() => setSelectedDay(isSel ? null : dateStr)}
                style={{
                  ...S.calDay,
                  background: isSel ? "var(--accent-strong)" : (isToday ? "var(--hover)" : "var(--surface)"),
                  borderColor: isToday ? "var(--accent-strong)" : (isSel ? "var(--accent-strong)" : "var(--border)"),
                }}>
                <span style={{ ...S.calDayNum, color: numColor, fontWeight: isToday || isSel ? 700 : 600 }}>{i + 1}</span>
                {dayItems.slice(0, 2).map((it, idx) => (
                  <span key={idx} title={it.topic}
                    style={{ ...S.calItem, color: isSel ? "#fff" : (PILLARS[it.pillar]?.dot || "var(--text-2)") }}>
                    {idx + 1}. {it.topic}
                  </span>
                ))}
                {dayItems.length > 2 && (
                  <span style={{ ...S.calMore, color: isSel ? "#fff" : "var(--text-3)" }}>+{dayItems.length - 2} more</span>
                )}
              </button>
            );
          })}
        </div>

        {selectedDay && (
          <div style={S.dayDetail}>
            <div style={S.dayDetailTitle}>Reviews for {selectedDay}</div>
            {selectedDayReviews.length === 0 ? (
              <div style={S.empty}>No reviews scheduled for this day.</div>
            ) : (
              selectedDayReviews.map((r, idx) => {
                const c = PILLARS[r.pillar]?.dot || "#9A968C";
                return (
                  <div key={r.id} style={{ ...S.reviewCard, borderLeft: `3px solid ${c}` }}>
                    <button onClick={() => toggleReview(r.id)}
                      style={{ ...S.checkbox, ...(r.done ? { background: "#4C9A6B", borderColor: "#4C9A6B" } : {}) }}>
                      {r.done && <Check size={12} color="#fff" strokeWidth={3} />}
                    </button>
                    <div>
                      <div style={S.reviewTopic}>{idx + 1}. {r.topic}</div>
                      <span style={{ ...S.stageTag, background: PILLARS[r.pillar]?.soft || "rgba(0,0,0,0.05)", color: c }}>
                        Review {r.stage}/{r.total}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "26px 22px", color: "var(--text)", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 20 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  addBox: { background: "var(--surface)", borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 10 },
  addRow: { display: "flex", gap: 8, alignItems: "center" },
  editHint: { fontSize: 11.5, color: "var(--text-3)", lineHeight: 1.4 },
  input: { flex: 1, border: "1px solid var(--border)", borderRadius: 8, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", minWidth: 0 },
  select: { border: "1px solid var(--border)", borderRadius: 8, padding: "9px 10px", fontSize: 12.5, fontFamily: "inherit", flexShrink: 0 },
  saveBtn: { display: "flex", alignItems: "center", gap: 5, border: "none", background: "#4C9A6B", color: "#fff", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  section: { marginBottom: 20 },
  sectionTitle: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginBottom: 10 },
  badge: { fontSize: 11, fontWeight: 700, background: "var(--hover)", color: "var(--text-2)", borderRadius: 10, padding: "1px 7px" },
  reviewCard: { display: "flex", alignItems: "center", gap: 12, background: "var(--surface)", borderRadius: 10, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  checkbox: { width: 22, height: 22, borderRadius: 6, border: "2px solid var(--border)", background: "var(--surface)", cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0, padding: 0 },
  reviewTopic: { fontSize: 13.5, fontWeight: 600, marginBottom: 4 },
  reviewMeta: { display: "flex", alignItems: "center", gap: 8 },
  stageTag: { fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10 },
  missedTag: { fontSize: 11, color: "#C2536B", fontWeight: 600 },
  topicCard: { background: "var(--surface)", borderRadius: 12, padding: "13px 14px", marginBottom: 8, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  topicHead: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 },
  dot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0, display: "inline-block" },
  topicName: { fontSize: 14, fontWeight: 600, flex: 1 },
  topicPillar: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },
  topicProgress: { fontSize: 11, fontWeight: 700, color: "var(--text-2)", background: "var(--hover)", padding: "2px 7px", borderRadius: 10 },
  ghostBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 2, display: "grid", placeItems: "center" },
  reviewDots: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" },
  reviewDot: { width: 28, height: 28, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700, padding: 0 },
  learnedDate: { fontSize: 11, color: "var(--text-3)", marginLeft: "auto" },
  cementedToggle: { display: "flex", alignItems: "center", gap: 8, border: "none", background: "none", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "var(--text-2)", padding: "4px 0", fontFamily: "inherit", marginBottom: 8 },
  empty: { fontSize: 13, color: "var(--text-3)", padding: "16px 0", textAlign: "center" },
  calCard: { background: "var(--surface)", borderRadius: 12, padding: "16px 16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  calHead: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  calTitle: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  calNav: { border: "none", background: "none", fontSize: 20, cursor: "pointer", color: "var(--text-2)", padding: "0 6px", lineHeight: 1 },
  calDow: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 },
  calDowCell: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textAlign: "center", textTransform: "uppercase" },
  calGrid: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 },
  calDay: { minHeight: 62, border: "1.5px solid var(--border)", background: "var(--surface)", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", gap: 1, position: "relative", padding: "3px 4px", overflow: "hidden", textAlign: "left" },
  calDayNum: { fontSize: 11, lineHeight: 1.1, marginBottom: 1 },
  calItem: { fontSize: 8.5, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: 1.3, textAlign: "left" },
  calMore: { fontSize: 8, fontWeight: 700, opacity: 0.85, lineHeight: 1.2 },
  dayDetail: { marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" },
  dayDetailTitle: { fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginBottom: 10 },
};
