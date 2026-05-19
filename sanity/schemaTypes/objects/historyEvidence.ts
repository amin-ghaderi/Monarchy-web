import { defineField, defineType } from "sanity";

export const historyEvidenceType = defineType({
  name: "historyEvidence",
  title: "مستند / منبع",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "عنوان",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "پیوند (اختیاری)",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "label" },
  },
});
