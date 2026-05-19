import type { HistoryEvent } from "@/types/history";
import { EvidencePlaceholder } from "@/components/history/evidence-placeholder";
import { cn } from "@/lib/utils";

type HistoryEventCardProps = {
  event: HistoryEvent;
  className?: string;
};

/** Archival event record — year as scan anchor */
export function HistoryEventCard({ event, className }: HistoryEventCardProps) {
  return (
    <article className={cn("py-6 first:pt-0", className)}>
      <p className="font-latin text-[length:var(--font-size-meta)] font-semibold tabular-nums tracking-wide text-lapis-700">
        {event.year}
      </p>
      <h4 className="mt-2 text-base font-semibold leading-snug text-ink sm:text-[length:var(--font-size-body)]">
        {event.title}
      </h4>
      <p className="mt-2 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
        {event.description}
      </p>
      {event.evidence?.length ? (
        <EvidencePlaceholder items={event.evidence} className="mt-4" />
      ) : null}
    </article>
  );
}
