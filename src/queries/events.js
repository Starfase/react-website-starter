export const EVENTS_QUERY = `
*[_type == "event"] | order(date asc){
  _id,
  title,
  date,
  location,
  description,
  image
}
`;
