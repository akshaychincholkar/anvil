import { api } from "../api.js";

export default function AuthScreen() {
  return (
    <div style={S.page}>
      <div style={S.card}>
        <div style={S.brand}>
          <div style={S.logo}>B</div>
          <span style={S.brandName}>Anvil</span>
        </div>
        <h1 style={S.title}>Welcome to Anvil</h1>
        <p style={S.sub}>Sign in with Google to continue.</p>

        <button onClick={() => api.signInWithGoogle()} style={S.googleBtn}>
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.81 2.73v2.27h2.92c1.71-1.57 2.69-3.88 2.69-6.64z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34C2.44 15.98 5.48 18 9 18z" />
      <path fill="#FBBC05" d="M3.97 10.7c-.18-.54-.28-1.11-.28-1.7s.1-1.16.28-1.7V4.96H.96A8.997 8.997 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3.01-2.34z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z" />
    </svg>
  );
}

const S = {
  page: { minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--bg)", fontFamily: "'Inter',system-ui,sans-serif", padding: 20 },
  card: { width: "100%", maxWidth: 380, background: "var(--surface)", borderRadius: 16, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", textAlign: "center" },
  brand: { display: "flex", alignItems: "center", justifyContent: "center", gap: 9, marginBottom: 20 },
  logo: { width: 32, height: 32, borderRadius: 8, background: "var(--accent-strong)", color: "#fff", display: "grid", placeItems: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  brandName: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)" },
  title: { fontSize: 22, fontWeight: 700, margin: "0 0 4px", fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)" },
  sub: { fontSize: 13.5, color: "var(--text-3)", margin: "0 0 24px" },
  googleBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10, border: "1px solid var(--border)", background: "#fff", color: "#26241F", padding: "12px", borderRadius: 10, fontSize: 14.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
};
