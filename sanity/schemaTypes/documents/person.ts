import { defineField, defineType } from "sanity";

export const personType = defineType({
  name: "person",
  title: "شخص",
  type: "document",
  fields: [
    defineField({
      name: "nameFa",
      title: "نام (فارسی)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nameEn",
      title: "نام (انگلیسی)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "نامک",
      type: "slug",
      options: { source: "nameFa", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "roleFa",
      title: "سمت (فارسی)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "roleType",
      title: "نوع سمت",
      type: "string",
      options: {
        list: [
          { title: "دبیر", value: "secretary" },
          { title: "سخنگو", value: "spokesperson" },
          { title: "شورا", value: "council" },
          { title: "مشاور", value: "advisor" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "bioFa",
      title: "زندگینامه",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "portrait",
      title: "تصویر",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "متن جایگزین",
        }),
      ],
    }),
    defineField({
      name: "publicEmail",
      title: "ایمیل عمومی",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "وضعیت",
      type: "string",
      options: {
        list: [
          { title: "منتشر شده", value: "published" },
          { title: "بایگانی", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "published",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sortOrder",
      title: "ترتیب نمایش",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "nameFa", subtitle: "roleFa" },
  },
});
