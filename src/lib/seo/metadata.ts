import type { Metadata } from "next";

import type { SeoFields } from "@/types/content";

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

export type ContentMetadataInput = {
  title: string;
  description?: string;
  path: string;
  seo?: SeoFields;
  ogType?: "website" | "article";
};

export function createContentMetadata({
  title,
  description,
  path,
  seo,
  ogType = "website",
}: ContentMetadataInput): Metadata {
  const metaTitle = seo?.metaTitle ?? title;
  const metaDescription = seo?.metaDescription ?? description ?? siteConfig.description;
  const canonical = new URL(path, siteConfig.url).toString();

  return createBaseMetadata({
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      ...(seo?.ogImageUrl ? { images: [{ url: seo.ogImageUrl }] } : {}),
    },
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
  });
}
