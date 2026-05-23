"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { InstitutionalWordmark } from "@/components/identity/institutional-wordmark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { primaryNav } from "@/lib/navigation";
import { WORDMARK_ARIA_LABEL } from "@/lib/identity/lockup";
import type { SiteSettings } from "@/types/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  settings: SiteSettings;
};

export function SiteHeader({ settings }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "ac-header-authority ac-institutional-rule ac-chapter-ivory sticky top-0 z-[var(--z-sticky)] border-b border-mist",
        scrolled && "shadow-architectural-lg",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-6 px-5 sm:h-[4.75rem] sm:gap-8 sm:px-6">
        <Link
          href="/"
          aria-label={WORDMARK_ARIA_LABEL}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lapis-600"
        >
          <InstitutionalWordmark
            organizationName={settings.organizationName}
            organizationNameEn={settings.organizationNameEn}
            variant="header"
          />
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
          aria-label="ناوبری اصلی"
        >
          {primaryNav.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="ms-auto md:hidden">
          <MobileNav settings={settings} />
        </div>
      </div>
    </header>
  );
}
