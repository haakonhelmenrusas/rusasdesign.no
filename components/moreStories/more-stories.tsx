import { ArticleCard } from '@/components';
import { sanityFetch } from '@/sanity/lib/fetch';
import { moreStoriesQuery } from '@/sanity/lib/queries';
import { MoreStoriesQueryResult } from '@/sanity.types';
import { Suspense } from 'react';

export default async function MoreStories(params: { skip?: string, limit: number; }) {
  const data: MoreStoriesQueryResult = await sanityFetch({ query: moreStoriesQuery, params });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
        {data?.map((post) => {
          return (
            <ArticleCard key={post._id} post={post} />
          );
        })}
      </div>
    </Suspense>
  );
}
