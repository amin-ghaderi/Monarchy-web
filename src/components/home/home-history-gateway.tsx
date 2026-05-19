import Link from "next/link";

import { HomeSection } from "@/components/home/home-section";
import { cn } from "@/lib/utils";

export function HomeHistoryGateway() {
  return (
    <HomeSection id="history" className="bg-surface-raised">
      <Link
        href="/history"
        className={cn(
          "block rounded-md border border-mist bg-surface-paper p-6 sm:p-8",
          "hover:border-lapis-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        )}
      >
        <p className="text-[length:var(--font-size-label)] font-medium text-meta">تاریخ</p>
        <h2 className="mt-2 text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink">
          خط زمانی و حافظه نهادی
        </h2>
        <p className="mt-3 max-w-2xl text-ink-secondary">
          خط زمانی چهار دورهٔ تاریخ معاصر ایران — مشروطه تا امروز — با رویدادهای کلیدی و
          چارچوب مستندسازی نهادی.
        </p>
        <span className="mt-5 inline-block text-sm font-medium text-link">
          ورود به بخش تاریخ
        </span>
      </Link>
    </HomeSection>
  );
}
