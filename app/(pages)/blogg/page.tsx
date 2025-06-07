import { Suspense } from 'react';
import { ArticleCard, BackButton, Loading, Nav } from '@/components';

export default async function Blog() {
  //TODO: Fetch posts from markdown files
  return (
    <>
      <Nav />
      <BackButton />
      <h1 className="text-4xl font-bold mb-8">Blogg</h1>
      <Suspense fallback={<Loading />}>
        <div className="mb-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-16 lg:gap-x-16">
          {[]?.map((post) => {
            return (
              <ArticleCard post={post} key={post} />
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
