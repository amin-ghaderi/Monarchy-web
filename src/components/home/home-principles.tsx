"use client";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { HomeReveal } from "@/components/home/home-reveal";
import { HomeSection } from "@/components/home/home-section";
import { typeSupporting } from "@/lib/editorial/typography";
import { cn } from "@/lib/utils";

const principles = [
  {
    title: "آزادی",
    description:
      "کرامت انسان و حقوق شهروندی غیرقابل معامله‌اند؛ آزادی بیان و مشارکت آگاهانه، پایه هر جامعه مدنی است.",
  },
  {
    title: "حاکمیت قانون",
    description:
      "قانون بر همه یکسان است؛ نهادها مسئول‌اند، قدرت محدود است، و پاسخ‌گویی جایگزین خودسرانه‌گری می‌شود.",
  },
  {
    title: "ایران سکولار دموکراتیک",
    description:
      "دولت در امور دین مداخله نمی‌کند؛ دموکراسی و تنوع مدنی در چارچوب وحدت ملی و ایرانشهری حفظ می‌شود.",
  },
] as const;

export function HomePrinciples() {
  return (
    <HomeSection
      id="principles"
      surface="stone"
      className="ac-handoff-to-memory pb-14 sm:pb-16 lg:pb-20"
    >
      <HomeReveal>
        <EditorialSectionMasthead
          label="ارزش‌ها"
          title="اصول"
          description="سه اصل بنیادین که مواضع و اسناد رسمی پارمان را شکل می‌دهند."
        />
      </HomeReveal>

      <ol className="mt-12 divide-y divide-mist border-t border-mist">
        {principles.map((principle, index) => (
          <li
            key={principle.title}
            className={cn(
              "grid gap-3 py-8 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-x-10 sm:py-10",
              index === 0 && "pt-10",
            )}
          >
            <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
              {principle.title}
            </h3>
            <p className={typeSupporting}>{principle.description}</p>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}
