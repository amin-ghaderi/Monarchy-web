import Link from "next/link";

import { InstitutionalWordmark } from "@/components/identity/institutional-wordmark";
import {
  footerLegalLinks,
  footerQuickLinks,
} from "@/lib/navigation";
import type { SiteSettings } from "@/types/site";
import { cn } from "@/lib/utils";

type SiteFooterProps = {
  settings: SiteSettings;
};

export function SiteFooter({ settings }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const description =
    settings.institutionalDescription ?? settings.siteDescription ?? "";
  const footerLine =
    settings.footerCopy ?? `© ${year} ${settings.organizationName}. تمامی حقوق محفوظ است.`;
  const socialLinks = settings.socialLinks ?? [];

  return (
    <footer className="mt-auto border-t border-mist bg-surface-raised">
      <div className="ac-institutional-rule mx-auto max-w-6xl px-5 sm:px-6">
        <div className="py-12 lg:py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <InstitutionalWordmark
                organizationName={settings.organizationName}
                organizationNameEn={settings.organizationNameEn}
                variant="footer"
                hideEnOnNarrow={false}
              />
              {description ? (
                <p className="mt-5 max-w-md text-[length:var(--font-size-meta)] leading-relaxed text-meta">
                  {description}
                </p>
              ) : null}
            </div>

            <div>
              <h2 className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-wide text-ink-secondary">
                دسترسی سریع
              </h2>
              <ul className="mt-4 space-y-2">
                {footerQuickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[length:var(--font-size-meta)] text-meta hover:text-link",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[length:var(--font-size-label)] font-semibold uppercase tracking-wide text-ink-secondary">
                حقوقی و ارتباطات
              </h2>
              <ul className="mt-4 space-y-2">
                {footerLegalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-[length:var(--font-size-meta)] text-meta hover:text-link",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {socialLinks.length ? (
                <ul className="mt-6 flex flex-wrap gap-4">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      {item.url ? (
                        <a
                          href={item.url}
                          className={cn(
                            "text-[length:var(--font-size-meta)] text-meta hover:text-link",
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lapis-600",
                          )}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-[length:var(--font-size-meta)] text-meta">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <p className="mt-10 border-t border-mist pt-6 text-[length:var(--font-size-label)] text-meta">
            {footerLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
