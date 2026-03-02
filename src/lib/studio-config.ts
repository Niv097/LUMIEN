/**
 * Studio Configuration - Only for Studio use
 * This file is imported only in client-side Studio components
 */

import { defineConfig, defineField, defineType } from 'sanity';
import { deskTool } from 'sanity/desk';
import { SANITY_PROJECT_ID, SANITY_DATASET } from './cms-config';

// ============================================================================
// SANITY SCHEMAS
// ============================================================================

export const homepageSchema = defineType({
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

export const schemaTypes = [homepageSchema];

// ============================================================================
// STUDIO CONFIGURATION
// ============================================================================

export const studioConfig = defineConfig({
  name: "default",
  title: "LUMIEN CMS",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

// Default export for sanity.config.ts
export default studioConfig;
