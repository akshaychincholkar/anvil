import { useState, useEffect } from "react";
import {
  LayoutGrid, Target, CheckSquare, BookOpen,
  GraduationCap, Star, RotateCcw, Menu, X
} from "lucide-react";
import QuadrantView from "./screens/QuadrantView.jsx";
import GoalsWithGantt from "./screens/GoalsWithGantt.jsx";
import HabitTracker from "./screens/HabitTracker.jsx";
import JournalScreen from "./screens/JournalScreen.jsx";
import SkillsScreen from "./screens/SkillsScreen.jsx";
import SpiritualScreen from "./screens/SpiritualScreen.jsx";
import RevisionScreen from "./screens/RevisionScreen.jsx";

const SCREENS = [
  { id: "quadrant",  label: "Quadrant",  icon: LayoutGrid,    component: QuadrantView },
  { id: "goals",     label: "Goals",     icon: Target,         component: GoalsWithGantt },
  { id: "habits",    label: "Habits",    icon: CheckSquare,    component: HabitTracker },
  { id: "journal",   label: "Journal",   icon: BookOpen,       component: JournalScreen },
  { id: "skills",    label: "Skills",    icon: GraduationCap,  component: SkillsScreen },
  { id: "spiritual", label: "Spiritual", icon: Star,           component: SpiritualScreen },
  { id: "revision",  label: "Revision",  icon: RotateCcw,      component: RevisionScreen },
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
  const [active, setActive] = useState("quadrant");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const screen = SCREENS.find((s) => s.id === active);
  const Screen = screen.component;

  function navigate(id) {
    setActive(id);
    setDrawerOpen(false);
  }

  const NavItems = () => (
    <div style={S.navItems}>
      {SCREENS.map(({ id, label, icon: Icon }) => {
        const on = active === id;
        return (
          <button
            key={id}
            onClick={() => navigate(id)}
            title={label}
            style={{ ...S.navItem, ...(on ? S.navItemOn : {}) }}
          >
            <Icon size={18} />
            <span style={S.navLabel}>{label}</span>
          </button>
        );
      })}
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
