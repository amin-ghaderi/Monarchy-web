/**
 * Archival Continuum motion tiers — aligned with tokens.css
 * @see docs/motion-budgets.md
 */

export const MOTION_DURATION = {
  l0: 150,
  l1: 400,
  l2: 600,
  l3: 900,
} as const;

export const MOTION_EASE = {
  editorial: [0.16, 1, 0.3, 1] as const,
  inOut: [0.45, 0, 0.55, 1] as const,
};

/** Max stagger delay between siblings (ms) */
export const STAGGER_INTERVAL_MS = 40;

/** Max items in editorial stagger lists */
export const STAGGER_MAX_ITEMS = 8;

/** Subtle translate for reveals (logical: positive = toward inline-end in LTR) */
export const REVEAL_OFFSET_PX = 12;
