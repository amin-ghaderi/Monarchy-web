"use client";

import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type ReducedMotionSafeProps = {
  children: ReactNode;
  /** Rendered when reduced motion is on (instant, no animation) */
  fallback?: ReactNode;
};

/**
 * Passes `reduced` context via render prop pattern is avoided — use hook in children.
 * When `fallback` is set and reduced, shows fallback instead of children.
 */
export function ReducedMotionSafe({ children, fallback }: ReducedMotionSafeProps) {
  const reduced = useReducedMotion();

  if (reduced && fallback !== undefined) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export { useReducedMotion };
