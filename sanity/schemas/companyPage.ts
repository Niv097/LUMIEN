export const companyPage = {
  name: 'companyPage',
  title: 'Company Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
    },
    {
      name: 'missionHeading',
      title: 'Mission Heading',
      type: 'string',
    },
    {
      name: 'missionText',
      title: 'Mission Text',
      type: 'text',
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
      name: 'valuesHeading',
      title: 'Values Heading',
      type: 'string',
    },
    {
      name: 'values',
      title: 'Company Values',
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
      name: 'joinTeamHeading',
      title: 'Join Team Heading',
      type: 'string',
    },
    {
      name: 'joinTeamText',
      title: 'Join Team Text',
      type: 'text',
    },
  ],
}
