import { useState, useEffect, useCallback } from "react";
import { Plus, X, Check, Play, Pause, Pencil, ImagePlus, Brain, Eye, Music2 } from "lucide-react";
import { api } from "../api.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

const TABS = [
  { id: "meditation", label: "Meditation Hub", icon: Brain, color: "#8268B0" },
  { id: "visualization", label: "Visualization", icon: Eye, color: "#3A7CA5" },
];

const ytId = (url) => {
  if (!url) return "";
  const u = url.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
};

const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1000;
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

const blankForm = (kind) => ({ id: null, kind, title: "", url: "", image: "" });

export default function MindscapeScreen() {
  const [tab, setTab] = useState("meditation");
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [form, setForm] = useState(null);
  const [playing, setPlaying] = useState(null);

  const load = useCallback(async () => {
    try { setItems(await api.getMedia()); } catch { /* offline */ }
    setLoaded(true);
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem, toasts, handleUndo, handleDismiss } = useUndoableDelete(api.deleteMedia, api.restoreMedia, load);

  const tabMeta = TABS.find((t) => t.id === tab);
  const list = items.filter((m) => m.kind === tab);
  const openEdit = (m) => setForm({ id: m.id, kind: m.kind, title: m.title, url: `https://youtu.be/${m.youtube_id}`, image: m.image });

  const pickImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try { const img = await fileToDataUrl(file); setForm((f) => ({ ...f, image: img })); } catch { /* ignore */ }
    e.target.value = "";
  };

  const missing = form ? [
    !form.title.trim() && "a title",
    !form.image && "an image",
    !ytId(form.url) && "a valid YouTube link",
  ].filter(Boolean) : [];
  const canSave = !!form && missing.length === 0;

  const save = async () => {
    if (!canSave) return;
    const payload = { kind: form.kind, title: form.title.trim(), image: form.image, youtube_id: ytId(form.url) };
    if (form.id) await api.updateMedia(form.id, payload);
    else await api.createMedia(payload);
    setForm(null);
    load();
  };

  return (
    <div style={S.page}>
      {/* hidden audio-only player */}
      {playing && (
        <iframe
          title="mindscape-audio"
          src={`https://www.youtube.com/embed/${playing.youtube_id}?autoplay=1&controls=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          style={{ position: "fixed", left: -10000, top: 0, width: 320, height: 180, border: "none" }}
        />
      )}

      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Mindscape</div>
          <h1 style={S.h1}>Mindscape</h1>
          <div style={S.subhead}>Close your eyes and listen — guided meditation and visualization.</div>
        </div>
        {!form && <button onClick={() => setForm(blankForm(tab))} style={{ ...S.addBtn, background: tabMeta.color }}><Plus size={15} /> Add</button>}
      </div>

      <div style={S.tabs}>
        {TABS.map((t) => {
          const Icon = t.icon;
          const on = tab === t.id;
          return (
            <button key={t.id} onClick={() => { setTab(t.id); setForm(null); }}
              style={{ ...S.tab, ...(on ? { background: t.color, color: "#fff", borderColor: t.color } : {}) }}>
              <Icon size={15} /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Add / edit form */}
      {form && (
        <div style={S.card}>
          <div style={S.cardTitle}>{form.id ? "Edit" : `New ${TABS.find((t) => t.id === form.kind).label}`}</div>
          <input placeholder="YouTube link (plays as audio only)" value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })} style={S.input} autoFocus />
          <input placeholder="Title (required)" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} style={{ ...S.input, marginTop: 8 }} />
          <label style={S.photoPick}>
            {form.image
              ? <img src={form.image} alt="" style={S.photoPreview} />
              : <span style={S.photoEmpty}><ImagePlus size={18} /> Add cover image (required)</span>}
            <input type="file" accept="image/*" onChange={pickImage} style={{ display: "none" }} />
          </label>
          {!canSave && <div style={S.warn}>Add {missing.join(", ")} to save.</div>}
          <div style={S.formActions}>
            <button onClick={() => setForm(null)} style={S.cancelBtn}><X size={14} /> Cancel</button>
            <button onClick={save} disabled={!canSave} style={{ ...S.saveBtn, background: canSave ? tabMeta.color : "var(--border)", color: canSave ? "#fff" : "var(--text-3)", cursor: canSave ? "pointer" : "not-allowed" }}>
              <Check size={15} /> {form.id ? "Save" : "Add"}
            </button>
          </div>
        </div>
      )}

      {!loaded ? <div style={S.muted}>Loading…</div> : list.length === 0 ? (
        <div style={S.empty}>Nothing here yet — add a {tabMeta.label.toLowerCase()} track.</div>
      ) : (
        <div style={S.grid}>
          {list.map((m) => {
            const isPlaying = playing?.id === m.id;
            return (
              <div key={m.id} style={S.mediaCard}>
                <button onClick={() => setPlaying(isPlaying ? null : m)} style={S.coverBtn} title={isPlaying ? "Pause" : "Play"}>
                  <img src={m.image} alt="" style={S.cover} />
                  <span style={{ ...S.playOverlay, background: isPlaying ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.28)" }}>
                    <span style={{ ...S.playCircle, background: tabMeta.color }}>
                      {isPlaying ? <Pause size={20} color="#fff" fill="#fff" /> : <Play size={20} color="#fff" fill="#fff" />}
                    </span>
                  </span>
                  {isPlaying && <span style={S.nowPlaying}><Music2 size={11} /> Playing</span>}
                </button>
                <div style={S.mediaBody}>
                  <div style={S.mediaTitle}>{m.title}</div>
                  <div style={S.cardActions}>
                    <button onClick={() => openEdit(m)} style={S.iconBtn} title="Edit"><Pencil size={13} /></button>
                    <button onClick={() => { if (playing?.id === m.id) setPlaying(null); deleteItem(m.id, m.title); }} style={S.iconBtn} title="Delete"><X size={14} /></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 22px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 900, margin: "0 auto" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", color: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  tabs: { display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" },
  tab: { display: "flex", alignItems: "center", gap: 7, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 20, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  card: { background: "var(--surface)", borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  input: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none" },
  photoPick: { display: "block", marginTop: 10, cursor: "pointer", borderRadius: 12, overflow: "hidden", border: "1px dashed var(--border)" },
  photoPreview: { width: "100%", maxHeight: 200, objectFit: "cover", display: "block" },
  photoEmpty: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "26px 0", color: "var(--text-3)", fontSize: 13, fontWeight: 600 },
  warn: { fontSize: 12, color: "#C2773B", marginTop: 8, fontWeight: 600 },
  formActions: { display: "flex", gap: 8, marginTop: 14 },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", padding: "10px 14px", borderRadius: 9, fontSize: 14, fontWeight: 700, fontFamily: "inherit" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 },
  mediaCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" },
  coverBtn: { position: "relative", border: "none", padding: 0, cursor: "pointer", display: "block", width: "100%", aspectRatio: "1", background: "var(--surface-2)" },
  cover: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  playOverlay: { position: "absolute", inset: 0, display: "grid", placeItems: "center" },
  playCircle: { width: 46, height: 46, borderRadius: "50%", display: "grid", placeItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" },
  nowPlaying: { position: "absolute", bottom: 8, left: 8, display: "flex", alignItems: "center", gap: 4, background: "rgba(0,0,0,0.65)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 7 },
  mediaBody: { padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 8 },
  mediaTitle: { flex: 1, fontSize: 14.5, fontWeight: 600, lineHeight: 1.4, minWidth: 0, wordBreak: "break-word" },
  cardActions: { display: "flex", gap: 2, flexShrink: 0, marginTop: 1 },
  iconBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", borderRadius: 6 },

  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "16px 0" },
  empty: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "40px 12px" },
};
