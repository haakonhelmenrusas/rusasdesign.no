import Link from 'next/link';
import { Category, DateComponent } from '@/components';

interface ArticleCardProps {
  post: {
    _id: string;
    title: string;
    status: 'draft' | 'published';
    slug: string | null;
    excerpt: string | null;
    category: Array<{
      title: string | 'Uncategorized';
    }> | null;
    date: string;
  };
}

export default async function ArticleCard({ post }: ArticleCardProps) {
  const { title, slug, excerpt, category } = post;
  return (
    <article
      className="shadow-lg p-8 bg-gray-100 dark:text-gray-50 dark:bg-gray-900 rounded-md rounded-br-4xl">
      <h3 className="text-balance mb-3 text-2xl leading-snug">
        <Link href={`/blogg/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        <DateComponent dateString={post.date} />
      </div>
      {excerpt && (
        <p className="text-pretty mb-4 text-lg leading-relaxed">
          {excerpt}
        </p>
      )}
      {category?.map((category, key) => (
        <Category key={key} title={category.title} />
      ))}
    </article>
  );
}