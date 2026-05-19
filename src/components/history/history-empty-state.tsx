import Link from "next/link";

import { editorialSecondaryCta } from "@/lib/editorial/styles";

export function HistoryEmptyState() {
  return (
    <div
      className="rounded-md border border-dashed border-mist bg-surface-raised px-6 py-12 text-center"
      role="status"
    >
      <p className="text-[length:var(--font-size-h3)] font-semibold text-ink">
        خط زمانی در حال آماده‌سازی است
      </p>
      <p className="mx-auto mt-3 max-w-md text-[length:var(--font-size-meta)] leading-relaxed text-meta">
        دوره‌ها و رویدادهای تاریخی به‌زودی از طریق سامانه مدیریت محتوا منتشر می‌شوند.
      </p>
      <Link href="/archive" className={`${editorialSecondaryCta} mt-6`}>
        مطالعه بیانیه‌ها
      </Link>
    </div>
  );
}
