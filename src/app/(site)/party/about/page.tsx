import type { Metadata } from "next";

import { EditorialPageHeader } from "@/components/editorial/editorial-page-header";
import { InstitutionalEditorialShell } from "@/components/layout/institutional-editorial-shell";
import { PageContainer } from "@/components/layout/page-container";
import { createContentMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createContentMetadata({
  title: "درباره حزب",
  description:
    "مأموریت، اصول، و چارچوب سازمانی پارمان پادشاهی ایرانیان — نهاد سیاسی بر پایه ایرانشهری و قانون‌مداری.",
  path: "/party/about",
});

const sections = [
  {
    id: "mission",
    title: "مأموریت",
    paragraphs: [
      "پارمان پادشاهی ایرانیان نهادی سیاسی و ملی است که هدف آن سازماندهی نیروهای ایران‌گرا در مسیر آزادی، قانون‌مداری، و بازگرداندن حاکمیت ملی به مردم ایران است.",
      "ما بر این باوریم که آینده ایران در گرو مشارکت آگاهانه شهروندان، نهادهای مستقل، و حکمرانی مسئولانه است — نه سرکوب، تبعیض، یا حاکمیت ایدئولوژیک.",
    ],
  },
  {
    id: "principles",
    title: "اصول",
    paragraphs: [
      "ایرانشهری و وحدت ملی در برابر تجزیه‌طلبی و تبعیض.",
      "قانون‌مداری، حقوق بشر، و مسئولیت‌پذیری در برابر شهروندان.",
      "پادشاهی پارلمانی به‌عنوان چارچوبی برای ثبات مؤسساتی و انتقال مسالمت‌آمیز قدرت.",
      "شفافیت در ارتباطات عمومی و مستندسازی مواضع رسمی.",
    ],
  },
  {
    id: "leadership",
    title: "رهبری",
    paragraphs: [
      "ساختار رهبری و دبیران پارمان مطابق اساسنامه و فرآیندهای داخلی نهاد تعریف می‌شود. فهرست رسمی رهبران و سخنگویان در فاز بعدی منتشر خواهد شد.",
    ],
  },
  {
    id: "philosophy",
    title: "فلسفه سازمانی",
    paragraphs: [
      "پارمان یک نهاد انتشاراتی-سیاسی جدی است، نه پروژه تبلیغاتی. زبان ما رسمی، دقیق، و فارسی‌محور است؛ و هر بیانیه، سند، و ارتباط عمومی باید قابل استناد و قابل پیگیری باشد.",
      "ما از اغراق بصری، شعارزدگی، و رتوریک خشونت‌آمیز پرهیز می‌کنیم. اعتماد عمومی از طریق ثبات، وضوح، و پایبندی به اصول به‌دست می‌آید.",
    ],
  },
] as const;

export default function PartyAboutPage() {
  return (
    <InstitutionalEditorialShell>
      <PageContainer variant="institutional">
        <EditorialPageHeader
          label="حزب"
          title="درباره پارمان پادشاهی ایرانیان"
          description="نهاد سیاسی و ملی بر پایه ایرانشهری، قانون‌مداری، و پادشاهی پارلمانی."
          className="border-b-2 border-mist pb-10"
        />

        <div className="mt-12 space-y-14">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className={cn(
                "relative scroll-mt-24 border-t border-mist pt-10",
                index === 0 && "border-t-0 pt-0",
              )}
            >
              <h2
                id={`${section.id}-title`}
                className="text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink sm:text-[length:var(--font-size-h1)]"
              >
                {section.title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 border-s-2 border-transparent ps-0 text-ink-secondary sm:border-lapis-600/15 sm:ps-6">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageContainer>
    </InstitutionalEditorialShell>
  );
}
