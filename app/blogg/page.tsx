import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { postsQuery } from '@/sanity/lib/queries';
import { ArticleCard, BackButton, Loading } from '@/components';
import NavWrapper from '@/components/nav/NavWrapper';

export default async function Blog() {
  const data = await sanityFetch({ query: postsQuery });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto">
      <NavWrapper />
      <BackButton />
      <Suspense fallback={<Loading />}>
        <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
          {data?.map((post) => {
            return (
              <ArticleCard post={post} key={post._id} />
            );
          })}
        </div>
      </Suspense>
    </div>
  );
}
