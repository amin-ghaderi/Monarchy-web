import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { createContentMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createContentMetadata({
  title: "تماس",
  description: "راه‌های ارتباط با پارمان پادشاهی ایرانیان — مطبوعات، امور سازمانی، و ارتباط امن.",
  path: "/contact",
});

const contactBlocks = [
  {
    title: "مطبوعات",
    body: "درخواست‌های رسانه‌ای، مصاحبه، و بازنشر بیانیه‌های رسمی.",
    email: "press@iranianmonarchy.info",
  },
  {
    title: "امور سازمانی",
    body: "پرسش‌های عمومی درباره نهاد، اسناد، و هماهنگی‌های رسمی.",
    email: "office@iranianmonarchy.info",
  },
] as const;

export default function ContactPage() {
  return (
    <PageContainer variant="institutional">
      <header className="border-b border-mist pb-8">
        <p className="text-[length:var(--font-size-label)] font-medium text-meta">تماس</p>
        <h1 className="mt-2 text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-heading)] text-ink">
          ارتباط با پارمان
        </h1>
        <p className="mt-4 max-w-2xl text-ink-secondary">
          برای حفظ امنیت و دقت پاسخ‌گویی، لطفاً موضوع پیام خود را مشخص کنید. پاسخ‌ها
          ممکن است تا چند روز کاری طول بکشد.
        </p>
      </header>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {contactBlocks.map((block) => (
          <section
            key={block.title}
            className="rounded-md border border-mist bg-surface-paper p-5"
          >
            <h2 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
              {block.title}
            </h2>
            <p className="mt-2 text-[length:var(--font-size-meta)] text-ink-secondary">
              {block.body}
            </p>
            <a
              href={`mailto:${block.email}`}
              className={cn(
                "mt-4 inline-block font-latin text-sm text-link hover:underline",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
              )}
              dir="ltr"
              lang="en"
            >
              {block.email}
            </a>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-md border border-mist bg-surface-raised p-5">
        <h2 className="text-[length:var(--font-size-h3)] font-semibold text-ink">
          ارتباط امن
        </h2>
        <p className="mt-3 text-[length:var(--font-size-meta)] leading-relaxed text-ink-secondary">
          برای مکاتبات حساس، از کانال‌های رمزنگاری‌شده استفاده کنید. راهنمای کلید عمومی و
          کانال‌های امن به‌زودی در این صفحه منتشر می‌شود.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="contact-form-title">
        <h2
          id="contact-form-title"
          className="text-[length:var(--font-size-h2)] font-semibold text-ink"
        >
          فرم تماس
        </h2>
        <p className="mt-2 text-[length:var(--font-size-meta)] text-meta">
          فرم آنلاین در فاز بعدی فعال می‌شود.
        </p>
        <fieldset disabled className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
              نام
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              disabled
              placeholder="نام و نام خانوادگی"
              className="mt-1 w-full rounded-md border border-mist bg-surface-paper px-3 py-2 text-meta"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
              ایمیل
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              disabled
              placeholder="email@example.com"
              className="mt-1 w-full rounded-md border border-mist bg-surface-paper px-3 py-2 font-latin text-meta"
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
              پیام
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              disabled
              placeholder="موضوع و متن پیام"
              className="mt-1 w-full resize-y rounded-md border border-mist bg-surface-paper px-3 py-2 text-meta"
            />
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-md border border-mist px-4 py-2 text-sm text-meta"
          >
            ارسال — به‌زودی
          </button>
        </fieldset>
      </section>
    </PageContainer>
  );
}
