import Link from "next/link";

import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { PageContainer } from "@/components/layout/page-container";
import { editorialMutedCta, editorialSecondaryCta } from "@/lib/editorial/styles";
import { createContentMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createContentMetadata({
  title: "تاریخ",
  description:
    "حافظه تاریخی و رویدادهای پارمان پادشاهی ایرانیان — مقدمه و چارچوب خط زمانی.",
  path: "/history",
});

const eras = [
  {
    title: "بنیان‌گذاری و سازماندهی",
    period: "۱۴۰۴ — ۱۴۰۵",
    description:
      "شکل‌گیری نهاد، تدوین اسناد بنیادین، و استقرار زبان رسمی انتشارات.",
  },
  {
    title: "انتشارات و مواضع رسمی",
    period: "۱۴۰۵ — کنون",
    description:
      "انتشار بیانیه‌ها، مصاحبه‌ها، و اسناد قابل استناد در فضای عمومی.",
  },
  {
    title: "آینده — خط زمانی تعاملی",
    period: "به‌زودی",
    description:
      "نمایش رویدادها، اسناد، و نقاط عطف در قالب خط زمانی قابل کاوش.",
  },
] as const;

export default function HistoryPage() {
  return (
    <PageContainer variant="institutional">
      <EditorialPageHeader
        label="تاریخ"
        title="حافظه و رویدادهای نهاد"
        description="تاریخ پارمان فقط گذشته نیست — مرجع فهم تصمیم‌ها، اسناد، و مسیر نهاد است."
      />

      <section className="mt-12" aria-labelledby="why-history-title">
        <h2
          id="why-history-title"
          className="text-[length:var(--font-size-h2)] font-semibold text-ink"
        >
          چرا تاریخ مهم است
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-ink-secondary">
          <p>
            نهادهای قابل اعتماد، روایت خود را پنهان نمی‌کنند. ثبت رویدادها به شهروندان
            کمک می‌کند مواضع امروز را در بستر تصمیم‌های دیروز بفهمند.
          </p>
          <p>
            خط زمانی رسمی پارمان — پس از راه‌اندازی — رویدادها را با منبع، تاریخ، و
            پیوند به اسناد مرتبط نمایش خواهد داد.
          </p>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="eras-title">
        <h2
          id="eras-title"
          className="text-[length:var(--font-size-h2)] font-semibold text-ink"
        >
          دوره‌ها
        </h2>
        <ul className="mt-6 space-y-4">
          {eras.map((era) => (
            <li
              key={era.title}
              className="rounded-md border border-mist bg-surface-paper p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
                  {era.title}
                </h3>
                <span className="text-[length:var(--font-size-label)] text-meta">
                  {era.period}
                </span>
              </div>
              <p className="mt-2 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
                {era.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-12 rounded-md border border-mist bg-surface-raised p-6 sm:p-8"
        aria-labelledby="timeline-cta-title"
      >
        <h2
          id="timeline-cta-title"
          className="text-[length:var(--font-size-h2)] font-semibold text-ink"
        >
          خط زمانی تعاملی
        </h2>
        <p className="mt-3 max-w-2xl text-ink-secondary">
          نمایش بصری رویدادها، اسناد، و بیانیه‌ها در یک خط زمانی — در حال آماده‌سازی.
          تا آن زمان می‌توانید آرشیو بیانیه‌ها و مطالب رسانه‌ای را مرور کنید.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" disabled className={editorialMutedCta}>
            مشاهده خط زمانی — به‌زودی
          </button>
          <Link href="/archive" className={editorialSecondaryCta}>
            آرشیو بیانیه‌ها
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
