/** Next.js cache tags for tag-based revalidation */
export const CACHE_TAGS = {
  siteSettings: "site-settings",
  statements: "statements",
  statement: (slug: string) => `statement:${slug}`,
  mediaArticles: "media-articles",
  mediaArticle: (slug: string) => `mediaArticle:${slug}`,
  charter: (slug: string) => `charter:${slug}`,
  history: "history",
} as const;
