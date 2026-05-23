"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  editorialFocusRing,
  editorialPrimaryCta,
  editorialSecondaryCta,
  editorialTextLink,
} from "@/lib/editorial/styles";
import { cn } from "@/lib/utils";

type MagneticVariant = "primary" | "secondary" | "text" | "card";

type HomeMagneticCtaProps = {
  href: string;
  variant?: MagneticVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<MagneticVariant, string> = {
  primary: cn(editorialPrimaryCta, "ac-magnetic-cta ac-magnetic-cta--primary"),
  secondary: cn(editorialSecondaryCta, "ac-magnetic-cta ac-magnetic-cta--secondary no-underline"),
  text: cn(editorialTextLink, "ac-magnetic-cta ac-magnetic-cta--text"),
  card: cn("ac-magnetic-cta ac-magnetic-cta--card"),
};

const PROXIMITY = 100;
const MAX_PULL = 2;

/** Homepage-only premium CTA — hover lift + subtle mouse proximity */
export function HomeMagneticCta({
  href,
  variant = "primary",
  className,
  children,
}: HomeMagneticCtaProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const offsetRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (reduced) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const link = wrap.querySelector("a");
    if (!link) return;

    const lerp = 0.12;

    const tick = () => {
      offsetRef.current.x += (targetRef.current.x - offsetRef.current.x) * lerp;
      offsetRef.current.y += (targetRef.current.y - offsetRef.current.y) * lerp;

      const { x, y } = offsetRef.current;
      if (Math.abs(x) > 0.01 || Math.abs(y) > 0.01) {
        wrap.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      } else {
        wrap.style.transform = "";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < PROXIMITY && dist > 0) {
        const pull = (1 - dist / PROXIMITY) * MAX_PULL;
        targetRef.current = {
          x: (dx / dist) * pull,
          y: (dy / dist) * pull,
        };
      } else {
        targetRef.current = { x: 0, y: 0 };
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      wrap.style.transform = "";
    };
  }, [reduced]);

  return (
    <span ref={wrapRef} className={cn("ac-magnetic-cta-wrap", variant === "card" && "block w-full")}>
      <Link href={href} className={cn(variantStyles[variant], editorialFocusRing, className)}>
        {children}
      </Link>
    </span>
  );
}
