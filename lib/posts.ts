import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  return { metadata: data, content };
}

export function getLatestPosts(count = 2) {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return { metadata: data, content };
  });

  const sortedPosts = posts.sort((a, b) => b.metadata.date - a.metadata.date);

  return sortedPosts.slice(0, count);
}