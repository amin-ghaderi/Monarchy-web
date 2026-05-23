"use client";

import type { HistoryEra } from "@/types/history";
import { EraContent } from "@/components/history/era-content";
import { HistoryEraAtmosphere } from "@/components/history/history-era-atmosphere";
import { getEraAtmosphereClass } from "@/lib/history/era-atmosphere";
import { typeEraTitle } from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

type TimelineMobileProps = {
  eras: HistoryEra[];
};

export function TimelineMobile({ eras }: TimelineMobileProps) {
  return (
    <div className="md:hidden" aria-label="خط زمانی — نمای موبایل">
      {eras.map((era, index) => (
        <details
          key={era.id}
          id={`${era.slug}-mobile`}
          open={index === 0}
          className={cn(
            "ac-history-mobile-era ac-era-plate group relative scroll-mt-24 overflow-hidden border-b border-mist",
            getEraAtmosphereClass(era.slug, index),
          )}
        >
          <HistoryEraAtmosphere slug={era.slug} index={index} />
          <summary
            className={cn(
              "relative z-[1] flex cursor-pointer list-none items-start justify-between gap-4 py-5",
              "text-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <div>
              <p className="text-[length:var(--font-size-label)] font-medium uppercase tracking-[0.1em] text-meta">
                {era.timeframe}
              </p>
              <h2 className={cn(typeEraTitle, "mt-2 text-[length:var(--font-size-h3)]")}>
                {era.title}
              </h2>
            </div>
            <span
              className="mt-1 shrink-0 text-[length:var(--font-size-label)] text-meta"
              aria-hidden
            >
              ▾
            </span>
          </summary>
          <div className="relative z-[1] px-0 pb-8">
            <EraContent era={era} eraIndex={index} calm />
          </div>
        </details>
      ))}
    </div>
  );
}
