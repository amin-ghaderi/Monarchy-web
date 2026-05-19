/** Media query — single source of truth (matches globals.css) */
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)" as const;

export type MotionPreference = "full" | "reduced";

export function motionPreferenceFromReduced(reduced: boolean): MotionPreference {
  return reduced ? "reduced" : "full";
}

/** SSR / first paint default: respect system when unknown → allow motion until hydrated */
export const DEFAULT_MOTION_PREFERENCE: MotionPreference = "full";
