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
        "ac-nav-link rounded-sm",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        active ? "ac-nav-link--active text-lapis-700" : "text-ink-secondary",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
