"use client";

import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

import { useCalmMotion } from "@/hooks/use-calm-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  HISTORY_MOTION_DURATION_MS,
  HISTORY_REVEAL_OFFSET_PX,
  HISTORY_STAGGER_MS,
} from "@/lib/history/history-motion";
import { MOTION_EASE } from "@/lib/motion/constants";
import { cn } from "@/lib/utils";

type HistoryRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<ComponentProps<typeof motion.div>, "initial" | "animate" | "transition">;

/**
 * History scroll reveal — calmer than homepage (≤10px, ≤40ms stagger).
 */
export function HistoryReveal({ children, className, delay = 0, ...rest }: HistoryRevealProps) {
  const reduced = useReducedMotion();
  const calm = useCalmMotion();
  const offset = calm ? 5 : HISTORY_REVEAL_OFFSET_PX;
  const durationMs = calm ? 280 : HISTORY_MOTION_DURATION_MS;

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : durationMs / 1000,
        ease: MOTION_EASE.editorial,
        delay: reduced ? 0 : delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function historyStaggerDelay(index: number, reduced: boolean): number {
  if (reduced) return 0;
  return index * (HISTORY_STAGGER_MS / 1000);
}
