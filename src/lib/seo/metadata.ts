import type { Metadata } from "next";

const siteName = "پارمان پادشاهی ایرانیان";

export const siteConfig = {
  name: siteName,
  description:
    "پارمان (حزب) پادشاهی ایرانیان — نهاد سیاسی و ملی بر پایه ایرانشهری، قانون‌مداری و پادشاهی پارلمانی.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iranianmonarchy.info",
  locale: "fa_IR",
} as const;

export function createBaseMetadata(overrides?: Metadata): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },
    description: siteConfig.description,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  };
}

/**
 * Per-route metadata from CMS `seo` fields — implemented in Sprint 1.
 */
export function createContentMetadata(): Metadata {
  return createBaseMetadata();
}
