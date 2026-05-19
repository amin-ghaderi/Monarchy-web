import Link from "next/link";

import { HomeSection } from "@/components/home/home-section";
import { cn } from "@/lib/utils";

const ctaBase = cn(
  "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
);

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
        <Link
          href="/archive"
          className={cn(ctaBase, "border border-lapis-600 bg-lapis-600 text-white hover:bg-lapis-700")}
        >
          مطالعه بیانیه‌ها
        </Link>
        <Link
          href="/party/about"
          className={cn(
            ctaBase,
            "border border-mist bg-surface-paper text-lapis-700 hover:border-lapis-600 hover:bg-lapis-100",
          )}
        >
          درباره پارمان
        </Link>
      </div>
    </HomeSection>
  );
}
