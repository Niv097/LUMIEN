export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroBadge',
      title: 'Hero Badge',
      type: 'string',
    },
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'heroParagraph',
      title: 'Hero Paragraph',
      type: 'text',
    },
    {
      name: 'heroButtonText',
      title: 'Hero Button Text',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'string',
    },
    {
      name: 'aboutParagraph',
      title: 'About Paragraph',
      type: 'text',
    },
    {
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
    },
    {
      name: 'ctaParagraph',
      title: 'CTA Paragraph',
      type: 'text',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    },
  ],
}
