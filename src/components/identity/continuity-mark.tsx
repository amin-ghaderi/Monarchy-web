import { cn } from "@/lib/utils";

type ContinuityMarkProps = {
  className?: string;
  /** Render width in px; height scales from viewBox */
  size?: number;
};

/**
 * Continuity mark — constitutional geometry (spine + rule). Not heraldic.
 */
export function ContinuityMark({ className, size = 11 }: ContinuityMarkProps) {
  const height = Math.round(size * (14 / 10));

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 text-lapis-600", className)}
      aria-hidden
    >
      <path
        d="M5 1.25v11.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M2.25 4.25h5.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}
