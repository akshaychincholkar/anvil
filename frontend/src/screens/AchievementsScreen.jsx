import { useState, useEffect, useCallback, useRef } from "react";
import { Trophy, Plus, X, Check, Pencil, Image as ImageIcon, Gift, Calendar } from "lucide-react";
import { api } from "../api.js";
import { useCurrency, fmtMoney2 } from "../currency.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";
import HelpButton from "../components/HelpButton.jsx";

const PILLARS = {
  Financial: "#C9A227", Academic: "#3A7CA5", Relationship: "#C2536B",
  Health: "#4C9A6B", Spiritual: "#8268B0",
};
const PILLAR_NAMES = Object.keys(PILLARS);
const DEFAULT_COLOR = "#9A7B4F"; // warm "trunk" colour for un-tagged wins

function useIsMobile(bp = 760) {
  const [m, setM] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

const todayLocal = () => {
  const d = new Date(); const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};
const prettyDate = (s) => {
  if (!s) return "";
  const d = new Date(s + "T00:00:00");
  if (isNaN(d)) return s;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
const yearOf = (s) => (s || "").slice(0, 4);

// Read a picked file into a data URL (no resizing — the cropper handles output).
const fileToRawUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

// Downscale a data URL (preserving aspect ratio) to a compact JPEG data URL.
const downscaleDataUrl = (dataUrl, max = 1000) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    let { width, height } = img;
    if (width > height && width > max) { height = (height * max) / width; width = max; }
    else if (height > max) { width = (width * max) / height; height = max; }
    const canvas = document.createElement("canvas");
    canvas.width = width; canvas.height = height;
    canvas.getContext("2d").drawImage(img, 0, 0, width, height);
    resolve(canvas.toDataURL("image/jpeg", 0.82));
  };
  img.onerror = reject;
  img.src = dataUrl;
});

// Square-crop dialog: pan (drag) + zoom (slider) inside a 1:1 frame, then export
// a centered square JPEG data URL. Works with mouse and touch.
function SquareCropper({ src, onCancel, onCrop, onKeepOriginal }) {
  const FRAME = 300;            // on-screen square viewport size
  const OUT = 700;             // exported square size (px)
  const [img, setImg] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 }); // top-left offset of the image within the frame
  const drag = useRef(null);

  // Load the image and fit it to cover the frame initially (centered).
  useEffect(() => {
    const i = new Image();
    i.onload = () => {
      setImg(i);
      const base = Math.max(FRAME / i.width, FRAME / i.height); // cover
      setZoom(1);
      i._base = base;
      const w = i.width * base, h = i.height * base;
      setPos({ x: (FRAME - w) / 2, y: (FRAME - h) / 2 });
    };
    i.src = src;
  }, [src]);

  const scale = img ? img._base * zoom : 1;
  const drawW = img ? img.width * scale : 0;
  const drawH = img ? img.height * scale : 0;

  // Keep the image covering the frame (no gaps) after pan/zoom.
  const clamp = (p, w, h) => ({
    x: Math.min(0, Math.max(FRAME - w, p.x)),
    y: Math.min(0, Math.max(FRAME - h, p.y)),
  });

  useEffect(() => { if (img) setPos((p) => clamp(p, drawW, drawH)); /* eslint-disable-next-line */ }, [zoom, img]);

  const onDown = (e) => {
    const pt = e.touches ? e.touches[0] : e;
    drag.current = { sx: pt.clientX, sy: pt.clientY, ox: pos.x, oy: pos.y };
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const pt = e.touches ? e.touches[0] : e;
    const nx = drag.current.ox + (pt.clientX - drag.current.sx);
    const ny = drag.current.oy + (pt.clientY - drag.current.sy);
    setPos(clamp({ x: nx, y: ny }, drawW, drawH));
  };
  const onUp = () => { drag.current = null; };

  const doCrop = () => {
    if (!img) return;
    const canvas = document.createElement("canvas");
    canvas.width = OUT; canvas.height = OUT;
    const ctx = canvas.getContext("2d");
    const k = OUT / FRAME; // map on-screen frame → output canvas
    ctx.drawImage(img, pos.x * k, pos.y * k, drawW * k, drawH * k);
    onCrop(canvas.toDataURL("image/jpeg", 0.85));
  };

  return (
    <div style={CS.overlay} onClick={onCancel}>
      <div style={CS.box} onClick={(e) => e.stopPropagation()}>
        <div style={CS.head}>Crop to square<button onClick={onCancel} style={CS.close}><X size={16} /></button></div>
        <div
          style={{ ...CS.frame, width: FRAME, height: FRAME }}
          onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
          onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}
        >
          {img && (
            <img src={src} alt="" draggable={false}
              style={{ position: "absolute", left: pos.x, top: pos.y, width: drawW, height: drawH, userSelect: "none", pointerEvents: "none" }} />
          )}
          <div style={CS.grid} />
        </div>
        <div style={CS.zoomRow}>
          <span style={CS.zoomLbl}>Zoom</span>
          <input type="range" min="1" max="3" step="0.01" value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))} style={{ flex: 1 }} />
        </div>
        <div style={CS.hint}>Drag to reposition · slide to zoom</div>
        <div style={CS.actions}>
          <button onClick={onCancel} style={CS.cancel}>Cancel</button>
          <button onClick={onKeepOriginal} style={CS.keep}>Keep original</button>
          <button onClick={doCrop} style={CS.apply}><Check size={15} /> Square crop</button>
        </div>
      </div>
    </div>
  );
}

const EMPTY = { id: null, title: "", date: todayLocal(), pillar: "", reward: "", image: "", note: "" };

export default function AchievementsScreen() {
  const cur = useCurrency();
  const money = (n) => fmtMoney2(n, cur.code);
  const isMobile = useIsMobile();

  const [items, setItems] = useState([]);
  const [form, setForm] = useState(null); // null = closed; object = add/edit
  const [saving, setSaving] = useState(false);
  const [cropSrc, setCropSrc] = useState(null); // raw image awaiting optional square crop
  const fileRef = useRef(null);

  const load = useCallback(() => { api.getAchievements().then(setItems).catch(() => {}); }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem: softDelete, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteAchievement, api.restoreAchievement, load
  );

  const openAdd = () => setForm({ ...EMPTY });
  const openEdit = (a) => setForm({
    id: a.id, title: a.title, date: a.date, pillar: a.pillar || "",
    reward: a.reward ? String(a.reward) : "", image: a.image || "", note: a.note || "",
  });

  const pickImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Open the square-crop dialog on the raw image; the user can crop or keep original.
    try { const raw = await fileToRawUrl(file); setCropSrc(raw); }
    catch { /* ignore */ }
    if (fileRef.current) fileRef.current.value = "";
  };

  // Keep the original (just downscale it, preserving aspect ratio).
  const keepOriginal = async () => {
    let url = cropSrc;
    try { if (cropSrc) url = await downscaleDataUrl(cropSrc); } catch { /* use raw */ }
    setForm((f) => ({ ...f, image: url }));
    setCropSrc(null);
  };

  const canSave = form && form.title.trim() && form.date;
  const save = async () => {
    if (!canSave || saving) return;
    setSaving(true);
    const payload = {
      title: form.title.trim(),
      date: form.date,
      pillar: form.pillar || null,
      reward: parseFloat(form.reward) || 0,
      image: form.image || null,
      note: form.note.trim(),
    };
    try {
      if (form.id) await api.updateAchievement(form.id, payload);
      else await api.createAchievement(payload);
      setForm(null);
      load();
    } catch { /* ignore */ } finally { setSaving(false); }
  };

  const totalReward = items.reduce((n, a) => n + (a.reward || 0), 0);

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Achievements</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h1 style={S.h1}>Achievements</h1>
            <HelpButton id="achievements" />
          </div>
          <div style={S.subhead}>Your tree of wins — newest at the top, scroll down through the past.</div>
        </div>
        <div style={S.headRight}>
          {totalReward > 0 && (
            <div style={S.totalBadge}><Gift size={14} color="#C9A227" /> {money(totalReward)} earned</div>
          )}
          <button onClick={openAdd} style={S.addBtn}><Plus size={15} /> Add achievement</button>
        </div>
      </div>

      {items.length === 0 ? (
        <div style={S.empty}>
          <Trophy size={30} color="var(--text-3)" />
          <div style={{ marginTop: 10 }}>No achievements yet.</div>
          <div style={S.emptySub}>Plant your first win — it'll grow into a timeline you can look back on.</div>
        </div>
      ) : (
        <div style={{ ...S.timeline, paddingLeft: isMobile ? 0 : 0 }}>
          {/* The trunk */}
          <div style={{ ...S.trunk, left: isMobile ? 13 : "50%" }} />
          {items.map((a, i) => {
            const color = PILLARS[a.pillar] || DEFAULT_COLOR;
            const left = !isMobile && i % 2 === 1; // alternate sides on desktop
            const prev = items[i - 1];
            const showYear = !prev || yearOf(prev.date) !== yearOf(a.date);
            return (
              <div key={a.id}>
                {showYear && (
                  <div style={{ ...S.yearRow, justifyContent: isMobile ? "flex-start" : "center", paddingLeft: isMobile ? 36 : 0 }}>
                    <span style={S.yearChip}>{yearOf(a.date)}</span>
                  </div>
                )}
                <div style={{
                  ...S.row,
                  gridTemplateColumns: isMobile ? "28px 1fr" : "1fr 44px 1fr",
                }}>
                  {/* Card column(s) */}
                  {!isMobile && (
                    <div style={{ gridColumn: 1, display: "flex", justifyContent: "flex-end" }}>
                      {left && <Card a={a} color={color} side="left" money={money} onEdit={() => openEdit(a)} onDelete={() => softDelete(a.id, a.title)} />}
                    </div>
                  )}
                  {/* Dot on the trunk */}
                  <div style={{ gridColumn: isMobile ? 1 : 2, display: "flex", justifyContent: "center", position: "relative" }}>
                    <div style={{ ...S.node, borderColor: color, background: "var(--surface)" }}>
                      <div style={{ ...S.nodeDot, background: color }} />
                    </div>
                  </div>
                  {/* Right / mobile card */}
                  <div style={{ gridColumn: isMobile ? 2 : 3, display: "flex", justifyContent: "flex-start" }}>
                    {(isMobile || !left) && <Card a={a} color={color} side={isMobile ? "mobile" : "right"} money={money} onEdit={() => openEdit(a)} onDelete={() => softDelete(a.id, a.title)} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add / edit modal */}
      {form && (
        <div style={S.overlay} onClick={() => setForm(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={S.modalHead}>
              <div style={S.modalTitle}>{form.id ? "Edit achievement" : "New achievement"}</div>
              <button onClick={() => setForm(null)} style={S.iconBtn}><X size={16} /></button>
            </div>

            <label style={S.label}>Title *</label>
            <input autoFocus value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="What did you achieve?" style={S.input} />

            <div style={S.formRow}>
              <div style={{ flex: 1 }}>
                <label style={S.label}><Calendar size={12} /> Date *</label>
                <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} style={S.input} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={S.label}>Pillar (optional)</label>
                <select value={form.pillar} onChange={(e) => setForm((f) => ({ ...f, pillar: e.target.value }))} style={S.input}>
                  <option value="">— None —</option>
                  {PILLAR_NAMES.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            <label style={S.label}><Gift size={12} /> Reward ({cur.code}) — optional gesture of appreciation</label>
            <input type="number" min="0" step="any" value={form.reward}
              onChange={(e) => setForm((f) => ({ ...f, reward: e.target.value }))}
              placeholder="0" style={S.input} />

            <label style={S.label}>Photo (optional)</label>
            {form.image ? (
              <div style={S.imgWrap}>
                <img src={form.image} alt="" style={S.imgPreview} />
                <button onClick={() => setForm((f) => ({ ...f, image: "" }))} style={S.imgRemove}><X size={14} /></button>
              </div>
            ) : (
              <button onClick={() => fileRef.current?.click()} style={S.uploadBtn}><ImageIcon size={15} /> Add a photo</button>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={pickImage} style={{ display: "none" }} />

            <label style={S.label}>Note (optional)</label>
            <textarea value={form.note} onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              placeholder="The story behind it…" rows={3} style={{ ...S.input, resize: "vertical", fontFamily: "inherit" }} />

            <div style={S.modalActions}>
              <button onClick={() => setForm(null)} style={S.cancelBtn}>Cancel</button>
              <button onClick={save} disabled={!canSave || saving}
                style={{ ...S.saveBtn, ...(!canSave || saving ? { opacity: 0.5, cursor: "not-allowed" } : {}) }}>
                <Check size={15} /> {form.id ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {cropSrc && (
        <SquareCropper
          src={cropSrc}
          onCancel={() => setCropSrc(null)}
          onKeepOriginal={keepOriginal}
          onCrop={(url) => { setForm((f) => ({ ...f, image: url })); setCropSrc(null); }}
        />
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

function Card({ a, color, side, money, onEdit, onDelete }) {
  return (
    <div style={{ ...S.card, borderTop: `3px solid ${color}`, textAlign: side === "left" ? "right" : "left" }}>
      <div style={{ ...S.cardTop, flexDirection: side === "left" ? "row-reverse" : "row" }}>
        <span style={{ ...S.dateChip, background: `${color}1A`, color }}>{prettyDate(a.date)}</span>
        <div style={{ display: "flex", gap: 2 }}>
          <button onClick={onEdit} style={S.ghostBtn} title="Edit"><Pencil size={13} /></button>
          <button onClick={onDelete} style={S.ghostBtn} title="Delete"><X size={14} /></button>
        </div>
      </div>
      <div style={S.cardTitle}>{a.title}</div>
      {a.image && <img src={a.image} alt="" style={S.cardImg} />}
      {a.note && <div style={S.cardNote}>{a.note}</div>}
      {a.reward > 0 && (
        <div style={{ ...S.rewardBadge, marginLeft: side === "left" ? "auto" : 0 }}>
          <Gift size={13} /> {money(a.reward)}
        </div>
      )}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "26px 22px", color: "var(--text)", boxSizing: "border-box" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 22 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 12.5, color: "var(--text-3)", marginTop: 3 },
  headRight: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" },
  totalBadge: { display: "flex", alignItems: "center", gap: 5, background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.3)", padding: "6px 12px", borderRadius: 20, fontSize: 12.5, fontWeight: 700, color: "#8A6E1A" },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },

  empty: { textAlign: "center", color: "var(--text-3)", padding: "60px 16px", fontSize: 14, fontWeight: 600 },
  emptySub: { fontSize: 12.5, fontWeight: 400, marginTop: 6, maxWidth: 320, marginInline: "auto", lineHeight: 1.5 },

  timeline: { position: "relative", maxWidth: 1000, margin: "0 auto", paddingBottom: 30 },
  trunk: { position: "absolute", top: 8, bottom: 8, width: 3, background: "linear-gradient(to bottom, var(--border), var(--border))", transform: "translateX(-1.5px)", borderRadius: 2 },

  yearRow: { display: "flex", margin: "6px 0 12px" },
  yearChip: { fontSize: 11.5, fontWeight: 800, letterSpacing: "0.06em", color: "var(--text-2)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "4px 12px", position: "relative", zIndex: 2 },

  row: { display: "grid", alignItems: "center", gap: 8, marginBottom: 16 },
  node: { width: 20, height: 20, borderRadius: "50%", border: "3px solid", display: "grid", placeItems: "center", zIndex: 2, boxShadow: "0 0 0 4px var(--bg)" },
  nodeDot: { width: 7, height: 7, borderRadius: "50%" },

  card: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "12px 14px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", maxWidth: 420, width: "100%", boxSizing: "border-box" },
  cardTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 7 },
  dateChip: { fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 12, whiteSpace: "nowrap" },
  cardTitle: { fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.3, wordBreak: "break-word" },
  cardImg: { width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 9, marginTop: 9, display: "block" },
  cardNote: { fontSize: 12.5, color: "var(--text-2)", marginTop: 7, lineHeight: 1.5, whiteSpace: "pre-wrap", wordBreak: "break-word" },
  rewardBadge: { display: "inline-flex", alignItems: "center", gap: 5, marginTop: 9, background: "rgba(201,162,39,0.12)", color: "#8A6E1A", border: "1px solid rgba(201,162,39,0.3)", padding: "3px 10px", borderRadius: 14, fontSize: 12, fontWeight: 700 },
  ghostBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 3, display: "grid", placeItems: "center", borderRadius: 6 },

  // Modal
  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.5)", zIndex: 60, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", borderRadius: 16, padding: "20px 20px 18px", width: "100%", maxWidth: 460, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 12px 48px rgba(0,0,0,0.22)", boxSizing: "border-box" },
  modalHead: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 },
  modalTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  iconBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  label: { display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 700, color: "var(--text-2)", margin: "10px 0 5px", textTransform: "uppercase", letterSpacing: "0.04em" },
  input: { width: "100%", border: "1px solid var(--border)", borderRadius: 9, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)" },
  formRow: { display: "flex", gap: 10 },
  uploadBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", border: "1.5px dashed var(--border)", background: "none", color: "var(--text-2)", padding: "11px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  imgWrap: { position: "relative", borderRadius: 10, overflow: "hidden" },
  imgPreview: { width: "100%", maxHeight: 220, objectFit: "cover", display: "block", borderRadius: 10 },
  imgRemove: { position: "absolute", top: 8, right: 8, border: "none", background: "rgba(0,0,0,0.55)", color: "#fff", width: 28, height: 28, borderRadius: "50%", cursor: "pointer", display: "grid", placeItems: "center" },
  modalActions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 },
  cancelBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "#4C9A6B", color: "#fff", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};

const CS = {
  overlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.62)", zIndex: 300, display: "grid", placeItems: "center", padding: 16 },
  box: { background: "var(--surface)", borderRadius: 16, padding: "18px", boxShadow: "0 12px 48px rgba(0,0,0,0.3)", maxWidth: "92vw" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 15, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  close: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 28, height: 28, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  frame: { position: "relative", overflow: "hidden", borderRadius: 12, background: "#000", cursor: "grab", touchAction: "none", margin: "0 auto", maxWidth: "84vw" },
  grid: { position: "absolute", inset: 0, pointerEvents: "none", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)", backgroundImage: "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "33.33% 33.33%" },
  zoomRow: { display: "flex", alignItems: "center", gap: 10, marginTop: 14 },
  zoomLbl: { fontSize: 12, fontWeight: 700, color: "var(--text-2)" },
  hint: { fontSize: 11, color: "var(--text-3)", textAlign: "center", marginTop: 8 },
  actions: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 14, flexWrap: "wrap" },
  cancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  keep: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  apply: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "9px 16px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
