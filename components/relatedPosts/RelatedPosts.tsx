import BlogCard from '@/components/blogCard/BlogCard';
import { getPosts } from '@/lib/posts';
import { Post } from '@/types/Post';

interface RelatedPostsProps {
  currentPost: Post;
}

export default function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const allPosts = getPosts();

  const relatedPosts = allPosts
    .filter(post => post.data.id !== currentPost.data.id)
    .map(post => ({
      ...post,
      sharedTags: post.data.tags.filter(tag => currentPost.data.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, 2);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <div className="mb-8">
        <h2 className="mb-3 text-4xl font-bold">Andre artikler</h2>
        <p className="text-muted-foreground">
          Fortsett lese om lignende emner
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
          <BlogCard
            key={post.data.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
};