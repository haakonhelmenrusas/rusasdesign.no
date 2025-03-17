import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsQuery } from '@/sanity/lib/queries';
import { ArticleCard, BackButton, Loading, Nav } from '@/components';

export default async function Blog() {
  const data = await sanityFetch({ query: postsQuery });

  return (
    <>
      <Nav />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8">Blogg</h1>
      <Suspense fallback={<Loading />}>
        <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
          {data?.map((post) => {
            return (
              <ArticleCard post={post} key={post._id} />
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
