"use client";

import { useEffect, useRef } from "react";

import { HeroSvgContours, HeroSvgGeometry } from "@/components/visual/hero-svg-layers";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const LERP = 0.07;
const LIMITS = {
  atmosphere: { x: 2, y: 2 },
  contours: { x: 6, y: 6 },
  geometry: { x: 3, y: 3 },
} as const;

type HeroDepthLayersProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};

/** Multi-layer hero depth — mouse parallax on background only (RAF + lerp). */
export function HeroDepthLayers({ containerRef }: HeroDepthLayersProps) {
  const reduced = useReducedMotion();
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const contoursRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;

    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let running = true;

    const applyLayer = (
      el: HTMLDivElement | null,
      limit: { x: number; y: number },
      cx: number,
      cy: number,
    ) => {
      if (!el) return;
      el.style.transform = `translate3d(${cx * limit.x}px, ${cy * limit.y}px, 0)`;
    };

    const tick = () => {
      if (!running) return;

      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * LERP;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * LERP;

      const { x, y } = currentRef.current;
      applyLayer(atmosphereRef.current, LIMITS.atmosphere, x, y);
      applyLayer(contoursRef.current, LIMITS.contours, x, y);
      applyLayer(geometryRef.current, LIMITS.geometry, x, y);

      rafId = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetRef.current = {
        x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    const onLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    rafId = requestAnimationFrame(tick);
    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef, reduced]);

  return (
    <div className="ac-hero-depth" aria-hidden>
      <div ref={atmosphereRef} className="ac-hero-depth__layer ac-hero-depth__layer--atmosphere" />
      <div ref={contoursRef} className="ac-hero-depth__layer ac-hero-depth__layer--contours">
        <HeroSvgContours />
      </div>
      <div ref={geometryRef} className="ac-hero-depth__layer ac-hero-depth__layer--geometry">
        <HeroSvgGeometry />
      </div>
    </div>
  );
}

