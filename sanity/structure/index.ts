import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("پارمان پادشاهی ایرانیان")
    .items([
      S.listItem()
        .title("انتشارات")
        .child(
          S.list()
            .title("انتشارات")
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
            ]),
        ),
      S.listItem()
        .title("تاریخ")
        .child(
          S.list()
            .title("تاریخ")
            .items([
              S.listItem()
                .title("دوره‌ها")
                .child(
                  S.documentTypeList("historyEra")
                    .title("دوره‌های تاریخی")
                    .defaultOrdering([{ field: "order", direction: "asc" }]),
                ),
              S.listItem()
                .title("رویدادها")
                .child(
                  S.documentTypeList("historyEvent")
                    .title("رویدادهای تاریخی")
                    .defaultOrdering([
                      { field: "order", direction: "asc" },
                      { field: "yearSort", direction: "asc" },
                    ]),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("اسناد منشور")
        .child(
          S.documentTypeList("charterDocument")
            .title("اسناد")
            .defaultOrdering([{ field: "effectiveDate", direction: "desc" }]),
        ),
      S.listItem()
        .title("اشخاص")
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
