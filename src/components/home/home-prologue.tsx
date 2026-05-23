"use client";

import { useRef } from "react";

import { HeroDepthLayers } from "@/components/home/hero-depth-layers";
import { HomeMagneticCta } from "@/components/home/home-magnetic-cta";
import { HomeReveal } from "@/components/home/home-reveal";
import { HeroInstitutionalComposition } from "@/components/visual/hero-institutional-composition";
import { typeDisplayHero, typeSectionDek } from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

export function HomePrologue() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="ac-hero-flagship ac-chapter-ivory relative isolate overflow-hidden"
      aria-labelledby="home-hero-title"
    >
      <HeroDepthLayers containerRef={heroRef} />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-5 py-14 sm:px-6 sm:py-16 lg:min-h-[80vh] lg:py-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="ac-hero-content-frame flex flex-col justify-center">
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
              <p
                className={cn(
                  typeSectionDek,
                  "mt-8 max-w-lg text-[length:var(--font-size-body)] sm:mt-10",
                )}
              >
                پارمان (حزب) پادشاهی ایرانیان یک نهاد سیاسی و ملی است که بر پایه ایرانشهری،
                حاکمیت قانون، و پادشاهی پارلمانی بنا شده — با زبان رسمی، شفاف، و قابل استناد.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-14">
                <HomeMagneticCta href="/archive" variant="primary" className="px-7 py-3 text-base">
                  مطالعه بیانیه‌ها
                </HomeMagneticCta>
                <HomeMagneticCta
                  href="/party/about"
                  variant="secondary"
                  className="px-5 py-3 text-base"
                >
                  درباره پارمان
                </HomeMagneticCta>
              </div>
            </HomeReveal>
          </div>

          <div className="ac-hero-composition-zone flex items-center justify-center p-6 lg:p-8">
            <HeroInstitutionalComposition className="relative h-full w-full opacity-95" />
          </div>
        </div>
      </div>
    </section>
  );
}
