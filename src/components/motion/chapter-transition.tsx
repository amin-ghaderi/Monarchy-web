"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { chapterTransition } from "@/lib/motion/motion-props";
import { cn } from "@/lib/utils";

type ChapterTransitionProps = {
  children: ReactNode;
  /** Stable key when chapter content swaps */
  chapterKey: string;
  className?: string;
};

/**
 * Crossfade between homepage/history chapters (future use).
 * Duration maps to `--motion-chapter` tier.
 */
export function ChapterTransition({ children, chapterKey, className }: ChapterTransitionProps) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={chapterKey}
        className={cn(className)}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduced ? undefined : { opacity: 0 }}
        transition={chapterTransition(reduced)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
