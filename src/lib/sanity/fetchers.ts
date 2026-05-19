import type {
  CharterDocument,
  MediaArticleDocument,
  StatementDocument,
  StatementListItem,
} from "@/types/content";
import {
  getAllMockMediaArticleSlugs,
  getAllMockStatementSlugs,
  getMockCharterBySlug,
  getMockMediaArticleBySlug,
  getMockStatementBySlug,
  getMockStatementsList,
} from "@/lib/content/mock-data";

import { sanityClient, sanityConfigured } from "./client";
import {
  charterBySlugQuery,
  charterSlugsQuery,
  mediaArticleBySlugQuery,
  mediaArticleSlugsQuery,
  statementBySlugQuery,
  statementSlugsQuery,
  statementsListQuery,
} from "./queries";

export async function fetchStatementBySlug(
  slug: string,
): Promise<StatementDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<StatementDocument | null>(
      statementBySlugQuery,
      { slug },
      { next: { tags: [`statement:${slug}`] } },
    );
    if (doc) return doc;
  }

  return getMockStatementBySlug(slug);
}

export async function fetchStatementsList(): Promise<StatementListItem[]> {
  if (sanityConfigured) {
    const items = await sanityClient.fetch<StatementListItem[]>(
      statementsListQuery,
    );
    if (items?.length) return items;
  }

  return getMockStatementsList();
}

export async function fetchAllStatementSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(statementSlugsQuery);
    if (slugs?.length) return slugs;
  }

  return getAllMockStatementSlugs();
}

export async function fetchCharterBySlug(
  slug: string,
): Promise<CharterDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<CharterDocument | null>(
      charterBySlugQuery,
      { slug },
      { next: { tags: [`charter:${slug}`] } },
    );
    if (doc) return doc;
  }

  return getMockCharterBySlug(slug);
}

export async function fetchMediaArticleBySlug(
  slug: string,
): Promise<MediaArticleDocument | null> {
  if (sanityConfigured) {
    const doc = await sanityClient.fetch<MediaArticleDocument | null>(
      mediaArticleBySlugQuery,
      { slug },
      { next: { tags: [`mediaArticle:${slug}`] } },
    );
    if (doc) return doc;
  }

  return getMockMediaArticleBySlug(slug);
}

export async function fetchAllMediaArticleSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(mediaArticleSlugsQuery);
    if (slugs?.length) return slugs;
  }

  return getAllMockMediaArticleSlugs();
}

export async function fetchAllCharterSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(charterSlugsQuery);
    if (slugs?.length) return slugs;
  }

  return ["motto", "constitution", "oath"];
}
