"use client";

import { useSyncExternalStore } from "react";

import {
  DEFAULT_MOTION_PREFERENCE,
  motionPreferenceFromReduced,
  REDUCED_MOTION_QUERY,
  type MotionPreference,
} from "@/lib/motion/reduced-motion";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot(): boolean {
  return DEFAULT_MOTION_PREFERENCE === "reduced";
}

/** True when user prefers reduced motion (accessibility). */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** `"full"` | `"reduced"` for data attributes and CSS hooks */
export function useMotionPreference(): MotionPreference {
  return motionPreferenceFromReduced(useReducedMotion());
}
