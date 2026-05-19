import { formatPublicationDates } from "@/lib/dates";
import { cn } from "@/lib/utils";

type MetadataRowProps = {
  typeLabel: string;
  publishedAt: string;
  className?: string;
};

export function MetadataRow({ typeLabel, publishedAt, className }: MetadataRowProps) {
  const dates = formatPublicationDates(publishedAt);

  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2 text-sm", className)}>
      <span className="rounded-sm border border-gold-500/40 bg-gold-100 px-2 py-0.5 text-xs font-medium text-gold-600">
        {typeLabel}
      </span>
      <time dateTime={publishedAt} className="text-meta tabular-nums">
        {dates.jalali}
      </time>
      <span className="text-meta tabular-nums" aria-label="تاریخ میلادی">
        ({dates.gregorian})
      </span>
    </div>
  );
}
