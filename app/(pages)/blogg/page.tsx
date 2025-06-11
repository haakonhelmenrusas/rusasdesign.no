import { Suspense } from 'react';
import { ArticleCard, BackButton, Loading, Nav } from '@/components';
import { getPosts } from '@/lib/posts';

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Nav />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8">Blogg</h1>
      <Suspense fallback={<Loading />}>
        <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
          {posts?.map((post) => {
            return (
              <ArticleCard key={post.data.id} metadata={post.data}  />
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
