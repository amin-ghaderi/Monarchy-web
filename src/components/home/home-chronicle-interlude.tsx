"use client";

import { ChronicleGeometry } from "@/components/visual/chronicle-geometry";
import { HomeReveal } from "@/components/home/home-reveal";
import { cn } from "@/lib/utils";

const interludeLines = [
  "ملتی که حافظه تاریخی خود را از دست بدهد،",
  "توان تصمیم‌گیری برای آینده را نیز از دست می‌دهد.",
] as const;

export function HomeChronicleInterlude() {
  return (
    <section
      aria-label="تداوم تاریخی"
      className="ac-chronicle-cinematic ac-chapter-obsidian relative"
    >
      <ChronicleGeometry />
      <div className="ac-chronicle-backdrop" aria-hidden>
        <div className="ac-chronicle-depth" />
        <div className="ac-chronicle-grain" />
      </div>
      <div className="relative z-[1] mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-28">
        <HomeReveal>
          <p className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-[0.2em] text-on-chronicle-muted">
            تداوم تاریخی
          </p>
          <blockquote
            cite="about:legacy"
            className="ac-chronicle-quote mt-8 font-legal text-[length:var(--font-size-h2)] leading-[1.75] text-on-chronicle sm:text-[length:var(--font-size-h1)] sm:leading-[1.5]"
          >
            {interludeLines.map((line, index) => (
              <span
                key={line}
                className={cn(
                  "block",
                  index === 1 && "mt-6 text-on-chronicle-muted",
                )}
              >
                {line}
              </span>
            ))}
          </blockquote>
        </HomeReveal>
      </div>
    </section>
  );
}
