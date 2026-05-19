import type { HistoryEvent } from "@/types/history";
import { EvidencePlaceholder } from "@/components/history/evidence-placeholder";
import { cn } from "@/lib/utils";

type HistoryEventCardProps = {
  event: HistoryEvent;
  className?: string;
};

export function HistoryEventCard({ event, className }: HistoryEventCardProps) {
  return (
    <article
      className={cn(
        "border-b border-mist/80 py-5 last:border-b-0",
        className,
      )}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-latin text-[length:var(--font-size-label)] font-semibold tabular-nums text-lapis-700">
          {event.year}
        </span>
        <h4 className="text-base font-semibold leading-snug text-ink">{event.title}</h4>
      </div>
      <p className="mt-2 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
        {event.description}
      </p>
      {event.evidence?.length ? (
        <EvidencePlaceholder items={event.evidence} className="mt-3" />
      ) : null}
    </article>
  );
}
