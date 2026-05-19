import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "سئو",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "عنوان متا",
      type: "string",
      description: "حداکثر ۷۰ کاراکتر توصیه می‌شود",
      validation: (rule) => rule.max(70).warning("عنوان متا بیش از حد طولانی است"),
    }),
    defineField({
      name: "metaDescription",
      title: "توضیحات متا",
      type: "text",
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning("توضیحات متا بیش از حد طولانی است"),
    }),
    defineField({
      name: "ogImage",
      title: "تصویر اشتراک‌گذاری",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      title: "عدم ایندکس",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
