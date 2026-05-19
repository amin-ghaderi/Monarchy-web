/**
 * RTL helpers — Persian-first; English LTR subtree support in Phase 2 via next-intl.
 */

export const defaultLocale = "fa" as const;
export const defaultDirection = "rtl" as const;

export type Direction = "rtl" | "ltr";

export function getDirectionForLocale(locale: string): Direction {
  return locale === "en" ? "ltr" : "rtl";
}

/**
 * Use for isolated LTR embeds (e.g. Donorbox) without flipping the page.
 */
export function ltrIsolateProps() {
  return {
    dir: "ltr" as const,
    lang: "en" as const,
  };
}
