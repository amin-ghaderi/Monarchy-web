import { defineField, defineType } from "sanity";

import { editorialBodyType } from "../objects/editorialBody";
import { seoType } from "../objects/seo";

export const mediaArticleType = defineType({
  name: "mediaArticle",
  title: "مطلب رسانه‌ای",
  type: "document",
  fields: [
    defineField({
      name: "titleFa",
      title: "عنوان",
      type: "string",
      validation: (rule) => rule.required().min(5).max(200),
    }),
    defineField({
      name: "titleEn",
      title: "عنوان (انگلیسی)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "نامک",
      type: "slug",
      options: { source: "titleFa", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "articleType",
      title: "نوع مطلب",
      type: "string",
      options: {
        list: [
          { title: "مصاحبه", value: "interview" },
          { title: "تحلیل", value: "analysis" },
          { title: "حضور رسانه‌ای", value: "appearance" },
          { title: "سرمقاله", value: "editorial" },
        ],
        layout: "radio",
      },
      initialValue: "analysis",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "تاریخ انتشار",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "تاریخ به‌روزرسانی",
      type: "datetime",
    }),
    defineField({
      name: "dekFa",
      title: "خلاصه / لید",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sourceLabel",
      title: "منبع",
      type: "string",
    }),
    defineField({
      name: "language",
      title: "زبان",
      type: "string",
      options: {
        list: [
          { title: "فارسی", value: "fa" },
          { title: "انگلیسی", value: "en" },
          { title: "دو زبانه", value: "bilingual" },
        ],
        layout: "radio",
      },
      initialValue: "fa",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyFa",
      title: "متن",
      type: editorialBodyType.name,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "authors",
      title: "نویسندگان",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
    }),
    defineField({
      name: "showHeroImage",
      title: "نمایش تصویر شاخص",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "heroImage",
      title: "تصویر شاخص",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => !parent?.showHeroImage,
    }),
    defineField({
      name: "pdfAsset",
      title: "فایل PDF",
      type: "file",
      options: { accept: "application/pdf" },
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
  preview: {
    select: {
      title: "titleFa",
      subtitle: "articleType",
      date: "publishedAt",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: title ?? "بدون عنوان",
        subtitle: [subtitle, date?.slice(0, 10)].filter(Boolean).join(" · "),
      };
    },
  },
});
