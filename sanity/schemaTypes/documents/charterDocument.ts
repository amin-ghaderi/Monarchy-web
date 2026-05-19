import { defineField, defineType } from "sanity";

import { charterSectionType } from "../objects/charterSection";
import { editorialBodyType } from "../objects/editorialBody";
import { seoType } from "../objects/seo";

export const charterDocumentType = defineType({
  name: "charterDocument",
  title: "سند منشور",
  type: "document",
  fields: [
    defineField({
      name: "titleFa",
      title: "عنوان",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "docType",
      title: "نوع سند",
      type: "string",
      options: {
        list: [
          { title: "مرامنامه", value: "motto" },
          { title: "اساسنامه", value: "constitution" },
          { title: "سوگندنامه", value: "oath" },
          { title: "راهنما", value: "guide" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "نامک مسیر",
      type: "slug",
      description: "باید با مسیر سایت همخوان باشد: motto | constitution | oath",
      options: { source: "docType", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "versionLabel",
      title: "برچسب نسخه",
      type: "string",
      description: "مثال: نگارش دوم",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "effectiveDate",
      title: "تاریخ اجرا",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "versionStatus",
      title: "وضعیت نسخه",
      type: "string",
      options: {
        list: [
          { title: "نسخه جاری", value: "current" },
          { title: "بایگانی", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "current",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "useNaskh",
      title: "قلم نستعلیق (برای سوگندنامه)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "leadFa",
      title: "خلاصه",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bodyFa",
      title: "متن کامل (تک‌بلوک)",
      type: editorialBodyType.name,
      description: "برای اسناد کوتاه. برای اساسنامه از بخش‌ها استفاده کنید.",
    }),
    defineField({
      name: "sections",
      title: "بخش‌ها (فهرست مطالب)",
      type: "array",
      of: [{ type: charterSectionType.name }],
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
    select: { title: "titleFa", subtitle: "docType", version: "versionLabel" },
    prepare({ title, subtitle, version }) {
      return {
        title: title ?? "سند",
        subtitle: [subtitle, version].filter(Boolean).join(" · "),
      };
    },
  },
});
