import type { Metadata } from "next";

import { ArchiveEmptyState } from "@/components/archive/archive-empty-state";
import { ArchiveListItem } from "@/components/archive/archive-list-item";
import { ArchivePaginationPlaceholder } from "@/components/archive/archive-pagination";
import { ArchiveToolbar } from "@/components/archive/archive-toolbar";
import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { PageContainer } from "@/components/layout/page-container";
import { groupByJalaliYear } from "@/lib/content/group-by-period";
import { fetchStatementsList } from "@/lib/sanity/fetchers";
import { createContentMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createContentMetadata({
  title: "بیانیه‌ها",
  description: "آرشیو بیانیه‌ها و اطلاعیه‌های رسمی پارمان پادشاهی ایرانیان.",
  path: "/archive",
});

function publicationCountLabel(count: number) {
  if (count === 0) return "هنوز بیانیه‌ای منتشر نشده";
  if (count === 1) return "۱ بیانیه منتشر شده";
  return `${count.toLocaleString("fa-IR")} بیانیه منتشر شده`;
}

export default async function ArchivePage() {
  const statements = await fetchStatementsList();
  const groups = groupByJalaliYear(statements);

  return (
    <PageContainer variant="institutional">
      <EditorialPageHeader
        label="آرشیو رسانه"
        title="بیانیه‌ها"
        description="بیانیه‌ها و اطلاعیه‌های رسمی پارمان پادشاهی ایرانیان — مستند، قابل استناد، و منتشرشده به‌صورت عمومی."
      >
        <p className="mt-6 text-[length:var(--font-size-meta)] text-meta">
          {publicationCountLabel(statements.length)}
        </p>
      </EditorialPageHeader>

      <div className="mt-8">
        <ArchiveToolbar />
      </div>

      {statements.length === 0 ? (
        <div className="mt-10">
          <ArchiveEmptyState />
        </div>
      ) : (
        <div className="mt-10 divide-y divide-mist">
          {groups.map((group) => (
            <section key={group.periodKey} className="py-2 first:pt-0">
              <h2 className="mb-2 pt-6 text-[length:var(--font-size-label)] font-semibold text-meta first:pt-0">
                {group.periodLabel}
              </h2>
              <div className="divide-y divide-mist/80">
                {group.items.map((statement) => (
                  <ArchiveListItem key={statement._id} statement={statement} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {statements.length > 0 ? (
        <div className="mt-4">
          <ArchivePaginationPlaceholder />
        </div>
      ) : null}
    </PageContainer>
  );
}
