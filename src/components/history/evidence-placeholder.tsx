import { cn } from "@/lib/utils";

type EvidencePlaceholderProps = {
  items?: Array<{ id: string; label: string }>;
  className?: string;
};

export function EvidencePlaceholder({ items, className }: EvidencePlaceholderProps) {
  if (!items?.length) return null;

  return (
    <div
      className={cn(
        "rounded-sm border border-dashed border-mist bg-surface-raised px-4 py-3",
        className,
      )}
      role="note"
      aria-label="مستندات — به‌زودی"
    >
      <p className="text-[length:var(--font-size-label)] font-medium text-meta">
        مستندات و منابع
      </p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-[length:var(--font-size-label)] text-meta before:me-2 before:content-['—']"
          >
            {item.label}
            <span className="me-1 text-meta/70"> (به‌زودی)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
