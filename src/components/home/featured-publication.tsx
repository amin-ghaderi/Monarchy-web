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

/** Constitutional archive presentation — official document frame */
export function FeaturedPublication({ statement }: FeaturedPublicationProps) {
  const typeLabel = statementTypeLabels[statement.statementType];
  const dates = formatPublicationDates(statement.publishedAt);
  const summary = statement.summary?.trim();
  const href = `/archive/${statement.slug}`;

  return (
    <article className="ac-archive-document">
      <header className="flex flex-col gap-4 border-b border-mist pb-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="ac-archive-document__seal">سند رسمی · آرشیو قانونی</span>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[length:var(--font-size-label)] text-meta">
          <span className="font-semibold text-lapis-700">{typeLabel}</span>
          <span aria-hidden>·</span>
          <time dateTime={statement.publishedAt} className="tabular-nums font-medium">
            {dates.jalali}
          </time>
        </div>
      </header>

      <h3 className="mt-8 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink sm:mt-10">
        <Link
          href={href}
          className="hover:text-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lapis-600"
        >
          {statement.titleFa}
        </Link>
      </h3>

      {summary ? (
        <p className={cn(typeSupporting, "mt-6 max-w-3xl text-[length:var(--font-size-body)] sm:mt-8")}>
          {summary}
        </p>
      ) : null}

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-mist pt-6">
        <p className="text-[length:var(--font-size-label)] font-medium uppercase tracking-wider text-meta">
          انتشار عمومی · قابل استناد
        </p>
        <Link href={href} className={cn(editorialTextLink, "text-base font-semibold")}>
          مطالعه متن کامل سند ←
        </Link>
      </footer>
    </article>
  );
}
