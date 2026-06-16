import { useState, useEffect } from "react";
import { X, Eye, EyeOff, ChevronUp, ChevronDown, Check, LayoutList, Palette, Coins } from "lucide-react";
import { THEMES } from "../theme.js";
import { CURRENCIES } from "../currency.js";

function useIsMobile(bp = 560) {
  const [m, setM] = useState(() => window.innerWidth <= bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth <= bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

export default function SettingsModal({ screens, order, hidden, themeId, currency, onSaveSidebar, onPreviewTheme, onCommitTheme, onSelectCurrency, onClose }) {
  const [tab, setTab] = useState("sidebar");
  const [items, setItems] = useState(() => order.map((id) => ({ id, hidden: hidden.includes(id) })));
  const [pendingTheme, setPendingTheme] = useState(themeId);
  const isMobile = useIsMobile();

  const pickTheme = (id) => { setPendingTheme(id); onPreviewTheme(id); };

  const visibleCount = items.filter((i) => !i.hidden).length;

  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    setItems(next);
  };
  const toggleHide = (i) => {
    const it = items[i];
    if (!it.hidden && visibleCount <= 1) return; // keep at least one visible
    const next = [...items];
    next[i] = { ...it, hidden: !it.hidden };
    setItems(next);
  };

  const saveSidebar = () => {
    onSaveSidebar(items.map((i) => i.id), items.filter((i) => i.hidden).map((i) => i.id));
  };

  const overlayStyle = isMobile ? { ...S.overlay, padding: 0 } : S.overlay;
  const modalStyle = isMobile
    ? { ...S.modal, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "100%", borderRadius: 0, border: "none" }
    : S.modal;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={S.head}>
          <div style={S.title}>Settings</div>
          <button onClick={onClose} style={S.closeBtn}><X size={18} /></button>
        </div>

        <div style={S.tabs}>
          <button onClick={() => setTab("sidebar")} style={{ ...S.tab, ...(tab === "sidebar" ? S.tabOn : {}) }}>
            <LayoutList size={15} /> Configure sidebar
          </button>
          <button onClick={() => setTab("themes")} style={{ ...S.tab, ...(tab === "themes" ? S.tabOn : {}) }}>
            <Palette size={15} /> Themes
          </button>
          <button onClick={() => setTab("currency")} style={{ ...S.tab, ...(tab === "currency" ? S.tabOn : {}) }}>
            <Coins size={15} /> Currency
          </button>
        </div>

        <div style={S.body}>
          {tab === "sidebar" ? (
            <>
              <p style={S.hint}>Reorder items with the arrows, and hide the ones you don't use. Hidden items disappear from the sidebar but stay accessible here.</p>
              <div style={S.list}>
                {items.map((it, i) => {
                  const sc = screens[it.id];
                  const Icon = sc.icon;
                  return (
                    <div key={it.id} style={{ ...S.row, opacity: it.hidden ? 0.5 : 1 }}>
                      <span style={S.rowNum}>{i + 1}</span>
                      <Icon size={16} />
                      <span style={S.rowLabel}>{sc.label}</span>
                      <button onClick={() => toggleHide(i)} title={it.hidden ? "Show" : "Hide"}
                        style={{ ...S.iconBtn, ...(it.hidden ? {} : { color: "var(--accent)" }) }}>
                        {it.hidden ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                      <button onClick={() => move(i, -1)} disabled={i === 0} style={{ ...S.iconBtn, opacity: i === 0 ? 0.3 : 1 }}><ChevronUp size={15} /></button>
                      <button onClick={() => move(i, 1)} disabled={i === items.length - 1} style={{ ...S.iconBtn, opacity: i === items.length - 1 ? 0.3 : 1 }}><ChevronDown size={15} /></button>
                    </div>
                  );
                })}
              </div>
              <button onClick={saveSidebar} style={S.saveBtn}><Check size={15} /> Save sidebar</button>
            </>
          ) : tab === "currency" ? (
            <>
              <p style={S.hint}>Choose the currency used across Vault and Worth. Applies instantly.</p>
              <div style={S.list}>
                {CURRENCIES.map((c) => {
                  const on = c.code === currency;
                  return (
                    <button key={c.code} onClick={() => onSelectCurrency(c.code)}
                      style={{ ...S.row, cursor: "pointer", textAlign: "left", width: "100%", ...(on ? { borderColor: "var(--accent)" } : {}) }}>
                      <span style={S.curSymbol}>{c.symbol}</span>
                      <span style={S.rowLabel}>{c.label} <span style={S.curCode}>{c.code}</span></span>
                      {on && <span style={S.themeCheck}><Check size={13} /></span>}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p style={S.hint}>Tap a theme to preview it live, then hit <b>Apply theme</b> to keep it.</p>
              <div style={S.themeGrid}>
                {THEMES.map((t) => {
                  const on = t.id === pendingTheme;
                  return (
                    <button key={t.id} onClick={() => pickTheme(t.id)}
                      style={{ ...S.themeCard, ...(on ? S.themeCardOn : {}) }}>
                      <div style={S.swatchRow}>
                        {t.swatch.map((c, i) => <span key={i} style={{ ...S.swatch, background: c }} />)}
                        {on && <span style={S.themeCheck}><Check size={13} /></span>}
                      </div>
                      <div style={S.themeName}>{t.name}{t.dark ? <span style={S.darkTag}>Dark</span> : null}</div>
                      <div style={S.themeDesc}>{t.description}</div>
                    </button>
                  );
                })}
              </div>
              <button onClick={() => onCommitTheme(pendingTheme)} disabled={pendingTheme === themeId}
                style={{ ...S.saveBtn, ...(pendingTheme === themeId ? S.saveBtnDisabled : {}) }}>
                <Check size={15} /> {pendingTheme === themeId ? "Theme applied" : "Apply theme"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const S = {
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  modal: { background: "var(--surface)", color: "var(--text)", borderRadius: 16, width: 460, maxWidth: "100%", maxHeight: "88vh", display: "flex", flexDirection: "column", boxShadow: "0 12px 48px rgba(0,0,0,0.3)", border: "1px solid var(--border)", overflow: "hidden" },
  head: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 18px", borderBottom: "1px solid var(--border)", flexShrink: 0 },
  title: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  closeBtn: { border: "none", background: "var(--hover)", color: "var(--text-2)", width: 30, height: 30, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  tabs: { display: "flex", flexWrap: "wrap", gap: 6, padding: "12px 18px 0", flexShrink: 0 },
  tab: { display: "flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "8px 12px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer" },
  tabOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "transparent" },
  body: { padding: "16px 18px 20px", overflowY: "auto", overflowX: "hidden", flex: 1, minHeight: 0 },
  hint: { fontSize: 12.5, color: "var(--text-3)", lineHeight: 1.5, margin: "0 0 14px" },
  list: { display: "flex", flexDirection: "column", gap: 6 },
  row: { display: "flex", alignItems: "center", gap: 10, padding: "9px 11px", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 9 },
  rowNum: { fontSize: 11, fontWeight: 700, color: "var(--text-3)", width: 16, textAlign: "center" },
  rowLabel: { flex: 1, fontSize: 13.5, fontWeight: 500 },
  curSymbol: { width: 22, textAlign: "center", fontSize: 15, fontWeight: 700, color: "var(--text)" },
  curCode: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginLeft: 4 },
  iconBtn: { border: "none", background: "none", color: "var(--text-2)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", borderRadius: 6 },
  saveBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", marginTop: 16, border: "none", background: "var(--accent)", color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" },
  saveBtnDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "default" },
  themeGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  themeCard: { textAlign: "left", border: "2px solid var(--border)", background: "var(--surface-2)", borderRadius: 12, padding: 12, cursor: "pointer", display: "flex", flexDirection: "column", gap: 6, outline: "none", WebkitTapHighlightColor: "transparent", transition: "border-color .15s ease, box-shadow .15s ease" },
  themeCardOn: { borderColor: "var(--accent)", boxShadow: "0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent)" },
  swatchRow: { display: "flex", alignItems: "center", gap: 5, position: "relative" },
  swatch: { width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.08)" },
  themeCheck: { marginLeft: "auto", width: 20, height: 20, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center" },
  themeName: { fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 },
  darkTag: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", background: "var(--hover)", color: "var(--text-2)", padding: "1px 6px", borderRadius: 6 },
  themeDesc: { fontSize: 11.5, color: "var(--text-3)", lineHeight: 1.4 },
};
