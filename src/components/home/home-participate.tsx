import Link from "next/link";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { HomeSection } from "@/components/home/home-section";
import { typeSupporting } from "@/lib/editorial/typography";

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

export function HomeParticipate() {
  return (
    <HomeSection id="participate" chapter="ivory" wide>
      <EditorialSectionMasthead
        label="مشارکت"
        title="راه‌های همراهی"
        description="مشارکت آگاهانه و مسئولانه در چارچوب نهاد."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {participationOptions.map((option) => (
          <Link
            key={option.title}
            href={option.href}
            className="ac-participate-card group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lapis-600"
          >
            <span className="ac-participate-card__mark" aria-hidden />
            <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink group-hover:text-lapis-700">
              {option.title}
            </h3>
            <p className={`${typeSupporting} mt-3 flex-1`}>{option.description}</p>
            <span className="mt-6 text-sm font-semibold text-lapis-700">ادامه ←</span>
          </Link>
        ))}
      </div>
    </HomeSection>
  );
}
