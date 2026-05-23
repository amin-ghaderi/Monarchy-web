"use client";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { HomeReveal } from "@/components/home/home-reveal";
import { HomeSection } from "@/components/home/home-section";
import { typeSupporting } from "@/lib/editorial/typography";

const principles = [
  {
    index: "01",
    title: "آزادی",
    description:
      "کرامت انسان و حقوق شهروندی غیرقابل معامله‌اند؛ آزادی بیان و مشارکت آگاهانه، پایه هر جامعه مدنی است.",
  },
  {
    index: "02",
    title: "حاکمیت قانون",
    description:
      "قانون بر همه یکسان است؛ نهادها مسئول‌اند، قدرت محدود است، و پاسخ‌گویی جایگزین خودسرانه‌گری می‌شود.",
  },
  {
    index: "03",
    title: "ایران سکولار دموکراتیک",
    description:
      "دولت در امور دین مداخله نمی‌کند؛ دموکراسی و تنوع مدنی در چارچوب وحدت ملی و ایرانشهری حفظ می‌شود.",
  },
] as const;

export function HomePrinciples() {
  return (
    <HomeSection id="principles" chapter="textured" wide>
      <HomeReveal>
        <EditorialSectionMasthead
          label="ارزش‌ها"
          title="اصول بنیادین"
          description="سه اصل که مواضع و اسناد رسمی پارمان را شکل می‌دهند."
        />
      </HomeReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.title} className="ac-principle-block">
            <span className="ac-principle-block__index" aria-hidden>
              {principle.index}
            </span>
            <h3 className="mt-6 text-[length:var(--font-size-h2)] font-semibold leading-tight text-ink">
              {principle.title}
            </h3>
            <p className={`${typeSupporting} mt-4 flex-1`}>{principle.description}</p>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}
