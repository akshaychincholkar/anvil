import { useState, useEffect, useMemo } from "react";
import { api } from "../api.js";
import { TREES, DEFAULT_TREE } from "./grove/trees.jsx";
import { useCurrency, fmtMoney } from "../currency.js";

const RATE_KEY = "grove_rates";
const PILLARS = Object.keys(TREES); // financial, academic, relationship, spiritual, health

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const startOfWeek = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); const off = (x.getDay() + 6) % 7; x.setDate(x.getDate() - off); return x; };
const fmtH = (min) => { const h = Math.floor(min / 60), m = min % 60; return h && m ? `${h}h ${m}m` : h ? `${h}h` : `${m}m`; };

const PRESETS = [
  { id: "week", label: "This week" },
  { id: "month", label: "This month" },
  { id: "last7", label: "Last 7 days" },
  { id: "year", label: "This year" },
];

function presetRange(id) {
  const now = new Date();
  if (id === "week") return [iso(startOfWeek(now)), iso(now)];
  if (id === "month") return [iso(new Date(now.getFullYear(), now.getMonth(), 1)), iso(now)];
  if (id === "last7") { const f = new Date(now); f.setDate(f.getDate() - 6); return [iso(f), iso(now)]; }
  if (id === "year") return [iso(new Date(now.getFullYear(), 0, 1)), iso(now)];
  return [iso(startOfWeek(now)), iso(now)];
}

export default function WorthScreen() {
  const cur = useCurrency();
  const rupee = (n) => fmtMoney(n, cur.code);
  const [rates, setRates] = useState({});
  const [sessions, setSessions] = useState([]);
  const [preset, setPreset] = useState("week");
  const [from, setFrom] = useState(() => presetRange("week")[0]);
  const [to, setTo] = useState(() => presetRange("week")[1]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const [s, r] = await Promise.all([api.getFocus(), api.getSetting(RATE_KEY)]);
        setSessions(s.sessions || []);
        setRates(r.value || {});
      } catch { /* offline */ }
      setLoaded(true);
    })();
  }, []);

  const applyPreset = (id) => { setPreset(id); const [f, t] = presetRange(id); setFrom(f); setTo(t); };
  const setRange = (which, val) => { setPreset(""); which === "from" ? setFrom(val) : setTo(val); };

  const saveRate = (pillar, val) => {
    const num = Math.max(0, parseFloat(val) || 0);
    const next = { ...rates, [pillar]: num };
    setRates(next);
    api.setSetting(RATE_KEY, next).catch(() => {});
  };

  // minutes focused per pillar within [from, to] (inclusive)
  const rows = useMemo(() => {
    const lo = from, hi = to;
    const mins = {};
    PILLARS.forEach((p) => (mins[p] = 0));
    sessions.filter((s) => s.completed).forEach((s) => {
      const day = (s.started_at || s.created_at || "").slice(0, 10);
      if (day < lo || day > hi) return;
      const p = TREES[s.tree] ? s.tree : DEFAULT_TREE;
      mins[p] += s.actual_min || 0;
    });
    return PILLARS.map((p) => {
      const minutes = mins[p];
      const rate = rates[p] || 0;
      return { pillar: p, minutes, rate, cost: (minutes / 60) * rate, ...TREES[p] };
    }).sort((a, b) => b.cost - a.cost || b.minutes - a.minutes);
  }, [sessions, rates, from, to]);

  const totalCost = rows.reduce((n, r) => n + r.cost, 0);
  const totalMin = rows.reduce((n, r) => n + r.minutes, 0);
  const maxCost = Math.max(1, ...rows.map((r) => r.cost));

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Worth</div>
        <h1 style={S.h1}>Worth</h1>
        <div style={S.subhead}>What your focused time is worth, by pillar.</div>
      </div>

      {/* Headline total */}
      <div style={S.hero}>
        <div style={S.heroVal}>{rupee(totalCost)}</div>
        <div style={S.heroSub}>{fmtH(totalMin)} focused · {from} → {to}</div>
      </div>

      {/* Date range */}
      <div style={S.card}>
        <div style={S.cardTitle}>Period</div>
        <div style={S.presetRow}>
          {PRESETS.map((p) => (
            <button key={p.id} onClick={() => applyPreset(p.id)}
              style={{ ...S.preset, ...(preset === p.id ? S.presetOn : {}) }}>{p.label}</button>
          ))}
        </div>
        <div style={S.dateRow}>
          <label style={S.dateField}><span style={S.dateLbl}>From</span>
            <input type="date" value={from} max={to} onChange={(e) => setRange("from", e.target.value)} style={S.dateInput} /></label>
          <span style={S.dateArrow}>→</span>
          <label style={S.dateField}><span style={S.dateLbl}>To</span>
            <input type="date" value={to} min={from} onChange={(e) => setRange("to", e.target.value)} style={S.dateInput} /></label>
        </div>
      </div>

      {/* Breakdown */}
      <div style={S.card}>
        <div style={S.cardTitle}>Breakdown</div>
        {!loaded ? <div style={S.muted}>Loading…</div> : totalMin === 0 ? (
          <div style={S.muted}>No focus sessions in this period.</div>
        ) : (
          <div style={S.rows}>
            {rows.map((r) => (
              <div key={r.pillar} style={S.row}>
                <div style={S.rowTop}>
                  <span style={{ ...S.dot, background: r.leaf }} />
                  <span style={S.rowName}>{r.label}</span>
                  <span style={S.rowCost}>{rupee(r.cost)}</span>
                </div>
                <div style={S.rowBarTrack}>
                  <div style={{ ...S.rowBar, width: `${(r.cost / maxCost) * 100}%`, background: r.leaf }} />
                </div>
                <div style={S.rowMeta}>{fmtH(r.minutes)} × {rupee(r.rate)}/hr</div>
              </div>
            ))}
            <div style={S.totalRow}><span>Total</span><span style={S.totalVal}>{rupee(totalCost)}</span></div>
          </div>
        )}
      </div>

      {/* Rates */}
      <div style={S.card}>
        <div style={S.cardTitle}>Hourly rates</div>
        <div style={S.cardHint}>Set how much an hour of focus is worth for each pillar.</div>
        <div style={S.rateGrid}>
          {PILLARS.map((p) => (
            <div key={p} style={S.rateRow}>
              <span style={{ ...S.dot, background: TREES[p].leaf }} />
              <span style={S.rateName}>{TREES[p].label}</span>
              <div style={S.rateInputWrap}>
                <span style={S.rupeeSign}>{cur.symbol}</span>
                <input type="number" min="0" inputMode="numeric" placeholder="0"
                  value={rates[p] ?? ""} onChange={(e) => saveRate(p, e.target.value)} style={S.rateInput} />
                <span style={S.perHr}>/hr</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 20px 40px", color: "var(--text)", boxSizing: "border-box", maxWidth: 680, margin: "0 auto" },
  head: { marginBottom: 16 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },

  hero: { background: "linear-gradient(135deg,var(--accent-strong),var(--accent-2))", borderRadius: 16, padding: "22px 24px", color: "#fff", marginBottom: 16, textAlign: "center" },
  heroVal: { fontSize: 38, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", letterSpacing: "-0.02em" },
  heroSub: { fontSize: 12.5, color: "var(--text-3)", marginTop: 4 },

  card: { background: "var(--surface)", borderRadius: 16, padding: "18px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  cardHint: { fontSize: 12, color: "var(--text-3)", marginTop: -8, marginBottom: 12 },
  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "16px 0" },

  presetRow: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 },
  preset: { border: "1px solid var(--border)", background: "var(--surface)", padding: "7px 13px", borderRadius: 18, fontSize: 12.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  presetOn: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  dateRow: { display: "flex", alignItems: "flex-end", gap: 10 },
  dateField: { display: "flex", flexDirection: "column", gap: 4, flex: 1 },
  dateLbl: { fontSize: 11, color: "var(--text-2)", fontWeight: 600 },
  dateInput: { border: "1px solid var(--border)", borderRadius: 9, padding: "9px 10px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", outline: "none", width: "100%", boxSizing: "border-box" },
  dateArrow: { color: "var(--text-3)", paddingBottom: 9 },

  rows: { display: "flex", flexDirection: "column", gap: 14 },
  row: {},
  rowTop: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6 },
  dot: { width: 11, height: 11, borderRadius: 3, flexShrink: 0 },
  rowName: { flex: 1, fontSize: 14, fontWeight: 600 },
  rowCost: { fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  rowBarTrack: { height: 8, background: "#F2F0EA", borderRadius: 4, overflow: "hidden" },
  rowBar: { height: "100%", borderRadius: 4, transition: "width 0.3s" },
  rowMeta: { fontSize: 11.5, color: "var(--text-3)", marginTop: 5, fontWeight: 500 },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", paddingTop: 12, marginTop: 2, fontSize: 14, fontWeight: 700 },
  totalVal: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },

  rateGrid: { display: "flex", flexDirection: "column", gap: 10 },
  rateRow: { display: "flex", alignItems: "center", gap: 8 },
  rateName: { flex: 1, fontSize: 14, fontWeight: 600 },
  rateInputWrap: { display: "flex", alignItems: "center", gap: 3, border: "1px solid var(--border)", borderRadius: 9, padding: "4px 10px", background: "var(--surface-2)" },
  rupeeSign: { fontSize: 14, color: "var(--text-2)", fontWeight: 600 },
  rateInput: { border: "none", background: "none", outline: "none", width: 64, fontSize: 14, fontWeight: 700, fontFamily: "inherit", color: "var(--text)", textAlign: "right" },
  perHr: { fontSize: 12, color: "var(--text-3)", fontWeight: 600 },
};
