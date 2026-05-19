import type { BreadcrumbItem } from "@/components/editorial/breadcrumb";

export const editorialBreadcrumbs = {
  home: (): BreadcrumbItem => ({ label: "خانه", href: "/" }),
  archive: (): BreadcrumbItem => ({ label: "بیانیه‌ها", href: "/archive" }),
  participate: (): BreadcrumbItem => ({ label: "مشارکت", href: "/participate" }),
  history: (): BreadcrumbItem => ({ label: "تاریخ", href: "/history" }),
  party: (): BreadcrumbItem => ({ label: "حزب", href: "/party/about" }),
  charter: (): BreadcrumbItem => ({ label: "اسناد", href: "/charter" }),
  media: (): BreadcrumbItem => ({ label: "رسانه", href: "/archive" }),
} as const;
