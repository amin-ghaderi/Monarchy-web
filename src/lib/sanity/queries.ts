import groq from "groq";

/**
 * GROQ queries — expanded in Sprint 1 (statements, charter, archive).
 */

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    _id,
    title
  }
`;
