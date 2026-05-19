"use client";

import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  fadeRevealAnimate,
  fadeRevealInitial,
  fadeRevealTransition,
} from "@/lib/motion/motion-props";
import { cn } from "@/lib/utils";

type FadeRevealElement = "motion.div" | "motion.section" | "motion.article";

type FadeRevealProps = {
  children: ReactNode;
  className?: string;
  as?: FadeRevealElement;
} & Omit<ComponentProps<typeof motion.div>, "initial" | "animate" | "transition">;

const motionTags = {
  "motion.div": motion.div,
  "motion.section": motion.section,
  "motion.article": motion.article,
} as const;

/**
 * Subtle opacity + logical-axis reveal. RTL-safe (uses `x`, not physical left/right).
 * Not mounted on routes in Sprint 2 — primitive only.
 */
export function FadeReveal({
  children,
  className,
  as = "motion.div",
  ...rest
}: FadeRevealProps) {
  const reduced = useReducedMotion();
  const Component = motionTags[as];

  return (
    <Component
      className={cn(className)}
      initial={fadeRevealInitial(reduced)}
      animate={fadeRevealAnimate()}
      transition={fadeRevealTransition(reduced)}
      {...rest}
    >
      {children}
    </Component>
  );
}
