import { cn } from "@/lib/utils";

export function ArchivePaginationPlaceholder() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between gap-4 border-t border-mist pt-8"
      aria-label="صفحه‌بندی (به‌زودی)"
    >
      <p className="text-[length:var(--font-size-meta)] text-meta">صفحه ۱ از ۱</p>
      <div className="flex gap-2">
        <button
          type="button"
          disabled
          className={cn(
            "rounded-sm border border-mist px-3 py-1.5 text-[length:var(--font-size-label)] text-meta",
            "cursor-not-allowed opacity-60",
          )}
          aria-disabled="true"
        >
          قبلی
        </button>
        <button
          type="button"
          disabled
          className={cn(
            "rounded-sm border border-mist px-3 py-1.5 text-[length:var(--font-size-label)] text-meta",
            "cursor-not-allowed opacity-60",
          )}
          aria-disabled="true"
        >
          بعدی
        </button>
      </div>
    </nav>
  );
}
