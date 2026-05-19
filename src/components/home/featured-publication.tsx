"use client";

import Link from "next/link";

import { HomeReveal } from "@/components/home/home-reveal";
import { statementTypeLabels } from "@/lib/content/statement-labels";
import { formatPublicationDates } from "@/lib/dates/format";
import { editorialTextLink } from "@/lib/editorial/styles";
import { typeSectionLabel, typeSupporting } from "@/lib/editorial/typography";
import type { StatementListItem } from "@/types/content";
import { cn } from "@/lib/utils";

type FeaturedPublicationProps = {
  statement: StatementListItem;
};

/** Homepage featured statement — editorial authority, no card chrome */
export function FeaturedPublication({ statement }: FeaturedPublicationProps) {
  const typeLabel = statementTypeLabels[statement.statementType];
  const dates = formatPublicationDates(statement.publishedAt);
  const summary = statement.summary?.trim();
  const href = `/archive/${statement.slug}`;

  return (
    <article className="border-t-2 border-mist pt-10 sm:pt-14">
      <HomeReveal>
        <header className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6">
          <p className={cn(typeSectionLabel, "text-meta")}>سند رسمی · انتشار عمومی</p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[length:var(--font-size-label)] text-meta">
            <span className="font-medium text-ink-secondary">{typeLabel}</span>
            <span aria-hidden className="text-mist">
              ·
            </span>
            <time dateTime={statement.publishedAt} className="tabular-nums">
              {dates.jalali}
            </time>
            <span aria-hidden className="hidden text-mist sm:inline">
              ·
            </span>
            <time
              dateTime={statement.publishedAt}
              className="hidden font-latin tabular-nums sm:inline"
              lang="en"
              dir="ltr"
            >
              {dates.gregorian}
            </time>
          </div>
        </header>
      </HomeReveal>

      <HomeReveal delay={0.06}>
        <h3 className="mt-8 max-w-4xl text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] sm:mt-10 sm:text-[length:var(--font-size-h1)] sm:leading-[var(--line-height-heading)]">
          <Link
            href={href}
            className="text-ink hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600"
          >
            {statement.titleFa}
          </Link>
        </h3>
      </HomeReveal>

      {summary ? (
        <HomeReveal delay={0.1}>
          <p className={cn(typeSupporting, "mt-6 max-w-3xl sm:mt-8")}>{summary}</p>
        </HomeReveal>
      ) : null}

      <HomeReveal delay={0.12}>
        <Link href={href} className={cn(editorialTextLink, "mt-8 inline-block text-sm sm:mt-10")}>
          مطالعه متن بیانیه
        </Link>
      </HomeReveal>
    </article>
  );
}
