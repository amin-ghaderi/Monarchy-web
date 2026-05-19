import Link from "next/link";

import { HomeSection } from "@/components/home/home-section";
import { editorialPrimaryCta, editorialSecondaryCta } from "@/lib/editorial/styles";

export function HomePrologue() {
  return (
    <HomeSection lead className="bg-ground">
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">
        پارمان پادشاهی ایرانیان
      </p>
      <h1 className="mt-3 max-w-3xl text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink sm:text-[length:var(--font-size-display)] sm:leading-[var(--line-height-display)]">
        نهادی برای ایران آزاد، قانون‌مدار، و مسئول
      </h1>
      <p className="mt-5 max-w-2xl text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
        پارمان (حزب) پادشاهی ایرانیان یک نهاد سیاسی و ملی است که بر پایه ایرانشهری،
        حاکمیت قانون، و پادشاهی پارلمانی بنا شده است — با زبان رسمی، شفاف، و قابل
        استناد.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/archive" className={editorialPrimaryCta}>
          مطالعه بیانیه‌ها
        </Link>
        <Link href="/party/about" className={editorialSecondaryCta}>
          درباره پارمان
        </Link>
      </div>
    </HomeSection>
  );
}
