export const CHURCH_INFO_QUERY = `
*[_type == "churchInfo"][0]{
  churchName,
  address,
  phone,
  email,
  facebook,
  whatsapp,
  map,
  aboutTitle,
  aboutDescription,
  aboutHighlights
}
`;
