import { defineQuery } from 'next-sanity';

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  category->{"title": coalesce(title, "Uncategorized")},
  "date": coalesce(date, _updatedAt),
`;

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`);

export const projectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    content,
  }
`);
