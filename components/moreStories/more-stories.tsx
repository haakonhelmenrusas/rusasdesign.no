import Link from 'next/link';
import { Category, DateComponent } from '@/components';
import { sanityFetch } from '@/sanity/lib/fetch';
import { moreStoriesQuery } from '@/sanity/lib/queries';
import { MoreStoriesQueryResult } from '@/sanity.types';

export default async function MoreStories(params: { skip?: string, limit: number; }) {
  const data: MoreStoriesQueryResult = await sanityFetch({ query: moreStoriesQuery, params });

  return (
    <>
      <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {data?.map((post) => {
          const { _id, title, slug, excerpt, category } = post;
          return (
            <article key={_id} className="shadow-lg p-8 bg-gray-100 dark:text-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-balance mb-3 text-2xl leading-snug">
                <Link href={`/posts/${slug}`} className="hover:underline">
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
              {category && (
                <Category title={category.title} />
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
