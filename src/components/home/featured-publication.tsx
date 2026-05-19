import Link from "next/link";

import { statementTypeLabels } from "@/lib/content/statement-labels";
import { formatPublicationDates } from "@/lib/dates/format";
import { editorialTextLink } from "@/lib/editorial/styles";
import { typeSupporting } from "@/lib/editorial/typography";
import type { StatementListItem } from "@/types/content";
import { cn } from "@/lib/utils";

type FeaturedPublicationProps = {
  statement: StatementListItem;
};

/** Homepage featured statement — archive row DNA, publication scale */
export function FeaturedPublication({ statement }: FeaturedPublicationProps) {
  const typeLabel = statementTypeLabels[statement.statementType];
  const dates = formatPublicationDates(statement.publishedAt);
  const summary = statement.summary?.trim();
  const href = `/archive/${statement.slug}`;

  return (
    <article className="border-t border-mist pt-8 sm:pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 text-[length:var(--font-size-label)] text-meta">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-medium text-ink-secondary">{typeLabel}</span>
          <span aria-hidden className="text-mist">
            ·
          </span>
          <time dateTime={statement.publishedAt} className="tabular-nums">
            {dates.jalali}
          </time>
        </div>
        <time
          dateTime={statement.publishedAt}
          className="font-latin tabular-nums"
          lang="en"
          dir="ltr"
        >
          {dates.gregorian}
        </time>
      </div>

      <h3 className="mt-5 max-w-4xl text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] sm:text-[length:var(--font-size-h1)] sm:leading-[var(--line-height-heading)]">
        <Link
          href={href}
          className="text-ink hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600"
        >
          {statement.titleFa}
        </Link>
      </h3>

      {summary ? <p className={cn(typeSupporting, "mt-5 max-w-3xl")}>{summary}</p> : null}

      <Link href={href} className={cn(editorialTextLink, "mt-6 inline-block text-sm")}>
        مطالعه متن بیانیه
      </Link>
    </article>
  );
}
