import Link from 'next/link';
import { Category, DateComponent } from '@/components';
import { Key } from 'react';

export default async function ArticleCard({ metadata }: any) {
  const { title, slug, categories, created_at, description } = metadata;

  return (
    <article
      className="shadow-lg p-6 bg-gray-100 dark:text-gray-50 dark:bg-gray-900 rounded-md rounded-br-4xl">
      <h3 className="text-balance mb-3 text-xl leading-snug">
        <Link href={`/blogg/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        <DateComponent dateString={created_at} />
      </div>
      {description && (
        <p className="text-pretty mb-4 text-[16] leading-relaxed">
          {description}
        </p>
      )}
      {categories?.map((category: string, key: Key | null | undefined) => (
        <Category key={key} title={category} />
      ))}
    </article>
  );
}