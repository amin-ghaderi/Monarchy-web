import type { Metadata } from "next";

import { ArchiveFiltersPlaceholder } from "@/components/archive/archive-filters";
import { StatementCard } from "@/components/archive/statement-card";
import { PageContainer } from "@/components/layout/page-container";
import { fetchStatementsList } from "@/lib/sanity/fetchers";
import { createContentMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createContentMetadata({
  title: "بیانیه‌ها",
  description: "آرشیو بیانیه‌ها و اطلاعیه‌های رسمی پارمان پادشاهی ایرانیان.",
  path: "/archive",
});

export default async function ArchivePage() {
  const statements = await fetchStatementsList();

  return (
    <PageContainer variant="institutional">
      <header className="border-b border-mist pb-8">
        <p className="text-[length:var(--font-size-label)] font-medium text-meta">
          آرشیو رسانه
        </p>
        <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
          بیانیه‌ها
        </h1>
        <p className="mt-4 max-w-2xl text-ink-secondary">
          بیانیه‌ها و اطلاعیه‌های رسمی پارمان پادشاهی ایرانیان — مستند، قابل استناد،
          و منتشرشده به‌صورت عمومی.
        </p>
      </header>

      <div className="mt-8">
        <ArchiveFiltersPlaceholder />
      </div>

      <section className="mt-10 space-y-8" aria-label="فهرست بیانیه‌ها">
        {statements.length ? (
          statements.map((statement) => (
            <StatementCard key={statement._id} statement={statement} />
          ))
        ) : (
          <p className="text-meta">در حال حاضر بیانیه‌ای منتشر نشده است.</p>
        )}
      </section>
    </PageContainer>
  );
}
