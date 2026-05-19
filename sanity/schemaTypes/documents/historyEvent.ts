import { defineField, defineType } from "sanity";

import { historyEvidenceType } from "../objects/historyEvidence";

export const historyEventType = defineType({
  name: "historyEvent",
  title: "رویداد تاریخی",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "era",
      title: "دوره",
      type: "reference",
      to: [{ type: "historyEra" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "سال (نمایشی)",
      type: "string",
      description: "مثال: ۱۲۸۵ یا ۱۹۰۶",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "yearSort",
      title: "سال (مرتب‌سازی)",
      type: "number",
      description: "عدد میلادی برای مرتب‌سازی، مثال: 1906",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "توضیح کوتاه",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "evidence",
      title: "مستندات",
      type: "array",
      of: [{ type: historyEvidenceType.name }],
    }),
    defineField({
      name: "order",
      title: "ترتیب در دوره",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "relatedContent",
      title: "محتوای مرتبط",
      type: "array",
      of: [
        { type: "reference", to: [{ type: "statement" }, { type: "mediaArticle" }] },
      ],
    }),
    defineField({
      name: "deepDiveHref",
      title: "پیوند کاوش عمیق (اختیاری)",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "وضعیت انتشار",
      type: "string",
      options: {
        list: [
          { title: "پیش‌نویس", value: "draft" },
          { title: "منتشر شده", value: "published" },
          { title: "بایگانی", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "ترتیب در دوره",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", year: "year", eraTitle: "era.title" },
    prepare({ title, year, eraTitle }) {
      return {
        title: title ?? "بدون عنوان",
        subtitle: [year, eraTitle].filter(Boolean).join(" · "),
      };
    },
  },
});
