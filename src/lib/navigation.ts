export type NavItem = {
  label: string;
  href: string;
  /** Match child paths (e.g. /archive/[slug]) */
  matchPrefix?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "حزب", href: "/party/about", matchPrefix: true },
  { label: "بیانیه‌ها", href: "/archive", matchPrefix: true },
  { label: "اسناد", href: "/charter", matchPrefix: true },
  { label: "تاریخ", href: "/history" },
  { label: "مشارکت", href: "/participate" },
  { label: "تماس", href: "/contact" },
];

export const participateCta = {
  label: "مشارکت",
  href: "/participate",
} as const;

export const footerQuickLinks: NavItem[] = [
  { label: "درباره حزب", href: "/party/about" },
  { label: "بیانیه‌ها", href: "/archive" },
  { label: "اسناد", href: "/charter" },
  { label: "تماس", href: "/contact" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "حریم خصوصی", href: "#" },
  { label: "شرایط استفاده", href: "#" },
  { label: "سیاست دسترسی‌پذیری", href: "#" },
];

export function isNavActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  if (item.matchPrefix) {
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  }
  return pathname === item.href;
}
