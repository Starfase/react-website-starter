export const ANNOUNCEMENT_QUERY = `
*[_type == "announcement" && active == true][0]{
  message
}
`;
