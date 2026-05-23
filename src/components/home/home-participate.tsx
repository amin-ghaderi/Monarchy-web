import Link from "next/link";

import { EditorialSectionMasthead } from "@/components/editorial/editorial-section-masthead";
import { HomeSection } from "@/components/home/home-section";
import { editorialTextLink } from "@/lib/editorial/styles";
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
    <HomeSection id="participate" surface="ivory">
      <EditorialSectionMasthead
        label="مشارکت"
        title="راه‌های همراهی"
        description="مشارکت آگاهانه و مسئولانه — فرآیندهای تفصیلی به‌زودی منتشر می‌شوند."
      />

      <ul className="mt-10 divide-y divide-mist border-t border-mist">
        {participationOptions.map((option) => (
          <li key={option.title}>
            <Link
              href={option.href}
              className="group block py-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600 sm:py-9"
            >
              <h3 className="text-[length:var(--font-size-h3)] font-semibold text-ink group-hover:text-link">
                {option.title}
              </h3>
              <p className={`${typeSupporting} mt-2 max-w-2xl`}>{option.description}</p>
              <span className={`${editorialTextLink} mt-3 inline-block text-sm`}>
                بیشتر بدانید
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
