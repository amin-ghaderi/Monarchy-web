/**
 * Timeline domain types — structured for future CMS migration, citations, and media.
 */

/** Placeholder or future linked evidence (documents, scans, external citations). */
export type HistoryEvidenceRef = {
  id: string;
  label: string;
  /** Future: canonical URL or Sanity asset reference */
  href?: string;
  assetId?: string;
  citationId?: string;
};

export type HistoryEvent = {
  id: string;
  year: string;
  /** Machine sort key (e.g. 1906) — for future chronological search */
  yearSort: number;
  title: string;
  description: string;
  evidence?: HistoryEvidenceRef[];
  /** Future: related media article / statement slugs */
  relatedSlugs?: string[];
};

export type HistoryEra = {
  id: string;
  slug: string;
  title: string;
  timeframe: string;
  intro: string;
  summary: string;
  events: HistoryEvent[];
  /** Era-level archive placeholder */
  evidence?: HistoryEvidenceRef[];
  /** Future: dedicated era deep-dive route */
  deepDiveHref?: string;
  /** Future: full-text search index field */
  searchText?: string;
};

export type HistoryTimeline = {
  eras: HistoryEra[];
  version: string;
};
