import { defineField, defineType } from "sanity";

import { editorialBodyType } from "../objects/editorialBody";
import { seoType } from "../objects/seo";

export const statementType = defineType({
  name: "statement",
  title: "بیانیه",
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
      name: "statementType",
      title: "نوع بیانیه",
      type: "string",
      options: {
        list: [
          { title: "بیانیه رسمی", value: "official" },
          { title: "اطلاعیه مطبوعاتی", value: "press" },
          { title: "امنیتی", value: "security" },
          { title: "اصلاحی", value: "amendment" },
        ],
        layout: "radio",
      },
      initialValue: "official",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "تاریخ انتشار",
      type: "datetime",
      validation: (rule) => rule.required(),
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
      title: "متن بیانیه",
      type: editorialBodyType.name,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyEn",
      title: "متن (انگلیسی)",
      type: editorialBodyType.name,
    }),
    defineField({
      name: "authors",
      title: "نویسندگان / امضاکنندگان",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
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
      subtitle: "statementType",
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
