export default {
  name: 'churchInfo',
  title: 'Church Information',
  type: 'document',

  fields: [
    // ==========================
    // Church Details
    // ==========================

    {
      name: 'churchName',
      title: 'Church Name',
      type: 'string',
    },

    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },

    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },

    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },

    {
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
    },

    {
      name: 'map',
      title: 'Google Map Link',
      type: 'url',
    },

    // ==========================
    // About Section
    // ==========================

    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    },

    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
      rows: 5,
    },

    {
      name: 'aboutHighlights',
      title: 'About Highlights',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
