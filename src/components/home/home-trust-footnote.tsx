import { HomeSection } from "@/components/home/home-section";

export function HomeTrustFootnote() {
  return (
    <HomeSection className="bg-surface-raised pb-16 lg:pb-20">
      <p className="max-w-3xl border-s-2 border-lapis-600 ps-5 text-[length:var(--font-size-lead)] leading-relaxed text-ink-secondary">
        پارمان پادشاهی ایرانیان متعهد به شفافیت، دقت زبانی، و پاسخ‌گویی در برابر
        شهروندان است. هر بیانیه و سند رسمی در این وب‌گاه مستند و قابل پیگیری منتشر
        می‌شود.
      </p>
    </HomeSection>
  );
}
