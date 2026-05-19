import Link from "next/link";

import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="مسیر" className={cn("text-meta text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-mist">
                  ‹
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="text-link hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-ink-secondary" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
