"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { NavLink } from "@/components/layout/nav-link";
import { primaryNav } from "@/lib/navigation";
import type { SiteSettings } from "@/types/site";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  settings: SiteSettings;
};

export function MobileNav({ settings }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-mist text-ink-secondary",
          "hover:border-lapis-600 hover:text-ink",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "بستن منو" : "باز کردن منو"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[var(--z-overlay)] bg-ink/20"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      ) : null}

      <nav
        id={panelId}
        aria-label="منوی اصلی"
        className={cn(
          "fixed inset-y-0 start-0 z-[var(--z-modal)] w-[min(18rem,85vw)] border-e border-mist bg-ground shadow-modal",
          "flex flex-col px-5 py-6",
          open ? "visible" : "invisible pointer-events-none",
        )}
        inert={!open}
      >
        <div className="flex items-center justify-between border-b border-mist pb-4">
          <span className="text-sm font-semibold text-ink">منو</span>
          <button
            ref={closeButtonRef}
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-sm text-ink-secondary",
              "hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
            )}
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <NavLink
                item={item}
                className="block px-1 py-2 text-base"
                onNavigate={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-mist pt-6">
          <Link
            href="/participate"
            onClick={() => setOpen(false)}
            className={cn(
              "inline-flex w-full items-center justify-center rounded-md border border-lapis-600 px-4 py-2.5",
              "text-sm font-medium text-lapis-700",
              "hover:bg-lapis-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
            )}
          >
            {settings.participateNavLabel ?? "مشارکت"}
          </Link>
        </div>
      </nav>
    </div>
  );
}
