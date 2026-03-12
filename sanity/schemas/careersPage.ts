export const careersPage = {
  name: 'careersPage',
  title: 'Careers Page',
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
      name: 'benefitsHeading',
      title: 'Benefits Heading',
      type: 'string',
    },
    {
      name: 'benefits',
      title: 'Benefits',
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
      name: 'jobOpenings',
      title: 'Job Openings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Job Title', type: 'string' },
            { name: 'department', title: 'Department', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'type', title: 'Job Type', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    },
  ],
}
