import { useState, useEffect, useCallback, useMemo } from "react";
import { Plus, X, Check, Play, Pencil, Scissors, Tag } from "lucide-react";
import { api } from "../api.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const DAY_ABBR = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };
const todayName = () => DAYS[(new Date().getDay() + 6) % 7];

const PILLARS = {
  Financial: "#C9A227", Academic: "#3A7CA5", Relationship: "#C2536B", Health: "#4C9A6B", Spiritual: "#8268B0",
};
const PILLAR_NAMES = Object.keys(PILLARS);
const MAX_CUSTOM = 21;
const CUSTOM_KEY = "kickstart_tags";

const ytId = (url) => {
  if (!url) return "";
  const u = url.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
};
const parseTime = (s) => {
  if (!s || !String(s).trim()) return null;
  const parts = String(s).split(":").map((x) => parseInt(x.trim(), 10));
  if (parts.some((n) => isNaN(n) || n < 0)) return null;
  return parts.reduce((acc, p) => acc * 60 + p, 0);
};
const fmtTime = (sec) => {
  if (sec == null) return "";
  const s = Math.max(0, sec | 0);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
const embedUrl = (v) =>
  `https://www.youtube.com/embed/${v.youtube_id}?start=${v.start_sec || 0}` +
  (v.end_sec ? `&end=${v.end_sec}` : "") + `&autoplay=1&rel=0`;

const blankForm = () => ({ id: null, url: "", title: "", start: "", end: "", days: [todayName()], pillars: [], customs: [] });

export default function KickstartScreen() {
  const [videos, setVideos] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState({ type: "day", value: todayName() });
  const [form, setForm] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [newTag, setNewTag] = useState("");

  const load = useCallback(async () => {
    try {
      const [v, t] = await Promise.all([api.getKickstart(), api.getSetting(CUSTOM_KEY)]);
      setVideos(v);
      setCustomTags(Array.isArray(t?.value) ? t.value : []);
    } catch { /* offline */ }
    setLoaded(true);
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem, toasts, handleUndo, handleDismiss } = useUndoableDelete(api.deleteKickstart, api.restoreKickstart, load);

  const saveCustomTags = (arr) => { setCustomTags(arr); api.setSetting(CUSTOM_KEY, arr).catch(() => {}); };
  const addCustomTag = () => {
    const name = newTag.trim();
    if (!name || customTags.length >= MAX_CUSTOM || customTags.includes(name)) return;
    saveCustomTags([...customTags, name]);
    // Auto-apply the new tag to the video currently being added/edited.
    setForm((f) => (f && !f.customs.includes(name) ? { ...f, customs: [...f.customs, name] } : f));
    setNewTag("");
  };
  const removeCustomTag = (name) => saveCustomTags(customTags.filter((t) => t !== name));

  const toggleIn = (key, val) => setForm((f) => ({
    ...f, [key]: f[key].includes(val) ? f[key].filter((x) => x !== val) : [...f[key], val],
  }));

  const openEdit = (v) => setForm({
    id: v.id, url: `https://youtu.be/${v.youtube_id}`, title: v.title,
    start: fmtTime(v.start_sec), end: v.end_sec ? fmtTime(v.end_sec) : "",
    days: [...v.days], pillars: [...v.pillars], customs: [...v.customs],
  });

  const save = async () => {
    const id = ytId(form.url);
    if (!id || form.days.length === 0 || !form.title.trim()) return;
    const payload = {
      youtube_id: id, title: form.title.trim(),
      start_sec: parseTime(form.start) || 0, end_sec: parseTime(form.end),
      days: form.days, pillars: form.pillars, customs: form.customs,
    };
    if (form.id) await api.updateKickstart(form.id, payload);
    else await api.createKickstart(payload);
    setForm(null);
    load();
  };

  const filtered = useMemo(() => videos.filter((v) => {
    if (filter.type === "all") return true;
    if (filter.type === "day") return v.days.includes(filter.value);
    if (filter.type === "pillar") return v.pillars.includes(filter.value);
    if (filter.type === "custom") return v.customs.includes(filter.value);
    return true;
  }), [videos, filter]);

  const isFilter = (type, value) => filter.type === type && filter.value === value;
  const missing = form ? [
    !ytId(form.url) && "a valid YouTube link",
    !form.title.trim() && "a title",
    form.days.length === 0 && "at least one day",
  ].filter(Boolean) : [];
  const canSave = !!form && missing.length === 0;

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Kickstart</div>
          <h1 style={S.h1}>Kickstart</h1>
          <div style={S.subhead}>Your motivation hub — the right push for {todayName()}.</div>
        </div>
        {!form && <button onClick={() => setForm(blankForm())} style={S.addBtn}><Plus size={15} /> Add video</button>}
      </div>

      {/* Add / edit form */}
      {form && (
        <div style={S.card}>
          <div style={S.cardTitle}>{form.id ? "Edit video" : "Add video"}</div>
          <input placeholder="YouTube link (or video ID)" value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })} style={S.input} autoFocus />
          {form.url && !ytId(form.url) && <div style={S.warn}>Couldn't find a YouTube video ID in that link.</div>}
          <input placeholder="Title (required)" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} style={{ ...S.input, marginTop: 8 }} />

          <div style={S.trimRow}>
            <Scissors size={15} color="var(--text-3)" />
            <label style={S.trimField}><span style={S.trimLbl}>Start</span>
              <input placeholder="0:30" value={form.start} onChange={(e) => setForm({ ...form, start: e.target.value })} style={S.trimInput} /></label>
            <span style={S.trimArrow}>→</span>
            <label style={S.trimField}><span style={S.trimLbl}>End</span>
              <input placeholder="end (optional)" value={form.end} onChange={(e) => setForm({ ...form, end: e.target.value })} style={S.trimInput} /></label>
          </div>
          <div style={S.hint}>Only this trimmed part plays. Use m:ss (e.g. 1:30). Leave End blank to play to the end.</div>

          {/* Day tags — mandatory */}
          <div style={S.tagBlock}>
            <div style={S.tagLabel}>Days <span style={S.req}>required</span></div>
            <div style={S.chipRow}>
              {DAYS.map((d) => (
                <button key={d} onClick={() => toggleIn("days", d)}
                  style={{ ...S.chip, ...(form.days.includes(d) ? S.chipOnDark : {}) }}>{DAY_ABBR[d]}</button>
              ))}
            </div>
          </div>

          {/* Pillar tags — optional */}
          <div style={S.tagBlock}>
            <div style={S.tagLabel}>Pillars <span style={S.opt}>optional</span></div>
            <div style={S.chipRow}>
              {PILLAR_NAMES.map((pn) => {
                const on = form.pillars.includes(pn);
                return (
                  <button key={pn} onClick={() => toggleIn("pillars", pn)}
                    style={{ ...S.chip, ...(on ? { background: PILLARS[pn], color: "#fff", borderColor: PILLARS[pn] } : {}) }}>
                    <span style={{ ...S.dot, background: on ? "#fff" : PILLARS[pn] }} />{pn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom tags — optional, manageable */}
          <div style={S.tagBlock}>
            <div style={S.tagLabel}>Custom tags <span style={S.opt}>optional · {customTags.length}/{MAX_CUSTOM}</span></div>
            <div style={S.chipRow}>
              {customTags.map((ct) => (
                <span key={ct} style={{ ...S.chip, ...(form.customs.includes(ct) ? S.chipOnAccent : {}), paddingRight: 4 }}>
                  <button onClick={() => toggleIn("customs", ct)} style={S.chipInner}>{ct}</button>
                  <button onClick={() => removeCustomTag(ct)} style={S.chipX} title="Delete tag"><X size={11} /></button>
                </span>
              ))}
              {customTags.length === 0 && <span style={S.muted}>No custom tags yet.</span>}
            </div>
            {customTags.length < MAX_CUSTOM && (
              <div style={S.newTagRow}>
                <input placeholder="New custom tag…" value={newTag}
                  onChange={(e) => setNewTag(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addCustomTag()}
                  style={{ ...S.input, padding: "7px 10px" }} />
                <button onClick={addCustomTag} style={S.smallBtn}><Plus size={14} /></button>
              </div>
            )}
          </div>

          {!canSave && <div style={S.warn}>Add {missing.join(", ")} to save.</div>}
          <div style={S.formActions}>
            <button onClick={() => setForm(null)} style={S.cancelBtn}><X size={14} /> Cancel</button>
            <button onClick={save} disabled={!canSave} style={{ ...S.saveBtn, ...(canSave ? {} : S.saveDisabled) }}>
              <Check size={15} /> {form.id ? "Save" : "Add video"}
            </button>
          </div>
        </div>
      )}

      {/* Filters — all tags shown */}
      <div style={S.filterCard}>
        <button onClick={() => setFilter({ type: "all" })} style={{ ...S.fChip, ...(filter.type === "all" ? S.fChipOnDark : {}) }}>All</button>
        <span style={S.fDivider} />
        {DAYS.map((d) => (
          <button key={d} onClick={() => setFilter({ type: "day", value: d })}
            style={{ ...S.fChip, ...(isFilter("day", d) ? S.fChipOnDark : {}), ...(d === todayName() ? S.fToday : {}) }}>
            {DAY_ABBR[d]}{d === todayName() ? " ·" : ""}
          </button>
        ))}
        <span style={S.fDivider} />
        {PILLAR_NAMES.map((pn) => (
          <button key={pn} onClick={() => setFilter({ type: "pillar", value: pn })}
            style={{ ...S.fChip, ...(isFilter("pillar", pn) ? { background: PILLARS[pn], color: "#fff", borderColor: PILLARS[pn] } : {}) }}>
            <span style={{ ...S.dot, background: isFilter("pillar", pn) ? "#fff" : PILLARS[pn] }} />{pn}
          </button>
        ))}
        {customTags.length > 0 && <span style={S.fDivider} />}
        {customTags.map((ct) => (
          <button key={ct} onClick={() => setFilter({ type: "custom", value: ct })}
            style={{ ...S.fChip, ...(isFilter("custom", ct) ? S.fChipOnAccent : {}) }}>
            <Tag size={11} /> {ct}
          </button>
        ))}
      </div>

      {/* Video grid */}
      {!loaded ? <div style={S.muted}>Loading…</div> : filtered.length === 0 ? (
        <div style={S.empty}>
          {videos.length === 0 ? "No videos yet — add your first motivation clip." : "No videos for this tag."}
        </div>
      ) : (
        <div style={S.grid}>
          {filtered.map((v) => (
            <div key={v.id} style={S.videoCard}>
              <div style={S.thumbWrap}>
                {playing === v.id ? (
                  <iframe src={embedUrl(v)} title={v.title || v.youtube_id} style={S.iframe} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : (
                  <button onClick={() => setPlaying(v.id)} style={S.thumbBtn}>
                    <img src={`https://img.youtube.com/vi/${v.youtube_id}/hqdefault.jpg`} alt="" style={S.thumb} />
                    <span style={S.playOverlay}><Play size={22} color="#fff" fill="#fff" /></span>
                    <span style={S.trimBadge}>{fmtTime(v.start_sec)}{v.end_sec ? ` – ${fmtTime(v.end_sec)}` : "+"}</span>
                  </button>
                )}
              </div>
              <div style={S.videoBody}>
                <div style={S.videoTitle}>{v.title || "Untitled clip"}</div>
                <div style={S.tagWrap}>
                  {v.days.map((d) => <span key={d} style={S.dayTag}>{DAY_ABBR[d]}</span>)}
                  {v.pillars.map((pn) => <span key={pn} style={{ ...S.pillTag, color: PILLARS[pn] || "var(--text-2)", borderColor: PILLARS[pn] || "var(--border)" }}>{pn}</span>)}
                  {v.customs.map((ct) => <span key={ct} style={S.customTag}>{ct}</span>)}
                </div>
                <div style={S.cardActions}>
                  <button onClick={() => openEdit(v)} style={S.iconBtn} title="Edit"><Pencil size={13} /></button>
                  <button onClick={() => deleteItem(v.id, v.title || "video")} style={S.iconBtn} title="Delete"><X size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 22px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 1000, margin: "0 auto" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: "var(--accent-strong)", color: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },

  card: { background: "var(--surface)", borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  input: { border: "1px solid var(--border)", borderRadius: 8, padding: "9px 11px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", width: "100%", boxSizing: "border-box" },
  warn: { fontSize: 11.5, color: "#C2773B", marginTop: 5, fontWeight: 600 },
  hint: { fontSize: 11.5, color: "var(--text-3)", marginTop: 6, lineHeight: 1.4 },

  trimRow: { display: "flex", alignItems: "flex-end", gap: 10, marginTop: 10 },
  trimField: { display: "flex", flexDirection: "column", gap: 4, flex: 1 },
  trimLbl: { fontSize: 11, color: "var(--text-2)", fontWeight: 600 },
  trimInput: { border: "1px solid var(--border)", borderRadius: 8, padding: "8px 10px", fontSize: 13.5, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", width: "100%", boxSizing: "border-box" },
  trimArrow: { color: "var(--text-3)", paddingBottom: 9 },

  tagBlock: { marginTop: 14 },
  tagLabel: { fontSize: 12, fontWeight: 700, color: "var(--text-2)", marginBottom: 7 },
  req: { fontSize: 10, fontWeight: 700, color: "#C2536B", textTransform: "uppercase", marginLeft: 6 },
  opt: { fontSize: 10, fontWeight: 600, color: "var(--text-3)", textTransform: "uppercase", marginLeft: 6 },
  chipRow: { display: "flex", gap: 6, flexWrap: "wrap" },
  chip: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 11px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  chipOnDark: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  chipOnAccent: { background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" },
  chipInner: { border: "none", background: "none", color: "inherit", cursor: "pointer", fontFamily: "inherit", fontSize: 12, fontWeight: 600, padding: 0 },
  chipX: { border: "none", background: "rgba(0,0,0,0.12)", color: "inherit", cursor: "pointer", display: "grid", placeItems: "center", borderRadius: "50%", width: 16, height: 16, padding: 0 },
  newTagRow: { display: "flex", gap: 6, marginTop: 8, maxWidth: 280 },
  smallBtn: { border: "none", background: "var(--accent)", color: "#fff", width: 34, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0 },
  dot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0, display: "inline-block" },

  formActions: { display: "flex", gap: 8, marginTop: 16 },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", background: "var(--accent)", color: "#fff", padding: "10px 14px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "not-allowed" },

  filterCard: { display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 12, marginBottom: 18 },
  fChip: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 11px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  fChipOnDark: { background: "var(--accent-strong)", color: "#fff", borderColor: "var(--accent-strong)" },
  fChipOnAccent: { background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" },
  fToday: { borderColor: "var(--accent)", borderWidth: 2 },
  fDivider: { width: 1, alignSelf: "stretch", background: "var(--border)", margin: "0 2px" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 },
  videoCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" },
  thumbWrap: { position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" },
  thumbBtn: { border: "none", padding: 0, margin: 0, cursor: "pointer", width: "100%", height: "100%", position: "relative", display: "block", background: "#000" },
  thumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  playOverlay: { position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(0,0,0,0.28)" },
  trimBadge: { position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.75)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 6, fontFamily: "'Fraunces',Georgia,serif" },
  iframe: { width: "100%", height: "100%", border: "none", display: "block" },
  videoBody: { padding: "12px 13px", display: "flex", flexDirection: "column", gap: 8 },
  videoTitle: { fontSize: 14, fontWeight: 700 },
  tagWrap: { display: "flex", gap: 5, flexWrap: "wrap" },
  dayTag: { fontSize: 10, fontWeight: 700, color: "var(--text-2)", background: "var(--hover)", padding: "2px 7px", borderRadius: 8 },
  pillTag: { fontSize: 10, fontWeight: 700, border: "1px solid", borderRadius: 8, padding: "2px 7px" },
  customTag: { fontSize: 10, fontWeight: 700, color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 14%, transparent)", padding: "2px 7px", borderRadius: 8 },
  cardActions: { display: "flex", gap: 4, justifyContent: "flex-end" },
  iconBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 4, display: "grid", placeItems: "center", borderRadius: 6 },

  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "16px 0" },
  empty: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "40px 12px" },
};
