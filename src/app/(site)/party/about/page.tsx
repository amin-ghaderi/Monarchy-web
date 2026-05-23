import type { Metadata } from "next";
import Link from "next/link";

import { HeroInstitutionalComposition } from "@/components/visual/hero-institutional-composition";
import { createContentMetadata } from "@/lib/seo/metadata";
import { editorialSecondaryCta } from "@/lib/editorial/styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createContentMetadata({
  title: "درباره حزب",
  description:
    "مأموریت، اصول، و چارچوب سازمانی پارمان پادشاهی ایرانیان — نهاد سیاسی بر پایه ایرانشهری و قانون‌مداری.",
  path: "/party/about",
});

const principles = [
  "ایرانشهری و وحدت ملی در برابر تجزیه‌طلبی و تبعیض.",
  "قانون‌مداری، حقوق بشر، و مسئولیت‌پذیری در برابر شهروندان.",
  "پادشاهی پارلمانی به‌عنوان چارچوب ثبات مؤسساتی.",
  "شفافیت در ارتباطات عمومی و مستندسازی مواضع رسمی.",
] as const;

export default function PartyAboutPage() {
  return (
    <div className="ac-chapter-textured">
      <header className="ac-about-masthead px-5 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-[0.16em] text-lapis-700">
            حزب
          </p>
          <h1 className="mt-4 max-w-3xl text-[length:var(--font-size-display-hero)] font-semibold leading-[1.1] text-ink">
            پارمان پادشاهی ایرانیان
          </h1>
          <p className="mt-6 max-w-2xl text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
            نهاد سیاسی و ملی بر پایه ایرانشهری، قانون‌مداری، و پادشاهی پارلمانی — با زبان
            رسمی و قابل استناد.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <section className="ac-about-mission" aria-labelledby="mission-title">
          <div>
            <h2
              id="mission-title"
              className="text-[length:var(--font-size-h1)] font-semibold text-ink"
            >
              مأموریت
            </h2>
            <div className="mt-6 space-y-5 text-[length:var(--font-size-body)] leading-relaxed text-ink-secondary">
              <p>
                پارمان پادشاهی ایرانیان نهادی سیاسی و ملی است که هدف آن سازماندهی نیروهای
                ایران‌گرا در مسیر آزادی، قانون‌مداری، و بازگرداندن حاکمیت ملی به مردم ایران
                است.
              </p>
              <p>
                ما بر این باوریم که آینده ایران در گرو مشارکت آگاهانه شهروندان، نهادهای
                مستقل، و حکمرانی مسئولانه است — نه سرکوب، تبعیض، یا حاکمیت ایدئولوژیک.
              </p>
            </div>
            <Link href="/charter/motto" className={cn(editorialSecondaryCta, "mt-8 inline-flex")}>
              مطالعه مرامنامه
            </Link>
          </div>
          <div className="ac-about-visual p-4 lg:min-h-[22rem]">
            <HeroInstitutionalComposition className="opacity-90" />
          </div>
        </section>

        <section className="py-16" aria-labelledby="principles-title">
          <h2
            id="principles-title"
            className="text-[length:var(--font-size-h1)] font-semibold text-ink"
          >
            اصول
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((text, index) => (
              <div key={text.slice(0, 20)} className="ac-about-principle-card">
                <span className="font-latin text-2xl font-semibold text-lapis-600/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[length:var(--font-size-body)] leading-relaxed text-ink-secondary">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="ac-about-continuity" aria-label="تداوم تاریخی">
          <p className="font-legal text-[length:var(--font-size-h3)] leading-relaxed text-on-chronicle">
            از مشروطه تا امروز — روایت نهادی برای فهم مواضع معاصر
          </p>
          <Link
            href="/history"
            className="mt-8 inline-flex border border-on-chronicle-muted/40 px-6 py-3 text-sm font-semibold text-on-chronicle hover:bg-white/5"
          >
            خط زمانی تاریخ ایران
          </Link>
        </section>

        <section className="border-t-2 border-mist py-16" aria-labelledby="philosophy-title">
          <h2
            id="philosophy-title"
            className="text-[length:var(--font-size-h2)] font-semibold text-ink"
          >
            فلسفه سازمانی
          </h2>
          <p className="mt-6 max-w-2xl text-[length:var(--font-size-body)] leading-relaxed text-ink-secondary">
            پارمان یک نهاد انتشاراتی-سیاسی جدی است، نه پروژه تبلیغاتی. زبان ما رسمی، دقیق،
            و فارسی‌محور است؛ و هر بیانیه و سند رسمی باید قابل استناد و قابل پیگیری باشد.
          </p>
        </section>
      </div>
    </div>
  );
}
