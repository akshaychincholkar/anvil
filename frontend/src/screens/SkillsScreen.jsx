import { useState, useEffect, useCallback } from "react";
import { BookOpen, Youtube, FileText, Plus, X, Check, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { api } from "../api.js";

const STAGES = [
  { id: "D", label: "Data",        color: "#3A7CA5", soft: "rgba(58,124,165,0.10)",  prompt: "What did you read/watch? Log the raw source and a quick note.",         hint: "e.g. 'Atomic Habits ch.1 — habits are systems not goals'" },
  { id: "I", label: "Information", color: "#8268B0", soft: "rgba(130,104,176,0.10)", prompt: "What did you actually understand from it? In your own words.",            hint: "e.g. 'Small 1% improvements compound into massive change over time'" },
  { id: "K", label: "Knowledge",   color: "#C9A227", soft: "rgba(201,162,39,0.10)",  prompt: "How will this specifically improve your life? Connect it to your goals.", hint: "e.g. 'I will improve my morning workout habit by 1% each week'" },
  { id: "W", label: "Wisdom",      color: "#4C9A6B", soft: "rgba(76,154,107,0.10)",  prompt: "How have you implemented it? What changed?",                             hint: "e.g. 'I've not missed a workout in 3 weeks using the 1% rule'" },
];
const stageIndex = (id) => STAGES.findIndex((s) => s.id === id);

const SOURCE_TYPES = [
  { id: "book",    label: "Book",    icon: BookOpen },
  { id: "video",   label: "Video",   icon: Youtube },
  { id: "article", label: "Article", icon: FileText },
];
const srcInfo = (type) => SOURCE_TYPES.find((s) => s.id === type) || SOURCE_TYPES[0];

const PILLARS = { Financial: "#C9A227", Academic: "#3A7CA5", Relationship: "#C2536B", Health: "#4C9A6B", Spiritual: "#8268B0" };

export default function SkillsScreen() {
  const [skills, setSkills] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [adding, setAdding] = useState(false);
  const [celebrated, setCelebrated] = useState(null);
  const [newSkill, setNewSkill] = useState({ title: "", type: "book", pillar: "Academic", note: "" });
  const [localNotes, setLocalNotes] = useState({});

  const load = useCallback(() => api.getSkills().then((ss) => {
    setSkills(ss);
    const notes = {};
    ss.forEach((s) => { notes[s.id] = { ...s.notes }; });
    setLocalNotes(notes);
  }).catch(console.error), []);

  useEffect(() => { load(); }, [load]);

  const skill = skills.find((s) => s.id === selected);
  const sIdx = skill ? stageIndex(skill.stage) : -1;

  const saveNotes = async (skillId) => {
    const notes = localNotes[skillId];
    if (!notes) return;
    await api.updateSkill(skillId, {
      note_d: notes.D, note_i: notes.I, note_k: notes.K, note_w: notes.W,
    });
    load();
  };

  const advance = async (skillId) => {
    const sk = skills.find((s) => s.id === skillId);
    if (!sk) return;
    const idx = stageIndex(sk.stage);
    if (idx >= STAGES.length - 1) return;
    const nextStage = STAGES[idx + 1].id;
    if (nextStage === "W") setCelebrated(skillId);
    await api.updateSkill(skillId, { stage: nextStage });
    load();
  };

  const createSkill = async () => {
    if (!newSkill.title.trim()) return;
    const s = await api.createSkill({ pillar: newSkill.pillar, title: newSkill.title.trim(), source_type: newSkill.type, note_d: newSkill.note.trim() });
    setAdding(false);
    setNewSkill({ title: "", type: "book", pillar: "Academic", note: "" });
    setSelected(s.id);
    load();
  };

  const deleteSkill = async (id) => {
    await api.deleteSkill(id);
    if (selected === id) setSelected(null);
    load();
  };

  const filtered = filter === "ALL" ? skills : skills.filter((s) => s.stage === filter);
  const wisdomCount = skills.filter((s) => s.stage === "W").length;

  return (
    <div style={S.page}>
      {celebrated && (
        <div style={S.celebOverlay}>
          <div style={S.celebBox}>
            <div style={S.celebEmoji}>🏆</div>
            <div style={S.celebTitle}>Wisdom unlocked!</div>
            <div style={S.celebSub}>You've implemented this knowledge — that's rare and real.</div>
            <button onClick={() => setCelebrated(null)} style={S.celebBtn}>Continue</button>
          </div>
        </div>
      )}

      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Skills</div>
          <h1 style={S.h1}>DIKW Skills</h1>
          <div style={S.subhead}>Data → Information → Knowledge → Wisdom</div>
        </div>
        <div style={S.headRight}>
          <div style={S.wisdomBadge}><Trophy size={14} color="#C9A227" /> {wisdomCount} Wisdom{wisdomCount !== 1 ? "s" : ""}</div>
          <button onClick={() => { setAdding(true); setSelected(null); }} style={S.addSkillBtn}><Plus size={15} /> Add skill</button>
        </div>
      </div>

      <div style={S.filterBar}>
        {["ALL", ...STAGES.map((s) => s.id)].map((f) => {
          const stage = STAGES.find((s) => s.id === f);
          const on = filter === f;
          return (
            <button key={f} onClick={() => setFilter(f)}
              style={{ ...S.filterBtn, ...(on ? { background: stage ? stage.color : "#26241F", color: "#fff", borderColor: "transparent" } : {}) }}>
              {stage ? `${f} · ${stage.label}` : "All"}
            </button>
          );
        })}
      </div>

      <div style={S.layout}>
        <div style={S.cardList}>
          {adding && (
            <div style={{ ...S.skillCard, border: "2px dashed #3A7CA5" }}>
              <div style={S.cardTitle}>New skill</div>
              <input placeholder="Title (book / video / article name)" value={newSkill.title}
                onChange={(e) => setNewSkill((n) => ({ ...n, title: e.target.value }))}
                onKeyDown={(e) => e.key === "Enter" && createSkill()}
                style={S.input} autoFocus />
              <div style={S.addRow}>
                <select value={newSkill.type} onChange={(e) => setNewSkill((n) => ({ ...n, type: e.target.value }))} style={S.select}>
                  {SOURCE_TYPES.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                </select>
                <select value={newSkill.pillar} onChange={(e) => setNewSkill((n) => ({ ...n, pillar: e.target.value }))} style={S.select}>
                  {Object.keys(PILLARS).map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <input placeholder="First note (what did you read/watch?)" value={newSkill.note}
                onChange={(e) => setNewSkill((n) => ({ ...n, note: e.target.value }))}
                style={S.input} />
              <div style={S.addRow}>
                <button onClick={createSkill} style={S.saveBtn}><Check size={14} /> Save</button>
                <button onClick={() => setAdding(false)} style={S.cancelBtn}><X size={14} /> Cancel</button>
              </div>
            </div>
          )}

          {filtered.map((sk) => {
            const si = stageIndex(sk.stage);
            const stage = STAGES[si];
            const Src = srcInfo(sk.type);
            const isWisdom = sk.stage === "W";
            const isSel = selected === sk.id;
            return (
              <div key={sk.id} onClick={() => setSelected(isSel ? null : sk.id)}
                style={{ ...S.skillCard, ...(isSel ? { borderColor: stage.color, borderWidth: 2 } : {}), ...(isWisdom ? { background: "rgba(76,154,107,0.05)" } : {}) }}>
                <div style={S.skillCardTop}>
                  <div style={S.skillMeta}>
                    <span style={{ color: PILLARS[sk.pillar] }}><Src.icon size={13} /></span>
                    <span style={{ ...S.pillarDot, background: PILLARS[sk.pillar] }} />
                    <span style={S.srcLabel}>{Src.label} · {sk.pillar}</span>
                  </div>
                  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    {isWisdom && <Sparkles size={14} color="#4C9A6B" />}
                    <button onClick={(e) => { e.stopPropagation(); deleteSkill(sk.id); }} style={S.ghostBtn}><X size={13} /></button>
                  </div>
                </div>
                <div style={S.skillTitle}>{sk.title}</div>
                <div style={S.track}>
                  {STAGES.map((st, i) => {
                    const done = i <= si;
                    const current = i === si;
                    return (
                      <div key={st.id} style={S.trackItem}>
                        <div style={{ ...S.trackDot, background: done ? st.color : "#E4E2DA", boxShadow: current ? `0 0 0 3px ${st.color}33` : "none" }}>
                          {done && i < si && <Check size={9} color="#fff" strokeWidth={3} />}
                          {current && <span style={S.trackCurrent}>{st.id}</span>}
                        </div>
                        {i < STAGES.length - 1 && <div style={{ ...S.trackLine, background: i < si ? STAGES[i+1].color : "#E4E2DA" }} />}
                      </div>
                    );
                  })}
                  <span style={{ ...S.stageTag, background: stage.soft, color: stage.color }}>{stage.label}</span>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && !adding && (
            <div style={S.empty}>No skills at this stage yet.</div>
          )}
        </div>

        {skill && localNotes[skill.id] && (
          <div style={S.detail}>
            <div style={S.detailHead}>
              <div>
                <div style={S.eyebrow}>{srcInfo(skill.type).label} · {skill.pillar}</div>
                <div style={S.detailTitle}>{skill.title}</div>
              </div>
              <button onClick={() => setSelected(null)} style={S.closeBtn}><X size={16} /></button>
            </div>

            {STAGES.map((st, i) => {
              const unlocked = i <= sIdx;
              const isCurrent = i === sIdx;
              const isDone = i < sIdx;
              const noteKey = st.id;
              return (
                <div key={st.id} style={{ ...S.stageBlock, ...(unlocked ? { borderColor: st.color } : {}), opacity: unlocked ? 1 : 0.45 }}>
                  <div style={S.stageBlockHead}>
                    <div style={{ ...S.stageLetter, background: unlocked ? st.color : "#E4E2DA", color: unlocked ? "#fff" : "#9A968C" }}>{st.id}</div>
                    <div>
                      <div style={{ ...S.stageName, color: unlocked ? st.color : "#9A968C" }}>{st.label}</div>
                      {unlocked && <div style={S.stagePrompt}>{st.prompt}</div>}
                    </div>
                    {isDone && <Check size={16} color={st.color} style={{ marginLeft: "auto" }} />}
                  </div>
                  {unlocked && (
                    <textarea
                      placeholder={st.hint}
                      value={localNotes[skill.id][noteKey] ?? ""}
                      onChange={(e) => setLocalNotes((n) => ({ ...n, [skill.id]: { ...n[skill.id], [noteKey]: e.target.value } }))}
                      onBlur={() => saveNotes(skill.id)}
                      readOnly={isDone}
                      style={{ ...S.textarea, ...(isDone ? S.textareaDone : {}) }}
                      rows={isCurrent ? 4 : 2}
                    />
                  )}
                </div>
              );
            })}

            {skill.stage !== "W" ? (
              <button onClick={() => advance(skill.id)} style={{ ...S.advanceBtn, background: STAGES[sIdx].color }}>
                <ArrowRight size={15} />
                Mark as {STAGES[sIdx + 1]?.label} →
              </button>
            ) : (
              <div style={S.wisdomDone}><Trophy size={16} color="#4C9A6B" /> Wisdom achieved — implemented in your life</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100%", padding: "26px 22px", color: "#26241F", boxSizing: "border-box", position: "relative" },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 12.5, color: "#9A968C", marginTop: 3 },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 18 },
  headRight: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" },
  wisdomBadge: { display: "flex", alignItems: "center", gap: 5, background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)", padding: "6px 12px", borderRadius: 20, fontSize: 12.5, fontWeight: 700, color: "#8A6E1A" },
  addSkillBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "#26241F", color: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  filterBar: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 },
  filterBtn: { border: "1px solid #E0DDD5", background: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  layout: { display: "grid", gridTemplateColumns: skill => skill ? "1fr 1fr" : "1fr", gap: 12 },
  cardList: { display: "flex", flexDirection: "column", gap: 10 },
  skillCard: { background: "#fff", borderRadius: 12, padding: "14px", border: "1.5px solid #ECEAE3", cursor: "pointer", boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
  skillCardTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 },
  skillMeta: { display: "flex", alignItems: "center", gap: 6 },
  pillarDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  srcLabel: { fontSize: 11, fontWeight: 600, color: "#9A968C" },
  skillTitle: { fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 12 },
  cardTitle: { fontSize: 13, fontWeight: 700, marginBottom: 10 },
  track: { display: "flex", alignItems: "center" },
  trackItem: { display: "flex", alignItems: "center" },
  trackDot: { width: 22, height: 22, borderRadius: "50%", display: "grid", placeItems: "center", flexShrink: 0 },
  trackCurrent: { fontSize: 9, fontWeight: 800, color: "#fff" },
  trackLine: { width: 24, height: 3, borderRadius: 2 },
  stageTag: { fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 12, marginLeft: 10 },
  detail: { background: "#fff", borderRadius: 14, padding: "18px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", border: "1.5px solid #ECEAE3", alignSelf: "start" },
  detailHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 },
  detailTitle: { fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  closeBtn: { border: "none", background: "#F2F1EC", color: "#6B675E", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  stageBlock: { border: "1.5px solid #ECEAE3", borderRadius: 10, padding: "12px 13px", marginBottom: 10 },
  stageBlockHead: { display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 },
  stageLetter: { width: 28, height: 28, borderRadius: 8, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 },
  stageName: { fontSize: 13, fontWeight: 700 },
  stagePrompt: { fontSize: 11.5, color: "#6B675E", marginTop: 2, lineHeight: 1.4 },
  textarea: { width: "100%", border: "1px solid #E4E2DA", borderRadius: 8, padding: "9px 10px", fontSize: 13.5, fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.5, color: "#26241F" },
  textareaDone: { background: "#FAFAF8", color: "#6B675E", borderColor: "transparent", resize: "none" },
  advanceBtn: { display: "flex", alignItems: "center", gap: 8, border: "none", color: "#fff", padding: "11px 18px", borderRadius: 9, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", width: "100%", justifyContent: "center", marginTop: 4 },
  wisdomDone: { display: "flex", alignItems: "center", gap: 8, justifyContent: "center", fontSize: 13.5, fontWeight: 700, color: "#4C9A6B", padding: 12, background: "rgba(76,154,107,0.08)", borderRadius: 10, marginTop: 4 },
  ghostBtn: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", padding: 2, display: "grid", placeItems: "center" },
  input: { border: "1px solid #E4E2DA", borderRadius: 8, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box", marginBottom: 8 },
  select: { border: "1px solid #E4E2DA", borderRadius: 8, padding: "8px 10px", fontSize: 12.5, fontFamily: "inherit", flex: 1 },
  addRow: { display: "flex", gap: 8, marginBottom: 8 },
  saveBtn: { display: "flex", alignItems: "center", gap: 5, border: "none", background: "#4C9A6B", color: "#fff", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E4E2DA", background: "#fff", color: "#6B675E", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  empty: { fontSize: 13, color: "#9A968C", padding: "32px 12px", textAlign: "center" },
  celebOverlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.55)", zIndex: 50, display: "grid", placeItems: "center" },
  celebBox: { background: "#fff", borderRadius: 20, padding: "40px 32px", textAlign: "center", maxWidth: 320, boxShadow: "0 8px 40px rgba(0,0,0,0.18)" },
  celebEmoji: { fontSize: 52, marginBottom: 12 },
  celebTitle: { fontSize: 22, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 8 },
  celebSub: { fontSize: 13.5, color: "#6B675E", lineHeight: 1.5, marginBottom: 22 },
  celebBtn: { border: "none", background: "#4C9A6B", color: "#fff", padding: "11px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
