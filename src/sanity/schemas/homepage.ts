import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroBadgeText",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "heroSegments",
      title: "Hero Title Segments",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", title: "Text", type: "string", validation: (r) => r.required() }),
            defineField({ name: "className", title: "Class Name", type: "string" }),
            defineField({ name: "br", title: "Line Break After", type: "boolean" }),
          ],
        },
      ],
    }),
    defineField({
      name: "heroParagraph",
      title: "Hero Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "platformTitle",
      title: "Platform Overview Title",
      type: "string",
    }),
    defineField({
      name: "platformParagraph",
      title: "Platform Overview Paragraph",
      type: "text",
      rows: 3,
    }),
  ],
});
