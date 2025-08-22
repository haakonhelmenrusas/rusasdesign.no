import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { Badge } from '@/components/badge/Badge';
import RelatedPosts from '@/components/relatedPosts/RelatedPosts';
import { ArrowLeft, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale/nb';
import Link from 'next/link';
import Markdown from '@/components/markdown/Markdown';

//@ts-ignore
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="bg-card border-2 border-border rounded-xl p-4 md:p-8 shadow-2xl large-spacing">
        <Link
          href="/"
          className="mb-4 md:mb-6 hover:-translate-x-2 transition-all duration-300 font-bold text-base md:text-lg px-4 md:px-6 py-2 md:py-3
                    hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 md:gap-4 text-muted-foreground mb-4 md:mb-6 text-base md:text-lg">
          <Calendar className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-bold">{format(new Date(post.data.created_at), 'd LLLL, yyyy', { locale: nb })}</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight tracking-tight
                       bg-gradient-to-r from-primary via-accent to-destructive
                       bg-clip-text text-transparent">
          {post.data.title}
        </h1>

        <div className="flex flex-wrap gap-2 md:gap-4">
          {post.data.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold cursor-pointer transition-all duration-300
                        hover:scale-110 hover:bg-accent hover:text-accent-foreground border-2 border-border
                        hover:border-accent"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="bg-card border-2 border-border rounded-xl p-4 md:p-8 shadow-xl large-spacing">
        <div className="prose prose-gray max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
      <RelatedPosts
        currentPost={post}
      />
    </article>
  );
};
