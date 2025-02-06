import { defineQuery, type PortableTextBlock } from 'next-sanity';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { sanityFetch } from '@/sanity/lib/fetch';
import { postQuery, settingsQuery } from '@/sanity/lib/queries';
import { Category, DateComponent, MoreStories, PortableText } from '@/components';

type Props = {
  params: Promise<{ slug: string }>;
};

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`,
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: 'published',
    stega: false,
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  });

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-5 dark:text-white dark:bg-gray-800">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {settings?.title || ''}
        </Link>
      </h2>
      <article className="mb-6">
        <h1
          className="text-balance mb-12 text-2xl font-medium leading-tight md:text-4xl lg:text-4xl">
          {post.title}
        </h1>
        <div className="md:mb-4 md:block">
          {post.category && (
            <Category title={post.category.title} />
          )}
        </div>
        <div className="mx-auto">
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={post.date} />
            </div>
          </div>
        </div>
        {post.content?.length && (
          <PortableText
            className="mx-auto max-w-3xl p-12 rounded-sm bg-gray-500 dark:bg-gray-800 dark:text-gray-50 text-gray-50"
            value={post.content as PortableTextBlock[]}
          />
        )}
      </article>
      <aside>
        <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-4xl">
          Flere artikler
        </h2>
        <Suspense>
          <MoreStories skip={post._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  );
}
