import { defineArrayMember, defineType } from "sanity";

/**
 * Constrained Portable Text — institutional editorial only.
 * Blocks: paragraph, h2, h3, quote, bullet list.
 * Marks: links only (no colors, no arbitrary decorators).
 */
export const editorialBodyType = defineType({
  name: "editorialBody",
  title: "متن تحریری",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "پاراگراف", value: "normal" },
        { title: "عنوان ۲", value: "h2" },
        { title: "عنوان ۳", value: "h3" },
        { title: "نقل‌قول", value: "blockquote" },
      ],
      lists: [{ title: "فهرست", value: "bullet" }],
      marks: {
        decorators: [],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "پیوند",
            fields: [
              {
                name: "href",
                type: "url",
                title: "نشانی",
                validation: (rule) =>
                  rule.required().uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
              },
              {
                name: "openInNewTab",
                type: "boolean",
                title: "باز شدن در زبانه جدید",
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
  ],
});
