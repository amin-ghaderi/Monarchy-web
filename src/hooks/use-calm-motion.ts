"use client";

import { useSyncExternalStore } from "react";

const CALM_MOTION_QUERY = "(max-width: 640px)";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(CALM_MOTION_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(CALM_MOTION_QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/** True on narrow viewports — shorter motion, smaller offset */
export function useCalmMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
