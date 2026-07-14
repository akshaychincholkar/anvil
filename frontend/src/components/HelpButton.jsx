import { useState, useEffect } from "react";
import { HelpCircle, X } from "lucide-react";

// Registry of per-section help content. Add an entry here whenever a new
// docs/help/<section>.md is authored — see docs/help/README.md for the
// full convention (markdown is the reviewed source, this map is the
// in-app copy).
const REGISTRY = {
  habits: () => import("../help/content/habits.js"),
  dashboard: () => import("../help/content/dashboard.js"),
  expenses: () => import("../help/content/expenses.js"),
  "golden-book": () => import("../help/content/golden-book.js"),
  grove: () => import("../help/content/grove.js"),
  achievements: () => import("../help/content/achievements.js"),
  journal: () => import("../help/content/journal.js"),
  revision: () => import("../help/content/revision.js"),
  spiritual: () => import("../help/content/spiritual.js"),
  kickstart: () => import("../help/content/kickstart.js"),
  affirmations: () => import("../help/content/affirmations.js"),
  challenges: () => import("../help/content/challenges.js"),
  finance: () => import("../help/content/finance.js"),
  worth: () => import("../help/content/worth.js"),
  "trading-journal": () => import("../help/content/trading-journal.js"),
  mindscape: () => import("../help/content/mindscape.js"),
  "bucket-list": () => import("../help/content/bucket-list.js"),
  goals: () => import("../help/content/goals.js"),
  skills: () => import("../help/content/skills.js"),
  delight: () => import("../help/content/delight.js"),
};

// Small round "?" button — drop next to any screen's <h1>. `id` must match
// a key in REGISTRY (and the docs/help/<id>.md filename).
export default function HelpButton({ id }) {
  const [open, setOpen] = useState(false);
  if (!REGISTRY[id]) return null;
  return (
    <>
      <button onClick={() => setOpen(true)} style={S.btn} title="How to use this section" aria-label="Help">
        <HelpCircle size={16} />
      </button>
      {open && <HelpModal id={id} onClose={() => setOpen(false)} />}
    </>
  );
}

function HelpModal({ id, onClose }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    REGISTRY[id]().then((m) => setContent(m.default)).catch(() => setContent(false));
  }, [id]);

  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={S.closeBtn} aria-label="Close"><X size={18} /></button>
        {!content ? (
          <div style={S.loading}>{content === false ? "Help content coming soon." : "Loading…"}</div>
        ) : (
          <div style={S.body}>
            <div style={S.eyebrow}>Help</div>
            <h2 style={S.title}>{content.title}</h2>
            <p style={S.tagline}>{content.tagline}</p>

            <Section label="What it is">
              <p style={S.p}>{content.what}</p>
              <Shot src={content.screenshot} />
            </Section>

            <Section label="How to use it">
              {content.howTo.map((step, i) => (
                <div key={i} style={S.step}>
                  <div style={S.stepHead}>
                    <span style={S.stepNum}>{i + 1}</span>
                    <span style={S.stepHeading}>{step.heading}</span>
                  </div>
                  <p style={S.p}>{step.body}</p>
                  {step.list && (
                    <ul style={S.list}>
                      {step.list.map((li, j) => <li key={j} style={S.li}>{li}</li>)}
                    </ul>
                  )}
                  <Shot src={step.screenshot} />
                </div>
              ))}
            </Section>

            <Section label="Why it matters">
              {content.why.split("\n\n").map((para, i) => (
                <p key={i} style={S.p}>{para}</p>
              ))}
            </Section>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={S.section}>
      <div style={S.sectionLabel}>{label}</div>
      {children}
    </div>
  );
}

// Screenshots are optional — if the file hasn't been captured yet, the
// broken image simply disappears instead of showing a broken-image icon.
function Shot({ src }) {
  const [broken, setBroken] = useState(false);
  if (!src || broken) return null;
  return <img src={src} alt="" style={S.shot} onError={() => setBroken(true)} />;
}

const S = {
  btn: {
    display: "grid", placeItems: "center", width: 28, height: 28, borderRadius: "50%",
    border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)",
    cursor: "pointer", flexShrink: 0,
  },
  overlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 400,
    display: "grid", placeItems: "center", padding: 16,
  },
  modal: {
    background: "var(--surface)", borderRadius: 14, width: "100%", maxWidth: 640,
    maxHeight: "88vh", overflowY: "auto", position: "relative", padding: "26px 26px 30px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)", fontFamily: "'Inter',system-ui,sans-serif",
  },
  closeBtn: {
    position: "absolute", top: 16, right: 16, border: "none", background: "var(--hover)",
    color: "var(--text-2)", width: 30, height: 30, borderRadius: "50%", cursor: "pointer",
    display: "grid", placeItems: "center",
  },
  loading: { padding: "40px 0", textAlign: "center", color: "var(--text-3)", fontSize: 13 },
  body: { display: "flex", flexDirection: "column" },
  eyebrow: { fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  title: { fontSize: 24, fontWeight: 700, margin: "0 0 4px", letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif", paddingRight: 30 },
  tagline: { margin: "0 0 18px", fontSize: 13.5, color: "var(--text-2)", fontStyle: "italic" },
  section: { marginBottom: 20 },
  sectionLabel: {
    fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
    color: "var(--accent)", marginBottom: 8, borderBottom: "1px solid var(--border)", paddingBottom: 6,
  },
  p: { fontSize: 13.5, lineHeight: 1.6, color: "var(--text)", margin: "0 0 8px" },
  step: { marginBottom: 14 },
  stepHead: { display: "flex", alignItems: "center", gap: 8, marginBottom: 4 },
  stepNum: {
    width: 20, height: 20, borderRadius: "50%", background: "var(--accent)", color: "#fff",
    fontSize: 11, fontWeight: 700, display: "grid", placeItems: "center", flexShrink: 0,
  },
  stepHeading: { fontSize: 14, fontWeight: 700, color: "var(--text)" },
  list: { margin: "0 0 8px", paddingLeft: 20 },
  li: { fontSize: 13.5, lineHeight: 1.6, color: "var(--text)", marginBottom: 4 },
  shot: {
    width: "100%", borderRadius: 8, border: "1px solid var(--border)", display: "block",
    margin: "8px 0 4px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
  },
};
