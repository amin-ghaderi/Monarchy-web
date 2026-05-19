import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("پارمان پادشاهی ایرانیان")
    .items([
      S.listItem()
        .title("بیانیه‌ها")
        .child(
          S.documentTypeList("statement")
            .title("بیانیه‌ها")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.listItem()
        .title("مطالب رسانه‌ای")
        .child(
          S.documentTypeList("mediaArticle")
            .title("مطالب رسانه‌ای")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("اسناد")
        .child(
          S.documentTypeList("charterDocument")
            .title("اسناد منشور")
            .defaultOrdering([{ field: "effectiveDate", direction: "desc" }]),
        ),
      S.listItem()
        .title("رهبران")
        .child(
          S.documentTypeList("person")
            .title("اشخاص")
            .defaultOrdering([{ field: "sortOrder", direction: "asc" }]),
        ),
      S.divider(),
      S.listItem()
        .title("تنظیمات سایت")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("تنظیمات سایت"),
        ),
    ]);
