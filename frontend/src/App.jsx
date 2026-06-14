import { useState, useEffect } from "react";
import {
  LayoutGrid, Target, CheckSquare, BookOpen,
  GraduationCap, Star, RotateCcw, Menu, X,
  Sparkles, ScrollText, ChevronDown, ChevronRight, LogOut, Trees, IndianRupee
} from "lucide-react";
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
import { api, getToken, clearToken } from "./api.js";

// Registry: screen id → metadata + component.
const SCREENS = {
  habits:       { label: "Habits",       icon: CheckSquare,   component: HabitTracker },
  quadrant:     { label: "Quadrant",     icon: LayoutGrid,    component: QuadrantView },
  goals:        { label: "Goals",        icon: Target,        component: GoalsWithGantt },
  grove:        { label: "Grove",        icon: Trees,         component: GroveScreen },
  worth:        { label: "Worth",        icon: IndianRupee,   component: WorthScreen },
  journal:      { label: "Journal",      icon: BookOpen,      component: JournalScreen },
  revision:     { label: "Revision",     icon: RotateCcw,     component: RevisionScreen },
  affirmations: { label: "Affirmations", icon: Sparkles,      component: AffirmationsScreen },
  skills:       { label: "Skills",       icon: GraduationCap, component: SkillsScreen },
  spiritual:    { label: "Spiritual",    icon: Star,          component: SpiritualScreen },
};

// Sidebar layout (flat items).
const NAV = [
  { type: "item", id: "habits" },
  { type: "item", id: "quadrant" },
  { type: "item", id: "goals" },
  { type: "item", id: "grove" },
  { type: "item", id: "journal" },
  { type: "item", id: "revision" },
  { type: "item", id: "affirmations" },
  { type: "item", id: "skills" },
  { type: "item", id: "spiritual" },
  { type: "item", id: "worth" },
];

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
  const [active, setActive] = useState("habits");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({ spiritual: true });
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const isMobile = useIsMobile();

  // Validate any stored token on load; listen for 401s from the API layer.
  useEffect(() => {
    let cancelled = false;
    const logout = () => { clearToken(); setUser(null); };
    window.addEventListener("anvil-unauthorized", logout);
    if (getToken()) {
      api.me().then((u) => { if (!cancelled) setUser(u); })
        .catch(() => {})
        .finally(() => { if (!cancelled) setAuthChecked(true); });
    } else {
      setAuthChecked(true);
    }
    return () => { cancelled = true; window.removeEventListener("anvil-unauthorized", logout); };
  }, []);

  function navigate(id) {
    setActive(id);
    setDrawerOpen(false);
  }
  const toggleGroup = (id) => setOpenGroups((g) => ({ ...g, [id]: !g[id] }));
  const logout = () => { clearToken(); setUser(null); };

  if (!authChecked) return <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "'Inter',system-ui,sans-serif", color: "#9A968C" }}>Loading…</div>;
  if (!user) return <AuthScreen onAuthed={setUser} />;

  const screen = SCREENS[active];
  const Screen = screen.component;

  const NavItems = () => (
    <div style={S.navItems}>
      {NAV.map((entry) => {
        if (entry.type === "group") {
          const open = openGroups[entry.id];
          const GIcon = entry.icon;
          const childActive = entry.children.includes(active);
          return (
            <div key={entry.id}>
              <button
                onClick={() => toggleGroup(entry.id)}
                style={{ ...S.navItem, ...(childActive && !open ? S.navItemOn : {}) }}
              >
                <GIcon size={18} />
                <span style={S.navLabel}>{entry.label}</span>
                {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
              </button>
              {open && entry.children.map((cid) => {
                const c = SCREENS[cid];
                const Icon = c.icon;
                const on = active === cid;
                return (
                  <button
                    key={cid}
                    onClick={() => navigate(cid)}
                    title={c.label}
                    style={{ ...S.navItem, ...S.navChild, ...(on ? S.navItemOn : {}) }}
                  >
                    <Icon size={16} />
                    <span style={S.navLabel}>{c.label}</span>
                  </button>
                );
              })}
            </div>
          );
        }
        const c = SCREENS[entry.id];
        const Icon = c.icon;
        const on = active === entry.id;
        return (
          <button
            key={entry.id}
            onClick={() => navigate(entry.id)}
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
            <NavItems />
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

        <main style={S.main}>
          <Screen />
        </main>
      </div>
    </div>
  );
}

const S = {
  shell: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    fontFamily: "'Inter', system-ui, sans-serif",
    background: "#F7F6F3",
  },
  nav: {
    width: 200,
    flexShrink: 0,
    background: "#fff",
    borderRight: "1px solid #ECEAE3",
    display: "flex",
    flexDirection: "column",
    padding: "20px 10px",
    gap: 2,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "6px 10px 20px",
    borderBottom: "1px solid #ECEAE3",
    marginBottom: 8,
  },
  brandLogo: {
    width: 30,
    height: 30,
    borderRadius: 8,
    background: "#26241F",
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
    color: "#26241F",
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
    color: "#6B675E",
    fontSize: 13.5,
    fontWeight: 500,
    width: "100%",
    textAlign: "left",
  },
  navItemOn: {
    background: "#F2F1EC",
    color: "#26241F",
    fontWeight: 700,
  },
  navChild: {
    paddingLeft: 30,
    fontSize: 13,
  },
  userFooter: {
    marginTop: "auto",
    paddingTop: 12,
    borderTop: "1px solid #ECEAE3",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  userInfo: { display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 },
  userAvatar: { width: 30, height: 30, borderRadius: "50%", background: "#8268B0", color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 },
  userName: { fontSize: 13, fontWeight: 600, color: "#26241F", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  userEmail: { fontSize: 11, color: "#9A968C", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  logoutBtn: { border: "1px solid #E0DDD5", background: "#fff", color: "#6B675E", cursor: "pointer", padding: 7, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 },
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
    background: "#fff",
    borderBottom: "1px solid #ECEAE3",
    flexShrink: 0,
  },
  topBarTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#26241F",
    fontFamily: "'Fraunces', Georgia, serif",
  },
  menuBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#26241F",
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
    background: "#fff",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "16px 10px",
    gap: 2,
    boxShadow: "4px 0 24px rgba(0,0,0,0.12)",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  closeBtn: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#6B675E",
    padding: 6,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
  },
};
