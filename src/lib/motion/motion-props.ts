import {
  MOTION_DURATION,
  MOTION_EASE,
  REVEAL_OFFSET_PX,
} from "@/lib/motion/constants";

const CALM_REVEAL_OFFSET_PX = 6;

/** Motion One–compatible transition when motion is allowed */
export function fadeRevealTransition(reduced: boolean, calm = false) {
  if (reduced) return { duration: 0 };
  const ms = calm ? MOTION_DURATION.l0 : MOTION_DURATION.l1;
  return {
    duration: ms / 1000,
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

export function fadeRevealInitial(reduced: boolean, calm = false) {
  if (reduced) return { opacity: 1, x: 0 };
  const offset = calm ? CALM_REVEAL_OFFSET_PX : REVEAL_OFFSET_PX;
  return { opacity: 0, x: offset };
}

export function fadeRevealAnimate() {
  return { opacity: 1, x: 0 };
}

export function staggerDelay(index: number, reduced: boolean): number {
  if (reduced) return 0;
  return index * (40 / 1000);
}
