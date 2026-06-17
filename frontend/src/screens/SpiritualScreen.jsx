import { useState, useEffect, useCallback } from "react";
import { Menu, X, ChevronLeft, ChevronRight, Plus, Check, ImagePlus, Trash2, FileText, Images } from "lucide-react";
import { SPIRITUAL_ITEMS } from "./spiritual/spiritualContent.js";
import { api } from "../api.js";

function useIsMobile() {
  const [m, setM] = useState(() => window.innerWidth < 720);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 720);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

// Downscale a picked image to a readable JPEG data URL.
const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 1400;
      let { width, height } = img;
      if (width > height && width > max) { height = (height * max) / width; width = max; }
      else if (height > max) { width = (width * max) / height; height = max; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = reject;
    img.src = reader.result;
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

// Works with a built-in base+count OR an explicit images array.
function ImageCarousel({ base, count, images }) {
  const list = images && images.length ? images : null;
  const total = list ? list.length : count;
  const [i, setI] = useState(0);
  if (!total) return null;
  const idx = i % total;
  const src = list ? list[idx] : `${base}${idx + 1}.jpg`;
  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      <div style={S.carouselFrame}>
        <img src={src} alt={`Page ${idx + 1}`} style={S.carouselImg} />
      </div>
      <div style={S.carouselNav}>
        <button onClick={() => setI((p) => (p - 1 + total) % total)} style={S.carouselBtn}><ChevronLeft size={16} /> Prev</button>
        <span style={S.carouselCount}>{list ? "" : "Adhyay "}{idx + 1} / {total}</span>
        <button onClick={() => setI((p) => (p + 1) % total)} style={S.carouselBtn}>Next <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

export default function SpiritualScreen() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [decks, setDecks] = useState([]);
  const [activeId, setActiveId] = useState("dss");
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ title: "", type: "text", content: "", images: [] });

  const load = useCallback(() => api.getDecks().then(setDecks).catch(() => {}), []);
  useEffect(() => { load(); }, [load]);

  const deckId = activeId.startsWith("deck-") ? Number(activeId.slice(5)) : null;
  const deck = deckId != null ? decks.find((d) => d.id === deckId) : null;
  const builtin = !deck ? (SPIRITUAL_ITEMS.find((x) => x.id === activeId) || (deckId == null ? SPIRITUAL_ITEMS[0] : null)) : null;
  const currentTitle = creating ? "New deck" : (deck ? deck.title : builtin?.title || "");

  const pick = (id) => { setActiveId(id); setCreating(false); if (isMobile) setSidebarOpen(false); };
  const openCreate = () => { setCreating(true); setForm({ title: "", type: "text", content: "", images: [] }); if (isMobile) setSidebarOpen(false); };

  const addImages = async (e) => {
    const files = Array.from(e.target.files || []);
    const urls = [];
    for (const f of files) { try { urls.push(await fileToDataUrl(f)); } catch { /* skip */ } }
    setForm((s) => ({ ...s, images: [...s.images, ...urls] }));
    e.target.value = "";
  };
  const removeImage = (i) => setForm((s) => ({ ...s, images: s.images.filter((_, j) => j !== i) }));

  const canSave = form.title.trim() && (form.type === "text" ? form.content.trim() : form.images.length > 0);
  const saveDeck = async () => {
    if (!canSave) return;
    const d = await api.createDeck({
      title: form.title.trim(), type: form.type,
      content: form.type === "text" ? form.content : "",
      images: form.type === "images" ? form.images : [],
    });
    setCreating(false);
    await load();
    setActiveId(`deck-${d.id}`);
  };
  const removeDeck = async (id) => {
    await api.deleteDeck(id);
    if (activeId === `deck-${id}`) setActiveId("dss");
    load();
  };

  const sidebarStyle = {
    ...S.sidebar,
    ...(isMobile ? S.sidebarOverlay : {}),
    ...(isMobile && !sidebarOpen ? S.sidebarHidden : {}),
  };

  return (
    <div style={S.shell}>
      <style>{CONTENT_CSS}</style>
      {isMobile && sidebarOpen && <div style={S.backdrop} onClick={() => setSidebarOpen(false)} />}

      <aside style={sidebarStyle}>
        <div style={S.sideHead}>
          <div style={S.brand}>Anvil · Spiritual</div>
          {isMobile && <button onClick={() => setSidebarOpen(false)} style={S.iconBtn}><X size={17} /></button>}
        </div>
        <div style={S.sideScroll}>
          {SPIRITUAL_ITEMS.map((it) => (
            <button key={it.id} onClick={() => pick(it.id)}
              style={{ ...S.sideItem, ...(it.id === activeId && !creating ? S.sideItemOn : {}) }}>
              {it.title}
            </button>
          ))}

          <div style={S.sideDivider}>My Decks</div>
          {decks.map((d) => (
            <button key={d.id} onClick={() => pick(`deck-${d.id}`)}
              style={{ ...S.sideItem, ...(activeId === `deck-${d.id}` && !creating ? S.sideItemOn : {}) }}>
              {d.title}
            </button>
          ))}
          <button onClick={openCreate} style={{ ...S.newDeckBtn, ...(creating ? S.sideItemOn : {}) }}>
            <Plus size={14} /> New deck
          </button>
        </div>
      </aside>

      <main style={S.main}>
        {isMobile && (
          <button onClick={() => setSidebarOpen(true)} style={S.hamburger}>
            <Menu size={17} />
            <span style={S.hamburgerLabel}>{currentTitle}</span>
          </button>
        )}

        {creating ? (
          <div style={S.contentWrap}>
            <div style={S.formTitle}>Create a deck</div>
            <input placeholder="Deck title (e.g. Vishnu Sahasranamam)" value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })} style={S.input} />

            <div style={S.typeRow}>
              <button onClick={() => setForm({ ...form, type: "text" })}
                style={{ ...S.typeBtn, ...(form.type === "text" ? S.typeOn : {}) }}><FileText size={15} /> Text</button>
              <button onClick={() => setForm({ ...form, type: "images" })}
                style={{ ...S.typeBtn, ...(form.type === "images" ? S.typeOn : {}) }}><Images size={15} /> Images</button>
            </div>

            {form.type === "text" ? (
              <textarea placeholder="Paste or write the text (verses, chant, reflection)…" value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })} style={S.textarea} />
            ) : (
              <>
                <div style={S.imgGrid}>
                  {form.images.map((src, i) => (
                    <div key={i} style={S.imgThumbWrap}>
                      <img src={src} alt="" style={S.imgThumb} />
                      <button onClick={() => removeImage(i)} style={S.imgDel}><X size={12} /></button>
                    </div>
                  ))}
                  <label style={S.imgAdd}>
                    <ImagePlus size={20} />
                    <span style={{ fontSize: 11 }}>Add images</span>
                    <input type="file" accept="image/*" multiple onChange={addImages} style={{ display: "none" }} />
                  </label>
                </div>
                <div style={S.hint}>Images show as a swipeable carousel, in the order added.</div>
              </>
            )}

            <div style={S.formActions}>
              <button onClick={() => setCreating(false)} style={S.cancelBtn}><X size={14} /> Cancel</button>
              <button onClick={saveDeck} disabled={!canSave} style={{ ...S.saveBtn, ...(canSave ? {} : S.saveDisabled) }}>
                <Check size={15} /> Create deck
              </button>
            </div>
          </div>
        ) : deck ? (
          <div style={S.contentWrap}>
            <div style={S.deckHead}>
              <h2 style={S.deckTitle}>{deck.title}</h2>
              <button onClick={() => removeDeck(deck.id)} style={S.deckDel} title="Delete deck"><Trash2 size={15} /></button>
            </div>
            {deck.type === "images"
              ? <ImageCarousel images={deck.images} />
              : <div style={S.deckText}>{deck.content}</div>}
          </div>
        ) : (
          <div style={S.contentWrap}>
            {builtin?.youtube && (
              <div style={S.videoFrame}>
                <iframe
                  key={builtin.youtube}
                  src={`https://www.youtube.com/embed/${builtin.youtube}`}
                  title={builtin.title}
                  style={S.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {builtin?.carousel
              ? <ImageCarousel base={builtin.imageBase} count={builtin.carousel} />
              : <div className="spiritual-content" dangerouslySetInnerHTML={{ __html: builtin?.html || "" }} />}
          </div>
        )}
      </main>
    </div>
  );
}

const CONTENT_CSS = `
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: var(--text); line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: var(--text-3); text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`;

const S = {
  shell: { display: "flex", fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100vh", color: "var(--text)", position: "relative", overflow: "hidden" },
  sidebar: { width: 240, flexShrink: 0, background: "var(--surface)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column" },
  sidebarOverlay: { position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 30, boxShadow: "4px 0 24px rgba(0,0,0,0.15)", transition: "transform 0.22s ease", transform: "translateX(0)" },
  sidebarHidden: { transform: "translateX(-105%)" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(38,36,31,0.35)", zIndex: 20 },
  sideHead: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 14px 12px" },
  brand: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700 },
  sideScroll: { flex: 1, overflowY: "auto", padding: "0 8px 16px" },
  sideItem: { display: "block", width: "100%", border: "none", background: "none", padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13.5, fontWeight: 500, color: "var(--text-2)", textAlign: "left", marginBottom: 2 },
  sideItemOn: { background: "rgba(130,104,176,0.12)", color: "#8268B0", fontWeight: 700 },
  sideDivider: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", padding: "14px 12px 6px", borderTop: "1px solid var(--border)", marginTop: 10 },
  newDeckBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", border: "1px dashed var(--border)", background: "none", padding: "9px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13, fontWeight: 600, color: "var(--text-2)", marginTop: 6 },
  main: { flex: 1, padding: "26px 22px", overflowY: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid var(--border)", background: "var(--surface)", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 220 },
  contentWrap: { background: "var(--surface)", borderRadius: 14, padding: "26px 28px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", maxWidth: 760, margin: "0 auto" },
  videoFrame: { position: "relative", width: "100%", maxWidth: 600, margin: "0 auto 22px", aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden", background: "#000" },
  video: { position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" },
  carouselFrame: { background: "var(--surface-2)", borderRadius: 12, padding: 8, border: "1px solid var(--border)" },
  carouselImg: { width: "100%", borderRadius: 8, display: "block" },
  carouselNav: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  carouselBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  carouselCount: { fontSize: 13, fontWeight: 700, color: "#8268B0", fontFamily: "'Fraunces',Georgia,serif" },
  iconBtn: { border: "none", background: "none", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, color: "var(--text-2)" },

  deckHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 16, borderBottom: "1px solid var(--border)", paddingBottom: 12 },
  deckTitle: { fontSize: 22, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", margin: 0, color: "#8268B0" },
  deckDel: { border: "1px solid var(--border)", background: "var(--surface)", color: "#C2536B", cursor: "pointer", display: "grid", placeItems: "center", padding: 7, borderRadius: 8, flexShrink: 0 },
  deckText: { fontSize: 16, lineHeight: 1.9, whiteSpace: "pre-wrap", color: "var(--text)", textAlign: "center", fontFamily: "'Fraunces',Georgia,serif" },

  formTitle: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 14 },
  input: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none" },
  typeRow: { display: "flex", gap: 8, marginTop: 12 },
  typeBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  typeOn: { background: "#8268B0", color: "#fff", borderColor: "#8268B0" },
  textarea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "12px", fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)", background: "var(--surface)", outline: "none", minHeight: 200, resize: "vertical", lineHeight: 1.7, marginTop: 12 },
  imgGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: 8, marginTop: 12 },
  imgThumbWrap: { position: "relative", aspectRatio: "1", borderRadius: 8, overflow: "hidden", border: "1px solid var(--border)" },
  imgThumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  imgDel: { position: "absolute", top: 3, right: 3, border: "none", background: "rgba(0,0,0,0.6)", color: "#fff", borderRadius: "50%", width: 18, height: 18, cursor: "pointer", display: "grid", placeItems: "center", padding: 0 },
  imgAdd: { aspectRatio: "1", border: "1px dashed var(--border)", borderRadius: 8, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer", color: "var(--text-3)" },
  hint: { fontSize: 11.5, color: "var(--text-3)", marginTop: 8 },
  formActions: { display: "flex", gap: 8, marginTop: 16 },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", background: "#8268B0", color: "#fff", padding: "10px 14px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "not-allowed" },
};
