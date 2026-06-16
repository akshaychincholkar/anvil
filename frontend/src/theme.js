// Theme system — each theme is a set of CSS custom properties applied to :root.
// Screens reference these via var(--…) so a single switch restyles the whole app.
//
// Token meaning:
//   --bg            page background
//   --surface       cards, sidebar, panels
//   --surface-2     subtle alternate surface (inputs, tracks)
//   --hover         hover / active subtle fill
//   --border        borders & dividers
//   --text          primary text
//   --text-2        secondary text
//   --text-3        muted text / placeholders
//   --accent        signature accent (links, controls, settings UI)
//   --accent-strong dark/prominent button surface (always pairs with white text)
//   --accent-2      gradient partner for --accent-strong

export const THEMES = [
  {
    id: "sandstone",
    name: "Sandstone",
    description: "Warm editorial light — the original Anvil look.",
    dark: false,
    swatch: ["#F7F6F3", "#4C9A6B", "#26241F"],
    vars: {
      "--bg": "#F7F6F3", "--surface": "#FFFFFF", "--surface-2": "#FAFAF8",
      "--hover": "#F2F1EC", "--border": "#ECEAE3",
      "--text": "#26241F", "--text-2": "#6B675E", "--text-3": "#9A968C",
      "--accent": "#4C9A6B", "--accent-strong": "#26241F", "--accent-2": "#3A352C",
    },
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Deep low-glare dark mode for night owls and focus.",
    dark: true,
    swatch: ["#161513", "#6FB58C", "#ECEAE3"],
    vars: {
      "--bg": "#161513", "--surface": "#211F1C", "--surface-2": "#1B1A17",
      "--hover": "#2B2924", "--border": "#34312B",
      "--text": "#ECEAE3", "--text-2": "#B6B1A6", "--text-3": "#8A857A",
      "--accent": "#6FB58C", "--accent-strong": "#2E6F4B", "--accent-2": "#245C3E",
    },
  },
  {
    id: "blossom",
    name: "Blossom",
    description: "Soft rose & blush — gentle, warm, and feminine.",
    dark: false,
    swatch: ["#FFF5F8", "#E0608E", "#B23A6B"],
    vars: {
      "--bg": "#FFF5F8", "--surface": "#FFFFFF", "--surface-2": "#FFF0F4",
      "--hover": "#FDE7EE", "--border": "#F6D9E2",
      "--text": "#3D2230", "--text-2": "#7A5466", "--text-3": "#B08799",
      "--accent": "#E0608E", "--accent-strong": "#B23A6B", "--accent-2": "#9C2F5C",
    },
  },
  {
    id: "tide",
    name: "Tide",
    description: "Calm professional blues — clean and focused.",
    dark: false,
    swatch: ["#F1F6FA", "#2E86C1", "#1C4E73"],
    vars: {
      "--bg": "#F1F6FA", "--surface": "#FFFFFF", "--surface-2": "#ECF3F9",
      "--hover": "#E2EEF6", "--border": "#D5E3EE",
      "--text": "#13283A", "--text-2": "#4A6275", "--text-3": "#8AA0B0",
      "--accent": "#2E86C1", "--accent-strong": "#1C4E73", "--accent-2": "#163E5C",
    },
  },
  {
    id: "velocity",
    name: "Velocity",
    description: "High-energy sport — crisp slate with electric orange.",
    dark: false,
    swatch: ["#F4F5F7", "#F4511E", "#1F2A37"],
    vars: {
      "--bg": "#F4F5F7", "--surface": "#FFFFFF", "--surface-2": "#EEF0F3",
      "--hover": "#E7EAEE", "--border": "#DCE0E6",
      "--text": "#18202B", "--text-2": "#515B68", "--text-3": "#8B95A1",
      "--accent": "#F4511E", "--accent-strong": "#1F2A37", "--accent-2": "#16202B",
    },
  },
  {
    id: "evergreen",
    name: "Evergreen",
    description: "Earthy forest greens — grounded and natural.",
    dark: false,
    swatch: ["#F2F6F1", "#3E8E52", "#2A4A30"],
    vars: {
      "--bg": "#F2F6F1", "--surface": "#FFFFFF", "--surface-2": "#ECF2EA",
      "--hover": "#E4EEE2", "--border": "#D7E4D3",
      "--text": "#1E2B20", "--text-2": "#4F6151", "--text-3": "#8AA08C",
      "--accent": "#3E8E52", "--accent-strong": "#2A4A30", "--accent-2": "#213B26",
    },
  },
  {
    id: "amethyst",
    name: "Amethyst",
    description: "Premium purple & plum — elegant and refined.",
    dark: false,
    swatch: ["#F6F4FB", "#7A4FE0", "#3A2D5C"],
    vars: {
      "--bg": "#F6F4FB", "--surface": "#FFFFFF", "--surface-2": "#F1EDF9",
      "--hover": "#EAE3F6", "--border": "#DFD6F0",
      "--text": "#241B36", "--text-2": "#5A4E72", "--text-3": "#9588AE",
      "--accent": "#7A4FE0", "--accent-strong": "#3A2D5C", "--accent-2": "#2E2349",
    },
  },
];

export const DEFAULT_THEME = "sandstone";
const THEME_KEY = "anvil_theme";

export const getTheme = (id) => THEMES.find((t) => t.id === id) || THEMES[0];

export function getStoredThemeId() {
  try { return localStorage.getItem(THEME_KEY) || DEFAULT_THEME; }
  catch { return DEFAULT_THEME; }
}

export function applyTheme(id, persist = true) {
  const theme = getTheme(id);
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.style.colorScheme = theme.dark ? "dark" : "light";
  root.setAttribute("data-theme", theme.id);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme.vars["--surface"]);
  if (persist) { try { localStorage.setItem(THEME_KEY, theme.id); } catch { /* ignore */ } }
  return theme.id;
}
