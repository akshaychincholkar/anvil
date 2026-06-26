import { useState } from "react";
import { api } from "../api.js";

export default function ResetPasswordScreen({ token, onDone }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setError("The two passwords don't match."); return; }
    setBusy(true);
    try {
      await api.resetPassword(token, password);
      setDone(true);
    } catch (err) {
      setError(err.message || "This reset link is invalid or has expired.");
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

        {done ? (
          <>
            <h1 style={S.title}>Password updated</h1>
            <p style={S.sub}>You can now sign in with your new password.</p>
            <button type="button" onClick={onDone} style={S.submit}>Go to sign in</button>
          </>
        ) : (
          <>
            <h1 style={S.title}>Set a new password</h1>
            <p style={S.sub}>Enter your new password twice to confirm.</p>

            <label style={S.field}>
              <span style={S.label}>New password</span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={S.input} autoFocus />
            </label>
            <label style={S.field}>
              <span style={S.label}>Confirm new password</span>
              <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" style={S.input} />
            </label>

            {error && <div style={S.error}>{error}</div>}

            <button type="submit" disabled={busy} style={{ ...S.submit, ...(busy ? { opacity: 0.6 } : {}) }}>
              {busy ? "Please wait…" : "Reset password"}
            </button>
            <div style={S.switch}>
              <button type="button" onClick={onDone} style={S.link}>Back to sign in</button>
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
  submit: { border: "none", background: "var(--accent-strong)", color: "#fff", padding: "12px", borderRadius: 10, fontSize: 14.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  switch: { fontSize: 13, color: "var(--text-2)", textAlign: "center", marginTop: 18 },
  link: { border: "none", background: "none", color: "#3A7CA5", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 13, padding: 0 },
};
