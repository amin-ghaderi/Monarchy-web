import Link from "next/link";

import { EraNav } from "@/components/history/era-nav";
import { HistoryContinuumEntry } from "@/components/history/history-continuum-entry";
import { HistoryEmptyState } from "@/components/history/history-empty-state";
import { HistoryTimeline } from "@/components/history/history-timeline";
import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { PageContainer } from "@/components/layout/page-container";
import { GeometryField } from "@/components/visual/geometry-field";
import { fetchHistoryTimeline } from "@/lib/sanity/fetchers";
import { editorialSecondaryCta } from "@/lib/editorial/styles";
import { createContentMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createContentMetadata({
  title: "تاریخ ایران",
  description:
    "خط زمانی تاریخ معاصر ایران — چهار دوره مشروطه، پهلوی، و پس از انقلاب ۵۷. آرشیو نهادی پارمان پادشاهی ایرانیان.",
  path: "/history",
});

export default async function HistoryPage() {
  const { eras } = await fetchHistoryTimeline();
  const hasEras = eras.length > 0;

  return (
    <div className="ac-surface-c relative">
      <GeometryField variant="page" />
      <PageContainer variant="wide" className="relative z-[1]">
        <EditorialPageHeader
          label="تاریخ"
          title="خط زمانی تاریخ معاصر ایران"
          description="چهار دوره از مشروطه تا امروز — حافظه‌ای قابل استناد برای فهم مواضع امروز."
          className="border-b-2 border-mist pb-10"
        />

        <HistoryContinuumEntry />

        {hasEras ? (
          <>
            <EraNav eras={eras} className="mt-8 hidden border-b-2 border-mist pb-8 md:block" />
            <div className="mt-6 md:mt-10">
              <HistoryTimeline eras={eras} />
            </div>
          </>
        ) : (
          <div className="mt-10">
            <HistoryEmptyState />
          </div>
        )}

        <details className="mt-12 max-w-3xl border-t border-mist pt-8 text-ink-secondary">
          <summary className="cursor-pointer text-[length:var(--font-size-meta)] font-medium text-meta">
            چرا این خط زمانی
          </summary>
          <div className="mt-4 space-y-4 text-[length:var(--font-size-meta)] leading-relaxed">
            <p>
              نهادهای قابل اعتماد، روایت خود را پنهان نمی‌کنند. ثبت دوره‌ها و رویدادها به
              شهروندان کمک می‌کند مواضع امروز را در بستر تصمیم‌های دیروز بفهمند.
            </p>
          </div>
        </details>

        <footer className="mt-14 flex flex-wrap gap-3 border-t border-mist pt-8">
          <Link href="/archive" className={editorialSecondaryCta}>
            آرشیو بیانیه‌ها
          </Link>
          <Link href="/charter/motto" className={editorialSecondaryCta}>
            مرامنامه
          </Link>
        </footer>
      </PageContainer>
    </div>
  );
}
