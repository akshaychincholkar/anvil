import { useState, useEffect } from "react";
import { X, Eye, EyeOff, ChevronUp, ChevronDown, Check, LayoutList, Palette, Coins, Music, Megaphone, Plus, Home } from "lucide-react";
import { THEMES } from "../theme.js";
import { CURRENCIES } from "../currency.js";
import { api } from "../api.js";

const ordinal = (n) => (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");

function useIsMobile(bp = 560) {
  const [m, setM] = useState(() => window.innerWidth <= bp);
  useEffect(() => {
    const h = () => setM(window.innerWidth <= bp);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, [bp]);
  return m;
}

export default function SettingsModal({ screens, order, hidden, themeId, currency, monthStartDay, ticker, defaultScreen, onSetDefault, onSaveSidebar, onPreviewTheme, onCommitTheme, onSelectCurrency, onSelectMonthStartDay, onSaveTicker, onClose }) {
  const [tab, setTab] = useState("sidebar");
  const [items, setItems] = useState(() => order.map((id) => ({ id, hidden: hidden.includes(id) })));
  const [pendingTheme, setPendingTheme] = useState(themeId);
  const [musicUrl, setMusicUrl] = useState("");
  const [musicSaved, setMusicSaved] = useState(false);
  const [capital, setCapital] = useState("");
  const [capitalSaved, setCapitalSaved] = useState(false);
  const [riskPct, setRiskPct] = useState("");
  const [rr, setRr] = useState("");
  const [div, setDiv] = useState({ swing: "", fno: "", intraday: "" });
  const [riskSaved, setRiskSaved] = useState(false);
  const isMobile = useIsMobile();

  // Reminder ticker editor state
  const [tEnabled, setTEnabled] = useState(!!ticker?.enabled);
  const [tStatements, setTStatements] = useState(() => {
    const s = Array.isArray(ticker?.statements) ? ticker.statements.slice(0, 5) : [];
    return s.length ? s : [""];
  });
  const [tSpeed, setTSpeed] = useState(ticker?.speed ?? 60);
  const [tDelay, setTDelay] = useState(ticker?.delay ?? 3);
  const [tSaved, setTSaved] = useState(false);

  const setStatement = (i, v) => setTStatements((a) => a.map((x, j) => (j === i ? v : x)));
  const addStatement = () => setTStatements((a) => (a.length < 5 ? [...a, ""] : a));
  const removeStatement = (i) => setTStatements((a) => (a.length > 1 ? a.filter((_, j) => j !== i) : a));
  const saveReminders = () => {
    const statements = tStatements.map((s) => s.trim()).filter(Boolean).slice(0, 5);
    onSaveTicker({ enabled: tEnabled, statements, speed: Number(tSpeed), delay: Number(tDelay) });
    setTSaved(true); setTimeout(() => setTSaved(false), 1500);
  };

  useEffect(() => { api.getSetting("golden_music").then((r) => setMusicUrl(r?.value || "")).catch(() => {}); }, []);
  const saveMusic = () => {
    api.setSetting("golden_music", musicUrl.trim())
      .then(() => { setMusicSaved(true); setTimeout(() => setMusicSaved(false), 1500); })
      .catch(() => {});
  };

  useEffect(() => { api.getSetting("trading_capital").then((r) => setCapital(r?.value || "")).catch(() => {}); }, []);
  const saveCapital = () => {
    api.setSetting("trading_capital", String(parseFloat(capital) || 0))
      .then(() => { setCapitalSaved(true); setTimeout(() => setCapitalSaved(false), 1500); })
      .catch(() => {});
  };

  useEffect(() => {
    api.getSetting("trading_risk_pct").then((r) => setRiskPct(r?.value ?? "")).catch(() => {});
    api.getSetting("trading_rr").then((r) => setRr(r?.value ?? "")).catch(() => {});
    api.getSetting("trading_diversification").then((r) => {
      const v = r?.value || {};
      setDiv({ swing: v.swing ?? "", fno: v.fno ?? "", intraday: v.intraday ?? "" });
    }).catch(() => {});
  }, []);
  const saveRiskRules = () => {
    const divPayload = {
      swing: parseInt(div.swing, 10) || 0,
      fno: parseInt(div.fno, 10) || 0,
      intraday: parseInt(div.intraday, 10) || 0,
    };
    Promise.all([
      api.setSetting("trading_risk_pct", parseFloat(riskPct) || 0),
      api.setSetting("trading_rr", parseFloat(rr) || 0),
      api.setSetting("trading_diversification", divPayload),
    ]).then(() => { setRiskSaved(true); setTimeout(() => setRiskSaved(false), 1500); }).catch(() => {});
  };

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
            <Coins size={15} /> Monetary
          </button>
          <button onClick={() => setTab("music")} style={{ ...S.tab, ...(tab === "music" ? S.tabOn : {}) }}>
            <Music size={15} /> Music
          </button>
          <button onClick={() => setTab("reminders")} style={{ ...S.tab, ...(tab === "reminders" ? S.tabOn : {}) }}>
            <Megaphone size={15} /> Reminders
          </button>
        </div>

        <div style={S.body}>
          {tab === "sidebar" ? (
            <>
              <p style={S.hint}>Reorder with the arrows, hide ones you don't use, and tap <Home size={11} style={{ verticalAlign: "-1px" }} /> to set the screen that opens on launch.</p>
              <div style={S.list}>
                {items.map((it, i) => {
                  const sc = screens[it.id];
                  const Icon = sc.icon;
                  const isDefault = defaultScreen === it.id;
                  return (
                    <div key={it.id} style={{ ...S.row, opacity: it.hidden ? 0.5 : 1, ...(isDefault ? { borderColor: "var(--accent)" } : {}) }}>
                      <span style={S.rowNum}>{i + 1}</span>
                      <Icon size={16} />
                      <span style={S.rowLabel}>{sc.label}{isDefault && <span style={S.defaultTag}>default</span>}</span>
                      <button onClick={() => onSetDefault(it.id)} title={isDefault ? "Opens on launch" : "Set as default"}
                        style={{ ...S.iconBtn, ...(isDefault ? { color: "var(--accent)" } : {}) }}>
                        <Home size={15} />
                      </button>
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
              <p style={S.hint}>Choose the currency used across Wallet and Worth. Applies instantly.</p>
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

              <div style={S.subDivider} />
              <div style={S.fieldLbl}>Month starts on</div>
              <p style={S.hint}>If your salary lands on the 25th, set this to 25 — Wallet and Expenses will treat each "month" as running 25th to 24th instead of calendar month.</p>
              <select value={monthStartDay} onChange={(e) => onSelectMonthStartDay(Number(e.target.value))} style={S.musicInput}>
                {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d === 1 ? "1st (calendar month)" : `${d}${ordinal(d)}`}</option>
                ))}
              </select>

              <div style={S.subDivider} />
              <div style={S.fieldLbl}>Trading capital</div>
              <p style={S.hint}>Your starting capital for the <b>Trading Journal</b>. The page shows this plus your all-time net P/L — green when in profit, red when below.</p>
              <input type="number" value={capital} onChange={(e) => setCapital(e.target.value)}
                placeholder="e.g. 100000" style={S.musicInput} />
              <button onClick={saveCapital} style={S.saveBtn}><Check size={15} /> {capitalSaved ? "Saved" : "Save capital"}</button>

              <div style={S.subDivider} />
              <div style={S.fieldLbl}>Trading discipline rules</div>
              <p style={S.hint}>Guardrails enforced when opening a trade. A trade that breaks any rule can't be saved. Leave a field at 0 (or blank) to disable that rule.</p>

              <label style={S.miniLbl}>Risk per trade (%)</label>
              <p style={S.hint}>Max loss on any single trade as a percent of capital. e.g. 2% of 100000 caps loss at 2000 — quantity or SL that risks more is blocked.</p>
              <input type="number" step="0.1" min="0" value={riskPct} onChange={(e) => setRiskPct(e.target.value)}
                placeholder="e.g. 2" style={S.musicInput} />

              <label style={S.miniLbl}>Risk : Reward (1 : R)</label>
              <p style={S.hint}>Minimum reward multiple of risk. Enter 3 for 1:3 — if SL is 5 below entry, target must be at least 15 above entry.</p>
              <input type="number" step="0.5" min="0" value={rr} onChange={(e) => setRr(e.target.value)}
                placeholder="e.g. 3" style={S.musicInput} />

              <label style={S.miniLbl}>Diversification (max open trades per section)</label>
              <p style={S.hint}>Limits how many open trades you may hold per section, and caps each position's value at capital ÷ this number (e.g. 5 → max 20000 per trade on 100000 capital).</p>
              <div style={S.divGrid}>
                {[["swing", "Swing"], ["fno", "FnO"], ["intraday", "Intraday"]].map(([k, lbl]) => (
                  <div key={k} style={S.divCell}>
                    <span style={S.divLbl}>{lbl}</span>
                    <input type="number" min="0" step="1" value={div[k]}
                      onChange={(e) => setDiv((d) => ({ ...d, [k]: e.target.value }))}
                      placeholder="0" style={S.divInput} />
                  </div>
                ))}
              </div>

              <button onClick={saveRiskRules} style={S.saveBtn}><Check size={15} /> {riskSaved ? "Saved" : "Save rules"}</button>
            </>
          ) : tab === "music" ? (
            <>
              <p style={S.hint}>Paste a YouTube link to play softly while you write in the <b>Golden Book</b>. It plays only on that screen (audio only).</p>
              <input value={musicUrl} onChange={(e) => setMusicUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=…" style={S.musicInput} />
              <button onClick={saveMusic} style={S.saveBtn}><Check size={15} /> {musicSaved ? "Saved" : "Save music"}</button>
            </>
          ) : tab === "reminders" ? (
            <>
              <p style={S.hint}>Up to 5 reminders scroll across the top of every screen — a gentle nudge toward your goals.</p>

              <button onClick={() => setTEnabled((v) => !v)}
                style={{ ...S.row, cursor: "pointer", width: "100%", justifyContent: "space-between", ...(tEnabled ? { borderColor: "var(--accent)" } : {}) }}>
                <span style={S.rowLabel}>Show reminder banner</span>
                <span style={{ ...S.switch, ...(tEnabled ? S.switchOn : {}) }}>{tEnabled ? "On" : "Off"}</span>
              </button>

              <div style={{ marginTop: 14 }}>
                <div style={S.fieldLbl}>Reminders ({tStatements.filter((s) => s.trim()).length}/5)</div>
                {tStatements.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                    <input value={s} onChange={(e) => setStatement(i, e.target.value)} maxLength={120}
                      placeholder={`Reminder ${i + 1}`} style={{ ...S.musicInput, marginBottom: 0 }} />
                    <button onClick={() => removeStatement(i)} style={S.iconBtn} title="Remove"><X size={15} /></button>
                  </div>
                ))}
                {tStatements.length < 5 && (
                  <button onClick={addStatement} style={S.addRowBtn}><Plus size={14} /> Add reminder</button>
                )}
              </div>

              <div style={{ marginTop: 16 }}>
                <div style={S.sliderHead}><span style={S.fieldLbl}>Scroll speed</span><span style={S.sliderVal}>{tSpeed} px/s</span></div>
                <input type="range" min={20} max={200} step={5} value={tSpeed} onChange={(e) => setTSpeed(e.target.value)} style={S.range} />
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={S.sliderHead}><span style={S.fieldLbl}>Delay between reminders</span><span style={S.sliderVal}>{tDelay}s</span></div>
                <input type="range" min={0} max={15} step={1} value={tDelay} onChange={(e) => setTDelay(e.target.value)} style={S.range} />
              </div>

              <button onClick={saveReminders} style={{ ...S.saveBtn, marginTop: 16 }}><Check size={15} /> {tSaved ? "Saved" : "Save reminders"}</button>
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
  rowLabel: { flex: 1, fontSize: 13.5, fontWeight: 500, display: "flex", alignItems: "center", gap: 7 },
  defaultTag: { fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 14%, transparent)", padding: "1px 6px", borderRadius: 6 },
  curSymbol: { width: 22, textAlign: "center", fontSize: 15, fontWeight: 700, color: "var(--text)" },
  curCode: { fontSize: 11, color: "var(--text-3)", fontWeight: 600, marginLeft: 4 },
  iconBtn: { border: "none", background: "none", color: "var(--text-2)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", borderRadius: 6 },
  saveBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", marginTop: 16, border: "none", background: "var(--accent)", color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" },
  saveBtnDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "default" },
  musicInput: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", marginBottom: 12 },
  switch: { fontSize: 12, fontWeight: 700, color: "var(--text-3)", background: "var(--hover)", borderRadius: 20, padding: "3px 12px", minWidth: 44, textAlign: "center" },
  switchOn: { background: "var(--accent)", color: "#fff" },
  fieldLbl: { fontSize: 12, fontWeight: 700, color: "var(--text-2)", marginBottom: 7 },
  miniLbl: { display: "block", fontSize: 11.5, fontWeight: 700, color: "var(--text)", margin: "12px 0 2px" },
  subDivider: { height: 1, background: "var(--border)", margin: "18px 0 14px" },
  divGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 12 },
  divCell: { display: "flex", flexDirection: "column", gap: 4 },
  divLbl: { fontSize: 11, fontWeight: 700, color: "var(--text-3)" },
  divInput: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 9, padding: "8px 10px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none" },
  addRowBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", border: "1px dashed var(--border)", background: "none", color: "var(--text-2)", padding: "9px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  sliderHead: { display: "flex", justifyContent: "space-between", alignItems: "baseline" },
  sliderVal: { fontSize: 12, fontWeight: 700, color: "var(--accent)" },
  range: { width: "100%", accentColor: "var(--accent)", cursor: "pointer" },
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
