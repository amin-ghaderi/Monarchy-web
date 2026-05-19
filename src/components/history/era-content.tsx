"use client";

import type { HistoryEra } from "@/types/history";
import { EvidencePlaceholder } from "@/components/history/evidence-placeholder";
import { HistoryEventCard } from "@/components/history/history-event-card";
import { HistoryReveal, historyStaggerDelay } from "@/components/history/history-reveal";
import { editorialMutedCta } from "@/lib/editorial/styles";
import { HISTORY_STAGGER_MAX } from "@/lib/history/history-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type EraContentProps = {
  era: HistoryEra;
  eraIndex: number;
  className?: string;
  /** Mobile: fewer reveals */
  calm?: boolean;
};

export function EraContent({ era, className, calm = false }: EraContentProps) {
  const reduced = useReducedMotion();
  const events = era.events.slice(0, HISTORY_STAGGER_MAX);

  return (
    <div className={cn("space-y-8", className)}>
      {!calm ? (
        <>
          <HistoryReveal>
            <p className="text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
              {era.intro}
            </p>
          </HistoryReveal>
          <HistoryReveal delay={historyStaggerDelay(1, reduced)}>
            <p className="text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
              {era.summary}
            </p>
          </HistoryReveal>
        </>
      ) : (
        <>
          <p className="text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
            {era.intro}
          </p>
          <p className="text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
            {era.summary}
          </p>
        </>
      )}

      <div>
        <h3 className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-wide text-meta">
          رویدادهای کلیدی
        </h3>
        <div className="mt-4 divide-y divide-mist border-t border-mist">
          {events.map((event, eventIndex) =>
            calm ? (
              <HistoryEventCard key={event.id} event={event} />
            ) : (
              <HistoryReveal
                key={event.id}
                delay={historyStaggerDelay(eventIndex + 2, reduced)}
              >
                <HistoryEventCard event={event} />
              </HistoryReveal>
            ),
          )}
          {era.events.length > HISTORY_STAGGER_MAX
            ? era.events.slice(HISTORY_STAGGER_MAX).map((event) => (
                <HistoryEventCard key={event.id} event={event} />
              ))
            : null}
        </div>
      </div>

      {era.evidence?.length ? <EvidencePlaceholder items={era.evidence} /> : null}

      <button type="button" disabled className={editorialMutedCta}>
        کاوش عمیق‌تر — {era.title} (به‌زودی)
      </button>
    </div>
  );
}
