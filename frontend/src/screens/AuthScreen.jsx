import { useState } from "react";
import { api, setToken } from "../api.js";

export default function AuthScreen({ onAuthed }) {
  const [mode, setMode] = useState("login"); // login | register | forgot
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const isRegister = mode === "register";
  const isForgot = mode === "forgot";

  const switchMode = (m) => { setMode(m); setError(""); setSent(false); };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (isForgot) {
      if (!email.trim()) { setError("Enter your email."); return; }
      setBusy(true);
      try { await api.forgotPassword(email); setSent(true); }
      catch (err) { setError(err.message || "Something went wrong."); }
      finally { setBusy(false); }
      return;
    }
    if (!email.trim() || !password) { setError("Email and password are required."); return; }
    if (isRegister && password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setBusy(true);
    try {
      const res = isRegister
        ? await api.register({ name, email, password })
        : await api.login({ email, password });
      setToken(res.token);
      onAuthed(res.user);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={S.page}>
      <form style={S.card} onSubmit={submit}>
        <div style={S.brand}>
          <div style={S.logo}>B</div>
          <span style={S.brandName}>Anvil</span>
        </div>
        <h1 style={S.title}>{isForgot ? "Reset your password" : isRegister ? "Create your account" : "Welcome back"}</h1>
        <p style={S.sub}>{isForgot ? "We'll email you a link to set a new password." : isRegister ? "Start forging your days." : "Sign in to continue."}</p>

        {isForgot && sent ? (
          <>
            <div style={S.notice}>If an account exists for <strong>{email.trim()}</strong>, a reset link is on its way. The link expires in 1 hour.</div>
            <button type="button" onClick={() => switchMode("login")} style={{ ...S.submit, marginTop: 4 }}>Back to sign in</button>
          </>
        ) : (
          <>
            {isRegister && (
              <label style={S.field}>
                <span style={S.label}>Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={S.input} autoFocus />
              </label>
            )}
            <label style={S.field}>
              <span style={S.label}>Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={S.input} autoFocus={!isRegister} />
            </label>
            {!isForgot && (
              <label style={S.field}>
                <span style={S.label}>Password</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={S.input} />
              </label>
            )}
            {mode === "login" && (
              <div style={{ textAlign: "right", marginTop: -6, marginBottom: 14 }}>
                <button type="button" onClick={() => switchMode("forgot")} style={S.link}>Forgot password?</button>
              </div>
            )}

            {error && <div style={S.error}>{error}</div>}

            <button type="submit" disabled={busy} style={{ ...S.submit, ...(busy ? { opacity: 0.6 } : {}) }}>
              {busy ? "Please wait…" : isForgot ? "Send reset link" : isRegister ? "Create account" : "Sign in"}
            </button>

            <div style={S.switch}>
              {isForgot ? (
                <>Remembered it?{" "}<button type="button" onClick={() => switchMode("login")} style={S.link}>Back to sign in</button></>
              ) : (
                <>
                  {isRegister ? "Already have an account?" : "New here?"}{" "}
                  <button type="button" onClick={() => switchMode(isRegister ? "login" : "register")} style={S.link}>
                    {isRegister ? "Sign in" : "Create one"}
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

const S = {
  page: { minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--bg)", fontFamily: "'Inter',system-ui,sans-serif", padding: 20 },
  card: { width: "100%", maxWidth: 380, background: "var(--surface)", borderRadius: 16, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" },
  brand: { display: "flex", alignItems: "center", gap: 9, marginBottom: 20 },
  logo: { width: 32, height: 32, borderRadius: 8, background: "var(--accent-strong)", color: "#fff", display: "grid", placeItems: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  brandName: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)" },
  title: { fontSize: 22, fontWeight: 700, margin: "0 0 4px", fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)" },
  sub: { fontSize: 13.5, color: "var(--text-3)", margin: "0 0 22px" },
  field: { display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 },
  label: { fontSize: 12, fontWeight: 600, color: "var(--text-2)" },
  input: { border: "1px solid var(--border)", borderRadius: 9, padding: "11px 12px", fontSize: 14, fontFamily: "inherit", outline: "none", color: "var(--text)" },
  error: { background: "rgba(194,83,107,0.10)", color: "#C2536B", fontSize: 13, padding: "9px 12px", borderRadius: 8, marginBottom: 14, fontWeight: 500 },
  notice: { background: "rgba(76,154,107,0.10)", color: "#3B7A54", fontSize: 13, padding: "11px 13px", borderRadius: 8, marginBottom: 14, fontWeight: 500, lineHeight: 1.5 },
  submit: { border: "none", background: "var(--accent-strong)", color: "#fff", padding: "12px", borderRadius: 10, fontSize: 14.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  switch: { fontSize: 13, color: "var(--text-2)", textAlign: "center", marginTop: 18 },
  link: { border: "none", background: "none", color: "#3A7CA5", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 13, padding: 0 },
};
