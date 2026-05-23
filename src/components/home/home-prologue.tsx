"use client";

import Link from "next/link";

import { HomeHeroAtmosphere } from "@/components/home/home-hero-atmosphere";
import { HomeReveal } from "@/components/home/home-reveal";
import { HomeSection } from "@/components/home/home-section";
import {
  editorialPrimaryCta,
  editorialSecondaryCta,
} from "@/lib/editorial/styles";
import {
  typeDisplayHero,
  typeSectionDek,
  typeSectionLabel,
} from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

export function HomePrologue() {
  return (
    <HomeSection
      lead
      surface="ivory"
      atmosphere={<HomeHeroAtmosphere />}
      className="py-16 sm:py-20 lg:min-h-[42vh] lg:py-24"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
        <div>
          <HomeReveal>
            <p className={typeSectionLabel}>پارمان پادشاهی ایرانیان</p>
            <h1 className={cn(typeDisplayHero, "mt-6 max-w-4xl sm:mt-8")}>
              نهادی برای ایران آزاد، قانون‌مدار، و مسئول
            </h1>
          </HomeReveal>
          <HomeReveal delay={0.08}>
            <p className={cn(typeSectionDek, "ac-dek-institutional mt-8 max-w-2xl sm:mt-10")}>
              پارمان (حزب) پادشاهی ایرانیان یک نهاد سیاسی و ملی است که بر پایه ایرانشهری،
              حاکمیت قانون، و پادشاهی پارلمانی بنا شده است — با زبان رسمی، شفاف، و قابل
              استناد.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-14">
              <Link href="/archive" className={editorialPrimaryCta}>
                مطالعه بیانیه‌ها
              </Link>
              <Link href="/party/about" className={editorialSecondaryCta}>
                درباره پارمان
              </Link>
            </div>
          </HomeReveal>
        </div>
        <p className="ac-hero-threshold" aria-hidden>
          از مشروطه تا امروز — روایت نهادی
        </p>
      </div>
    </HomeSection>
  );
}
