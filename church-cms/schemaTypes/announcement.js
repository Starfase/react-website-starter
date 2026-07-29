export default {
  name: 'announcement',
  title: 'Announcements',
  type: 'document',

  fields: [
    {
      name: 'message',
      title: 'Announcement',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
