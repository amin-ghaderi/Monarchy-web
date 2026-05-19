import Link from "next/link";

import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { PageContainer } from "@/components/layout/page-container";
import {
  editorialMutedCta,
  editorialSecondaryCta,
  editorialTextLink,
} from "@/lib/editorial/styles";
import { createContentMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = createContentMetadata({
  title: "مشارکت",
  description:
    "راه‌های مشارکت با پارمان پادشاهی ایرانیان — عضویت، داوطلبی، و حمایت. فرآیندها به‌زودی.",
  path: "/participate",
});

const sections = [
  {
    id: "membership",
    title: "عضویت",
    summary: "هموندی رسمی و پیوستن به ساختار سازمانی پارمان.",
    expectations: [
      "پذیرش اصول مرامنامه و اساسنامه نهاد",
      "تعهد به زبان رسمی و رفتار مسئولانه در فضای عمومی",
      "احترام به فرآیندهای درون‌سازمانی و تصمیم‌های مشروع",
    ],
    note: "فرم عضویت و معیارهای پذیرش به‌زودی منتشر می‌شود.",
    ctaLabel: "درخواست عضویت — به‌زودی",
  },
  {
    id: "volunteer",
    title: "داوطلبی",
    summary: "همکاری در امور اجرایی، رسانه، ترجمه، و پروژه‌های میدانی.",
    expectations: [
      "همکاری بر اساس توانایی و زمان‌بندی شفاف",
      "رعایت محرمانگی و امنیت عملیاتی در پروژه‌های حساس",
      "هم‌راستایی با پیام رسمی نهاد",
    ],
    note: "ثبت‌نام داوطلبان پس از راه‌اندازی پورتال مشارکت فعال می‌شود.",
    ctaLabel: "ثبت داوطلبی — به‌زودی",
  },
  {
    id: "support",
    title: "حمایت",
    summary: "حمایت مادی و معنوی مطابق چارچوب‌های اعلام‌شده و شفاف.",
    expectations: [
      "شفافیت در منبع و هدف حمایت",
      "پایبندی به سیاست‌های مالی و گزارش‌دهی نهاد",
      "عدم انتظار امتیاز سیاسی در ازای حمایت",
    ],
    note: "راهنمای حمایت مالی و غیرمالی به‌زودی در دسترس قرار می‌گیرد.",
    ctaLabel: "حمایت — به‌زودی",
  },
] as const;

export default function ParticipatePage() {
  return (
    <PageContainer variant="institutional">
      <EditorialPageHeader
        label="مشارکت"
        title="راه‌های مشارکت"
        description="پارمان مشارکت آگاهانه، مسئول، و قانون‌مدار را می‌پذیرد. پیش از فعال‌سازی فرم‌ها، انتظارات هر مسیر را به‌روشنی اعلام می‌کنیم."
      />

      <p className="mt-8 rounded-md border border-mist bg-surface-raised p-4 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
        امنیت و اعتماد شما اولویت ماست. اطلاعات حساس را تنها از کانال‌های رسمی اعلام‌شده
        ارسال کنید. برای پرسش‌های عمومی به{" "}
        <Link href="/contact" className={editorialTextLink}>
          صفحه تماس
        </Link>{" "}
        مراجعه کنید.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-b border-mist pb-10 last:border-b-0"
          >
            <h2 className="text-[length:var(--font-size-h2)] font-semibold text-ink">
              {section.title}
            </h2>
            <p className="mt-3 text-ink-secondary">{section.summary}</p>

            <h3 className="mt-6 text-[length:var(--font-size-meta)] font-semibold text-ink">
              انتظارات
            </h3>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-[length:var(--font-size-meta)] text-ink-secondary">
              {section.expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-5 text-[length:var(--font-size-meta)] text-meta">{section.note}</p>

            <button type="button" disabled className={cn(editorialMutedCta, "mt-5")}>
              {section.ctaLabel}
            </button>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/archive" className={editorialSecondaryCta}>
          مطالعه بیانیه‌ها
        </Link>
        <Link href="/party/about" className={editorialSecondaryCta}>
          درباره پارمان
        </Link>
      </div>
    </PageContainer>
  );
}
