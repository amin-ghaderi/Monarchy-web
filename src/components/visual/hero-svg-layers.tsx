/** Architectural contour lines — parallax layer 2 */
export function HeroSvgContours() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden>
      <path d="M40 520 Q400 440 760 520" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.55" />
      <path d="M80 420 Q400 360 720 420" stroke="#6b6560" strokeWidth="1" opacity="0.45" />
      <path d="M120 320 Q400 280 680 320" stroke="#1e3a5f" strokeWidth="0.8" opacity="0.35" />
      <path
        d="M280 80 V480 a120 120 0 0 0 240 0 V80"
        stroke="#1e3a5f"
        strokeWidth="2"
        opacity="0.5"
      />
      <path d="M280 200 H520 M400 80 V200" stroke="#8a847c" strokeWidth="0.9" opacity="0.4" />
      {[180, 240, 300, 360, 420, 480].map((y) => (
        <line
          key={y}
          x1="60"
          y1={y}
          x2="740"
          y2={y}
          stroke="#8a847c"
          strokeWidth="0.5"
          opacity={0.2 + (y % 120) / 400}
        />
      ))}
      <path d="M48 48 H120 V120 M752 48 H680 V120" stroke="#1e3a5f" strokeWidth="1.2" opacity="0.4" />
      <path d="M48 552 H120 V480 M752 552 H680 V480" stroke="#1e3a5f" strokeWidth="1.2" opacity="0.35" />
    </svg>
  );
}

/** Institutional geometry — parallax layer 3 */
export function HeroSvgGeometry() {
  return (
    <svg viewBox="0 0 480 560" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden>
      <defs>
        <linearGradient id="hero-depth-lapis" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {[72, 152, 232, 312, 392].map((x) => (
        <g key={x} stroke="#1e3a5f" strokeWidth="1.4" opacity="0.55">
          <line x1={x} y1="480" x2={x} y2="180" />
          <path d={`M${x - 18} 180 h36`} strokeWidth="1.6" />
          <ellipse cx={x} cy="175" rx="22" ry="6" stroke="#9a7b2f" strokeWidth="0.9" opacity="0.5" />
        </g>
      ))}
      <path d="M48 178 H432" stroke="#1e3a5f" strokeWidth="2.2" opacity="0.6" />
      <path d="M56 168 H424" stroke="#9a7b2f" strokeWidth="1" opacity="0.45" />
      <g stroke="#1e3a5f" strokeWidth="0.8" opacity="0.4">
        <rect x="24" y="48" width="432" height="100" rx="2" />
        <line x1="24" y1="82" x2="456" y2="82" />
        <line x1="120" y1="48" x2="120" y2="148" />
      </g>
      <path
        d="M160 178 V120 a80 80 0 0 1 160 0 v58"
        stroke="url(#hero-depth-lapis)"
        strokeWidth="2.2"
      />
    </svg>
  );
}
