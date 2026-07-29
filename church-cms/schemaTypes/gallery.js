export default {
  name: 'gallery',
  title: 'About Gallery',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Image Title',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
