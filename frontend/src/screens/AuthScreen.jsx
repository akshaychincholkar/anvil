import { useState } from "react";
import { api, setToken } from "../api.js";

export default function AuthScreen({ onAuthed }) {
  const [mode, setMode] = useState("login"); // login | register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const isRegister = mode === "register";

  const submit = async (e) => {
    e.preventDefault();
    setError("");
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
        <h1 style={S.title}>{isRegister ? "Create your account" : "Welcome back"}</h1>
        <p style={S.sub}>{isRegister ? "Start forging your days." : "Sign in to continue."}</p>

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
        <label style={S.field}>
          <span style={S.label}>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={S.input} />
        </label>

        {error && <div style={S.error}>{error}</div>}

        <button type="submit" disabled={busy} style={{ ...S.submit, ...(busy ? { opacity: 0.6 } : {}) }}>
          {busy ? "Please wait…" : isRegister ? "Create account" : "Sign in"}
        </button>

        <div style={S.switch}>
          {isRegister ? "Already have an account?" : "New here?"}{" "}
          <button type="button" onClick={() => { setMode(isRegister ? "login" : "register"); setError(""); }} style={S.link}>
            {isRegister ? "Sign in" : "Create one"}
          </button>
        </div>
      </form>
    </div>
  );
}

const S = {
  page: { minHeight: "100vh", display: "grid", placeItems: "center", background: "#F7F6F3", fontFamily: "'Inter',system-ui,sans-serif", padding: 20 },
  card: { width: "100%", maxWidth: 380, background: "#fff", borderRadius: 16, padding: "32px 28px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" },
  brand: { display: "flex", alignItems: "center", gap: 9, marginBottom: 20 },
  logo: { width: 32, height: 32, borderRadius: 8, background: "#26241F", color: "#fff", display: "grid", placeItems: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif" },
  brandName: { fontSize: 18, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", color: "#26241F" },
  title: { fontSize: 22, fontWeight: 700, margin: "0 0 4px", fontFamily: "'Fraunces',Georgia,serif", color: "#26241F" },
  sub: { fontSize: 13.5, color: "#9A968C", margin: "0 0 22px" },
  field: { display: "flex", flexDirection: "column", gap: 5, marginBottom: 14 },
  label: { fontSize: 12, fontWeight: 600, color: "#6B675E" },
  input: { border: "1px solid #E0DDD5", borderRadius: 9, padding: "11px 12px", fontSize: 14, fontFamily: "inherit", outline: "none", color: "#26241F" },
  error: { background: "rgba(194,83,107,0.10)", color: "#C2536B", fontSize: 13, padding: "9px 12px", borderRadius: 8, marginBottom: 14, fontWeight: 500 },
  submit: { border: "none", background: "#26241F", color: "#fff", padding: "12px", borderRadius: 10, fontSize: 14.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: 4 },
  switch: { fontSize: 13, color: "#6B675E", textAlign: "center", marginTop: 18 },
  link: { border: "none", background: "none", color: "#3A7CA5", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", fontSize: 13, padding: 0 },
};
