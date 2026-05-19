import Link from "next/link";

import { editorialTextLink } from "@/lib/editorial/styles";
import { cn } from "@/lib/utils";

export type RelatedReadingItem = {
  title: string;
  href: string;
  meta?: string;
};

type RelatedReadingProps = {
  items?: RelatedReadingItem[];
  className?: string;
};

const placeholderItems: RelatedReadingItem[] = [
  {
    title: "آرشیو بیانیه‌های رسمی",
    href: "/archive",
    meta: "بیانیه‌ها",
  },
  {
    title: "مرامنامه حزب",
    href: "/charter/motto",
    meta: "اسناد",
  },
];

export function RelatedReading({
  items = placeholderItems,
  className,
}: RelatedReadingProps) {
  return (
    <aside
      className={cn("mt-14 border-t border-mist pt-10", className)}
      aria-labelledby="related-reading-title"
    >
      <h2
        id="related-reading-title"
        className="text-[length:var(--font-size-h3)] font-semibold text-ink"
      >
        مطالب مرتبط
      </h2>
      <p className="mt-2 text-[length:var(--font-size-meta)] text-meta">
        پیشنهادهای اولیه — فهرست هوشمند به‌زودی.
      </p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.href}>
            {item.meta ? (
              <span className="text-[length:var(--font-size-label)] text-meta">{item.meta}</span>
            ) : null}
            <Link href={item.href} className={cn("mt-1 block", editorialTextLink)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
