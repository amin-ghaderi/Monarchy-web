import { HomeSection } from "@/components/home/home-section";
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
    <HomeSection id="principles" className="bg-surface-raised">
      <header className="max-w-2xl">
        <h2 className="text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink">
          اصول
        </h2>
        <p className="mt-3 text-ink-secondary">
          سه اصل بنیادین که مواضع و اسناد رسمی پارمان را شکل می‌دهند.
        </p>
      </header>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {principles.map((principle) => (
          <li
            key={principle.title}
            className={cn(
              "rounded-md border border-mist bg-surface-paper p-5",
              "flex flex-col",
            )}
          >
            <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
              {principle.title}
            </h3>
            <p className="mt-3 flex-1 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
              {principle.description}
            </p>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
