import type { HistoryEra } from "@/types/history";
import { EvidencePlaceholder } from "@/components/history/evidence-placeholder";
import { HistoryEventCard } from "@/components/history/history-event-card";
import { editorialMutedCta } from "@/lib/editorial/styles";
import { cn } from "@/lib/utils";

type EraContentProps = {
  era: HistoryEra;
  className?: string;
};

export function EraContent({ era, className }: EraContentProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <p className="text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
        {era.intro}
      </p>
      <p className="text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
        {era.summary}
      </p>

      <div>
        <h3 className="text-[length:var(--font-size-label)] font-semibold text-meta">
          رویدادهای کلیدی
        </h3>
        <div className="mt-3 divide-y divide-mist/80 rounded-sm border border-mist bg-surface-paper px-4 sm:px-5">
          {era.events.map((event) => (
            <HistoryEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {era.evidence?.length ? <EvidencePlaceholder items={era.evidence} /> : null}

      <button type="button" disabled className={editorialMutedCta}>
        کاوش عمیق‌تر — {era.title} (به‌زودی)
      </button>
    </div>
  );
}
