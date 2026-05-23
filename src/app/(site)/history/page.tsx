import Link from "next/link";

import { EraNav } from "@/components/history/era-nav";
import { HistoryContinuumEntry } from "@/components/history/history-continuum-entry";
import { HistoryEmptyState } from "@/components/history/history-empty-state";
import { HistoryTimeline } from "@/components/history/history-timeline";
import { PageContainer } from "@/components/layout/page-container";
import { HeroInstitutionalComposition } from "@/components/visual/hero-institutional-composition";
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
    <div className="ac-history-museum ac-chapter-textured relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]" aria-hidden>
        <div className="mx-auto h-full max-w-6xl">
          <HeroInstitutionalComposition className="h-full scale-150 opacity-40" />
        </div>
      </div>

      <PageContainer variant="wide" className="relative z-[1]">
        <header className="ac-history-museum__masthead">
          <p className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-[0.16em] text-lapis-700">
            تاریخ
          </p>
          <h1 className="mt-4 max-w-3xl text-[length:var(--font-size-display-hero)] font-semibold leading-[1.1] text-ink">
            خط زمانی تاریخ معاصر ایران
          </h1>
          <p className="mt-6 max-w-2xl text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
            چهار دوره از مشروطه تا امروز — حافظه‌ای قابل استناد برای فهم مواضع امروز.
          </p>
        </header>

        <HistoryContinuumEntry />

        {hasEras ? (
          <>
            <EraNav eras={eras} className="mt-10 hidden border-b-2 border-mist pb-8 md:block" />
            <div className="mt-8 md:mt-12">
              <HistoryTimeline eras={eras} />
            </div>
          </>
        ) : (
          <div className="mt-10">
            <HistoryEmptyState />
          </div>
        )}

        <footer className="mt-16 flex flex-wrap gap-4 border-t-2 border-mist pt-10">
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
