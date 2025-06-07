import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/types/Post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Fetching a post by its slug value.
 * @param slug
 *
 * @return {Post}
 */
export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  return { data, content } as Post;
}

/**
 * Fetching all posts, sorting them by date and returning the latest two.
 *
 * @param count
 * @return {Post}
 */
export function getLatestPosts(count = 2): Post[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return { data, content } as Post;
  });

  return posts.sort((a, b) => new Date(b.data.created_at).getTime() - new Date(a.data.created_at).getTime()).slice(0, count);
}

/**
 * Fetching all posts.
 *
 * @return {Post}
 */
export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files.map(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    return { data, content } as Post;
  });
}