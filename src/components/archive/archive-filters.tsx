import { statementTypeLabels } from "@/lib/content/statement-labels";
import type { StatementType } from "@/types/content";
import { cn } from "@/lib/utils";

const filterTypes: Array<StatementType | "all"> = [
  "all",
  "official",
  "press",
  "security",
];

export function ArchiveFiltersPlaceholder() {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="فیلتر بیانیه‌ها (به‌زودی)"
    >
      {filterTypes.map((type) => {
        const label = type === "all" ? "همه" : statementTypeLabels[type];
        return (
          <button
            key={type}
            type="button"
            disabled
            className={cn(
              "rounded-sm border border-mist px-3 py-1.5 text-[length:var(--font-size-label)] text-meta",
              "cursor-not-allowed opacity-70",
              type === "all" && "border-lapis-600 bg-lapis-100 text-lapis-700",
            )}
            aria-disabled="true"
          >
            {label}
          </button>
        );
      })}
      <span className="self-center text-[length:var(--font-size-label)] text-meta">
        جستجو و فیلتر پیشرفته — به‌زودی
      </span>
    </div>
  );
}
