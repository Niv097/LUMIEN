export const developersPage = {
  name: 'developersPage',
  title: 'Developers Page',
  type: 'document',
  fields: [
    {
      name: 'domainLabel',
      title: 'Domain Label',
      type: 'string',
    },
    {
      name: 'headingLine1',
      title: 'Heading Line 1',
      type: 'string',
    },
    {
      name: 'headingLine2',
      title: 'Heading Line 2',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
    },
    {
      name: 'cards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'icon', title: 'Icon Name', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'guides',
      title: 'Popular Guides',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
