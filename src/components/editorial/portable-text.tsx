import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { cn } from "@/lib/utils";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-ink">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-[length:var(--font-size-h2)] font-semibold leading-[var(--line-height-heading)] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-[length:var(--font-size-h3)] font-medium leading-[var(--line-height-heading)] text-ink-secondary">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-s-2 border-gold-500 ps-6 text-[length:var(--font-size-lead)] leading-[var(--line-height-body)] text-ink-secondary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 list-disc space-y-2 ps-6 text-ink marker:text-meta">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)]">
        {children}
      </li>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");
      const className = "text-link underline decoration-mist underline-offset-4 hover:text-lapis-500";

      if (external || value?.openInNewTab) {
        return (
          <a
            href={href}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
};

type EditorialPortableTextProps = {
  value: PortableTextBlock[];
  className?: string;
};

export function EditorialPortableText({ value, className }: EditorialPortableTextProps) {
  if (!value?.length) return null;

  return (
    <div className={cn("editorial-body", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}
