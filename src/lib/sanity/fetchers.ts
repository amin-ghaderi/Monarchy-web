import type { CharterDocument, StatementDocument } from "@/types/content";
import {
  getAllMockStatementSlugs,
  getMockCharterBySlug,
  getMockStatementBySlug,
} from "@/lib/content/mock-data";

import { sanityClient, sanityConfigured } from "./client";
import {
  charterBySlugQuery,
  charterSlugsQuery,
  statementBySlugQuery,
  statementSlugsQuery,
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

export async function fetchAllCharterSlugs(): Promise<string[]> {
  if (sanityConfigured) {
    const slugs = await sanityClient.fetch<string[]>(charterSlugsQuery);
    if (slugs?.length) return slugs;
  }

  return ["motto", "constitution", "oath"];
}
