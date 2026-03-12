export const platformPage = {
  name: 'platformPage',
  title: 'Platform Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Page Subheading',
      type: 'text',
    },
    {
      name: 'modules',
      title: 'Platform Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'reliabilityFeatures',
      title: 'Reliability Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
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
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
    },
  ],
}
