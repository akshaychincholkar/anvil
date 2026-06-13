import { useState, useEffect } from "react";
import { Plus, X, Bookmark, BookOpen, Flame, ChevronDown, ChevronRight, Menu, Star, Pencil, Check } from "lucide-react";

// ── Mood options (reused from journal) ─────────────────────────
const MOODS = [
  { id: 1, emoji: "😣", label: "Rough",  color: "#C2536B" },
  { id: 2, emoji: "🙁", label: "Low",    color: "#C2773B" },
  { id: 3, emoji: "😐", label: "Okay",   color: "#C9A227" },
  { id: 4, emoji: "🙂", label: "Good",   color: "#4C9A6B" },
  { id: 5, emoji: "😄", label: "Great",  color: "#3A7CA5" },
];

// ── Seed scriptures with chapters and notes ────────────────────
const SEED = [
  {
    id: "sc1", name: "Atharva Veda", color: "#8268B0",
    streak: 4,
    chapters: [
      {
        id: "c1", title: "Hymn 1 — Healing & Protection", date: "10 Jun 2026",
        mood: 4, bookmarked: true,
        insights: ["The Veda recognises sound as the primary force of creation", "Healing begins with intention held in the mind"],
        reflection: "Reminded me that my morning Sadhna is not ritual — it is reprogramming.",
        contemplation: "Use intention consciously before each trading decision, not just spiritual practice.",
      },
      {
        id: "c2", title: "Hymn 4 — The Nature of Time", date: "12 Jun 2026",
        mood: 5, bookmarked: false,
        insights: ["Kala (time) is described as the force that carries all beings", "Surrendering to time's flow reduces inner resistance"],
        reflection: "I resist timelines too much. The business will come when I've done the work.",
        contemplation: "Stop fixating on the exit date from employment. Do the reps.",
      },
    ],
  },
  {
    id: "sc2", name: "Durga Saptashati", color: "#C2536B",
    streak: 7,
    chapters: [
      {
        id: "c3", title: "Chapter 1 — Madhu Kaitabha Vadha", date: "8 Jun 2026",
        mood: 5, bookmarked: true,
        insights: ["Ego (Madhu-Kaitabha) must be dissolved before wisdom can emerge", "The Devi is invoked from within, not from outside"],
        reflection: "The obstacles I face are projections of internal resistance. The battle is inward.",
        contemplation: "Before each BRTN review, pause and ask: am I acting from ego or clarity?",
      },
      {
        id: "c4", title: "Chapter 3 — Mahishasura Mardini", date: "11 Jun 2026",
        mood: 4, bookmarked: false,
        insights: ["Mahisha (buffalo demon) represents tamasic inertia — the force of staying comfortable", "Victory requires sustained effort across many forms"],
        reflection: "Comfort is my Mahisha. The pull to scroll, to delay, to settle.",
        contemplation: "When I feel inertia before a deep-work block — that's Mahisha. Name it and act.",
      },
    ],
  },
  {
    id: "sc3", name: "Bhagavad Gita", color: "#C9A227",
    streak: 12,
    chapters: [
      {
        id: "c5", title: "Chapter 2 — Sankhya Yoga", date: "9 Jun 2026",
        mood: 5, bookmarked: true,
        insights: ["The Self is eternal — only the body changes", "Do your duty without attachment to results (Nishkama Karma)"],
        reflection: "Build the system. Don't obsess over the outcome. The work is the practice.",
        contemplation: "Ship the BRTN app as Nishkama Karma — for the craft, not the validation.",
      },
    ],
  },
  {
    id: "sc4", name: "Vigyan Bhairav Tantra", color: "#4C9A6B",
    streak: 2,
    chapters: [
      {
        id: "c6", title: "Dharana 1 — Breath as Gateway", date: "13 Jun 2026",
        mood: 4, bookmarked: false,
        insights: ["Awareness of the gap between inhalation and exhalation is the entry point", "112 methods — all lead to the same stillness"],
        reflection: "The pause between breaths is where I find the quiet I've been chasing.",
        contemplation: "Practice the gap-awareness for 2 minutes before Sadhna each evening.",
      },
    ],
  },
];

export default function SpiritualScreen() {
  const [scriptures, setScriptures] = useState(SEED);
  const [selectedId, setSelectedId] = useState("sc1");
  const [selectedChapter, setSelectedChapter] = useState("c1");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addingScripture, setAddingScripture] = useState(false);
  const [addingChapter, setAddingChapter] = useState(false);
  const [newScripture, setNewScripture] = useState({ name: "", color: "#8268B0" });
  const [editingInsight, setEditingInsight] = useState(null);
  const [newInsight, setNewInsight] = useState("");
  const [newChapter, setNewChapter] = useState({ title: "", mood: 4, insights: [], reflection: "", contemplation: "" });
  const [expandedScriptures, setExpandedScriptures] = useState({ sc1: true, sc2: false, sc3: false, sc4: false });

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

  const scripture = scriptures.find((s) => s.id === selectedId);
  const chapter = scripture?.chapters.find((c) => c.id === selectedChapter);

  const pick = (sid, cid) => {
    setSelectedId(sid);
    setSelectedChapter(cid);
    setAddingChapter(false);
    if (isMobile) setSidebarOpen(false);
  };

  const toggleExpand = (sid) =>
    setExpandedScriptures((e) => ({ ...e, [sid]: !e[sid] }));

  const toggleBookmark = (cid) =>
    setScriptures((ss) => ss.map((s) => ({
      ...s,
      chapters: s.chapters.map((c) => c.id === cid ? { ...c, bookmarked: !c.bookmarked } : c),
    })));

  const addInsightToChapter = (cid, text) => {
    if (!text.trim()) return;
    setScriptures((ss) => ss.map((s) => ({
      ...s,
      chapters: s.chapters.map((c) => c.id === cid ? { ...c, insights: [...c.insights, text.trim()] } : c),
    })));
    setEditingInsight(null);
    setNewInsight("");
  };

  const removeInsight = (cid, idx) =>
    setScriptures((ss) => ss.map((s) => ({
      ...s,
      chapters: s.chapters.map((c) => c.id === cid ? { ...c, insights: c.insights.filter((_, i) => i !== idx) } : c),
    })));

  const updateField = (cid, field, value) =>
    setScriptures((ss) => ss.map((s) => ({
      ...s,
      chapters: s.chapters.map((c) => c.id === cid ? { ...c, [field]: value } : c),
    })));

  const addScripture = () => {
    if (!newScripture.name.trim()) return;
    const id = `sc${Date.now()}`;
    setScriptures((ss) => [...ss, { id, name: newScripture.name.trim(), color: newScripture.color, streak: 0, chapters: [] }]);
    setExpandedScriptures((e) => ({ ...e, [id]: true }));
    setSelectedId(id);
    setSelectedChapter(null);
    setAddingScripture(false);
    setNewScripture({ name: "", color: "#8268B0" });
    if (isMobile) setSidebarOpen(false);
  };

  const addChapter = () => {
    if (!newChapter.title.trim()) return;
    const cid = `c${Date.now()}`;
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    setScriptures((ss) => ss.map((s) => s.id === selectedId ? {
      ...s, chapters: [...s.chapters, { id: cid, ...newChapter, date: today, bookmarked: false }],
    } : s));
    setNewChapter({ title: "", mood: 4, insights: [], reflection: "", contemplation: "" });
    setAddingChapter(false);
    setSelectedChapter(cid);
  };

  const COLORS = ["#8268B0", "#C2536B", "#C9A227", "#4C9A6B", "#3A7CA5", "#C2773B"];

  const sidebarStyle = {
    ...S.sidebar,
    ...(isMobile ? S.sidebarOverlay : {}),
    ...(isMobile && !sidebarOpen ? S.sidebarHidden : {}),
  };

  return (
    <div style={S.shell}>
      {isMobile && sidebarOpen && <div style={S.backdrop} onClick={() => setSidebarOpen(false)} />}

      {/* ── SIDEBAR ──────────────────────────────────────────── */}
      <aside style={sidebarStyle}>
        <div style={S.sideHead}>
          <div style={S.brand}>🕉 Spiritual</div>
          {isMobile && <button onClick={() => setSidebarOpen(false)} style={S.iconBtn}><X size={17} /></button>}
        </div>

        <div style={S.sideScroll}>
          {scriptures.map((sc) => {
            const expanded = expandedScriptures[sc.id];
            const isSel = selectedId === sc.id;
            return (
              <div key={sc.id}>
                <div style={{ ...S.sideScripture, ...(isSel ? { borderLeft: `3px solid ${sc.color}` } : { borderLeft: "3px solid transparent" }) }}>
                  <button onClick={() => toggleExpand(sc.id)} style={S.expandBtn}>
                    {expanded ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                  </button>
                  <span style={{ ...S.sideDot, background: sc.color }} />
                  <span onClick={() => { setSelectedId(sc.id); setSelectedChapter(sc.chapters[0]?.id ?? null); if (isMobile) setSidebarOpen(false); }}
                    style={S.sideScriptureName}>{sc.name}</span>
                  <span style={S.sideStreak}><Flame size={10} />{sc.streak}</span>
                </div>
                {expanded && sc.chapters.map((ch) => (
                  <button key={ch.id} onClick={() => pick(sc.id, ch.id)}
                    style={{ ...S.sideChapter, ...(selectedChapter === ch.id ? { background: `${sc.color}18`, color: sc.color, fontWeight: 600 } : {}) }}>
                    {ch.bookmarked && <Bookmark size={10} fill="currentColor" />}
                    <span style={S.sideChapterText}>{ch.title}</span>
                  </button>
                ))}
              </div>
            );
          })}

          {addingScripture ? (
            <div style={S.addBox}>
              <input autoFocus placeholder="Scripture name" value={newScripture.name}
                onChange={(e) => setNewScripture((n) => ({ ...n, name: e.target.value }))}
                onKeyDown={(e) => e.key === "Enter" && addScripture()}
                style={S.sideInput} />
              <div style={S.colorPicker}>
                {COLORS.map((c) => (
                  <button key={c} onClick={() => setNewScripture((n) => ({ ...n, color: c }))}
                    style={{ ...S.colorSwatch, background: c, outline: newScripture.color === c ? `2px solid ${c}` : "none", outlineOffset: 2 }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <button onClick={addScripture} style={S.sideAddBtn}><Check size={13} /></button>
                <button onClick={() => setAddingScripture(false)} style={S.sideCancelBtn}><X size={13} /></button>
              </div>
            </div>
          ) : (
            <button onClick={() => setAddingScripture(true)} style={S.sideNewBtn}><Plus size={13} /> Add scripture</button>
          )}
        </div>
      </aside>

      {/* ── MAIN ─────────────────────────────────────────────── */}
      <main style={S.main}>
        {isMobile && (
          <button onClick={() => setSidebarOpen(true)} style={S.hamburger}>
            <Menu size={17} />
            <span style={S.hamburgerLabel}>{scripture?.name ?? "Spiritual Library"}</span>
          </button>
        )}

        {scripture && chapter ? (
          <div>
            {/* Chapter header */}
            <div style={S.mainHead}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ ...S.eyebrow, color: scripture.color }}>
                  <span style={{ ...S.sideDot, background: scripture.color, marginRight: 6 }} />
                  {scripture.name}
                </div>
                <h1 style={S.h1}>{chapter.title}</h1>
                <div style={S.dateLine}>
                  <span>{chapter.date}</span>
                  {chapter.mood && (
                    <span style={S.moodTag}>
                      {MOODS.find((m) => m.id === chapter.mood)?.emoji}
                      <span style={{ color: MOODS.find((m) => m.id === chapter.mood)?.color }}>
                        {MOODS.find((m) => m.id === chapter.mood)?.label}
                      </span>
                    </span>
                  )}
                </div>
              </div>
              <div style={S.headActions}>
                <button onClick={() => toggleBookmark(chapter.id)}
                  style={{ ...S.iconBtn, color: chapter.bookmarked ? scripture.color : "#C3BFB5" }}>
                  <Bookmark size={17} fill={chapter.bookmarked ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Key Insights */}
            <div style={S.card}>
              <div style={S.cardHead}>
                <Star size={14} color={scripture.color} />
                <span style={{ ...S.cardTitle, color: scripture.color }}>Key Insights</span>
              </div>
              <ul style={S.bullets}>
                {chapter.insights.map((ins, i) => (
                  <li key={i} style={S.bullet}>
                    <span style={{ ...S.bulletDot, background: scripture.color }} />
                    <span style={S.bulletText}>{ins}</span>
                    <button onClick={() => removeInsight(chapter.id, i)} style={S.ghostBtn}><X size={12} /></button>
                  </li>
                ))}
              </ul>
              {editingInsight === chapter.id ? (
                <div style={S.addRow}>
                  <input autoFocus placeholder="Add an insight…" value={newInsight}
                    onChange={(e) => setNewInsight(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") addInsightToChapter(chapter.id, newInsight); if (e.key === "Escape") setEditingInsight(null); }}
                    style={S.input} />
                  <button onClick={() => addInsightToChapter(chapter.id, newInsight)}
                    style={{ ...S.addBtn, background: scripture.color }}><Check size={15} /></button>
                  <button onClick={() => setEditingInsight(null)} style={S.cancelIconBtn}><X size={15} /></button>
                </div>
              ) : (
                <button onClick={() => setEditingInsight(chapter.id)} style={S.addInsightBtn}>
                  <Plus size={13} /> Add insight
                </button>
              )}
            </div>

            {/* Reflection */}
            <div style={S.card}>
              <div style={S.cardHead}>
                <Pencil size={14} color={scripture.color} />
                <span style={{ ...S.cardTitle, color: scripture.color }}>Personal Reflection</span>
              </div>
              <textarea
                placeholder="What did this stir in you? Write freely…"
                value={chapter.reflection}
                onChange={(e) => updateField(chapter.id, "reflection", e.target.value)}
                style={S.textarea}
                rows={3}
              />
            </div>

            {/* Contemplation */}
            <div style={S.card}>
              <div style={S.cardHead}>
                <BookOpen size={14} color={scripture.color} />
                <span style={{ ...S.cardTitle, color: scripture.color }}>Contemplation — How it applies to your life</span>
              </div>
              <textarea
                placeholder="How will you carry this into your day or decisions?"
                value={chapter.contemplation}
                onChange={(e) => updateField(chapter.id, "contemplation", e.target.value)}
                style={{ ...S.textarea, background: `${scripture.color}08`, borderColor: `${scripture.color}33` }}
                rows={2}
              />
            </div>
          </div>

        ) : scripture && scripture.chapters.length === 0 ? (
          <div style={S.emptyState}>
            <div style={S.emptyIcon}>📖</div>
            <div style={S.emptyTitle}>{scripture.name}</div>
            <div style={S.emptySub}>No chapters yet. Add your first one.</div>
          </div>
        ) : (
          <div style={S.emptyState}>
            <div style={S.emptyIcon}>🕉</div>
            <div style={S.emptyTitle}>Your Spiritual Library</div>
            <div style={S.emptySub}>Select a scripture from the sidebar to begin.</div>
          </div>
        )}

        {/* Add chapter button */}
        {scripture && !addingChapter && (
          <button onClick={() => setAddingChapter(true)}
            style={{ ...S.addChapterBtn, borderColor: scripture?.color ?? "#E0DDD5", color: scripture?.color ?? "#6B675E" }}>
            <Plus size={14} /> Add chapter / shloka to {scripture.name}
          </button>
        )}

        {/* Add chapter form */}
        {addingChapter && scripture && (
          <div style={S.card}>
            <div style={S.cardTitle}>New chapter / shloka</div>
            <input autoFocus placeholder="Title (e.g. Chapter 4 — Jnana Yoga)"
              value={newChapter.title}
              onChange={(e) => setNewChapter((n) => ({ ...n, title: e.target.value }))}
              style={S.input} />
            <div style={S.moodRow}>
              <span style={S.fieldLabel}>Mood while reading:</span>
              {MOODS.map((m) => (
                <button key={m.id} onClick={() => setNewChapter((n) => ({ ...n, mood: m.id }))}
                  style={{ ...S.moodChip, ...(newChapter.mood === m.id ? { background: m.color, color: "#fff", borderColor: m.color } : {}) }}>
                  {m.emoji}
                </button>
              ))}
            </div>
            <textarea placeholder="Reflection (optional)"
              value={newChapter.reflection}
              onChange={(e) => setNewChapter((n) => ({ ...n, reflection: e.target.value }))}
              style={S.textarea} rows={2} />
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button onClick={addChapter} style={{ ...S.saveBtn, background: scripture.color }}>
                <Check size={14} /> Save
              </button>
              <button onClick={() => setAddingChapter(false)} style={S.cancelBtn}><X size={14} /> Cancel</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const S = {
  shell: { display: "flex", fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F6F3", minHeight: 580, color: "#26241F", position: "relative", overflow: "hidden" },

  // sidebar
  sidebar: { width: 240, flexShrink: 0, background: "#fff", borderRight: "1px solid #ECEAE3", display: "flex", flexDirection: "column" },
  sidebarOverlay: { position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 30, boxShadow: "4px 0 24px rgba(0,0,0,0.15)", transition: "transform 0.22s ease", transform: "translateX(0)" },
  sidebarHidden: { transform: "translateX(-105%)" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(38,36,31,0.35)", zIndex: 20 },
  sideHead: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 14px 12px" },
  brand: { fontSize: 13, fontWeight: 700, color: "#26241F", letterSpacing: "-0.01em" },
  sideScroll: { flex: 1, overflowY: "auto", padding: "0 8px 16px" },
  sideScripture: { display: "flex", alignItems: "center", gap: 7, padding: "8px 8px", borderRadius: 8, cursor: "pointer", marginBottom: 2 },
  expandBtn: { border: "none", background: "none", color: "#9A968C", cursor: "pointer", padding: 2, display: "grid", placeItems: "center", flexShrink: 0 },
  sideDot: { width: 9, height: 9, borderRadius: "50%", flexShrink: 0, display: "inline-block" },
  sideScriptureName: { fontSize: 13, fontWeight: 600, flex: 1, cursor: "pointer" },
  sideStreak: { display: "flex", alignItems: "center", gap: 3, fontSize: 10, fontWeight: 700, color: "#C2773B" },
  sideChapter: { display: "flex", alignItems: "center", gap: 6, width: "100%", border: "none", background: "none", padding: "6px 10px 6px 28px", borderRadius: 7, cursor: "pointer", fontFamily: "inherit", fontSize: 12, color: "#6B675E", textAlign: "left", marginBottom: 1 },
  sideChapterText: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", flex: 1 },
  addBox: { padding: "10px 6px", display: "flex", flexDirection: "column", gap: 8 },
  colorPicker: { display: "flex", gap: 7, flexWrap: "wrap" },
  colorSwatch: { width: 22, height: 22, borderRadius: "50%", border: "none", cursor: "pointer" },
  sideInput: { border: "1px solid #E4E2DA", borderRadius: 7, padding: "7px 9px", fontSize: 13, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box" },
  sideAddBtn: { border: "none", background: "#4C9A6B", color: "#fff", width: 30, height: 30, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  sideCancelBtn: { border: "1px solid #E4E2DA", background: "#fff", color: "#6B675E", width: 30, height: 30, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center" },
  sideNewBtn: { display: "flex", alignItems: "center", gap: 6, width: "100%", border: "1px dashed #D9D6CE", background: "none", borderRadius: 8, padding: "8px 10px", fontSize: 12.5, color: "#9A968C", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 8, justifyContent: "center" },

  // main
  main: { flex: 1, padding: "24px 22px", overflowY: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid #E0DDD5", background: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 },
  eyebrow: { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, marginBottom: 5, display: "flex", alignItems: "center" },
  h1: { fontSize: 22, fontWeight: 700, margin: "0 0 6px", letterSpacing: "-0.02em", fontFamily: "'Fraunces', Georgia, serif", lineHeight: 1.3 },
  mainHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 18 },
  dateLine: { display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "#9A968C", marginTop: 2 },
  moodTag: { display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600 },
  headActions: { display: "flex", gap: 6, flexShrink: 0, paddingTop: 4 },
  iconBtn: { border: "none", background: "none", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6 },

  card: { background: "#fff", borderRadius: 12, padding: "14px 15px", marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  cardHead: { display: "flex", alignItems: "center", gap: 7, marginBottom: 11 },
  cardTitle: { fontSize: 13, fontWeight: 700 },

  bullets: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7, marginBottom: 10 },
  bullet: { display: "flex", alignItems: "flex-start", gap: 8, background: "#FAFAF8", borderRadius: 8, padding: "9px 10px" },
  bulletDot: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 5 },
  bulletText: { fontSize: 13.5, fontWeight: 500, flex: 1, lineHeight: 1.45 },
  ghostBtn: { border: "none", background: "none", color: "#C3BFB5", cursor: "pointer", padding: 2, display: "grid", placeItems: "center", flexShrink: 0 },
  addInsightBtn: { display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#9A968C", background: "none", border: "1px dashed #D9D6CE", borderRadius: 7, padding: "7px 10px", cursor: "pointer", fontWeight: 500, fontFamily: "inherit" },
  addRow: { display: "flex", gap: 7, alignItems: "center" },
  input: { flex: 1, border: "1px solid #E4E2DA", borderRadius: 8, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", width: "100%", boxSizing: "border-box", marginBottom: 8 },
  addBtn: { border: "none", color: "#fff", width: 36, height: 36, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  cancelIconBtn: { border: "1px solid #E4E2DA", background: "#fff", color: "#6B675E", width: 36, height: 36, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },

  textarea: { width: "100%", border: "1px solid #E4E2DA", borderRadius: 8, padding: "10px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6, color: "#26241F", background: "#fff" },

  addChapterBtn: { display: "flex", alignItems: "center", gap: 7, width: "100%", border: "1.5px dashed", background: "none", borderRadius: 10, padding: "11px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginTop: 4, justifyContent: "center" },

  moodRow: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" },
  fieldLabel: { fontSize: 12, color: "#9A968C", fontWeight: 500 },
  moodChip: { border: "1.5px solid #E4E2DA", background: "#fff", borderRadius: 8, padding: "5px 9px", fontSize: 18, cursor: "pointer" },

  saveBtn: { display: "flex", alignItems: "center", gap: 5, border: "none", color: "#fff", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E4E2DA", background: "#fff", color: "#6B675E", padding: "8px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },

  emptyState: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 20px", textAlign: "center" },
  emptyIcon: { fontSize: 48, marginBottom: 14 },
  emptyTitle: { fontSize: 20, fontWeight: 700, fontFamily: "'Fraunces', Georgia, serif", marginBottom: 8 },
  emptySub: { fontSize: 13.5, color: "#9A968C" },
};
