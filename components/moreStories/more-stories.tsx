import { ArticleCard } from '@/components';
import { Suspense } from 'react';
import { getLatestPosts } from '@/lib/posts';

export default async function MoreStories() {
  const latestPosts = getLatestPosts();

  return (
    <Suspense fallback={<div>Laster artikler</div>}>
      <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
        {latestPosts?.map((post) => {
          return (
            <ArticleCard key={post.data.id} metadata={post.data} />
          );
        })}
      </div>
    </Suspense>
  );
}
