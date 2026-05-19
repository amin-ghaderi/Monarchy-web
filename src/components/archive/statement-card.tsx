import Link from "next/link";

import { statementTypeLabels } from "@/lib/content/statement-labels";
import { formatPublicationDates } from "@/lib/dates/format";
import type { StatementListItem } from "@/types/content";
import { cn } from "@/lib/utils";

type StatementCardProps = {
  statement: StatementListItem;
};

export function StatementCard({ statement }: StatementCardProps) {
  const typeLabel = statementTypeLabels[statement.statementType];
  const dates = formatPublicationDates(statement.publishedAt);
  const summary = statement.summary?.trim();

  return (
    <article className="border-b border-mist pb-8 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[length:var(--font-size-label)] text-meta">
        <span className="rounded-sm bg-surface-sunken px-2 py-0.5">{typeLabel}</span>
        <time dateTime={statement.publishedAt}>{dates.jalali}</time>
        <span className="text-meta/80" aria-hidden>
          ·
        </span>
        <time dateTime={statement.publishedAt} className="font-latin" lang="en" dir="ltr">
          {dates.gregorian}
        </time>
      </div>

      <h2 className="mt-3 text-[length:var(--font-size-h3)] font-semibold leading-[var(--line-height-heading)]">
        <Link
          href={`/archive/${statement.slug}`}
          className={cn(
            "text-ink hover:text-link",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
          )}
        >
          {statement.titleFa}
        </Link>
      </h2>

      {summary ? (
        <p className="mt-3 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
          {summary}
        </p>
      ) : null}

      <Link
        href={`/archive/${statement.slug}`}
        className={cn(
          "mt-4 inline-block text-[length:var(--font-size-meta)] font-medium text-link hover:underline",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        )}
      >
        مطالعه بیانیه
      </Link>
    </article>
  );
}
