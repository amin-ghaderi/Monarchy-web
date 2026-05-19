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
          "ac-chronicle-section relative flex min-h-[35vh] max-h-[50vh] items-center",
          "border-y border-surface-chronicle-elevated px-5 py-14 sm:px-6 sm:py-16",
        )}
      >
        <div className="ac-chronicle-backdrop" aria-hidden>
          <div className="ac-chronicle-depth" />
          <div className="ac-chronicle-grain" />
        </div>
        <div className="relative z-[1] mx-auto w-full max-w-3xl text-center">
          <HomeReveal>
            <blockquote className="ac-chronicle-quote font-legal text-[length:var(--font-size-lead)] leading-[1.9] text-on-chronicle sm:text-[length:var(--font-size-h3)] sm:leading-[1.85]">
              {interludeLines.map((line, index) => (
                <span
                  key={line}
                  className={cn(
                    "block",
                    index === 0
                      ? undefined
                      : "ac-chronicle-quote-line-muted mt-3 text-on-chronicle-muted",
                  )}
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
