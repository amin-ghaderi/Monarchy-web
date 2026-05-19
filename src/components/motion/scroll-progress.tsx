"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Top scroll progress line (lapis, 2px). CSS scroll-driven via `motion.css`.
 * Mount on routes in Sprint 3+; not attached in Sprint 2.
 */
export function ScrollProgress() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return <div className="ac-scroll-progress" aria-hidden />;
}
