import { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SPIRITUAL_ITEMS } from "./spiritual/spiritualContent.js";

function useIsMobile() {
  const [m, setM] = useState(() => window.innerWidth < 720);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 720);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

function ImageCarousel({ base, count }) {
  const [i, setI] = useState(0);
  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      <div style={S.carouselFrame}>
        <img src={`${base}${i + 1}.jpg`} alt={`Adhyay ${i + 1}`} style={S.carouselImg} />
      </div>
      <div style={S.carouselNav}>
        <button onClick={() => setI((p) => (p - 1 + count) % count)} style={S.carouselBtn}><ChevronLeft size={16} /> Prev</button>
        <span style={S.carouselCount}>Adhyay {i + 1} / {count}</span>
        <button onClick={() => setI((p) => (p + 1) % count)} style={S.carouselBtn}>Next <ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

export default function SpiritualScreen() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState("dss");
  const item = SPIRITUAL_ITEMS.find((x) => x.id === activeId) || SPIRITUAL_ITEMS[0];

  const pick = (id) => { setActiveId(id); if (isMobile) setSidebarOpen(false); };

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
          {SPIRITUAL_ITEMS.map((it) => {
            const on = it.id === activeId;
            return (
              <button key={it.id} onClick={() => pick(it.id)}
                style={{ ...S.sideItem, ...(on ? S.sideItemOn : {}) }}>
                {it.title}
              </button>
            );
          })}
        </div>
      </aside>

      <main style={S.main}>
        {isMobile && (
          <button onClick={() => setSidebarOpen(true)} style={S.hamburger}>
            <Menu size={17} />
            <span style={S.hamburgerLabel}>{item.title}</span>
          </button>
        )}

        <div style={S.contentWrap}>
          {item.youtube && (
            <div style={S.videoFrame}>
              <iframe
                key={item.youtube}
                src={`https://www.youtube.com/embed/${item.youtube}`}
                title={item.title}
                style={S.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {item.carousel
            ? <ImageCarousel base={item.imageBase} count={item.carousel} />
            : <div className="spiritual-content" dangerouslySetInnerHTML={{ __html: item.html }} />}
        </div>
      </main>
    </div>
  );
}

const CONTENT_CSS = `
.spiritual-content { font-family: 'Inter', system-ui, sans-serif; color: #26241F; line-height: 1.9; font-size: 16px; text-align: center; }
.spiritual-content h1 { font-family: 'Fraunces', Georgia, serif; font-size: 24px; color: #8268B0; margin: 8px 0 18px; letter-spacing: -0.01em; }
.spiritual-content h2 { font-family: 'Fraunces', Georgia, serif; font-size: 18px; color: #7A5EA8; margin: 20px 0 8px; }
.spiritual-content h3 { font-size: 15px; color: #9A968C; text-transform: uppercase; letter-spacing: 0.06em; margin: 18px 0 6px; }
.spiritual-content b { color: #8268B0; }
.spiritual-content div { text-align: center; }
`;

const S = {
  shell: { display: "flex", fontFamily: "'Inter',system-ui,sans-serif", background: "#F7F6F3", minHeight: "100vh", color: "#26241F", position: "relative", overflow: "hidden" },
  sidebar: { width: 240, flexShrink: 0, background: "#fff", borderRight: "1px solid #ECEAE3", display: "flex", flexDirection: "column" },
  sidebarOverlay: { position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 30, boxShadow: "4px 0 24px rgba(0,0,0,0.15)", transition: "transform 0.22s ease", transform: "translateX(0)" },
  sidebarHidden: { transform: "translateX(-105%)" },
  backdrop: { position: "absolute", inset: 0, background: "rgba(38,36,31,0.35)", zIndex: 20 },
  sideHead: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 14px 12px" },
  brand: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A968C", fontWeight: 700 },
  sideScroll: { flex: 1, overflowY: "auto", padding: "0 8px 16px" },
  sideItem: { display: "block", width: "100%", border: "none", background: "none", padding: "10px 12px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", fontSize: 13.5, fontWeight: 500, color: "#4A463E", textAlign: "left", marginBottom: 2 },
  sideItemOn: { background: "rgba(130,104,176,0.12)", color: "#8268B0", fontWeight: 700 },
  main: { flex: 1, padding: "26px 22px", overflowY: "auto", minWidth: 0 },
  hamburger: { display: "flex", alignItems: "center", gap: 9, border: "1px solid #E0DDD5", background: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit", marginBottom: 18 },
  hamburgerLabel: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 220 },
  contentWrap: { background: "#fff", borderRadius: 14, padding: "26px 28px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", maxWidth: 760, margin: "0 auto" },
  videoFrame: { position: "relative", width: "100%", maxWidth: 600, margin: "0 auto 22px", aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden", background: "#000" },
  video: { position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" },
  carouselFrame: { background: "#FAFAF8", borderRadius: 12, padding: 8, border: "1px solid #ECEAE3" },
  carouselImg: { width: "100%", borderRadius: 8, display: "block" },
  carouselNav: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 },
  carouselBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid #E0DDD5", background: "#fff", padding: "8px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, color: "#4A463E", cursor: "pointer", fontFamily: "inherit" },
  carouselCount: { fontSize: 13, fontWeight: 700, color: "#8268B0", fontFamily: "'Fraunces',Georgia,serif" },
  iconBtn: { border: "none", background: "none", cursor: "pointer", display: "grid", placeItems: "center", padding: 4, borderRadius: 6, color: "#6B675E" },
};
