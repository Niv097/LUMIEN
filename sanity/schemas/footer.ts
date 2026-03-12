export const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'storytellingLine',
      title: 'Storytelling Line',
      type: 'string',
      description: 'e.g., "Innovate.Automate.Elevate."',
    },
    {
      name: 'columns',
      title: 'Footer Columns',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Column Title', type: 'string' },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'href', title: 'Link', type: 'string' },
                    { name: 'isModal', title: 'Opens Modal', type: 'boolean' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    },
  ],
}
