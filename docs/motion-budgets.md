# Motion performance budgets (Phase 15B)

Route-scoped lazy loading keeps reader routes free of motion JS.

| Route group | Gzip budget (motion chunk) | Allowed libs |
|-------------|---------------------------|--------------|
| Homepage `/` | ≤ 80 KB | Motion One, GSAP (lazy), CSS scroll |
| History `/history` | ≤ 120 KB | Motion One, GSAP + ScrollTrigger (lazy) |
| Readers (archive, media, charter, civic) | ≈ 0 KB | CSS only; no Motion One in route bundles |

## Implementation rules

1. Import primitives from `@/components/motion` only in cinematic routes.
2. Never static-import `gsap` — use `loadGsap()` / `loadScrollTrigger()` from `@/lib/motion`.
3. Gate all motion with `useReducedMotion()` or `data-motion="reduced"` CSS.
4. Review bundle with `@next/bundle-analyzer` before cinematic sprints ship.

## History continuum (Sprint 5)

- Route: `/history` only — `HistoryReveal`, era washes, CSS spine
- No GSAP, no scroll progress on history
- Calmer motion than homepage (≤10px translate, 350ms tier)

Constants: `MOTION_BUDGET_BYTES` in `src/lib/motion/budgets.ts`.
