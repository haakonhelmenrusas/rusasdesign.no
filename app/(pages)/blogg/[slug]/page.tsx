import { defineQuery, type PortableTextBlock } from 'next-sanity';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postQuery } from '@/sanity/lib/queries';
import { BackButton, Category, DateComponent, MoreStories, Nav, PortableText } from '@/components';

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
    authors: { name: 'Haakon Helmen Rusås' },
    title: post?.title,
    description: post?.excerpt,
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const data = await sanityFetch({ query: postQuery, params });

  if (!data?._id) {
    return notFound();
  }

  return (
    <>
      <Nav />
      <BackButton />
      <article className="mb-6 lg:max-w-3xl mx-auto sm:px-6 lg:px-8">
        <h1
          className="text-balance mb-12 text-2xl font-medium leading-tight md:text-4xl lg:text-4xl">
          {data.title}
        </h1>
        <div className="md:mb-4 md:block">
          {data.category?.map((category, key) => (
            <Category key={key} title={category.title} />
          ))}
        </div>
        <div className="mx-auto">
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={data.date} />
            </div>
          </div>
        </div>
        {data.content?.length && (
          <PortableText
            className="max-w-3xl rounded-sm bg-gray-200 dark:bg-gray-800 dark:text-gray-50 text-gray-50"
            value={data.content as PortableTextBlock[]}
          />
        )}
      </article>
      <aside className="my-16">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-4xl">
          Flere artikler
        </h2>
        <Suspense>
          <MoreStories skip={data._id} limit={2} />
        </Suspense>
      </aside>
    </>
  );
}
