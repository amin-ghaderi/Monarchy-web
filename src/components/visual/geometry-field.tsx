import { cn } from "@/lib/utils";

type GeometryVariant = "hero" | "page" | "rail" | "lattice" | "minimal";

type GeometryFieldProps = {
  variant?: GeometryVariant;
  className?: string;
};

/** Abstract Persian-geometry line system — structural, never wallpaper */
export function GeometryField({ variant = "page", className }: GeometryFieldProps) {
  const modeClass =
    variant === "hero"
      ? "ac-geometry-field--hero"
      : variant === "rail"
        ? "ac-geometry-field--rail"
        : variant === "minimal"
          ? "ac-geometry-field--minimal"
          : "ac-geometry-field--page";

  return (
    <div
      className={cn("ac-geometry-field", modeClass, className)}
      aria-hidden
    >
      {variant === "rail" ? <GeometryRailSvg /> : null}
      {variant === "minimal" ? <GeometryMinimalSvg /> : null}
      {variant === "hero" || variant === "page" || variant === "lattice" ? (
        <>
          <GeometryLatticeSvg className="ac-geometry-lattice" />
          <GeometryArchSvg className="ac-geometry-arch" />
        </>
      ) : null}
    </div>
  );
}

function GeometryLatticeSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M160 12v96a48 48 0 0 1-96 0" strokeWidth="0.55" />
      <path d="M160 12H40M160 108H72" strokeWidth="0.35" opacity="0.6" />
      <path d="M24 180h136M24 210h88" strokeWidth="0.3" opacity="0.45" />
      <circle cx="160" cy="12" r="2" strokeWidth="0.4" />
    </svg>
  );
}

function GeometryArchSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 160c48-56 112-72 176-64s88 28 96 64"
        strokeWidth="0.5"
        stroke="var(--color-stone-500)"
      />
      <path d="M40 120c32 24 72 20 112 32s80 8 128-24" strokeWidth="0.4" />
      <path d="M56 88L224 88M140 24v64" strokeWidth="0.35" opacity="0.5" />
    </svg>
  );
}

function GeometryRailSvg() {
  return (
    <svg viewBox="0 0 48 320" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <line x1="24" y1="8" x2="24" y2="312" strokeWidth="0.45" />
      <path d="M24 48h16M24 120h12M24 200h18" strokeWidth="0.35" opacity="0.55" />
      <path d="M8 80l32 0M12 160l28 0M6 240l36 0" strokeWidth="0.3" opacity="0.4" />
    </svg>
  );
}

function GeometryMinimalSvg() {
  return (
    <svg
      className="ac-geometry-lattice"
      viewBox="0 0 320 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M0 60h120M200 60h120" strokeWidth="0.35" opacity="0.5" />
      <path d="M160 8v104" strokeWidth="0.4" />
    </svg>
  );
}
