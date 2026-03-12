export const solutionsPage = {
  name: 'solutionsPage',
  title: 'Solutions Page',
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
      name: 'solutions',
      title: 'Solutions',
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
  ],
}
