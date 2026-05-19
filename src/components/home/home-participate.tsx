import Link from "next/link";

import { HomeSection } from "@/components/home/home-section";
import { cn } from "@/lib/utils";

const participationOptions = [
  {
    title: "عضویت",
    description: "هموندی رسمی و پیوستن به ساختار سازمانی پارمان.",
    href: "/participate#membership",
  },
  {
    title: "داوطلبی",
    description: "همکاری در امور اجرایی، رسانه، و پروژه‌های میدانی.",
    href: "/participate#volunteer",
  },
  {
    title: "حمایت",
    description: "حمایت مادی و معنوی مطابق چارچوب‌های اعلام‌شده نهاد.",
    href: "/participate#support",
  },
] as const;

const cardClass = cn(
  "flex h-full flex-col rounded-md border border-mist bg-surface-paper p-5",
  "hover:border-lapis-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
);

export function HomeParticipate() {
  return (
    <HomeSection id="participate" className="bg-ground">
      <header className="max-w-2xl">
        <h2 className="text-[length:var(--font-size-h2)] font-semibold text-ink">مشارکت</h2>
        <p className="mt-3 text-ink-secondary">
          راه‌های مشارکت با پارمان — فرآیندهای تفصیلی به‌زودی منتشر می‌شوند.
        </p>
      </header>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {participationOptions.map((option) => (
          <li key={option.title}>
            <Link href={option.href} className={cardClass}>
              <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
                {option.title}
              </h3>
              <p className="mt-3 flex-1 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
                {option.description}
              </p>
              <span className="mt-4 text-sm font-medium text-link">بیشتر بدانید</span>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
