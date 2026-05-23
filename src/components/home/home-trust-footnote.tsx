import { HomeSection } from "@/components/home/home-section";
import { typeSectionDek } from "@/lib/editorial/typography";

export function HomeTrustFootnote() {
  return (
    <HomeSection chapter="ivory" className="pb-20 lg:pb-24">
      <div className="mx-auto max-w-2xl border-t-2 border-mist pt-12 text-center sm:pt-14">
        <p className={`${typeSectionDek} text-ink-secondary`}>
          پارمان پادشاهی ایرانیان متعهد به شفافیت، دقت زبانی، و پاسخ‌گویی در برابر
          شهروندان است. هر بیانیه و سند رسمی در این وب‌گاه مستند و قابل پیگیری منتشر
          می‌شود.
        </p>
      </div>
    </HomeSection>
  );
}
