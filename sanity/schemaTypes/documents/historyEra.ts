import { defineField, defineType } from "sanity";

import { seoType } from "../objects/seo";
import { historyEvidenceType } from "../objects/historyEvidence";

export const historyEraType = defineType({
  name: "historyEra",
  title: "دوره تاریخی",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "نامک",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "timeframe",
      title: "بازه زمانی",
      type: "string",
      description: "مثال: ۱۲۸۵ — ۱۲۹۰ ش",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "مقدمه",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "خلاصه تاریخی",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "ترتیب نمایش",
      type: "number",
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "featured",
      title: "دوره ویژه",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "evidence",
      title: "مستندات دوره",
      type: "array",
      of: [{ type: historyEvidenceType.name }],
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
    defineField({
      name: "seo",
      title: "سئو",
      type: seoType.name,
    }),
  ],
  orderings: [
    {
      title: "ترتیب نمایش",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "timeframe", order: "order" },
    prepare({ title, subtitle, order }) {
      return {
        title: title ?? "بدون عنوان",
        subtitle: [subtitle, order != null ? `#${order}` : null].filter(Boolean).join(" · "),
      };
    },
  },
});
