"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavActive, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  item: NavItem;
  className?: string;
  onNavigate?: () => void;
};

export function NavLink({ item, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = isNavActive(pathname, item);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-sm px-2 py-1.5 text-[length:var(--font-size-meta)] leading-[var(--line-height-meta)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        active
          ? "font-medium text-lapis-700"
          : "text-ink-secondary hover:text-ink",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
