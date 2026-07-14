import { useState, useEffect, useCallback, useRef } from "react";
import {
  Plus, X, Check, ChevronLeft, ChevronRight, Pencil, ImagePlus, Flame,
  Sparkles, Music, Music2, ArrowLeft, Trophy, Quote, Trash2,
  Sunrise, Sun, Moon, Bell, BellOff, Undo2, Zap
} from "lucide-react";
import { api } from "../api.js";
import { effectiveTodayISO } from "../dayStart.js";
import { useUndoableDelete } from "../hooks/useUndoableDelete.js";
import UndoToast from "../components/UndoToast.jsx";
import HelpButton from "../components/HelpButton.jsx";

const isoL = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const todayISO = () => effectiveTodayISO(); // honours the start-of-day hour (Settings)
const addDays = (iso, n) => { const d = new Date(iso + "T00:00:00"); d.setDate(d.getDate() + n); return isoL(d); };
const fmtNice = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

const ytId = (url) => {
  if (!url) return "";
  const u = url.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(u)) return u;
  const m = u.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
};

// Downscale a picked image to a compact JPEG data URL.
const fileToDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const max = 900;
      let { width, height } = img;
      if (width > height && width > max) { height = (height * max) / width; width = max; }
      else if (height > max) { width = (width * max) / height; height = max; }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = reject;
    img.src = reader.result;
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

export default function GoldenBookScreen() {
  const [goals, setGoals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", image: "" });
  const [musicId, setMusicId] = useState("");
  // Soft tunes on/off is a persisted preference — whatever you set it to stays
  // that way across navigation and sessions until you toggle it again.
  const [musicOn, setMusicOnState] = useState(false);
  const setMusicOn = useCallback((updater) => {
    setMusicOnState((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      api.setSetting("golden_music_on", !!next).catch(() => {});
      return next;
    });
  }, []);
  const [celebrate, setCelebrate] = useState(null); // { title, days }

  const load = useCallback(async () => {
    try { setGoals(await api.getGoldenGoals()); } catch { /* offline */ }
    setLoaded(true);
  }, []);
  useEffect(() => { load(); }, [load]);

  const { deleteItem: deleteGoal, toasts, handleUndo, handleDismiss } = useUndoableDelete(
    api.deleteGolden, api.restoreGolden, load
  );

  // Read the track configured in Settings, plus the saved on/off preference.
  // Re-read the track when the window regains focus so a change made in
  // Settings is picked up without a reload.
  useEffect(() => {
    api.getSetting("golden_music_on").then((r) => {
      if (typeof r?.value === "boolean") setMusicOnState(r.value);
    }).catch(() => {});
    const refresh = () => api.getSetting("golden_music").then((r) => setMusicId(ytId(r?.value || ""))).catch(() => {});
    refresh();
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  // Music is started by an explicit tap on the writing screen (browsers block
  // audible autoplay without a user gesture). Leaving a dream stops it.

  const createGoal = async () => {
    if (!form.title.trim()) return;
    const g = await api.createGolden({ title: form.title.trim(), image: form.image });
    setForm({ title: "", image: "" });
    setAdding(false);
    await load();
    setSelectedId(g.id);
  };

  const pickImage = async (e, apply) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try { apply(await fileToDataUrl(file)); } catch { /* ignore */ }
  };

  const active = goals.filter((g) => !g.achieved);
  const manifested = goals.filter((g) => g.achieved);

  if (selectedId) {
    return (
      <div style={S.page}>
        <MusicAudio musicId={musicId} on={musicOn} />
        <GoalDetail
          goalId={selectedId}
          onBack={() => setSelectedId(null)}
          onReload={load}
          onCelebrate={(title, days) => setCelebrate({ title, days })}
          pickImage={pickImage}
          musicId={musicId}
          setMusicId={setMusicId}
          musicOn={musicOn}
          setMusicOn={setMusicOn}
        />
        {celebrate && <Celebration data={celebrate} onClose={() => setCelebrate(null)} />}
      </div>
    );
  }

  return (
    <div style={S.page}>
      <div style={S.head}>
        <div>
          <div style={S.eyebrow}>Anvil · Golden Book</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <h1 style={S.h1}>Golden Book</h1>
            <HelpButton id="golden-book" />
          </div>
          <div style={S.subhead}>Write your dreams into being — a little every day.</div>
        </div>
        {!adding && <button onClick={() => setAdding(true)} style={S.addBtn}><Plus size={15} /> New dream</button>}
      </div>

      {adding && (
        <div style={S.card}>
          <div style={S.cardTitle}>Manifest a new dream</div>
          <textarea autoFocus placeholder="Write your dream as if it's already true…" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} style={S.textarea} />
          <label style={S.photoPick}>
            {form.image
              ? <img src={form.image} alt="" style={S.photoPreview} />
              : <span style={S.photoEmpty}><ImagePlus size={18} /> Add a photo</span>}
            <input type="file" accept="image/*" onChange={(e) => pickImage(e, (img) => setForm({ ...form, image: img }))} style={{ display: "none" }} />
          </label>
          <div style={S.formActions}>
            <button onClick={() => { setAdding(false); setForm({ title: "", image: "" }); }} style={S.cancelBtn}><X size={14} /> Cancel</button>
            <button onClick={createGoal} disabled={!form.title.trim()}
              style={{ ...S.saveBtn, ...(form.title.trim() ? {} : S.saveDisabled) }}><Check size={15} /> Create</button>
          </div>
        </div>
      )}

      {!loaded ? <div style={S.muted}>Loading…</div> : (
        <>
          {active.length === 0 && manifested.length === 0 && !adding && (
            <div style={S.empty}>No dreams yet. Add your first one and revisit it daily.</div>
          )}

          {active.length > 0 && (
            <>
              <div style={S.sectionTitle}><Sparkles size={15} color="#C9A227" /> Manifesting <span style={S.badge}>{active.length}</span></div>
              <div style={S.grid}>
                {active.map((g) => <GoalCard key={g.id} g={g} onOpen={() => setSelectedId(g.id)} onDelete={() => deleteGoal(g.id, g.title)} />)}
              </div>
            </>
          )}

          {manifested.length > 0 && (
            <>
              <div style={{ ...S.sectionTitle, marginTop: 22 }}><Trophy size={15} color="#4C9A6B" /> Manifested <span style={S.badge}>{manifested.length}</span></div>
              <div style={S.grid}>
                {manifested.map((g) => <GoalCard key={g.id} g={g} onOpen={() => setSelectedId(g.id)} onDelete={() => deleteGoal(g.id, g.title)} achieved />)}
              </div>
            </>
          )}
        </>
      )}

      <UndoToast toasts={toasts} onUndo={handleUndo} onDismiss={handleDismiss} />
    </div>
  );
}

// ── Tesla 369 method ──────────────────────────────────────────────────────────
const WINDOWS = [
  { key: "morning", label: "Morning", time: "6 AM – 12 PM", Icon: Sunrise, color: "#E0883B" },
  { key: "noon",    label: "Noon",    time: "12 – 6 PM",    Icon: Sun,     color: "#C9A227" },
  { key: "night",   label: "Night",   time: "6 PM – 2 AM",  Icon: Moon,    color: "#6B6FB0" },
];

// Days → "Xy Xmo Xd" once it grows past a month; plain days below that.
const fmtStreak = (days) => {
  if (days < 31) return `${days} day${days === 1 ? "" : "s"}`;
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const rem = (days % 365) % 30;
  const parts = [];
  if (years) parts.push(`${years}y`);
  if (months) parts.push(`${months}mo`);
  if (rem) parts.push(`${rem}d`);
  return parts.join(" ");
};

const REMIND_KEY = "tesla369_reminders";

// 369 tracker for a single dream. `g` is the loaded goal detail (carries
// g.t369 summary + g.t369_affirmation). `onChanged` receives fresh detail.
function Tesla369Tracker({ g, onChanged, musicId, setMusicId, musicOn, setMusicOn }) {
  const [writing, setWriting] = useState("");
  const [pasteBlocked, setPasteBlocked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [remOn, setRemOn] = useState(() => localStorage.getItem(REMIND_KEY) === "1");

  const t = g.t369;
  const affirmation = (g.t369_affirmation || "").trim();
  useReminders(remOn && !!affirmation, t, g.title);

  if (!t) return null;

  const { window: activeWindow, targets, counts, current_streak,
          best_streak, min_streak, min_reached, day_complete } = t;
  const totalDone = (counts.morning || 0) + (counts.noon || 0) + (counts.night || 0);
  const totalTarget = targets.morning + targets.noon + targets.night;

  const writeOne = async () => {
    if (!affirmation) return;
    if (writing.trim() !== affirmation) return; // must type it out, exactly
    if (!activeWindow) return;
    setBusy(true);
    try {
      onChanged(await api.logTesla369(g.id));
      setWriting("");
    } catch (e) {
      alert(e.message || "Could not log this write.");
    } finally { setBusy(false); }
  };

  const undoOne = async () => {
    setBusy(true);
    try { onChanged(await api.undoTesla369(g.id)); } catch { /* ignore */ } finally { setBusy(false); }
  };

  const toggleReminders = async () => {
    if (!remOn) {
      const ok = await ensureNotifyPermission();
      if (!ok) { alert("Enable notifications in your browser to get 369 reminders."); return; }
    }
    const next = !remOn;
    setRemOn(next);
    localStorage.setItem(REMIND_KEY, next ? "1" : "0");
  };

  const typedMatch = writing.trim() === affirmation && affirmation !== "";
  const windowFull = activeWindow && (counts[activeWindow] || 0) >= targets[activeWindow];

  return (
    <div style={S.tCard}>
      <div style={S.tHead}>
        <div style={S.tTitleWrap}>
          <span style={S.tBadge}><Zap size={14} /> 369</span>
          <div>
            <div style={S.tTitle}>369 Method</div>
            <div style={S.tSub}>Write it 3× morning · 6× noon · 9× night.</div>
          </div>
        </div>
        <div style={S.tHeadBtns}>
          <MusicControl musicId={musicId} musicOn={musicOn} setMusicOn={setMusicOn} />
          <button onClick={toggleReminders} style={{ ...S.tRemBtn, ...(remOn ? S.tRemOn : {}) }}
            title={remOn ? "Reminders on" : "Turn on reminders"}>
            {remOn ? <Bell size={14} /> : <BellOff size={14} />} {remOn ? "Reminders on" : "Remind me"}
          </button>
        </div>
      </div>

      {/* Streak strip */}
      <div style={S.tStreakRow}>
        <div style={S.tStreakBox}>
          <div style={S.tStreakLabel}><Flame size={13} color="#C2773B" /> Current streak</div>
          <div style={S.tStreakVal}>{fmtStreak(current_streak)}</div>
          {!min_reached ? (
            <div style={S.tStreakHint}>Day {current_streak} of {min_streak} minimum</div>
          ) : (
            <div style={{ ...S.tStreakHint, color: "#4C9A6B" }}>✓ {min_streak}-day minimum met — keep going until it manifests</div>
          )}
          {!min_reached && (
            <div style={S.tProgTrack}>
              <div style={{ ...S.tProgFill, width: `${Math.min(100, (current_streak / min_streak) * 100)}%` }} />
            </div>
          )}
        </div>
        <div style={S.tStreakBox}>
          <div style={S.tStreakLabel}><Trophy size={13} color="#C9A227" /> All-time best</div>
          <div style={S.tStreakVal}>{fmtStreak(best_streak)}</div>
          <div style={S.tStreakHint}>Today: {totalDone}/{totalTarget} written {day_complete ? "✓" : ""}</div>
        </div>
      </div>

      {!affirmation ? (
        <div style={S.tClosed}>Set a 369 affirmation above to start writing.</div>
      ) : (
        <>
          {/* Window counters */}
          <div style={S.tWindows}>
            {WINDOWS.map(({ key, label, time, Icon, color }) => {
              const done = counts[key] || 0;
              const target = targets[key];
              const isActive = activeWindow === key;
              const complete = done >= target;
              return (
                <div key={key} style={{ ...S.tWindow, ...(isActive ? { border: `1px solid ${color}`, boxShadow: `0 0 0 2px ${color}22` } : {}) }}>
                  <div style={S.tWindowHead}>
                    <Icon size={15} color={color} />
                    <span style={S.tWindowLabel}>{label}</span>
                    {isActive && <span style={{ ...S.tNow, color }}>now</span>}
                  </div>
                  <div style={S.tWindowTime}>{time}</div>
                  <div style={S.tDots}>
                    {Array.from({ length: target }).map((_, i) => (
                      <span key={i} style={{ ...S.tDot, ...(i < done ? { background: color, borderColor: color } : {}) }} />
                    ))}
                  </div>
                  <div style={{ ...S.tCount, ...(complete ? { color } : {}) }}>{done}/{target}{complete ? " ✓" : ""}</div>
                </div>
              );
            })}
          </div>

          {/* Writing box — must type, no paste */}
          <div style={S.tWriteBox}>
            {!activeWindow ? (
              <div style={S.tClosed}>Writing windows: 6 AM–12 PM, 12–6 PM, 6 PM–2 AM. Come back during a window.</div>
            ) : windowFull ? (
              <div style={S.tDoneMsg}>✓ {WINDOWS.find((w) => w.key === activeWindow).label} complete. {day_complete ? "All 18 done today! 🔥" : "Next window unlocks ahead."}</div>
            ) : (
              <>
                <div style={S.tNote}>✍️ Type it out by hand — no copy-pasting. The act of writing is the point.</div>
                <textarea
                  value={writing}
                  onChange={(e) => setWriting(e.target.value)}
                  onPaste={(e) => { e.preventDefault(); setPasteBlocked(true); setTimeout(() => setPasteBlocked(false), 2500); }}
                  onDrop={(e) => e.preventDefault()}
                  placeholder="Type your affirmation here…"
                  style={{ ...S.writeArea, ...(typedMatch ? { border: "1px solid #4C9A6B" } : {}) }} />
                {pasteBlocked && <div style={S.tPasteWarn}>Pasting is disabled — please type it.</div>}
                <div style={S.tWriteActions}>
                  <button onClick={undoOne} disabled={busy || (counts[activeWindow] || 0) === 0} style={S.tUndoBtn} title="Undo last write">
                    <Undo2 size={14} /> Undo
                  </button>
                  <button onClick={writeOne} disabled={busy || !typedMatch}
                    style={{ ...S.writeSave, flex: 1, ...(typedMatch ? {} : S.saveDisabled) }}>
                    <Check size={15} /> {typedMatch ? "Log this write" : "Type it to log"}
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// Request Notification permission; returns true if granted.
async function ensureNotifyPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  if (Notification.permission === "denied") return false;
  const p = await Notification.requestPermission();
  return p === "granted";
}

// Fire a local notification at most once per window per day while the app is
// open (or installed as a PWA). No push server — purely client-side scheduling.
function useReminders(on, t, dreamTitle) {
  const firedRef = useRef({});
  useEffect(() => {
    if (!on || !t) return;
    const check = () => {
      if (Notification.permission !== "granted") return;
      const w = t.window;
      if (!w) return;
      const counts = t.counts || {};
      const targets = t.targets || {};
      if ((counts[w] || 0) >= (targets[w] || 0)) return; // already done this window
      const today = t.today;
      const tag = `369-${dreamTitle || ""}-${today}-${w}`;
      if (firedRef.current[tag]) return;
      firedRef.current[tag] = true;
      const label = WINDOWS.find((x) => x.key === w)?.label || "";
      const left = (targets[w] || 0) - (counts[w] || 0);
      try {
        new Notification("369 — time to write ✍️", {
          body: `${dreamTitle ? `"${dreamTitle}" · ` : ""}${label} window: ${left} more to go. Type your affirmation.`,
          tag,
        });
      } catch { /* ignore */ }
    };
    check();
    const id = setInterval(check, 60 * 1000);
    return () => clearInterval(id);
  }, [on, t, dreamTitle]);
}

function GoalCard({ g, onOpen, onDelete, achieved }) {
  return (
    <div style={{ ...S.goalCard, ...(achieved ? { opacity: 0.96 } : {}), position: "relative" }}>
      <button onClick={onOpen} style={S.goalCardBtn}>
        <div style={S.thumbWrap}>
          {g.image
            ? <img src={g.image} alt="" style={S.thumb} />
            : <div style={S.thumbEmpty}><Sparkles size={26} color="var(--text-3)" /></div>}
          {achieved && <span style={S.stamp}>✦ Manifested</span>}
        </div>
        <div style={S.goalBody}>
          <div style={S.goalTitle}>{g.title}</div>
          <div style={S.goalMeta}>
            {achieved
              ? <span style={{ ...S.metaPill, color: "#4C9A6B", background: "rgba(76,154,107,0.12)" }}>
                  <Trophy size={12} /> {g.days_to_manifest != null ? `in ${g.days_to_manifest} day${g.days_to_manifest === 1 ? "" : "s"}` : "done"}
                </span>
              : <span style={{ ...S.metaPill, color: "#C2773B", background: "rgba(194,119,59,0.12)" }}><Flame size={12} /> {g.streak} day streak</span>}
            <span style={S.metaDim}>{g.total_days} entr{g.total_days === 1 ? "y" : "ies"}</span>
          </div>
        </div>
      </button>
      <button onClick={(e) => { e.stopPropagation(); if (window.confirm(`Delete "${g.title}"?`)) onDelete(); }}
        style={S.cardDelBtn} title="Delete dream">
        <Trash2 size={14} />
      </button>
    </div>
  );
}

function GoalDetail({ goalId, onBack, onReload, onCelebrate, pickImage, musicId, setMusicId, musicOn, setMusicOn }) {
  const [g, setG] = useState(null);
  const [entries, setEntries] = useState({});
  const [viewDate, setViewDate] = useState(todayISO());
  const [draft, setDraft] = useState("");
  const [editTitle, setEditTitle] = useState(null);
  const [editAff, setEditAff] = useState(null); // 369 affirmation draft, or null
  const today = todayISO();

  const applyDetail = useCallback((d) => {
    setG(d);
    const m = {};
    (d.entries || []).forEach((e) => { m[e.date] = e.text; });
    setEntries(m);
    setDraft(m[today] || "");
  }, [today]);

  const load = useCallback(async () => {
    applyDetail(await api.getGoldenGoal(goalId));
  }, [goalId, applyDetail]);
  useEffect(() => { load(); }, [load]);

  // While 369 is on, refresh on a slow tick so the active window stays current.
  useEffect(() => {
    if (!g?.t369_enabled) return;
    const id = setInterval(() => { api.getGoldenGoal(goalId).then(applyDetail).catch(() => {}); }, 60 * 1000);
    return () => clearInterval(id);
  }, [g?.t369_enabled, goalId, applyDetail]);

  if (!g) return <div style={S.muted}>Loading…</div>;

  const isToday = viewDate === today;
  const canPrev = viewDate > g.created_date;
  const canNext = viewDate < today;

  const saveEntry = async () => {
    await api.upsertGoldenEntry(goalId, { date: today, text: draft });
    await load(); onReload();
  };
  const achieve = async () => {
    const r = await api.achieveGolden(goalId);
    onCelebrate(g.title, r.days_to_manifest);
    await load(); onReload();
  };
  const unachieve = async () => { await api.unachieveGolden(goalId); await load(); onReload(); };
  const saveTitle = async () => {
    if (!editTitle.trim()) return;
    await api.updateGolden(goalId, { title: editTitle.trim() });
    setEditTitle(null); await load(); onReload();
  };
  const changePhoto = (img) => api.updateGolden(goalId, { image: img }).then(() => { load(); onReload(); });

  const toggle369 = async () => {
    await api.updateGolden(goalId, { t369_enabled: !g.t369_enabled });
    await load(); onReload();
  };
  const saveAff = async () => {
    await api.updateGolden(goalId, { t369_affirmation: (editAff || "").trim() });
    setEditAff(null); await load();
  };

  const remove = async () => {
    if (!window.confirm(`Delete "${g.title}"? This cannot be undone from here.`)) return;
    await api.deleteGolden(goalId);
    onReload();
    onBack();
  };

  return (
    <>
      <div style={S.detailTopRow}>
        <button onClick={onBack} style={S.backBtn}><ArrowLeft size={16} /> All dreams</button>
        <button onClick={remove} style={S.deleteBtn} title="Delete dream"><Trash2 size={14} /> Delete</button>
      </div>

      <div style={S.detailHero}>
        <label style={S.heroPhoto}>
          {g.image ? <img src={g.image} alt="" style={S.heroImg} /> : <span style={S.photoEmpty}><ImagePlus size={20} /> Add a photo</span>}
          <span style={S.photoEdit}><Pencil size={12} /> Edit photo</span>
          <input type="file" accept="image/*" onChange={(e) => pickImage(e, changePhoto)} style={{ display: "none" }} />
        </label>

        <div style={S.heroInfo}>
          {g.achieved && <span style={S.heroStamp}>✦ Manifested{g.days_to_manifest != null ? ` in ${g.days_to_manifest} day${g.days_to_manifest === 1 ? "" : "s"}` : ""}</span>}
          {editTitle !== null ? (
            <div style={{ display: "flex", gap: 6, width: "100%" }}>
              <textarea autoFocus value={editTitle} onChange={(e) => setEditTitle(e.target.value)} style={{ ...S.textarea, minHeight: 60 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <button onClick={saveTitle} style={S.iconSave}><Check size={14} /></button>
                <button onClick={() => setEditTitle(null)} style={S.iconCancel}><X size={14} /></button>
              </div>
            </div>
          ) : (
            <div style={S.heroTitleRow}>
              <div style={S.heroTitle}>{g.title}</div>
              <button onClick={() => setEditTitle(g.title)} style={S.ghostBtn} title="Edit"><Pencil size={13} /></button>
            </div>
          )}
          <div style={S.heroStats}>
            <span style={{ ...S.metaPill, color: "#C2773B", background: "rgba(194,119,59,0.12)" }}><Flame size={13} /> {g.streak} day streak</span>
            <span style={S.metaDim}>{g.total_days} entr{g.total_days === 1 ? "y" : "ies"}</span>
            <span style={S.metaDim}>since {fmtNice(g.created_date)}</span>
          </div>
        </div>
      </div>

      {/* 369 mode toggle */}
      {!g.achieved && (
        <div style={S.t369Row}>
          <div style={S.t369RowLeft}>
            <span style={{ ...S.tBadge, ...(g.t369_enabled ? {} : S.tBadgeOff) }}><Zap size={13} /> 369</span>
            <div>
              <div style={S.t369RowTitle}>Tesla's 369 Method</div>
              <div style={S.t369RowSub}>
                {g.t369_enabled ? "On — write this dream 3×/6×/9× across the day." : "Off — using the simple daily entry."}
              </div>
            </div>
          </div>
          <button onClick={toggle369} style={{ ...S.switch, ...(g.t369_enabled ? S.switchOn : {}) }}
            role="switch" aria-checked={g.t369_enabled} title="Toggle 369 method">
            <span style={{ ...S.switchKnob, ...(g.t369_enabled ? S.switchKnobOn : {}) }} />
          </button>
        </div>
      )}

      {/* 369 affirmation + tracker (when on) */}
      {g.t369_enabled && !g.achieved && (
        <>
          {editAff !== null || !g.t369_affirmation ? (
            <div style={S.card}>
              <div style={S.cardTitle}>Your 369 affirmation</div>
              <textarea autoFocus value={editAff ?? g.t369_affirmation ?? ""}
                onChange={(e) => setEditAff(e.target.value)}
                placeholder="The exact line you'll write 18× a day, e.g. 'I am grateful for my dream home.'"
                style={S.textarea} />
              <div style={S.formActions}>
                {g.t369_affirmation && <button onClick={() => setEditAff(null)} style={S.cancelBtn}><X size={14} /> Cancel</button>}
                <button onClick={saveAff} disabled={!(editAff ?? "").trim() && !g.t369_affirmation}
                  style={{ ...S.saveBtn, ...((editAff ?? g.t369_affirmation ?? "").trim() ? {} : S.saveDisabled) }}>
                  <Check size={15} /> Save affirmation
                </button>
              </div>
            </div>
          ) : (
            <div style={S.tAffShow}>
              <Quote size={15} color={GOLD} />
              <p style={S.tAffText}>{g.t369_affirmation}</p>
              <button onClick={() => setEditAff(g.t369_affirmation)} style={S.ghostBtn} title="Edit affirmation"><Pencil size={13} /></button>
            </div>
          )}
          <Tesla369Tracker g={g} onChanged={applyDetail} musicId={musicId} setMusicId={setMusicId} musicOn={musicOn} setMusicOn={setMusicOn} />
        </>
      )}

      {/* Daily writing / history (only when 369 is off) */}
      {!g.t369_enabled && (
      <div style={S.writeCard}>
        <div style={S.tuneRow}>
          <MusicControl musicId={musicId} musicOn={musicOn} setMusicOn={setMusicOn} />
        </div>
        <div style={S.writeNav}>
          <button onClick={() => setViewDate((d) => addDays(d, -1))} disabled={!canPrev}
            style={{ ...S.navBtn, ...(canPrev ? {} : S.navDisabled) }}><ChevronLeft size={16} /></button>
          <div style={S.writeDate}>{isToday ? "Today" : fmtNice(viewDate)}</div>
          <button onClick={() => setViewDate((d) => addDays(d, 1))} disabled={!canNext}
            style={{ ...S.navBtn, ...(canNext ? {} : S.navDisabled) }}><ChevronRight size={16} /></button>
        </div>

        {isToday && !g.achieved ? (
          <>
            <textarea value={draft} onChange={(e) => setDraft(e.target.value)}
              placeholder="Write it again today, as if it's already yours…" style={S.writeArea} />
            <button onClick={saveEntry} style={S.writeSave}><Check size={15} /> Save today's entry</button>
          </>
        ) : (
          <div style={S.readEntry}>
            {entries[viewDate]
              ? <><Quote size={16} color="var(--text-3)" /><p style={S.readText}>{entries[viewDate]}</p></>
              : <div style={S.muted}>Nothing written on this day.</div>}
          </div>
        )}
      </div>
      )}

      {/* Manifest action */}
      {!g.achieved ? (
        <button onClick={achieve} style={S.manifestBtn}><Sparkles size={16} /> Mark as manifested</button>
      ) : (
        <button onClick={unachieve} style={S.unmanifestBtn}>Undo manifested</button>
      )}
    </>
  );
}

function Celebration({ data, onClose }) {
  return (
    <div style={S.celebOverlay} onClick={onClose}>
      <div style={S.celebBox} onClick={(e) => e.stopPropagation()}>
        <div style={S.celebEmoji}>✨🌟✨</div>
        <div style={S.celebTitle}>It's happening!</div>
        <div style={S.celebDream}>"{data.title}"</div>
        <div style={S.celebSub}>
          {data.days != null ? `Manifested in ${data.days} day${data.days === 1 ? "" : "s"}.` : "Manifested."} The universe delivered. 🙏
        </div>
        <button onClick={onClose} style={S.celebBtn}>Wonderful</button>
      </div>
    </div>
  );
}

// Audio-only player: a full-size YouTube embed parked off-screen so it actually
// plays (1px / opacity:0 iframes get throttled). Rendered only while `on`.
function MusicAudio({ musicId, on }) {
  if (!musicId || !on) return null;
  return (
    <iframe
      title="golden-music"
      src={`https://www.youtube.com/embed/${musicId}?autoplay=1&loop=1&playlist=${musicId}&controls=0&modestbranding=1&playsinline=1`}
      allow="autoplay; encrypted-media"
      style={{ position: "fixed", left: -10000, top: 0, width: 320, height: 180, border: "none" }}
    />
  );
}

// Music control: play/pause the soft tunes. The track itself is configured in
// Settings → Music (the shared `golden_music` setting). Used in both the normal
// writing view and the 369 mode.
function MusicControl({ musicId, musicOn, setMusicOn }) {
  if (!musicId) {
    return <span style={S.tuneHint}>Add a track in Settings → Music</span>;
  }
  return (
    <button onClick={() => setMusicOn((v) => !v)} style={{ ...S.tRemBtn, ...(musicOn ? S.tuneOn : {}) }}
      title={musicOn ? "Soft tunes on" : "Play soft tunes"}>
      {musicOn ? <Music2 size={14} /> : <Music size={14} />} Soft tunes
    </button>
  );
}

const GOLD = "#C9A227";

const S = {
  page: { fontFamily: "'Inter',system-ui,sans-serif", background: "var(--bg)", minHeight: "100%", padding: "28px 22px 48px", color: "var(--text)", boxSizing: "border-box", maxWidth: 860, margin: "0 auto", position: "relative" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 18 },
  eyebrow: { fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 4 },
  h1: { fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em", fontFamily: "'Fraunces',Georgia,serif" },
  subhead: { fontSize: 13, color: "var(--text-3)", marginTop: 4 },
  addBtn: { display: "flex", alignItems: "center", gap: 6, border: "none", background: GOLD, color: "#fff", padding: "9px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  card: { background: "var(--surface)", borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", border: "1px solid var(--border)" },
  cardTitle: { fontSize: 16, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 12 },
  textarea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "11px 12px", fontSize: 14, fontFamily: "inherit", color: "var(--text)", background: "var(--surface)", outline: "none", minHeight: 70, resize: "vertical", lineHeight: 1.5 },
  photoPick: { display: "block", marginTop: 10, cursor: "pointer", borderRadius: 12, overflow: "hidden", border: "1px dashed var(--border)" },
  photoPreview: { width: "100%", maxHeight: 220, objectFit: "cover", display: "block" },
  photoEmpty: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "26px 0", color: "var(--text-3)", fontSize: 13, fontWeight: 600 },
  formActions: { display: "flex", gap: 8, marginTop: 14 },
  cancelBtn: { display: "flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "10px 14px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveBtn: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "none", background: GOLD, color: "#fff", padding: "10px 14px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  saveDisabled: { background: "var(--border)", color: "var(--text-3)", cursor: "not-allowed" },

  sectionTitle: { display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginBottom: 12 },
  badge: { fontSize: 11, fontWeight: 700, background: "var(--hover)", color: "var(--text-2)", borderRadius: 10, padding: "1px 7px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 },
  goalCard: { textAlign: "left", border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" },
  goalCardBtn: { textAlign: "left", border: "none", background: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", display: "flex", flexDirection: "column", width: "100%" },
  cardDelBtn: { position: "absolute", top: 8, left: 8, border: "none", background: "rgba(0,0,0,0.55)", color: "#fff", width: 26, height: 26, borderRadius: 7, cursor: "pointer", display: "grid", placeItems: "center", zIndex: 2 },
  thumbWrap: { position: "relative", width: "100%", aspectRatio: "16 / 10", background: "var(--surface-2)" },
  thumb: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  thumbEmpty: { width: "100%", height: "100%", display: "grid", placeItems: "center" },
  stamp: { position: "absolute", top: 8, right: 8, transform: "rotate(6deg)", background: "rgba(76,154,107,0.95)", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "0.04em", padding: "3px 9px", borderRadius: 6, border: "1.5px solid #fff", textTransform: "uppercase" },
  goalBody: { padding: "11px 13px", display: "flex", flexDirection: "column", gap: 8 },
  goalTitle: { fontSize: 14, fontWeight: 600, lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" },
  goalMeta: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
  metaPill: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11.5, fontWeight: 700, padding: "2px 8px", borderRadius: 10 },
  metaDim: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },

  detailTopRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 10 },
  backBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 12px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  deleteBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(194,83,107,0.4)", background: "rgba(194,83,107,0.08)", color: "#C2536B", padding: "7px 12px", borderRadius: 9, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  detailHero: { display: "flex", flexDirection: "column", gap: 14, marginBottom: 16 },
  heroPhoto: { position: "relative", width: "100%", borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", cursor: "pointer", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 120 },
  heroImg: { width: "100%", maxHeight: "62vh", objectFit: "contain", display: "block" },
  photoEdit: { position: "absolute", bottom: 8, right: 8, display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "4px 8px", borderRadius: 7 },
  heroInfo: { display: "flex", flexDirection: "column", gap: 10, alignItems: "center", textAlign: "center" },
  heroStamp: { alignSelf: "center", background: "rgba(76,154,107,0.14)", color: "#4C9A6B", fontSize: 12, fontWeight: 800, padding: "4px 10px", borderRadius: 8, letterSpacing: "0.03em" },
  heroTitleRow: { display: "flex", alignItems: "flex-start", gap: 8, justifyContent: "center" },
  heroTitle: { fontSize: 23, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.35 },
  heroStats: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "center" },
  ghostBtn: { border: "none", background: "none", color: "var(--text-3)", cursor: "pointer", padding: 3, display: "grid", placeItems: "center", flexShrink: 0 },
  iconSave: { border: "none", background: "#4C9A6B", color: "#fff", width: 32, height: 32, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },
  iconCancel: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", width: 32, height: 32, borderRadius: 8, cursor: "pointer", display: "grid", placeItems: "center" },

  writeCard: { background: "var(--surface)", borderRadius: 14, padding: 16, border: "1px solid var(--border)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: 14 },
  tuneRow: { display: "flex", justifyContent: "flex-end", marginBottom: 10 },
  tuneBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 12px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tuneOn: { background: GOLD, color: "#fff", borderColor: GOLD },
  musicCtrlRow: { display: "inline-flex", alignItems: "center", gap: 6 },
  musicSetBtn: { display: "inline-grid", placeItems: "center", border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-3)", width: 28, height: 28, borderRadius: 14, cursor: "pointer", fontFamily: "inherit" },
  musicEditRow: { display: "inline-flex", alignItems: "center", gap: 6, flexWrap: "wrap" },
  musicInput: { border: "1px solid var(--border)", borderRadius: 8, padding: "6px 10px", fontSize: 12.5, fontFamily: "inherit", outline: "none", background: "var(--bg)", color: "var(--text)", minWidth: 180 },
  tuneHint: { fontSize: 11, color: "var(--text-3)", fontWeight: 500 },
  writeNav: { display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 },
  navBtn: { width: 34, height: 34, borderRadius: 9, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", display: "grid", placeItems: "center" },
  navDisabled: { opacity: 0.35, cursor: "not-allowed" },
  writeDate: { fontSize: 14, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif", minWidth: 150, textAlign: "center" },
  writeArea: { width: "100%", boxSizing: "border-box", border: "1px solid var(--border)", borderRadius: 10, padding: "12px", fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", color: "var(--text)", background: "var(--surface)", outline: "none", minHeight: 120, resize: "vertical", lineHeight: 1.6 },
  writeSave: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, width: "100%", marginTop: 10, border: "none", background: GOLD, color: "#fff", padding: "11px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },
  readEntry: { display: "flex", gap: 8, padding: "6px 2px" },
  readText: { fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.6, margin: 0, whiteSpace: "pre-wrap" },

  manifestBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", border: "none", background: "linear-gradient(135deg,#C9A227,#E0BD45)", color: "#fff", padding: "13px", borderRadius: 12, fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 2px 10px rgba(201,162,39,0.35)" },
  unmanifestBtn: { display: "block", margin: "0 auto", border: "none", background: "none", color: "var(--text-3)", fontSize: 12, fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontFamily: "inherit" },

  muted: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "16px 0" },
  empty: { fontSize: 13, color: "var(--text-3)", textAlign: "center", padding: "40px 12px" },

  musicBtn: { position: "absolute", top: 28, right: 22, display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "6px 11px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", zIndex: 5 },
  musicOn: { background: GOLD, color: "#fff", borderColor: GOLD },

  celebOverlay: { position: "fixed", inset: 0, background: "rgba(38,36,31,0.6)", zIndex: 200, display: "grid", placeItems: "center", padding: 16 },
  celebBox: { background: "var(--surface)", color: "var(--text)", borderRadius: 20, padding: "36px 30px", textAlign: "center", maxWidth: 360, boxShadow: "0 12px 48px rgba(0,0,0,0.3)" },
  celebEmoji: { fontSize: 40, marginBottom: 10 },
  celebTitle: { fontSize: 24, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginBottom: 10, color: GOLD },
  celebDream: { fontSize: 15, fontStyle: "italic", fontFamily: "'Fraunces',Georgia,serif", lineHeight: 1.5, marginBottom: 10 },
  celebSub: { fontSize: 13.5, color: "var(--text-2)", lineHeight: 1.5, marginBottom: 22 },
  celebBtn: { border: "none", background: GOLD, color: "#fff", padding: "11px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" },

  // 369 toggle row
  t369Row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "12px 16px", marginBottom: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  t369RowLeft: { display: "flex", alignItems: "center", gap: 11 },
  t369RowTitle: { fontSize: 14, fontWeight: 700 },
  t369RowSub: { fontSize: 11.5, color: "var(--text-3)", marginTop: 2 },
  tBadgeOff: { background: "var(--border)", color: "var(--text-3)" },
  switch: { position: "relative", width: 46, height: 26, borderRadius: 14, border: "none", background: "var(--border)", cursor: "pointer", flexShrink: 0, transition: "background 0.2s", padding: 0 },
  switchOn: { background: GOLD },
  switchKnob: { position: "absolute", top: 3, left: 3, width: 20, height: 20, borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 2px rgba(0,0,0,0.3)" },
  switchKnobOn: { left: 23 },

  // Tesla 369
  tCard: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 18, marginBottom: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  tHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 14 },
  tTitleWrap: { display: "flex", alignItems: "center", gap: 11 },
  tBadge: { display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg,#C9A227,#E0BD45)", color: "#fff", fontSize: 14, fontWeight: 800, padding: "6px 10px", borderRadius: 10, letterSpacing: "0.02em", flexShrink: 0 },
  tTitle: { fontSize: 17, fontWeight: 700, fontFamily: "'Fraunces',Georgia,serif" },
  tSub: { fontSize: 12, color: "var(--text-3)", marginTop: 2 },
  tHeadBtns: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" },
  tRemBtn: { display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "7px 12px", borderRadius: 16, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tRemOn: { background: GOLD, color: "#fff", borderColor: GOLD },

  tStreakRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 },
  tStreakBox: { background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "12px 14px" },
  tStreakLabel: { display: "flex", alignItems: "center", gap: 5, fontSize: 11.5, fontWeight: 600, color: "var(--text-2)" },
  tStreakVal: { fontSize: 21, fontWeight: 800, fontFamily: "'Fraunces',Georgia,serif", marginTop: 4, lineHeight: 1.1 },
  tStreakHint: { fontSize: 11, color: "var(--text-3)", marginTop: 4, fontWeight: 500 },
  tProgTrack: { height: 5, borderRadius: 4, background: "var(--border)", marginTop: 8, overflow: "hidden" },
  tProgFill: { height: "100%", background: "linear-gradient(90deg,#C2773B,#C9A227)", borderRadius: 4, transition: "width 0.4s" },

  tAffShow: { display: "flex", alignItems: "flex-start", gap: 9, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "12px 14px", marginBottom: 14 },
  tAffText: { flex: 1, fontSize: 15, fontFamily: "'Fraunces',Georgia,serif", fontStyle: "italic", lineHeight: 1.5, margin: 0, whiteSpace: "pre-wrap" },

  tWindows: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 14 },
  tWindow: { background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "11px 12px", transition: "box-shadow 0.2s, border-color 0.2s" },
  tWindowHead: { display: "flex", alignItems: "center", gap: 6 },
  tWindowLabel: { fontSize: 13, fontWeight: 700 },
  tNow: { fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginLeft: "auto" },
  tWindowTime: { fontSize: 10.5, color: "var(--text-3)", marginTop: 2, marginBottom: 8, fontWeight: 500 },
  tDots: { display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 7 },
  tDot: { width: 11, height: 11, borderRadius: "50%", border: "1.5px solid var(--border)", background: "transparent", transition: "background 0.2s" },
  tCount: { fontSize: 12, fontWeight: 700, color: "var(--text-2)" },

  tWriteBox: { borderTop: "1px solid var(--border)", paddingTop: 14 },
  tNote: { fontSize: 12, fontWeight: 600, color: "#C2773B", background: "rgba(194,119,59,0.10)", borderRadius: 8, padding: "8px 11px", marginBottom: 9 },
  tPasteWarn: { fontSize: 11.5, color: "#C2536B", fontWeight: 600, marginTop: 6 },
  tWriteActions: { display: "flex", gap: 8, marginTop: 10 },
  tUndoBtn: { display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", padding: "11px 14px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
  tClosed: { fontSize: 12.5, color: "var(--text-3)", textAlign: "center", padding: "10px 4px", lineHeight: 1.5 },
  tDoneMsg: { fontSize: 13, fontWeight: 700, color: "#4C9A6B", textAlign: "center", padding: "10px 4px" },
};
