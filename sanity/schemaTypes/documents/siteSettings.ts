import { defineField, defineType } from "sanity";

import { socialLinkType } from "../objects/socialLink";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "تنظیمات سایت",
  type: "document",
  fields: [
    defineField({
      name: "organizationName",
      title: "نام نهاد",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "organizationNameEn",
      title: "نام نهاد (انگلیسی)",
      type: "string",
    }),
    defineField({
      name: "siteTitle",
      title: "عنوان سایت (سئو)",
      type: "string",
    }),
    defineField({
      name: "siteDescription",
      title: "توضیحات سایت (سئو)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "institutionalDescription",
      title: "توضیح نهادی (کوتاه)",
      type: "text",
      rows: 3,
      description: "نمایش در پاورقی و بخش‌های معرفی",
    }),
    defineField({
      name: "footerCopy",
      title: "متن پاورقی",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "participateNavLabel",
      title: "برچسب دکمه مشارکت",
      type: "string",
      initialValue: "مشارکت",
    }),
    defineField({
      name: "socialLinks",
      title: "شبکه‌های اجتماعی",
      type: "array",
      of: [{ type: socialLinkType.name }],
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
