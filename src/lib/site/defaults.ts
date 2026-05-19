import type { SiteSettings } from "@/types/site";
import { siteConfig } from "@/lib/seo/metadata";

export const defaultSiteSettings: SiteSettings = {
  organizationName: siteConfig.name,
  organizationNameEn: "Iranian Monarchy Party",
  siteTitle: siteConfig.name,
  siteDescription: siteConfig.description,
  institutionalDescription: siteConfig.description,
  footerCopy: `© ${siteConfig.name}. تمامی حقوق محفوظ است.`,
  participateNavLabel: "مشارکت",
  socialLinks: [
    { label: "ایکس (X)" },
    { label: "تلگرام" },
    { label: "یوتیوب" },
  ],
};

export function mergeSiteSettings(
  partial: Partial<SiteSettings> | null | undefined,
): SiteSettings {
  if (!partial) return defaultSiteSettings;
  return {
    ...defaultSiteSettings,
    ...partial,
    socialLinks: partial.socialLinks?.length
      ? partial.socialLinks
      : defaultSiteSettings.socialLinks,
  };
}
