import { cn } from "@/lib/utils";

type HeroInstitutionalCompositionProps = {
  className?: string;
};

/**
 * Flagship hero geometry — Persepolis / Pahlavi modernism inspired, clearly visible.
 */
export function HeroInstitutionalComposition({
  className,
}: HeroInstitutionalCompositionProps) {
  return (
    <div className={cn("ac-hero-composition", className)} aria-hidden>
      <svg
        viewBox="0 0 480 560"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
      >
        <defs>
          <linearGradient id="hero-lapis-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Stone platform */}
        <rect
          x="40"
          y="480"
          width="400"
          height="12"
          fill="#e5dfd4"
          fillOpacity="0.9"
          stroke="#1e3a5f"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Column rhythm — Persepolis abstraction */}
        {[72, 152, 232, 312, 392].map((x) => (
          <g key={x} stroke="#1e3a5f" strokeWidth="1.2" fill="none" opacity="0.5">
            <line x1={x} y1="480" x2={x} y2="180" />
            <path d={`M${x - 18} 180 h36`} strokeWidth="1.4" />
            <path d={`M${x - 12} 200 v40 M${x + 12} 200 v40`} strokeWidth="0.8" opacity="0.7" />
            <ellipse cx={x} cy="175" rx="22" ry="6" stroke="#9a7b2f" strokeWidth="0.8" opacity="0.45" />
          </g>
        ))}

        {/* Entablature line */}
        <path
          d="M48 178 H432"
          stroke="#1e3a5f"
          strokeWidth="2"
          opacity="0.55"
        />
        <path
          d="M56 168 H424"
          stroke="#9a7b2f"
          strokeWidth="0.9"
          opacity="0.4"
        />

        {/* Central arch — civic geometry */}
        <path
          d="M160 178 V120 a80 80 0 0 1 160 0 v58"
          stroke="url(#hero-lapis-fade)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M200 118 h80 M240 118 v-36"
          stroke="#6b6560"
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Relief horizontals */}
        {[260, 300, 340, 380, 420].map((y) => (
          <line
            key={y}
            x1="64"
            y1={y}
            x2="416"
            y2={y}
            stroke="#8a847c"
            strokeWidth="0.6"
            opacity={0.25 + (y % 80) / 200}
          />
        ))}

        {/* Manuscript margin grid */}
        <g stroke="#1e3a5f" strokeWidth="0.7" opacity="0.35">
          <rect x="24" y="48" width="432" height="100" rx="2" />
          <line x1="24" y1="82" x2="456" y2="82" />
          <line x1="24" y1="114" x2="456" y2="114" />
          <line x1="120" y1="48" x2="120" y2="148" />
          <line x1="360" y1="48" x2="360" y2="148" />
        </g>

        {/* Diagonal constitutional lines */}
        <path
          d="M32 440 L120 360 M448 440 L360 360"
          stroke="#1e3a5f"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M80 520 Q240 460 400 520"
          stroke="#2a4f78"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Corner brackets — institutional frame */}
        <g stroke="#1e3a5f" strokeWidth="1.5" opacity="0.45" fill="none">
          <path d="M8 8 H56 V32 M8 8 V56 H32" />
          <path d="M472 8 H424 V32 M472 8 V56 H448" />
          <path d="M8 552 H56 V528 M8 552 V504 H32" />
        </g>
      </svg>
    </div>
  );
}
