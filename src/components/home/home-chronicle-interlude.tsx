"use client";

import { SurfaceTransition } from "@/components/motion/surface-transition";
import { HomeReveal } from "@/components/home/home-reveal";
import { cn } from "@/lib/utils";

const interludeLines = [
  "ملتی که حافظه تاریخی خود را از دست بدهد،",
  "توان تصمیم‌گیری برای آینده را نیز از دست می‌دهد.",
] as const;

/**
 * Chapter 3 — single obsidian breath between principles and featured publication.
 */
export function HomeChronicleInterlude() {
  return (
    <SurfaceTransition surfaceKey="chronicle-interlude">
      <section
        aria-label="تداوم تاریخی"
        className={cn(
          "relative flex min-h-[35vh] max-h-[50vh] items-center",
          "border-y border-surface-chronicle-elevated bg-surface-chronicle px-5 py-14 sm:px-6 sm:py-16",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[var(--grain-opacity)]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="relative mx-auto w-full max-w-3xl text-center">
          <HomeReveal>
            <blockquote className="font-legal text-[length:var(--font-size-lead)] leading-[1.85] text-on-chronicle sm:text-[length:var(--font-size-h3)]">
              {interludeLines.map((line, index) => (
                <span
                  key={line}
                  className={index === 0 ? "block" : "mt-2 block text-on-chronicle-muted"}
                >
                  {line}
                </span>
              ))}
            </blockquote>
          </HomeReveal>
        </div>
      </section>
    </SurfaceTransition>
  );
}
