export default {
  name: 'prayerRequest',
  title: 'Prayer Requests',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'request',
      title: 'Prayer Request',
      type: 'text',
    },
    {
      name: 'createdAt',
      title: 'Created',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
