export const navbar = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    },
    {
      name: 'dropdownMenus',
      title: 'Dropdown Menus',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Menu Title', type: 'string' },
            {
              name: 'items',
              title: 'Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'href', title: 'Link', type: 'string' },
                    { name: 'description', title: 'Description', type: 'string' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'simpleLinks',
      title: 'Simple Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
  ],
}
