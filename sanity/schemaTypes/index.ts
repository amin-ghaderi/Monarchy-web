import { charterDocumentType } from "./documents/charterDocument";
import { personType } from "./documents/person";
import { siteSettingsType } from "./documents/siteSettings";
import { mediaArticleType } from "./documents/mediaArticle";
import { statementType } from "./documents/statement";
import { charterSectionType } from "./objects/charterSection";
import { editorialBodyType } from "./objects/editorialBody";
import { seoType } from "./objects/seo";

export const schemaTypes = [
  seoType,
  editorialBodyType,
  charterSectionType,
  personType,
  statementType,
  mediaArticleType,
  charterDocumentType,
  siteSettingsType,
];
