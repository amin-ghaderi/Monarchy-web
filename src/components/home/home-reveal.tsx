"use client";

import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

import { useCalmMotion } from "@/hooks/use-calm-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  fadeRevealAnimate,
  fadeRevealInitial,
  fadeRevealTransition,
} from "@/lib/motion/motion-props";
import { cn } from "@/lib/utils";

type HomeRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds */
  delay?: number;
} & Omit<ComponentProps<typeof motion.div>, "initial" | "animate" | "transition">;

/**
 * Homepage scroll reveal — viewport once, calm on mobile, RTL-safe.
 */
export function HomeReveal({ children, className, delay = 0, ...rest }: HomeRevealProps) {
  const reduced = useReducedMotion();
  const calm = useCalmMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={fadeRevealInitial(reduced, calm)}
      whileInView={fadeRevealAnimate()}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        ...fadeRevealTransition(reduced, calm),
        delay: reduced ? 0 : delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
