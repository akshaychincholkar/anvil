import { useState } from "react";
import {
  LayoutGrid, Target, CheckSquare, BookOpen,
  GraduationCap, Star, RotateCcw
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

export default function App() {
  const [active, setActive] = useState("quadrant");
  const screen = SCREENS.find((s) => s.id === active);
  const Screen = screen.component;

  return (
    <div style={S.shell}>
      <nav style={S.nav}>
        <div style={S.brand}>
          <div style={S.brandLogo}>B</div>
          <span style={S.brandName}>Anvil</span>
        </div>
        <div style={S.navItems}>
          {SCREENS.map(({ id, label, icon: Icon }) => {
            const on = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                title={label}
                style={{ ...S.navItem, ...(on ? S.navItemOn : {}) }}
              >
                <Icon size={18} />
                <span style={S.navLabel}>{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
      <main style={S.main}>
        <Screen />
      </main>
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
  main: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
};
