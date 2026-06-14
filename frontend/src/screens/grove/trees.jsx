// Shared tree-drawing kit for the Grove timer and Insights forest scene.
// The five trees mirror the five life pillars, using their app palette colours.

export const TREES = {
  financial:    { label: "Financial",    leaf: "#C9A227", shape: "round" },
  academic:     { label: "Academic",     leaf: "#3A7CA5", shape: "pine" },
  relationship: { label: "Relationship", leaf: "#C2536B", shape: "round" },
  spiritual:    { label: "Spiritual",    leaf: "#8268B0", shape: "tall" },
  health:       { label: "Health",       leaf: "#4C9A6B", shape: "round" },
};
export const DEFAULT_TREE = "health";

// A tree that grows with `progress` (0..1). At progress 1 it's fully grown.
export function Tree({ species = DEFAULT_TREE, progress = 1, withered = false, size = 200 }) {
  const p = Math.max(0, Math.min(1, progress));
  const t = TREES[species] || TREES[DEFAULT_TREE];
  const trunk = withered ? "#8A7B63" : "#7A5A3C";
  const leaf = withered ? "#A99C84" : t.leaf;
  const leafDark = withered ? "#8F8268" : leaf;
  const trunkH = 14 + p * 46;
  const trunkTopY = 112 - trunkH;
  const grown = p > 0.14;
  const fr = grown ? 8 + p * 30 : 0; // foliage radius

  return (
    <svg viewBox="0 0 120 120" width={size} height={size} style={{ display: "block" }}>
      <ellipse cx="60" cy="114" rx={20 + p * 14} ry="5" fill="rgba(38,36,31,0.08)" />
      {!grown && (
        <g transform={`translate(60 ${112 - p * 40})`}>
          <path d="M0 8 C0 8 0 -2 0 -6" stroke="#4C9A6B" strokeWidth="2.5" fill="none" />
          <ellipse cx="-5" cy="-4" rx="6" ry="3.5" fill="#4C9A6B" transform="rotate(-30 -5 -4)" />
          <ellipse cx="5" cy="-4" rx="6" ry="3.5" fill="#5BB07E" transform="rotate(30 5 -4)" />
        </g>
      )}
      {grown && (
        <>
          <rect x={60 - (2 + p * 2.5)} y={trunkTopY} width={(2 + p * 2.5) * 2} height={trunkH} rx="2" fill={trunk} />
          {t.shape === "pine" ? (
            <>
              <polygon points={`60,${trunkTopY - fr * 2.2} ${60 - fr},${trunkTopY + 4} ${60 + fr},${trunkTopY + 4}`} fill={leaf} />
              <polygon points={`60,${trunkTopY - fr * 3.0} ${60 - fr * 0.8},${trunkTopY - fr * 0.7} ${60 + fr * 0.8},${trunkTopY - fr * 0.7}`} fill={leafDark} />
            </>
          ) : t.shape === "tall" ? (
            <>
              <ellipse cx="60" cy={trunkTopY - fr * 0.3} rx={fr * 0.78} ry={fr * 1.55} fill={leaf} />
              <ellipse cx="60" cy={trunkTopY - fr * 0.9} rx={fr * 0.5} ry={fr * 1.0} fill={leafDark} opacity="0.9" />
            </>
          ) : (
            <>
              <circle cx="60" cy={trunkTopY} r={fr} fill={leaf} />
              <circle cx={60 - fr * 0.7} cy={trunkTopY + fr * 0.3} r={fr * 0.78} fill={leaf} />
              <circle cx={60 + fr * 0.7} cy={trunkTopY + fr * 0.3} r={fr * 0.78} fill={leafDark} />
              <circle cx="60" cy={trunkTopY - fr * 0.5} r={fr * 0.8} fill={leafDark} opacity="0.92" />
            </>
          )}
        </>
      )}
    </svg>
  );
}

export function MiniTree({ species }) {
  return <Tree species={species} progress={1} size={56} />;
}
