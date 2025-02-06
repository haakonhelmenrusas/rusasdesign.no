import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import { Category, DateComponent } from '@/components';

export default async function Blog() {
  const data = await sanityFetch({ query: postsQuery });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Rusås Design
        </Link>
      </h2>
      <Suspense>
        <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-16">
          {data?.map((post) => {
            const { _id, title, slug, excerpt, category } = post;
            return (
              <article key={_id} className="shadow-lg p-8 bg-gray-100 dark:text-gray-50 dark:bg-gray-900 rounded-lg">
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
                {category && (
                  <Category title={category.title} />
                )}
              </article>
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
