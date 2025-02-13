import { defineQuery } from 'next-sanity';

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  category->{"title": coalesce(title, "Uncategorized")},
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
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

export const categoryQuery = defineQuery(`
  *[_type == "category" && slug.current == $slug] {
    _id,
    title,
    "posts": *[_type == "post" && references(^._id)] {
      ${postFields}
    }
  } [0]
`);

export const projectsQuery = defineQuery(`
  *[_type == "project" | order(date desc, _updatedAt desc)] {
    _id,
    title,
    slug,
    content,
  }
`);
