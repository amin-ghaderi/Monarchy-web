import type { PortableTextBlock } from "@portabletext/types";

export type PublishStatus = "draft" | "published" | "archived";

export type StatementType = "official" | "press" | "security" | "amendment";

export type MediaArticleType = "interview" | "analysis" | "appearance" | "editorial";

export type ContentLanguage = "fa" | "en" | "bilingual";

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  noIndex?: boolean;
};

export type PersonSummary = {
  _id: string;
  nameFa: string;
  nameEn?: string;
  roleFa: string;
  slug: string;
};

export type StatementListItem = {
  _id: string;
  titleFa: string;
  slug: string;
  statementType: StatementType;
  publishedAt: string;
  summary?: string;
  seo?: SeoFields;
};

export type StatementDocument = {
  _id: string;
  _type: "statement";
  titleFa: string;
  titleEn?: string;
  slug: string;
  statementType: StatementType;
  publishedAt: string;
  language: ContentLanguage;
  bodyFa: PortableTextBlock[];
  bodyEn?: PortableTextBlock[];
  authors?: PersonSummary[];
  pdfUrl?: string;
  status: PublishStatus;
  seo?: SeoFields;
};

export type CharterDocType = "motto" | "constitution" | "oath" | "guide";

export type CharterSection = {
  title: string;
  anchor: string;
  body: PortableTextBlock[];
};

export type CharterDocument = {
  _id: string;
  _type: "charterDocument";
  titleFa: string;
  docType: CharterDocType;
  slug: string;
  versionLabel: string;
  effectiveDate: string;
  versionStatus: "current" | "archived";
  useNaskh: boolean;
  leadFa?: string;
  bodyFa?: PortableTextBlock[];
  sections?: CharterSection[];
  pdfUrl?: string;
  status: PublishStatus;
  seo?: SeoFields;
};

export type MediaArticleDocument = {
  _id: string;
  _type: "mediaArticle";
  titleFa: string;
  titleEn?: string;
  slug: string;
  articleType: MediaArticleType;
  publishedAt: string;
  updatedAt?: string;
  dekFa?: string;
  sourceLabel?: string;
  language: ContentLanguage;
  bodyFa: PortableTextBlock[];
  authors?: PersonSummary[];
  showHeroImage?: boolean;
  pdfUrl?: string;
  status: PublishStatus;
  seo?: SeoFields;
  relatedReading?: Array<{
    title: string;
    href: string;
    meta?: string;
  }>;
};

export const CHARTER_ROUTE_BY_DOC_TYPE: Record<
  Exclude<CharterDocType, "guide">,
  string
> = {
  motto: "motto",
  constitution: "constitution",
  oath: "oath",
};
