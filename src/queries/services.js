export const SERVICES_QUERY = `
*[_type == "service"] | order(order asc){
  _id,
  title,
  icon,
  day,
  time,
  description,
  order
}
`;
