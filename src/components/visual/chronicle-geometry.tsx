/** Full-bleed geometry for obsidian chronicle sections — clearly visible */
export function ChronicleGeometry() {
  return (
    <div className="ac-chronicle-cinematic__geometry" aria-hidden>
      <svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <g fill="none" strokeWidth="1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={40 + i * 56}
              x2="1200"
              y2={40 + i * 56}
              opacity={0.15 + i * 0.04}
            />
          ))}
          <path d="M0 200 Q300 120 600 200 T1200 200" opacity="0.25" />
          <path d="M100 0 V400 M1100 0 V400" opacity="0.2" />
          {[150, 350, 550, 750, 950].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="400" opacity="0.12" />
          ))}
        </g>
      </svg>
    </div>
  );
}
