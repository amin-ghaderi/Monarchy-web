"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { primaryNav } from "@/lib/navigation";
import type { SiteSettings } from "@/types/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const participateLabel = settings.participateNavLabel ?? "مشارکت";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] border-b border-mist bg-ground/95 backdrop-blur-[2px]",
        scrolled && "shadow-soft",
      )}
    >
      <div className="mx-auto flex h-[3.75rem] max-w-6xl items-center gap-6 px-5 sm:px-6">
        <Link
          href="/"
          className={cn(
            "group shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lapis-600",
          )}
        >
          <span className="block text-sm font-semibold leading-tight text-ink sm:text-[0.9375rem]">
            {settings.organizationName}
          </span>
          {settings.organizationNameEn ? (
            <span className="mt-0.5 block text-[length:var(--font-size-label)] text-meta">
              {settings.organizationNameEn}
            </span>
          ) : null}
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
          aria-label="ناوبری اصلی"
        >
          {primaryNav.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-3">
          <Link
            href="/participate"
            className={cn(
              "hidden rounded-md border border-lapis-600 px-3 py-1.5 text-[length:var(--font-size-meta)] font-medium text-lapis-700 sm:inline-flex",
              "hover:bg-lapis-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
            )}
          >
            {participateLabel}
          </Link>
          <MobileNav settings={settings} />
        </div>
      </div>
    </header>
  );
}
