"use client";

import { useEffect } from "react";

import { useMotionPreference } from "@/hooks/use-reduced-motion";

/**
 * Syncs `data-motion` on <html> for CSS scroll progress and future tokens.
 * No visible change until motion primitives or progress bar are mounted.
 */
export function MotionPreferenceSync() {
  const preference = useMotionPreference();

  useEffect(() => {
    document.documentElement.dataset.motion = preference;
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [preference]);

  return null;
}
