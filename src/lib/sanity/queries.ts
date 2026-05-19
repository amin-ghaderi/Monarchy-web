import groq from "groq";

const seoProjection = `{
  metaTitle,
  metaDescription,
  "ogImageUrl": ogImage.asset->url,
  noIndex
}`;

export const statementBySlugQuery = groq`
  *[_type == "statement" && slug.current == $slug && status == "published"][0]{
    _id,
    _type,
    titleFa,
    titleEn,
    "slug": slug.current,
    statementType,
    publishedAt,
    language,
    bodyFa,
    bodyEn,
    "authors": authors[]->{
      _id,
      nameFa,
      nameEn,
      roleFa,
      "slug": slug.current
    },
    "pdfUrl": pdfAsset.asset->url,
    status,
    seo ${seoProjection}
  }
`;

export const statementSlugsQuery = groq`
  *[_type == "statement" && status == "published"].slug.current
`;

export const statementsListQuery = groq`
  *[_type == "statement" && status == "published"] | order(publishedAt desc) {
    _id,
    titleFa,
    "slug": slug.current,
    statementType,
    publishedAt,
    "summary": seo.metaDescription
  }
`;

export const charterBySlugQuery = groq`
  *[_type == "charterDocument" && slug.current == $slug && status == "published"][0]{
    _id,
    _type,
    titleFa,
    docType,
    "slug": slug.current,
    versionLabel,
    effectiveDate,
    versionStatus,
    useNaskh,
    leadFa,
    bodyFa,
    sections[]{
      title,
      "anchor": anchor.current,
      body
    },
    "pdfUrl": pdfAsset.asset->url,
    status,
    seo ${seoProjection}
  }
`;

export const charterSlugsQuery = groq`
  *[_type == "charterDocument" && status == "published"].slug.current
`;

export const mediaArticleBySlugQuery = groq`
  *[_type == "mediaArticle" && slug.current == $slug && status == "published"][0]{
    _id,
    _type,
    titleFa,
    titleEn,
    "slug": slug.current,
    articleType,
    publishedAt,
    updatedAt,
    dekFa,
    sourceLabel,
    language,
    bodyFa,
    showHeroImage,
    "authors": authors[]->{
      _id,
      nameFa,
      nameEn,
      roleFa,
      "slug": slug.current
    },
    "pdfUrl": pdfAsset.asset->url,
    status,
    seo ${seoProjection}
  }
`;

export const mediaArticleSlugsQuery = groq`
  *[_type == "mediaArticle" && status == "published"].slug.current
`;

const historyEvidenceFields = `
  "id": _key,
  label,
  href
`;

export const historyTimelineQuery = groq`
  *[_type == "historyEra" && status == "published"] | order(order asc) {
    "id": _id,
    "slug": slug.current,
    title,
    timeframe,
    intro,
    summary,
    featured,
    deepDiveHref,
    "evidence": evidence[]{${historyEvidenceFields}},
    "events": *[
      _type == "historyEvent" &&
      status == "published" &&
      era._ref == ^._id
    ] | order(order asc, yearSort asc) {
      "id": _id,
      year,
      yearSort,
      title,
      "description": shortDescription,
      deepDiveHref,
      "evidence": evidence[]{${historyEvidenceFields}}
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_id == "siteSettings"][0]{
    organizationName,
    organizationNameEn,
    siteTitle,
    siteDescription,
    institutionalDescription,
    footerCopy,
    participateNavLabel,
    socialLinks[]{ label, url },
    pressEmail,
    officeEmail
  }
`;
