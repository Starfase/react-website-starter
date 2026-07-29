export const GALLERY_QUERY = `
*[_type == "gallery"] | order(order asc){
  _id,
  title,
  image
}
`;