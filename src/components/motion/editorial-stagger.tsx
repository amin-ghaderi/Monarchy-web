"use client";

import { motion } from "motion/react";
import { Children, isValidElement, type ReactNode } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { STAGGER_MAX_ITEMS } from "@/lib/motion/constants";
import {
  fadeRevealAnimate,
  fadeRevealInitial,
  fadeRevealTransition,
  staggerDelay,
} from "@/lib/motion/motion-props";
import { cn } from "@/lib/utils";

type EditorialStaggerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Editorial list reveal — capped stagger, no bounce.
 * RTL-safe; children order follows DOM (logical).
 */
export function EditorialStagger({ children, className }: EditorialStaggerProps) {
  const reduced = useReducedMotion();
  const items = Children.toArray(children).slice(0, STAGGER_MAX_ITEMS);

  return (
    <motion.ul className={cn("list-none p-0 m-0", className)} role="list">
      {items.map((child, index) => {
        if (!isValidElement(child)) return null;
        return (
          <motion.li
            key={child.key ?? index}
            className="list-none"
            initial={fadeRevealInitial(reduced)}
            animate={fadeRevealAnimate()}
            transition={{
              ...fadeRevealTransition(reduced),
              delay: staggerDelay(index, reduced),
            }}
          >
            {child}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
