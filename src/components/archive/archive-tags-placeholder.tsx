import { cn } from "@/lib/utils";

const tagPlaceholders = [
  "همه موضوعات",
  "حقوق بشر",
  "حاکمیت قانون",
  "امنیت",
  "رسانه",
];

export function ArchiveTagsPlaceholder() {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="برچسب‌ها (به‌زودی)">
      {tagPlaceholders.map((tag, index) => (
        <button
          key={tag}
          type="button"
          disabled
          className={cn(
            "rounded-sm border border-mist px-2.5 py-1 text-[length:var(--font-size-label)] text-meta",
            "cursor-not-allowed opacity-70",
            index === 0 && "border-lapis-600/50 bg-lapis-100/50 text-lapis-700",
          )}
          aria-disabled="true"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
