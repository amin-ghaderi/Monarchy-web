import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "تنظیمات سایت",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "عنوان سایت",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "توضیحات سایت",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "pressEmail",
      title: "ایمیل روابط عمومی",
      type: "string",
    }),
    defineField({
      name: "officeEmail",
      title: "ایمیل دبیرخانه",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "تنظیمات سایت" };
    },
  },
});
