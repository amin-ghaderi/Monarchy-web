import { formatPublicationDates } from "@/lib/dates";
import { cn } from "@/lib/utils";

type PublicationMetaProps = {
  typeLabel: string;
  publishedAt: string;
  updatedAt?: string;
  className?: string;
  /** Lapis badge for media; gold reserved for official statements */
  accent?: "gold" | "lapis";
};

export function PublicationMeta({
  typeLabel,
  publishedAt,
  updatedAt,
  className,
  accent = "gold",
}: PublicationMetaProps) {
  const dates = formatPublicationDates(publishedAt);
  const badgeClass =
    accent === "lapis"
      ? "border-lapis-600/30 bg-lapis-100 text-lapis-700"
      : "border-gold-500/40 bg-gold-100 text-gold-600";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-[length:var(--font-size-meta)]",
        className,
      )}
    >
      <span
        className={cn(
          "rounded-sm border px-2 py-0.5 text-[length:var(--font-size-label)] font-medium",
          badgeClass,
        )}
      >
        {typeLabel}
      </span>
      <time dateTime={publishedAt} className="text-meta tabular-nums">
        {dates.jalali}
      </time>
      <span className="text-meta tabular-nums" lang="en" dir="ltr">
        ({dates.gregorian})
      </span>
      {updatedAt ? (
        <span className="text-meta">· به‌روزرسانی: {formatPublicationDates(updatedAt).jalali}</span>
      ) : null}
    </div>
  );
}
