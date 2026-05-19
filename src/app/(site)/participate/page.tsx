import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "membership",
    title: "عضویت",
    description: "هموندی رسمی و پیوستن به ساختار سازمانی پارمان — به‌زودی.",
  },
  {
    id: "volunteer",
    title: "داوطلبی",
    description: "همکاری در امور اجرایی، رسانه، و پروژه‌های میدانی — به‌زودی.",
  },
  {
    id: "support",
    title: "حمایت",
    description: "حمایت مادی و معنوی مطابق چارچوب‌های اعلام‌شده — به‌زودی.",
  },
] as const;

export default function ParticipatePage() {
  return (
    <PageContainer variant="institutional">
      <header className="border-b border-mist pb-8">
        <p className="text-[length:var(--font-size-label)] font-medium text-meta">مشارکت</p>
        <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold text-ink">
          مشارکت — به‌زودی
        </h1>
        <p className="mt-4 max-w-xl text-ink-secondary">
          فرآیند هموندی و مشارکت سازمانی در فاز بعدی راه‌اندازی می‌شود.
        </p>
      </header>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-md border border-mist bg-surface-paper p-5"
          >
            <h2 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
              {section.title}
            </h2>
            <p className="mt-2 text-ink-secondary">{section.description}</p>
          </section>
        ))}
      </div>

      <Link
        href="/archive"
        className={cn(
          "mt-10 inline-block text-sm font-medium text-link hover:underline",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        )}
      >
        مطالعه بیانیه‌ها
      </Link>
    </PageContainer>
  );
}
