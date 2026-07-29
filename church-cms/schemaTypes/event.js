export default {
  name: "event",
  title: "Upcoming Programs",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Program Title",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "image",
      title: "Flyer",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};