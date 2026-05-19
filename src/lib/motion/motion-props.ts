import { MOTION_DURATION, MOTION_EASE, REVEAL_OFFSET_PX } from "@/lib/motion/constants";

/** Motion One–compatible transition when motion is allowed */
export function fadeRevealTransition(reduced: boolean) {
  if (reduced) return { duration: 0 };
  return {
    duration: MOTION_DURATION.l1 / 1000,
    ease: MOTION_EASE.editorial,
  };
}

export function chapterTransition(reduced: boolean) {
  if (reduced) return { duration: 0 };
  return {
    duration: MOTION_DURATION.l2 / 1000,
    ease: MOTION_EASE.editorial,
  };
}

export function surfaceTransition(reduced: boolean) {
  if (reduced) return { duration: 0 };
  return {
    duration: MOTION_DURATION.l2 / 1000,
    ease: MOTION_EASE.editorial,
  };
}

export function fadeRevealInitial(reduced: boolean) {
  if (reduced) return { opacity: 1, x: 0 };
  return { opacity: 0, x: REVEAL_OFFSET_PX };
}

export function fadeRevealAnimate() {
  return { opacity: 1, x: 0 };
}

export function staggerDelay(index: number, reduced: boolean): number {
  if (reduced) return 0;
  return index * (40 / 1000);
}
