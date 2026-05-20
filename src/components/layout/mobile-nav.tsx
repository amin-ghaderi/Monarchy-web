"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { InstitutionalWordmark } from "@/components/identity/institutional-wordmark";
import { NavLink } from "@/components/layout/nav-link";
import { primaryNav } from "@/lib/navigation";
import { editorialSecondaryCta } from "@/lib/editorial/styles";
import { WORDMARK_ARIA_LABEL } from "@/lib/identity/lockup";
import type { SiteSettings } from "@/types/site";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  settings: SiteSettings;
};

export function MobileNav({ settings }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const participateLabel = settings.participateNavLabel ?? "مشارکت";

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
    <div>
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
          className="fixed inset-0 z-[var(--z-overlay)] bg-ink/15"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      ) : null}

      <nav
        id={panelId}
        aria-label="منوی اصلی"
        className={cn(
          "fixed inset-y-0 start-0 z-[var(--z-modal)] flex w-[min(18rem,85vw)] flex-col",
          "border-e border-mist bg-ground shadow-modal",
          open ? "visible" : "pointer-events-none invisible",
        )}
        inert={!open}
      >
        <div className="ac-institutional-rule flex items-start justify-between gap-3 px-5 pb-4 pt-6">
          <Link
            href="/"
            aria-label={WORDMARK_ARIA_LABEL}
            onClick={() => setOpen(false)}
            className="min-w-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600"
          >
            <InstitutionalWordmark
              organizationName={settings.organizationName}
              organizationNameEn={settings.organizationNameEn}
              variant="header"
              hideEnOnNarrow={false}
            />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className={cn(
              "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-ink-secondary",
              "hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
            )}
            aria-label="بستن منو"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <ul className="flex flex-col gap-0.5 px-4">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <NavLink
                item={item}
                className="block px-1 py-2.5 text-[length:var(--font-size-body)]"
                onNavigate={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-mist px-5 py-5">
          <Link
            href="/participate"
            onClick={() => setOpen(false)}
            className={cn(editorialSecondaryCta, "text-sm")}
          >
            {participateLabel}
          </Link>
        </div>
      </nav>
    </div>
  );
}
