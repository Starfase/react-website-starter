export default {
  name: "service",
  title: "Weekly Services",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },

    {
      name: "icon",
      title: "Icon Name",
      type: "string",
      description:
        "Example: Sun, BookOpen, HeartHandshake",
    },

    {
      name: "day",
      title: "Day",
      type: "string",
    },

    {
      name: "time",
      title: "Time",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "day",
    },
  },
};