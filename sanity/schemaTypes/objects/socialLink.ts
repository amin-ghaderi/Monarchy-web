import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
  name: "socialLink",
  title: "شبکه اجتماعی",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "برچسب",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "نشانی",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "label" },
  },
});
