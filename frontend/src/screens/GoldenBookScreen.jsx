import { useState, useEffect, useCallback } from "react";
import {
  Plus, X, Check, ChevronLeft, ChevronRight, Pencil, ImagePlus, Flame,
  Sparkles, Music, Music2, ArrowLeft, Trophy, Quote
} from "lucide-react";
import { api } from "../api.js";

const isoL = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const todayISO = () => isoL(new Date());
const addDays = (iso, n) => { const d = new Date(iso + "T00:00:00"); d.setDate(d.getDate() + n); return isoL(d); };
const fmtNice = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

const ytId = (url) => {
  if (!url) return "";
  const u = url.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
};

// Downscale a picked image to a compact JPEG data URL.
const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 900;
      let { width, height } = img;
      if (width > height && width > max) { height = (height * max) / width; width = max; }
      else if (height > max) { width = (width * max) / height; height = max; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = reject;
    img.src = reader.result;
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export default function GoldenBookScreen() {
  const [goals, setGoals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", image: "" });
  const [musicId, setMusicId] = useState("");
  const [musicOn, setMusicOn] = useState(true); // enabled by default; plays when a dream is open
  const [celebrate, setCelebrate] = useState(null); // { title, days }

  const load = useCallback(async () => {
    try { setGoals(await api.getGoldenGoals()); } catch { /* offline */ }
    setLoaded(true);
  }, []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    api.getSetting("golden_music").then((r) => setMusicId(ytId(r?.value || ""))).catch(() => {});
  }, []);

  // Music is started by an explicit tap on the writing screen (browsers block
  // audible autoplay without a user gesture). Leaving a dream stops it.

  const createGoal = async () => {
    if (!form.title.trim()) return;
    const g = await api.createGolden({ title: form.title.trim(), image: form.image });
    setForm({ title: "", image: "" });
    setAdding(false);
    await load();
    setSelectedId(g.id);
  };

  const pickImage = async (e, apply) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try { apply(await fileToDataUrl(file)); } catch { /* ignore */ }
  };

  const active = goals.filter((g) => !g.achieved);
  const manifested = goals.filter((g) => g.achieved);

  if (selectedId) {
    return (
      <div style={S.page}>
        <MusicAudio musicId={musicId} on={musicOn} />
        <GoalDetail
          goalId={selectedId}
          onBack={() => setSelectedId(null)}
          onReload={load}
          onCelebrate={(title, days) => setCelebrate({ title, days })}
          pickImage={pickImage}
          musicId={musicId}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
        {celebrate && <Celebration data={celebrate} onClose={() => setCelebrate(null)} />}
      </div>
    );
  }

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Golden Book</div>
          <h1 style={S.h1}>Golden Book</h1>
          <div style={S.subhead}>Write your dreams into being — a little every day.</div>
        </div>
        {!adding && <button onClick={() => setAdding(true)} style={S.addBtn}><Plus size={15} /> New dream</button>}
      </div>

      {adding && (
        <div style={S.card}>
          <div style={S.cardTitle}>Manifest a new dream</div>
          <textarea autoFocus placeholder="Write your dream as if it's already true…" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} style={S.textarea} />
          <label style={S.photoPick}>
            {form.image
              ? <img src={form.image} alt="" style={S.photoPreview} />
              : <span style={S.photoEmpty}><ImagePlus size={18} /> Add a photo</span>}
            <input type="file" accept="image/*" onChange={(e) => pickImage(e, (img) => setForm({ ...form, image: img }))} style={{ display: "none" }} />
          </label>
          <div style={S.formActions}>
            <button onClick={() => { setAdding(false); setForm({ title: "", image: "" }); }} style={S.cancelBtn}><X size={14} /> Cancel</button>
            <button onClick={createGoal} disabled={!form.title.trim()}
              style={{ ...S.saveBtn, ...(form.title.trim() ? {} : S.saveDisabled) }}><Check size={15} /> Create</button>
          </div>
        </div>
      )}

      {!loaded ? <div style={S.muted}>Loading…</div> : (
        <>
          {active.length === 0 && manifested.length === 0 && !adding && (
            <div style={S.empty}>No dreams yet. Add your first one and revisit it daily.</div>
          )}

          {active.length > 0 && (
            <>
              <div style={S.sectionTitle}><Sparkles size={15} color="#C9A227" /> Manifesting <span style={S.badge}>{active.length}</span></div>
              <div style={S.grid}>
                {active.map((g) => <GoalCard key={g.id} g={g} onOpen={() => setSelectedId(g.id)} />)}
              </div>
            </>
          )}

          {manifested.length > 0 && (
            <>
              <div style={{ ...S.sectionTitle, marginTop: 22 }}><Trophy size={15} color="#4C9A6B" /> Manifested <span style={S.badge}>{manifested.length}</span></div>
              <div style={S.grid}>
                {manifested.map((g) => <GoalCard key={g.id} g={g} onOpen={() => setSelectedId(g.id)} achieved />)}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

function GoalCard({ g, onOpen, achieved }) {
  return (
    <button onClick={onOpen} style={{ ...S.goalCard, ...(achieved ? { opacity: 0.96 } : {}) }}>
      <div style={S.thumbWrap}>
        {g.image
          ? <img src={g.image} alt="" style={S.thumb} />
          : <div style={S.thumbEmpty}><Sparkles size={26} color="var(--text-3)" /></div>}
        {achieved && <span style={S.stamp}>✦ Manifested</span>}
      </div>
      <div style={S.goalBody}>
        <div style={S.goalTitle}>{g.title}</div>
        <div style={S.goalMeta}>
          {achieved
            ? <span style={{ ...S.metaPill, color: "#4C9A6B", background: "rgba(76,154,107,0.12)" }}>
                <Trophy size={12} /> {g.days_to_manifest != null ? `in ${g.days_to_manifest} day${g.days_to_manifest === 1 ? "" : "s"}` : "done"}
              </span>
            : <span style={{ ...S.metaPill, color: "#C2773B", background: "rgba(194,119,59,0.12)" }}><Flame size={12} /> {g.streak} day streak</span>}
          <span style={S.metaDim}>{g.total_days} entr{g.total_days === 1 ? "y" : "ies"}</span>
        </div>
      </div>
    </button>
  );
}

function GoalDetail({ goalId, onBack, onReload, onCelebrate, pickImage, musicId, musicOn, setMusicOn }) {
  const [g, setG] = useState(null);
  const [entries, setEntries] = useState({});
  const [viewDate, setViewDate] = useState(todayISO());
  const [draft, setDraft] = useState("");
  const [editTitle, setEditTitle] = useState(null);
  const today = todayISO();

  const load = useCallback(async () => {
    const d = await api.getGoldenGoal(goalId);
    setG(d);
    const m = {};
    d.entries.forEach((e) => { m[e.date] = e.text; });
    setEntries(m);
    setDraft(m[today] || "");
  }, [goalId, today]);
  useEffect(() => { load(); }, [load]);

  if (!g) return <div style={S.muted}>Loading…</div>;

  const isToday = viewDate === today;
  const canPrev = viewDate > g.created_date;
  const canNext = viewDate < today;

  const saveEntry = async () => {
    await api.upsertGoldenEntry(goalId, { date: today, text: draft });
    await load(); onReload();
  };
  const achieve = async () => {
    const r = await api.achieveGolden(goalId);
    onCelebrate(g.title, r.days_to_manifest);
    await load(); onReload();
  };
  const unachieve = async () => { await api.unachieveGolden(goalId); await load(); onReload(); };
  const saveTitle = async () => {
    if (!editTitle.trim()) return;
    await api.updateGolden(goalId, { title: editTitle.trim() });
    setEditTitle(null); await load(); onReload();
  };
  const changePhoto = (img) => api.updateGolden(goalId, { image: img }).then(() => { load(); onReload(); });

  return (
    <>
      <button onClick={onBack} style={S.backBtn}><ArrowLeft size={16} /> All dreams</button>

      <div style={S.detailHero}>
        <label style={S.heroPhoto}>
          {g.image ? <img src={g.image} alt="" style={S.heroImg} /> : <span style={S.photoEmpty}><ImagePlus size={20} /> Add a photo</span>}
          <span style={S.photoEdit}><Pencil size={12} /> Edit photo</span>
          <input type="file" accept="image/*" onChange={(e) => pickImage(e, changePhoto)} style={{ display: "none" }} />
        </label>

        <div style={S.heroInfo}>
          {g.achieved && <span style={S.heroStamp}>✦ Manifested{g.days_to_manifest != null ? ` in ${g.days_to_manifest} day${g.days_to_manifest === 1 ? "" : "s"}` : ""}</span>}
          {editTitle !== null ? (
            <div style={{ display: "flex", gap: 6, width: "100%" }}>
              <textarea autoFocus value={editTitle} onChange={(e) => setEditTitle(e.target.value)} style={{ ...S.textarea, minHeight: 60 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <button onClick={saveTitle} style={S.iconSave}><Check size={14} /></button>
                <button onClick={() => setEditTitle(null)} style={S.iconCancel}><X size={14} /></button>
              </div>
            </div>
          ) : (
            <div style={S.heroTitleRow}>
              <div style={S.heroTitle}>{g.title}</div>
              <button onClick={() => setEditTitle(g.title)} style={S.ghostBtn} title="Edit"><Pencil size={13} /></button>
            </div>
          )}
          <div style={S.heroStats}>
            <span style={{ ...S.metaPill, color: "#C2773B", background: "rgba(194,119,59,0.12)" }}><Flame size={13} /> {g.streak} day streak</span>
            <span style={S.metaDim}>{g.total_days} entr{g.total_days === 1 ? "y" : "ies"}</span>
            <span style={S.metaDim}>since {fmtNice(g.created_date)}</span>
          </div>
        </div>
      </div>

      {/* Daily writing / history */}
      <div style={S.writeCard}>
        <div style={S.tuneRow}>
          {musicId ? (
            <button onClick={() => setMusicOn((v) => !v)} style={{ ...S.tuneBtn, ...(musicOn ? S.tuneOn : {}) }}>
              {musicOn ? <Music2 size={14} /> : <Music size={14} />} Soft tunes
            </button>
          ) : (
            <span style={S.tuneHint}>Add a track in Settings → Music</span>
          )}
        </div>
        <div style={S.writeNav}>
          <button onClick={() => setViewDate((d) => addDays(d, -1))} disabled={!canPrev}
            style={{ ...S.navBtn, ...(canPrev ? {} : S.navDisabled) }}><ChevronLeft size={16} /></button>
          <div style={S.writeDate}>{isToday ? "Today" : fmtNice(viewDate)}</div>
          <button onClick={() => setViewDate((d) => addDays(d, 1))} disabled={!canNext}
            style={{ ...S.navBtn, ...(canNext ? {} : S.navDisabled) }}><ChevronRight size={16} /></button>
        </div>

        {isToday && !g.achieved ? (
          <>
            <textarea value={draft} onChange={(e) => setDraft(e.target.value)}
              placeholder="Write it again today, as if it's already yours…" style={S.writeArea} />
            <button onClick={saveEntry} style={S.writeSave}><Check size={15} /> Save today's entry</button>
          </>
        ) : (
          <div style={S.readEntry}>
            {entries[viewDate]
              ? <><Quote size={16} color="var(--text-3)" /><p style={S.readText}>{entries[viewDate]}</p></>
              : <div style={S.muted}>Nothing written on this day.</div>}
          </div>
        )}
      </div>

      {/* Manifest action */}
      {!g.achieved ? (
        <button onClick={achieve} style={S.manifestBtn}><Sparkles size={16} /> Mark as manifested</button>
      ) : (
        <button onClick={unachieve} style={S.unmanifestBtn}>Undo manifested</button>
      )}
    </>
  );
}

function Celebration({ data, onClose }) {
  return (
    <div style={S.celebOverlay} onClick={onClose}>
      <div style={S.celebBox} onClick={(e) => e.stopPropagation()}>
        <div style={S.celebEmoji}>✨🌟✨</div>
        <div style={S.celebTitle}>It's happening!</div>
        <div style={S.celebDream}>"{data.title}"</div>
        <div style={S.celebSub}>
          {data.days != null ? `Manifested in ${data.days} day${data.days === 1 ? "" : "s"}.` : "Manifested."} The universe delivered. 🙏
        </div>
        <button onClick={onClose} style={S.celebBtn}>Wonderful</button>
      </div>
    </div>
  );
}

// Audio-only player: a full-size YouTube embed parked off-screen so it actually
// plays (1px / opacity:0 iframes get throttled). Rendered only while `on`.
function MusicAudio({ musicId, on }) {
  if (!musicId || !on) return null;
  return (
    <iframe
      title="golden-music"
      src={`https://www.youtube.com/embed/${musicId}?autoplay=1&loop=1&playlist=${musicId}&controls=0&modestbranding=1&playsinline=1`}
      allow="autoplay; encrypted-media"
      style={{ position: "fixed", left: -10000, top: 0, width: 320, height: 180, border: "none" }}
    />
  );
}

const GOLD = "#C9A227";

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 22px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 860, margin: "0 auto", position: "relative" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: GOLD, color: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  card: { background: "var(--surface)", borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  textarea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "11px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", minHeight: 70, resize: "vertical", lineHeight: 1.5 },
  photoPick: { display: "block", marginTop: 10, cursor: "pointer", borderRadius: 12, overflow: "hidden", border: "1px dashed var(--border)" },
  photoPreview: { width: "100%", maxHeight: 220, objectFit: "cover", display: "block" },
  photoEmpty: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "26px 0", color: "var(--text-3)", fontSize: 13, fontWeight: 600 },
  formActions: { display: "flex", gap: 8, marginTop: 14 },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", background: GOLD, color: "#fff", padding: "10px 14px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "not-allowed" },

  sectionTitle: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginBottom: 12 },
  badge: { fontSize: 11, fontWeight: 700, background: "var(--hover)", color: "var(--text-2)", borderRadius: 10, padding: "1px 7px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 },
  goalCard: { textAlign: "left", border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, overflow: "hidden", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", padding: 0, fontFamily: "inherit", display: "flex", flexDirection: "column" },
  thumbWrap: { position: "relative", width: "100%", aspectRatio: "16 / 10", background: "var(--surface-2)" },
  thumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  thumbEmpty: { width: "100%", height: "100%", display: "grid", placeItems: "center" },
  stamp: { position: "absolute", top: 8, right: 8, transform: "rotate(6deg)", background: "rgba(76,154,107,0.95)", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", padding: "3px 9px", borderRadius: 6, border: "1.5px solid #fff", textTransform: "uppercase" },
  goalBody: { padding: "11px 13px", display: "flex", flexDirection: "column", gap: 8 },
  goalTitle: { fontSize: 14, fontWeight: 600, lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" },
  goalMeta: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
  metaPill: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 700, padding: "2px 8px", borderRadius: 10 },
  metaDim: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },

  backBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 12px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginBottom: 16 },
  detailHero: { display: "flex", flexDirection: "column", gap: 14, marginBottom: 16 },
  heroPhoto: { position: "relative", width: "100%", borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", cursor: "pointer", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 120 },
  heroImg: { width: "100%", maxHeight: "62vh", objectFit: "contain", display: "block" },
  photoEdit: { position: "absolute", bottom: 8, right: 8, display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 8px", borderRadius: 7 },
  heroInfo: { display: "flex", flexDirection: "column", gap: 10, alignItems: "center", textAlign: "center" },
  heroStamp: { alignSelf: "center", background: "rgba(76,154,107,0.14)", color: "#4C9A6B", fontSize: 12, fontWeight: 800, padding: "4px 10px", borderRadius: 8, letterSpacing: "0.03em" },
  heroTitleRow: { display: "flex", alignItems: "flex-start", gap: 8, justifyContent: "center" },
  heroTitle: { fontSize: 23, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.35 },
  heroStats: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" },
  ghostBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 3, display: "grid", placeItems: "center", flexShrink: 0 },
  iconSave: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  iconCancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 32, height: 32, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },

  writeCard: { background: "var(--surface)", borderRadius: 14, padding: 16, border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14 },
  tuneRow: { display: "flex", justifyContent: "flex-end", marginBottom: 10 },
  tuneBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 12px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tuneOn: { background: GOLD, color: "#fff", borderColor: GOLD },
  tuneHint: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },
  writeNav: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 },
  navBtn: { width: 34, height: 34, borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", display: "grid", placeItems: "center" },
  navDisabled: { opacity: 0.35, cursor: "not-allowed" },
  writeDate: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 150, textAlign: "center" },
  writeArea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "12px", fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)", background: "var(--surface)", outline: "none", minHeight: 120, resize: "vertical", lineHeight: 1.6 },
  writeSave: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", marginTop: 10, border: "none", background: GOLD, color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  readEntry: { display: "flex", gap: 8, padding: "6px 2px" },
  readText: { fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.6, margin: 0, whiteSpace: "pre-wrap" },

  manifestBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", border: "none", background: "linear-gradient(135deg,#C9A227,#E0BD45)", color: "#fff", padding: "13px", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 2px 10px rgba(201,162,39,0.35)" },
  unmanifestBtn: { display: "block", margin: "0 auto", border: "none", background: "none", color: "var(--text-3)", fontSize: 12, fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontFamily: "inherit" },

  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "16px 0" },
  empty: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "40px 12px" },

  musicBtn: { position: "absolute", top: 28, right: 22, display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 11px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", zIndex: 5 },
  musicOn: { background: GOLD, color: "#fff", borderColor: GOLD },

  celebOverlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.6)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  celebBox: { background: "var(--surface)", color: "var(--text)", borderRadius: 20, padding: "36px 30px", textAlign: "center", maxWidth: 360, boxShadow: "0 12px 48px rgba(0,0,0,0.3)" },
  celebEmoji: { fontSize: 40, marginBottom: 10 },
  celebTitle: { fontSize: 24, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 10, color: GOLD },
  celebDream: { fontSize: 15, fontStyle: "italic", fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.5, marginBottom: 10 },
  celebSub: { fontSize: 13.5, color: "var(--text-2)", lineHeight: 1.5, marginBottom: 22 },
  celebBtn: { border: "none", background: GOLD, color: "#fff", padding: "11px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
