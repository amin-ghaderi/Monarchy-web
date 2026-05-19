import Link from "next/link";

import { statementTypeLabels } from "@/lib/content/statement-labels";
import { formatPublicationDates } from "@/lib/dates/format";
import { editorialTextLink } from "@/lib/editorial/styles";
import type { StatementListItem } from "@/types/content";
import { cn } from "@/lib/utils";

type ArchiveListItemProps = {
  statement: StatementListItem;
};

export function ArchiveListItem({ statement }: ArchiveListItemProps) {
  const typeLabel = statementTypeLabels[statement.statementType];
  const dates = formatPublicationDates(statement.publishedAt);
  const summary = statement.summary?.trim();
  const href = `/archive/${statement.slug}`;

  return (
    <article className="group py-7 first:pt-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[length:var(--font-size-label)] text-meta">
          <span className="font-medium text-ink-secondary">{typeLabel}</span>
          <span aria-hidden className="text-mist">
            ·
          </span>
          <time dateTime={statement.publishedAt}>{dates.jalali}</time>
        </div>
        <time
          dateTime={statement.publishedAt}
          className="font-latin text-[length:var(--font-size-label)] text-meta"
          lang="en"
          dir="ltr"
        >
          {dates.gregorian}
        </time>
      </div>

      <h2 className="mt-2 text-[length:var(--font-size-h3)] font-semibold leading-snug">
        <Link
          href={href}
          className="text-ink hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600"
        >
          {statement.titleFa}
        </Link>
      </h2>

      {summary ? (
        <p className="mt-2 max-w-3xl text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
          {summary}
        </p>
      ) : null}

      <Link href={href} className={cn("mt-3 inline-block text-[length:var(--font-size-label)]", editorialTextLink)}>
        ادامه مطلب
      </Link>
    </article>
  );
}
