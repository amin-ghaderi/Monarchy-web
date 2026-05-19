"use client";

import Link from "next/link";

import { HomeReveal } from "@/components/home/home-reveal";
import { HomeSection } from "@/components/home/home-section";
import {
  editorialPrimaryCta,
  editorialSecondaryCta,
} from "@/lib/editorial/styles";
import {
  typeDisplay,
  typeSectionDek,
  typeSectionLabel,
} from "@/lib/editorial/typography";

export function HomePrologue() {
  return (
    <HomeSection lead tone="masthead">
      <HomeReveal>
        <p className={typeSectionLabel}>پارمان پادشاهی ایرانیان</p>
      </HomeReveal>
      <HomeReveal delay={0.05}>
        <h1 className={`${typeDisplay} mt-5 max-w-4xl`}>
          نهادی برای ایران آزاد، قانون‌مدار، و مسئول
        </h1>
      </HomeReveal>
      <HomeReveal delay={0.1}>
        <p className={`${typeSectionDek} mt-6 max-w-2xl`}>
          پارمان (حزب) پادشاهی ایرانیان یک نهاد سیاسی و ملی است که بر پایه ایرانشهری،
          حاکمیت قانون، و پادشاهی پارلمانی بنا شده است — با زبان رسمی، شفاف، و قابل
          استناد.
        </p>
      </HomeReveal>
      <HomeReveal delay={0.14}>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/archive" className={editorialPrimaryCta}>
            مطالعه بیانیه‌ها
          </Link>
          <Link href="/party/about" className={editorialSecondaryCta}>
            درباره پارمان
          </Link>
        </div>
      </HomeReveal>
    </HomeSection>
  );
}
