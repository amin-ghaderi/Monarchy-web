import Link from "next/link";

import { editorialSecondaryCta } from "@/lib/editorial/styles";

export function ArchiveEmptyState() {
  return (
    <div
      className="rounded-md border border-dashed border-mist bg-surface-raised px-6 py-12 text-center"
      role="status"
    >
      <p className="text-[length:var(--font-size-h3)] font-semibold text-ink">
        بیانیه‌ای منتشر نشده است
      </p>
      <p className="mx-auto mt-3 max-w-md text-[length:var(--font-size-meta)] leading-relaxed text-meta">
        به‌محض انتشار بیانیه‌های رسمی، فهرست آن‌ها در این آرشیو قابل مشاهده خواهد بود.
      </p>
      <Link href="/party/about" className={`${editorialSecondaryCta} mt-6`}>
        درباره پارمان
      </Link>
    </div>
  );
}
