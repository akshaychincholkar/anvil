import { useState, useEffect, useCallback, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AFFIRMATION_TABS } from "./spiritual/affirmationsData.js";
import { api } from "../api.js";

// A calm rotating palette, one colour per category.
const PALETTE = ["#3A7CA5", "#4C9A6B", "#C2773B", "#8268B0", "#C2536B", "#C9A227", "#3A7CA5", "#4C9A6B"];
const catColor = (i) => PALETTE[i % PALETTE.length];
const soft = (hex) => hex + "1A";

// Per-user setting key on the backend (syncs across devices). The same string
// is reused for a localStorage cache so favorites appear instantly / offline.
const FAV_KEY = "affirmation_favs";
const LOCAL_KEY = "anvil_affirmation_favs"; // legacy local-only store to migrate from
const loadLocalFavs = () => {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || localStorage.getItem(LOCAL_KEY) || "[]"); }
  catch { return []; }
};

export default function AffirmationsScreen() {
  const [tab, setTab] = useState(0);       // category index, or "FAV"
  const [index, setIndex] = useState(0);   // current card within the section
  const [favs, setFavs] = useState(() => new Set(loadLocalFavs()));
  const hydrated = useRef(false); // guard so the initial server load doesn't re-push

  // On mount, pull the authoritative favorites from the backend. The server is
  // the source of truth so every device shows the same list. The only exception
  // is the first-ever sync: if the server has nothing stored yet but this device
  // has legacy local favorites, seed the server from them (one-time migration).
  useEffect(() => {
    let cancelled = false;
    api.getSetting(FAV_KEY).then((r) => {
      if (cancelled) return;
      if (Array.isArray(r?.value)) {
        setFavs(new Set(r.value));           // server is authoritative
      } else {
        const local = loadLocalFavs();       // nothing on the server yet
        if (local.length) api.setSetting(FAV_KEY, local).catch(() => {});
        setFavs(new Set(local));
      }
      hydrated.current = true;
    }).catch(() => { hydrated.current = true; });
    return () => { cancelled = true; };
  }, []);

  // Persist every change to both the backend (cross-device) and localStorage
  // (instant/offline). Skip the very first render before the server has loaded
  // so we don't clobber the server with a stale local-only set.
  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
    if (hydrated.current) api.setSetting(FAV_KEY, [...favs]).catch(() => {});
  }, [favs]);

  const keyOf = (title, card) => `${title}#${card.id}`;

  // Resolve the cards for the active section.
  const cards = tab === "FAV"
    ? AFFIRMATION_TABS.flatMap((t, i) =>
        t.cards.filter((c) => favs.has(keyOf(t.title, c))).map((c) => ({ ...c, color: catColor(i), title: t.title })))
    : AFFIRMATION_TABS[tab].cards.map((c) => ({ ...c, color: catColor(tab), title: AFFIRMATION_TABS[tab].title }));

  const total = cards.length;
  const safeIndex = Math.min(index, Math.max(0, total - 1));
  const card = cards[safeIndex];

  const selectTab = (t) => { setTab(t); setIndex(0); };
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);

  // Keyboard arrows navigate cards.
  useEffect(() => {
    const h = (e) => { if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [prev, next]);

  const toggleFav = (k) => setFavs((prev) => {
    const n = new Set(prev);
    n.has(k) ? n.delete(k) : n.add(k);
    return n;
  });

  const accent = card ? card.color : "#8268B0";

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div style={S.eyebrow}>Anvil · Affirmations</div>
        <h1 style={S.h1}>Affirmations</h1>
        <div style={S.subhead}>One at a time — read it, mean it.</div>
      </div>

      {/* Section chips */}
      <div style={S.filterBar}>
        {AFFIRMATION_TABS.map((t, i) => {
          const on = tab === i;
          const col = catColor(i);
          return (
            <button key={t.title} onClick={() => selectTab(i)}
              style={{ ...S.chip, ...(on ? { background: col, color: "#fff", borderColor: col } : {}) }}>
              <span style={{ ...S.catDot, background: on ? "#fff" : col }} /> {t.title} <span style={S.chipCount}>{t.cards.length}</span>
            </button>
          );
        })}
        <button onClick={() => selectTab("FAV")}
          style={{ ...S.chip, ...(tab === "FAV" ? { background: "#C9A227", color: "#fff", borderColor: "#C9A227" } : {}) }}>
          <Star size={12} fill={tab === "FAV" ? "#fff" : "none"} /> Favorites <span style={S.chipCount}>{favs.size}</span>
        </button>
      </div>

      {/* Card viewer */}
      {total === 0 ? (
        <div style={S.empty}>
          <Star size={22} color="#C3BFB5" />
          <div>No favorites yet — tap the star on a card to save it here.</div>
        </div>
      ) : (
        <div style={S.viewer}>
          <div style={{ ...S.card, borderTop: `4px solid ${accent}` }}>
            <div style={{ ...S.cardCat, color: accent, background: soft(accent) }}>{card.title}</div>
            <button onClick={() => toggleFav(keyOf(card.title, card))}
              style={{ ...S.favBtn, color: favs.has(keyOf(card.title, card)) ? "#C9A227" : "#C3BFB5" }} title="Favorite">
              <Star size={20} fill={favs.has(keyOf(card.title, card)) ? "#C9A227" : "none"} />
            </button>
            <Quote size={30} color={accent} style={{ opacity: 0.25 }} />
            <p style={S.cardText}>{card.text.trim()}</p>
          </div>

          {/* Nav */}
          <div style={S.navRow}>
            <button onClick={prev} disabled={safeIndex === 0}
              style={{ ...S.navBtn, ...(safeIndex === 0 ? S.navBtnDisabled : {}) }}>
              <ChevronLeft size={18} /> Back
            </button>
            <span style={{ ...S.counter, color: accent }}>{safeIndex + 1} <span style={S.counterTotal}>/ {total}</span></span>
            <button onClick={next} disabled={safeIndex === total - 1}
              style={{ ...S.navBtn, ...(safeIndex === total - 1 ? S.navBtnDisabled : {}) }}>
              Next <ChevronRight size={18} />
            </button>
          </div>

          {/* Progress dots */}
          <div style={S.dots}>
            {cards.map((c, i) => (
              <button key={i} onClick={() => setIndex(i)}
                style={{ ...S.dot, ...(i === safeIndex ? { background: accent, transform: "scale(1.5)" } : {}) }}
                title={`${i + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 24px", color: "var(--text)", boxSizing: "border-box", maxWidth: 760, margin: "0 auto" },
  head: { marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  filterBar: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 22 },
  chip: { display: "flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", padding: "6px 12px", borderRadius: 20, fontSize: 12.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  chipCount: { fontSize: 11, fontWeight: 700, opacity: 0.7 },
  catDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  empty: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--text-3)", padding: "56px 12px", textAlign: "center", background: "var(--surface)", borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  viewer: { display: "flex", flexDirection: "column", alignItems: "center" },
  card: { position: "relative", background: "var(--surface)", borderRadius: 16, padding: "40px 32px 44px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", width: "100%", minHeight: 240, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", boxSizing: "border-box" },
  cardCat: { position: "absolute", top: 16, left: 16, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 12, textTransform: "uppercase", letterSpacing: "0.04em" },
  favBtn: { position: "absolute", top: 14, right: 14, border: "none", background: "none", cursor: "pointer", padding: 4, display: "grid", placeItems: "center" },
  cardText: { fontSize: 21, lineHeight: 1.55, margin: "14px 0 0", fontWeight: 500, color: "var(--text)", fontFamily: "'Fraunces',Georgia,serif", maxWidth: 560 },
  navRow: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: 420, marginTop: 22 },
  navBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", padding: "10px 18px", borderRadius: 10, fontSize: 13.5, fontWeight: 600, color: "var(--text-2)", cursor: "pointer", fontFamily: "inherit" },
  navBtnDisabled: { opacity: 0.4, cursor: "not-allowed" },
  counter: { fontSize: 18, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  counterTotal: { fontSize: 13, fontWeight: 600, color: "var(--text-3)" },
  dots: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginTop: 20, maxWidth: 480 },
  dot: { width: 7, height: 7, borderRadius: "50%", border: "none", background: "var(--border)", cursor: "pointer", padding: 0, transition: "transform 0.12s" },
};
