"use client";

import type { HistoryEra } from "@/types/history";
import { EraContent } from "@/components/history/era-content";
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
          className="group scroll-mt-24 border-b border-mist"
        >
          <summary
            className={cn(
              "flex cursor-pointer list-none items-start justify-between gap-4 py-5",
              "text-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <div>
              <p className="text-[length:var(--font-size-label)] text-meta">{era.timeframe}</p>
              <h2 className="mt-1 text-[length:var(--font-size-h3)] font-semibold text-ink">
                {era.title}
              </h2>
            </div>
            <span className="mt-1 shrink-0 text-[length:var(--font-size-label)] text-meta" aria-hidden>
              ▾
            </span>
          </summary>
          <div className="pb-8">
            <EraContent era={era} />
          </div>
        </details>
      ))}
    </div>
  );
}
