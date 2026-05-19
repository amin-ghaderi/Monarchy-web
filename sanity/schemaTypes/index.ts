import { charterDocumentType } from "./documents/charterDocument";
import { historyEraType } from "./documents/historyEra";
import { historyEventType } from "./documents/historyEvent";
import { mediaArticleType } from "./documents/mediaArticle";
import { personType } from "./documents/person";
import { siteSettingsType } from "./documents/siteSettings";
import { statementType } from "./documents/statement";
import { charterSectionType } from "./objects/charterSection";
import { editorialBodyType } from "./objects/editorialBody";
import { historyEvidenceType } from "./objects/historyEvidence";
import { seoType } from "./objects/seo";
import { socialLinkType } from "./objects/socialLink";

export const schemaTypes = [
  seoType,
  editorialBodyType,
  charterSectionType,
  historyEvidenceType,
  socialLinkType,
  personType,
  statementType,
  mediaArticleType,
  historyEraType,
  historyEventType,
  charterDocumentType,
  siteSettingsType,
];
