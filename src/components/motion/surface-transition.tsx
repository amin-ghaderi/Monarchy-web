"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { surfaceTransition } from "@/lib/motion/motion-props";
import { cn } from "@/lib/utils";

type SurfaceTransitionProps = {
  children: ReactNode;
  className?: string;
  /** e.g. orientation → chronicle surface swap */
  surfaceKey?: string;
};

/**
 * Subtle background/surface crossfade — for obsidian interludes (future).
 */
export function SurfaceTransition({ children, className, surfaceKey }: SurfaceTransitionProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      key={surfaceKey}
      className={cn(className)}
      initial={reduced ? false : { opacity: 0.98 }}
      animate={{ opacity: 1 }}
      transition={surfaceTransition(reduced)}
    >
      {children}
    </motion.div>
  );
}
