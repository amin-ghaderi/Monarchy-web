import { defineField, defineType } from "sanity";

import { editorialBodyType } from "./editorialBody";

export const charterSectionType = defineType({
  name: "charterSection",
  title: "بخش سند",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "عنوان بخش",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "anchor",
      title: "شناسه پیوند (انگلیسی)",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "متن",
      type: editorialBodyType.name,
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
