/**
 * Performance budgets for route-scoped motion (gzipped targets, post-lazy-load).
 * Enforced in review until CI bundle gates exist.
 */

export const MOTION_BUDGET_BYTES = {
  /** Homepage cinematic chunk (GSAP + chapter helpers) */
  homepage: 80 * 1024,
  /** History immersive chunk */
  history: 120 * 1024,
  /** Statement, media, charter, civic routes */
  readers: 0,
} as const;

export const MOTION_BUDGET_ROUTES = {
  homepage: ["/"],
  history: ["/history"],
  readers: ["/archive", "/media", "/charter", "/participate", "/contact", "/party"],
} as const;
