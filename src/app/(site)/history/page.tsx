import Link from "next/link";

import { EraNav } from "@/components/history/era-nav";
import { HistoryContinuumEntry } from "@/components/history/history-continuum-entry";
import { HistoryEmptyState } from "@/components/history/history-empty-state";
import { HistoryTimeline } from "@/components/history/history-timeline";
import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { PageContainer } from "@/components/layout/page-container";
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
    <PageContainer variant="wide">
      <EditorialPageHeader
        label="تاریخ"
        title="خط زمانی تاریخ معاصر ایران"
        description="چارچوبی نهادی برای فهم دوره‌ها، رویدادهای کلیدی، و پیوند آن‌ها با اسناد و مواضع رسمی — بدون اغراق بصری."
      />

      <HistoryContinuumEntry />

      <section className="mt-8 max-w-3xl" aria-labelledby="why-history-title">
        <h2
          id="why-history-title"
          className="text-[length:var(--font-size-h2)] font-semibold text-ink"
        >
          چرا این خط زمانی
        </h2>
        <div className="mt-4 space-y-4 text-ink-secondary">
          <p>
            نهادهای قابل اعتماد، روایت خود را پنهان نمی‌کنند. ثبت دوره‌ها و رویدادها به
            شهروندان کمک می‌کند مواضع امروز را در بستر تصمیم‌های دیروز بفهمند.
          </p>
          <p className="text-[length:var(--font-size-meta)] text-meta">
            محتوای تاریخی از سامانه مدیریت محتوا منتشر می‌شود و پس از هر انتشار به‌روز
            می‌گردد.
          </p>
        </div>
      </section>

      {hasEras ? (
        <>
          <EraNav eras={eras} className="mt-10 hidden md:block" />
          <div className="mt-10 md:mt-12">
            <HistoryTimeline eras={eras} />
          </div>
        </>
      ) : (
        <div className="mt-10">
          <HistoryEmptyState />
        </div>
      )}

      <footer className="mt-14 flex flex-wrap gap-3 border-t border-mist pt-8">
        <Link href="/archive" className={editorialSecondaryCta}>
          آرشیو بیانیه‌ها
        </Link>
        <Link href="/charter/motto" className={editorialSecondaryCta}>
          مرامنامه
        </Link>
      </footer>
    </PageContainer>
  );
}
