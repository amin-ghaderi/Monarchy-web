"use client";

import { Fragment } from "react";

import type { HistoryEra } from "@/types/history";
import { EraContent } from "@/components/history/era-content";
import { HistoryEraAtmosphere } from "@/components/history/history-era-atmosphere";
import { HistoryEraThreshold } from "@/components/history/history-era-threshold";
import { HistoryReveal } from "@/components/history/history-reveal";
import { getEraAtmosphereClass } from "@/lib/history/era-atmosphere";
import { typeEraTitle } from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

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
            <li
              id={era.slug}
              className={cn(
                "ac-history-era ac-era-plate",
                getEraAtmosphereClass(era.slug, index),
              )}
            >
              <HistoryEraAtmosphere slug={era.slug} index={index} />
              <span className="ac-history-marker" aria-hidden />

              <HistoryReveal>
                <header className="relative mb-8 max-w-3xl ps-1">
                  <p className="text-[length:var(--font-size-label)] font-medium uppercase tracking-[0.12em] text-meta">
                    {era.timeframe}
                  </p>
                  <h2 className={cn(typeEraTitle, "mt-3")}>{era.title}</h2>
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
