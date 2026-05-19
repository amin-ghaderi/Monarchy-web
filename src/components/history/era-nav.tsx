import type { HistoryEra } from "@/types/history";
import { editorialFocusRing } from "@/lib/editorial/styles";
import { cn } from "@/lib/utils";

type EraNavProps = {
  eras: HistoryEra[];
  className?: string;
};

export function EraNav({ eras, className }: EraNavProps) {
  return (
    <nav
      className={cn("border-b border-mist pb-6", className)}
      aria-label="پرش به دوره‌های تاریخی"
    >
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">دوره‌ها</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {eras.map((era) => (
          <li key={era.id}>
            <a
              href={`#${era.slug}`}
              className={cn(
                "inline-block rounded-sm border border-mist px-3 py-1.5 text-[length:var(--font-size-label)] text-ink-secondary",
                "hover:border-lapis-600 hover:text-lapis-700",
                editorialFocusRing,
              )}
            >
              {era.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
