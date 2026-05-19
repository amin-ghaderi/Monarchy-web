import type {
  CharterDocument,
  MediaArticleDocument,
  StatementDocument,
  StatementListItem,
} from "@/types/content";
import type { HistoryEra, HistoryTimeline } from "@/types/history";
import type { SiteSettings } from "@/types/site";
import { historyTimeline as mockHistoryTimeline } from "@/lib/content/history-data";
import {
  getAllMockMediaArticleSlugs,
  getAllMockStatementSlugs,
  getMockCharterBySlug,
  getMockMediaArticleBySlug,
  getMockStatementBySlug,
  getMockStatementsList,
} from "@/lib/content/mock-data";
import { mergeSiteSettings } from "@/lib/site/defaults";

import { sanityClient, sanityConfigured } from "./client";
import { isDevMockFallbackEnabled } from "./dev-fallback";
import {
  charterBySlugQuery,
  charterSlugsQuery,
  historyTimelineQuery,
  mediaArticleBySlugQuery,
  mediaArticleSlugsQuery,
  siteSettingsQuery,
  statementBySlugQuery,
  statementSlugsQuery,
  statementsListQuery,
} from "./queries";
import { CACHE_TAGS } from "./tags";

const fetchOptions = (tags: string[]) => ({
  next: { tags },
});

export async function fetchSiteSettings(): Promise<SiteSettings> {
  if (!sanityConfigured) {
    return mergeSiteSettings(null);
  }

  const settings = await sanityClient.fetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    fetchOptions([CACHE_TAGS.siteSettings]),
  );

  return mergeSiteSettings(settings);
}

export async function fetchStatementBySlug(
  slug: string,
): Promise<StatementDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<StatementDocument | null>(
      statementBySlugQuery,
      { slug },
      fetchOptions([CACHE_TAGS.statements, CACHE_TAGS.statement(slug)]),
    );
    if (doc) return doc;
  }

  if (isDevMockFallbackEnabled()) {
    return getMockStatementBySlug(slug);
  }

  return null;
}

export async function fetchStatementsList(): Promise<StatementListItem[]> {
  if (sanityConfigured) {
    const items = await sanityClient.fetch<StatementListItem[]>(
      statementsListQuery,
      {},
      fetchOptions([CACHE_TAGS.statements]),
    );
    if (items?.length) return items;
  }

  if (isDevMockFallbackEnabled()) {
    return getMockStatementsList();
  }

  return [];
}

export async function fetchAllStatementSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(
      statementSlugsQuery,
      {},
      fetchOptions([CACHE_TAGS.statements]),
    );
    if (slugs?.length) return slugs;
  }

  if (isDevMockFallbackEnabled()) {
    return getAllMockStatementSlugs();
  }

  return [];
}

export async function fetchCharterBySlug(
  slug: string,
): Promise<CharterDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<CharterDocument | null>(
      charterBySlugQuery,
      { slug },
      fetchOptions([CACHE_TAGS.charter(slug)]),
    );
    if (doc) return doc;
  }

  if (isDevMockFallbackEnabled()) {
    return getMockCharterBySlug(slug);
  }

  return null;
}

export async function fetchAllCharterSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(charterSlugsQuery);
    if (slugs?.length) return slugs;
  }

  if (isDevMockFallbackEnabled()) {
    return ["motto", "constitution", "oath"];
  }

  return [];
}

export async function fetchMediaArticleBySlug(
  slug: string,
): Promise<MediaArticleDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<MediaArticleDocument | null>(
      mediaArticleBySlugQuery,
      { slug },
      fetchOptions([CACHE_TAGS.mediaArticles, CACHE_TAGS.mediaArticle(slug)]),
    );
    if (doc) return doc;
  }

  if (isDevMockFallbackEnabled()) {
    return getMockMediaArticleBySlug(slug);
  }

  return null;
}

export async function fetchAllMediaArticleSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(
      mediaArticleSlugsQuery,
      {},
      fetchOptions([CACHE_TAGS.mediaArticles]),
    );
    if (slugs?.length) return slugs;
  }

  if (isDevMockFallbackEnabled()) {
    return getAllMockMediaArticleSlugs();
  }

  return [];
}

export async function fetchHistoryTimeline(): Promise<HistoryTimeline> {
  if (sanityConfigured) {
    const eras = await sanityClient.fetch<HistoryEra[]>(
      historyTimelineQuery,
      {},
      fetchOptions([CACHE_TAGS.history]),
    );
    if (eras?.length) {
      return { version: "cms", eras };
    }
  }

  if (isDevMockFallbackEnabled()) {
    return mockHistoryTimeline;
  }

  return { version: "empty", eras: [] };
}
