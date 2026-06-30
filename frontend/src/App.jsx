import { useState, useEffect, useRef } from "react";
import {
  LayoutGrid, Target, CheckSquare, BookOpen,
  GraduationCap, Star, RotateCcw, Menu, X,
  Sparkles, LogOut, Trees, IndianRupee, Settings, Landmark, Rocket, Crown, Headphones, Trophy, PartyPopper, Wallet, ReceiptText, LayoutDashboard, CandlestickChart
} from "lucide-react";
import DashboardScreen from "./screens/DashboardScreen.jsx";
import QuadrantView from "./screens/QuadrantView.jsx";
import GoalsWithGantt from "./screens/GoalsWithGantt.jsx";
import HabitTracker from "./screens/HabitTracker.jsx";
import JournalScreen from "./screens/JournalScreen.jsx";
import SkillsScreen from "./screens/SkillsScreen.jsx";
import SpiritualScreen from "./screens/SpiritualScreen.jsx";
import RevisionScreen from "./screens/RevisionScreen.jsx";
import AffirmationsScreen from "./screens/AffirmationsScreen.jsx";
import GroveScreen from "./screens/GroveScreen.jsx";
import WorthScreen from "./screens/WorthScreen.jsx";
import AuthScreen from "./screens/AuthScreen.jsx";
import FinanceScreen from "./screens/FinanceScreen.jsx";
import KickstartScreen from "./screens/KickstartScreen.jsx";
import GoldenBookScreen from "./screens/GoldenBookScreen.jsx";
import MindscapeScreen from "./screens/MindscapeScreen.jsx";
import AchievementsScreen from "./screens/AchievementsScreen.jsx";
import DelightScreen from "./screens/DelightScreen.jsx";
import ExpensesScreen from "./screens/ExpensesScreen.jsx";
import TradingJournalScreen from "./screens/TradingJournalScreen.jsx";
import SettingsModal from "./screens/SettingsModal.jsx";
import Ticker from "./components/Ticker.jsx";
import { api, getToken, setToken, clearToken } from "./api.js";
import { applyTheme, getStoredThemeId } from "./theme.js";
import { getCurrencyCode, setCurrencyCode } from "./currency.js";
import { getMonthStartDay, setMonthStartDay } from "./monthCycle.js";

// Apply the stored theme immediately so there's no flash before React mounts.
applyTheme(getStoredThemeId(), false);

const DEFAULT_SCREEN_KEY = "anvil_default_screen";
const getStoredDefault = () => { try { return localStorage.getItem(DEFAULT_SCREEN_KEY); } catch { return null; } };

// Registry: screen id → metadata + component.
const SCREENS = {
  dashboard:    { label: "Dashboard",    icon: LayoutDashboard, component: DashboardScreen },
  kickstart:    { label: "Kickstart",    icon: Rocket,        component: KickstartScreen },
  golden:       { label: "Golden Book",  icon: Crown,         component: GoldenBookScreen },
  habits:       { label: "Habits",       icon: CheckSquare,   component: HabitTracker },
  quadrant:     { label: "Quadrant",     icon: LayoutGrid,    component: QuadrantView },
  goals:        { label: "Goals",        icon: Target,        component: GoalsWithGantt },
  grove:        { label: "Grove",        icon: Trees,         component: GroveScreen },
  worth:        { label: "Rewards",      icon: IndianRupee,   component: WorthScreen },
  vault:        { label: "Wallet",       icon: Wallet,        component: FinanceScreen },
  expenses:     { label: "Expenses",     icon: ReceiptText,   component: ExpensesScreen },
  trading:      { label: "Trading Journal", icon: CandlestickChart, component: TradingJournalScreen },
  journal:      { label: "Journal",      icon: BookOpen,      component: JournalScreen },
  revision:     { label: "Revision",     icon: RotateCcw,     component: RevisionScreen },
  affirmations: { label: "Affirmations", icon: Sparkles,      component: AffirmationsScreen },
  skills:       { label: "Skills",       icon: GraduationCap, component: SkillsScreen },
  spiritual:    { label: "Spiritual",    icon: Star,          component: SpiritualScreen },
  mindscape:    { label: "Mindscape",    icon: Headphones,    component: MindscapeScreen },
  achievements: { label: "Achievements", icon: Trophy,        component: AchievementsScreen },
  delight:      { label: "Delights",     icon: PartyPopper,   component: DelightScreen },
};

// Default sidebar order (flat items). Users can reorder/hide via Settings.
const DEFAULT_ORDER = [
  "dashboard", "kickstart", "golden", "habits", "quadrant", "goals", "grove", "journal",
  "revision", "affirmations", "skills", "spiritual", "mindscape", "achievements", "delight", "worth", "vault", "expenses", "trading",
];

// Merge a saved order with the registry so newly-added screens always appear,
// and stale ids are dropped.
function normalizeOrder(saved) {
  const known = DEFAULT_ORDER.filter((id) => SCREENS[id]);
  const fromSaved = (Array.isArray(saved) ? saved : []).filter((id) => SCREENS[id]);
  const merged = [...fromSaved];
  known.forEach((id) => { if (!merged.includes(id)) merged.push(id); });
  return merged;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 720);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 720);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

export default function App() {
  const [active, setActive] = useState(() => {
    const d = getStoredDefault();
    return d && SCREENS[d] ? d : "habits";
  });
  const [defaultScreen, setDefaultScreen] = useState(() => getStoredDefault() || "habits");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [themeId, setThemeId] = useState(getStoredThemeId());
  const [currency, setCurrency] = useState(getCurrencyCode());
  const [monthStartDay, setMonthStartDayState] = useState(getMonthStartDay());
  const [ticker, setTicker] = useState({ enabled: false, statements: [], speed: 60, delay: 3 });
  const [order, setOrder] = useState(() => normalizeOrder(DEFAULT_ORDER));
  const [hidden, setHidden] = useState([]);
  const isMobile = useIsMobile();

  // Track time spent per screen (for the Worth rewards system): a steady
  // heartbeat credits the active screen while the tab is visible.
  const activeRef = useRef(active);
  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => {
    if (!user) return;
    const TICK = 10; // finer-grained time accrual
    // Kickstart & Mindscape are credited by actual playback time (inside those
    // screens), not by screen-open time.
    const PLAYBACK_TRACKED = new Set(["kickstart", "mindscape"]);
    const id = setInterval(() => {
      const s = activeRef.current;
      if (!document.hidden && s && !PLAYBACK_TRACKED.has(s)) api.addScreenTime(s, TICK).catch(() => {});
    }, TICK * 1000);
    return () => clearInterval(id);
  }, [user]);

  // Validate any stored token on load; listen for 401s from the API layer.
  useEffect(() => {
    let cancelled = false;
    const logout = () => { clearToken(); setUser(null); };
    window.addEventListener("anvil-unauthorized", logout);
    // After a Google sign-in redirect, the backend hands back a fresh app token
    // via ?login=<token> (browser navigation can't carry an Authorization header).
    const loginToken = new URLSearchParams(window.location.search).get("login");
    if (loginToken) {
      setToken(loginToken);
      window.history.replaceState({}, "", window.location.pathname);
    }
    if (getToken()) {
      api.me().then((u) => { if (!cancelled) setUser(u); })
        .catch(() => {})
        .finally(() => { if (!cancelled) setAuthChecked(true); });
    } else {
      setAuthChecked(true);
    }
    return () => { cancelled = true; window.removeEventListener("anvil-unauthorized", logout); };
  }, []);

  // Once authed, pull per-user preferences (theme + sidebar layout) from the backend.
  useEffect(() => {
    if (!user) return;
    api.getSetting("theme").then((r) => { if (r?.value) setThemeId(applyTheme(r.value)); }).catch(() => {});
    api.getSetting("currency").then((r) => { if (r?.value) setCurrency(setCurrencyCode(r.value)); }).catch(() => {});
    api.getSetting("month_start_day").then((r) => { if (r?.value) setMonthStartDayState(setMonthStartDay(r.value)); }).catch(() => {});
    api.getSetting("ticker").then((r) => { if (r?.value) setTicker((t) => ({ ...t, ...r.value })); }).catch(() => {});
    api.getSetting("default_screen").then((r) => {
      if (r?.value && SCREENS[r.value]) { setDefaultScreen(r.value); try { localStorage.setItem(DEFAULT_SCREEN_KEY, r.value); } catch { /* ignore */ } }
    }).catch(() => {});
    api.getSetting("sidebar_order").then((r) => { if (Array.isArray(r?.value)) setOrder(normalizeOrder(r.value)); }).catch(() => {});
    api.getSetting("sidebar_hidden").then((r) => { if (Array.isArray(r?.value)) setHidden(r.value); }).catch(() => {});
  }, [user]);

  function navigate(id) {
    setActive(id);
    setDrawerOpen(false);
  }
  const logout = () => { clearToken(); setUser(null); };

  const previewTheme = (id) => { applyTheme(id, false); };       // live preview, not saved
  const commitTheme = (id) => {                                  // finalize + persist
    setThemeId(applyTheme(id));
    api.setSetting("theme", id).catch(() => {});
    setSettingsOpen(false);
  };
  const closeSettings = () => {
    applyTheme(themeId, false); // revert any unsaved theme preview
    setSettingsOpen(false);
  };
  const selectCurrency = (code) => {
    setCurrency(setCurrencyCode(code));
    api.setSetting("currency", code).catch(() => {});
  };
  const selectMonthStartDay = (day) => {
    setMonthStartDayState(setMonthStartDay(day));
    api.setSetting("month_start_day", Number(day)).catch(() => {});
  };
  const saveTicker = (cfg) => {
    setTicker(cfg);
    api.setSetting("ticker", cfg).catch(() => {});
  };
  const setDefault = (id) => {
    setDefaultScreen(id);
    try { localStorage.setItem(DEFAULT_SCREEN_KEY, id); } catch { /* ignore */ }
    api.setSetting("default_screen", id).catch(() => {});
  };
  const saveSidebar = (newOrder, newHidden) => {
    setOrder(normalizeOrder(newOrder));
    setHidden(newHidden);
    setSettingsOpen(false);
    api.setSetting("sidebar_order", newOrder).catch(() => {});
    api.setSetting("sidebar_hidden", newHidden).catch(() => {});
    if (newHidden.includes(active)) {
      const firstVisible = normalizeOrder(newOrder).find((id) => !newHidden.includes(id));
      if (firstVisible) setActive(firstVisible);
    }
  };

  const visibleNav = order.filter((id) => !hidden.includes(id));

  if (!authChecked) return <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "'Inter',system-ui,sans-serif", color: "var(--text-3)" }}>Loading…</div>;
  if (!user) return <AuthScreen />;

  const screen = SCREENS[active];
  const Screen = screen.component;

  const NavItems = () => (
    <div style={S.navItems}>
      {visibleNav.map((id) => {
        const c = SCREENS[id];
        if (!c) return null;
        const Icon = c.icon;
        const on = active === id;
        return (
          <button
            key={id}
            onClick={() => navigate(id)}
            title={c.label}
            style={{ ...S.navItem, ...(on ? S.navItemOn : {}) }}
          >
            <Icon size={18} />
            <span style={S.navLabel}>{c.label}</span>
          </button>
        );
      })}
    </div>
  );

  const UserFooter = () => (
    <div style={S.footerWrap}>
      <button onClick={() => setSettingsOpen(true)} style={S.settingsBtn} title="Settings">
        <Settings size={17} />
        <span>Settings</span>
      </button>
      <div style={S.userFooter}>
        <div style={S.userInfo}>
          <div style={S.userAvatar}>{(user.name || user.email || "?").charAt(0).toUpperCase()}</div>
          <div style={{ minWidth: 0 }}>
            <div style={S.userName}>{user.name || "You"}</div>
            <div style={S.userEmail}>{user.email}</div>
          </div>
        </div>
        <button onClick={logout} style={S.logoutBtn} title="Sign out"><LogOut size={16} /></button>
      </div>
    </div>
  );

  return (
    <div style={S.shell}>
      {/* Desktop sidebar */}
      {!isMobile && (
        <nav style={S.nav}>
          <div style={S.brand}>
            <div style={S.brandLogo}>B</div>
            <span style={S.brandName}>Anvil</span>
          </div>
          <NavItems />
          <UserFooter />
        </nav>
      )}

      {/* Mobile drawer overlay */}
      {isMobile && drawerOpen && (
        <div style={S.overlay} onClick={() => setDrawerOpen(false)}>
          <nav style={S.drawer} onClick={(e) => e.stopPropagation()}>
            <div style={S.drawerHeader}>
              <div style={S.brand}>
                <div style={S.brandLogo}>B</div>
                <span style={S.brandName}>Anvil</span>
              </div>
              <button style={S.closeBtn} onClick={() => setDrawerOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div style={S.drawerNav}><NavItems /></div>
            <UserFooter />
          </nav>
        </div>
      )}

      <div style={S.content}>
        {/* Mobile top bar */}
        {isMobile && (
          <div style={S.topBar}>
            <button style={S.menuBtn} onClick={() => setDrawerOpen(true)}>
              <Menu size={22} />
            </button>
            <span style={S.topBarTitle}>{screen.label}</span>
            <div style={{ width: 38 }} />
          </div>
        )}

        {ticker.enabled && <Ticker statements={ticker.statements} speed={ticker.speed} delay={ticker.delay} />}

        <main style={S.main}>
          <Screen onNavigate={navigate} />
        </main>
      </div>

      {settingsOpen && (
        <SettingsModal
          screens={SCREENS}
          order={order}
          hidden={hidden}
          themeId={themeId}
          currency={currency}
          monthStartDay={monthStartDay}
          ticker={ticker}
          defaultScreen={defaultScreen}
          onSetDefault={setDefault}
          onSaveSidebar={saveSidebar}
          onPreviewTheme={previewTheme}
          onCommitTheme={commitTheme}
          onSelectCurrency={selectCurrency}
          onSelectMonthStartDay={selectMonthStartDay}
          onSaveTicker={saveTicker}
          onClose={closeSettings}
        />
      )}
    </div>
  );
}

const S = {
  shell: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "'Inter', system-ui, sans-serif",
    background: "var(--bg)",
  },
  nav: {
    width: 200,
    flexShrink: 0,
    background: "var(--surface)",
    borderRight: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    gap: 2,
    overflowY: "auto", // scrollbar appears only when the window is too short to fit everything
    overflowX: "hidden",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "6px 10px 20px",
    borderBottom: "1px solid var(--border)",
    marginBottom: 8,
  },
  brandLogo: {
    width: 30,
    height: 30,
    borderRadius: 8,
    background: "var(--accent-strong)",
    color: "#fff",
    display: "grid",
    placeItems: "center",
    fontSize: 14,
    fontWeight: 800,
    fontFamily: "'Fraunces', Georgia, serif",
    flexShrink: 0,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "-0.01em",
    color: "var(--text)",
    fontFamily: "'Fraunces', Georgia, serif",
  },
  navItems: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "none",
    background: "none",
    padding: "10px 12px",
    borderRadius: 9,
    cursor: "pointer",
    color: "var(--text-2)",
    fontSize: 13.5,
    fontWeight: 500,
    width: "100%",
    textAlign: "left",
  },
  navItemOn: {
    background: "var(--hover)",
    color: "var(--text)",
    fontWeight: 700,
  },
  navChild: {
    paddingLeft: 30,
    fontSize: 13,
  },
  footerWrap: {
    marginTop: "auto",
    paddingTop: 8,
    flexShrink: 0,
  },
  settingsBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "none",
    background: "none",
    padding: "10px 12px",
    borderRadius: 9,
    cursor: "pointer",
    color: "var(--text-2)",
    fontSize: 13.5,
    fontWeight: 500,
    width: "100%",
    textAlign: "left",
  },
  userFooter: {
    marginTop: 4,
    paddingTop: 12,
    borderTop: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  userInfo: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 },
  userAvatar: { width: 30, height: 30, borderRadius: "50%", background: "#8268B0", color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 },
  userName: { fontSize: 13, fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  userEmail: { fontSize: 11, color: "var(--text-3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  logoutBtn: { border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", padding: 7, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
  navLabel: {
    flex: 1,
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  main: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
  // Mobile top bar
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    background: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    flexShrink: 0,
  },
  topBarTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--text)",
    fontFamily: "'Fraunces', Georgia, serif",
  },
  menuBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "var(--text)",
    padding: 8,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
  },
  // Drawer overlay
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    zIndex: 100,
    display: "flex",
  },
  drawer: {
    width: 220,
    background: "var(--surface)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "16px 10px",
    gap: 2,
    boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
    overflow: "hidden", // the nav list scrolls inside; header + footer stay pinned
  },
  // Scrollable nav-item region so the user profile / sign-out footer is always reachable.
  drawerNav: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 4,
    flexShrink: 0,
  },
  closeBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "var(--text-2)",
    padding: 6,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },
};
