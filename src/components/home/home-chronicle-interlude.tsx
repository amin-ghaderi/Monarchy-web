"use client";

import { HomeReveal } from "@/components/home/home-reveal";
import { cn } from "@/lib/utils";

const interludeLines = [
  "ملتی که حافظه تاریخی خود را از دست بدهد،",
  "توان تصمیم‌گیری برای آینده را نیز از دست می‌دهد.",
] as const;

/**
 * Signature memory pause — institutional weight between values and proof.
 */
export function HomeChronicleInterlude() {
  return (
    <section
      aria-label="تداوم تاریخی"
      className={cn(
        "ac-chronicle-section ac-chronicle-signature relative flex max-h-[50vh] items-center",
        "border-y border-surface-chronicle-elevated px-5 py-16 sm:px-6 sm:py-20",
      )}
    >
      <div className="ac-chronicle-backdrop" aria-hidden>
        <div className="ac-chronicle-depth" />
        <div className="ac-chronicle-continuum-whisper" />
        <div className="ac-chronicle-grain" />
      </div>
      <div className="relative z-[1] mx-auto w-full max-w-3xl text-center">
        <HomeReveal>
          <blockquote
            cite="about:legacy"
            className="ac-chronicle-quote ac-chronicle-quote-signature font-legal text-[length:var(--font-size-lead)] leading-[1.95] text-on-chronicle sm:text-[length:var(--font-size-h3)] sm:leading-[1.9]"
          >
            {interludeLines.map((line, index) => (
              <span
                key={line}
                className={cn(
                  "block",
                  index === 0
                    ? undefined
                    : "ac-chronicle-quote-line-muted mt-4 text-on-chronicle-muted",
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
