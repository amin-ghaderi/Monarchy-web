"use client";

import Link from "next/link";

import { HomeReveal } from "@/components/home/home-reveal";
import { HeroInstitutionalComposition } from "@/components/visual/hero-institutional-composition";
import {
  editorialPrimaryCta,
  editorialSecondaryCta,
} from "@/lib/editorial/styles";
import {
  typeDisplayHero,
  typeSectionDek,
} from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

export function HomePrologue() {
  return (
    <section
      className="ac-hero-flagship ac-chapter-ivory relative isolate overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      <div className="ac-hero-flagship__backdrop" aria-hidden />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-5 py-14 sm:px-6 sm:py-16 lg:min-h-[80vh] lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* RTL: first column = inline-start = right — institutional content */}
          <div className="flex flex-col justify-center">
            <HomeReveal>
              <p className="ac-hero-flagship__rule">پارمان پادشاهی ایرانیان</p>
              <p className="mt-4 text-[length:var(--font-size-meta)] font-medium tracking-wide text-meta">
                نهاد ملی · پادشاهی پارلمانی · حاکمیت قانون
              </p>
              <h1
                id="home-hero-title"
                className={cn(typeDisplayHero, "mt-8 max-w-xl leading-[1.08] sm:mt-10")}
              >
                نهادی برای ایران آزاد، قانون‌مدار، و مسئول
              </h1>
            </HomeReveal>
            <HomeReveal delay={0.08}>
              <p className={cn(typeSectionDek, "mt-8 max-w-lg text-[length:var(--font-size-body)] sm:mt-10")}>
                پارمان (حزب) پادشاهی ایرانیان یک نهاد سیاسی و ملی است که بر پایه ایرانشهری،
                حاکمیت قانون، و پادشاهی پارلمانی بنا شده — با زبان رسمی، شفاف، و قابل استناد.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-14">
                <Link href="/archive" className={cn(editorialPrimaryCta, "px-7 py-3 text-base")}>
                  مطالعه بیانیه‌ها
                </Link>
                <Link href="/party/about" className={cn(editorialSecondaryCta, "text-base")}>
                  درباره پارمان
                </Link>
              </div>
            </HomeReveal>
          </div>

          {/* Visual left in RTL — large composition */}
          <div className="ac-hero-flagship__composition lg:min-h-[34rem]">
            <HeroInstitutionalComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
