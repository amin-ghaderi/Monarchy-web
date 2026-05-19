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

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    siteDescription,
    pressEmail,
    officeEmail
  }
`;
