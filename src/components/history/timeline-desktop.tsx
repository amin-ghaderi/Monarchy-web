"use client";

import { Fragment } from "react";

import type { HistoryEra } from "@/types/history";
import { EraContent } from "@/components/history/era-content";
import { HistoryEraAtmosphere } from "@/components/history/history-era-atmosphere";
import { HistoryEraThreshold } from "@/components/history/history-era-threshold";
import { HistoryReveal } from "@/components/history/history-reveal";

type TimelineDesktopProps = {
  eras: HistoryEra[];
};

export function TimelineDesktop({ eras }: TimelineDesktopProps) {
  return (
    <div className="hidden md:block" aria-label="خط زمانی تاریخ ایران">
      <ol className="ac-history-spine">
        {eras.map((era, index) => (
          <Fragment key={era.id}>
            {index > 0 ? (
              <HistoryEraThreshold
                fromSlug={eras[index - 1]!.slug}
                toSlug={era.slug}
              />
            ) : null}
            <li id={era.slug} className="ac-history-era">
              <HistoryEraAtmosphere slug={era.slug} index={index} />
              <span className="ac-history-marker" aria-hidden />

              <HistoryReveal>
                <header className="relative mb-8 max-w-3xl">
                  <p className="text-[length:var(--font-size-label)] font-medium tracking-wide text-meta">
                    {era.timeframe}
                  </p>
                  <h2 className="mt-2 text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink">
                    {era.title}
                  </h2>
                </header>
              </HistoryReveal>

              <EraContent era={era} eraIndex={index} className="relative max-w-3xl" />
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
