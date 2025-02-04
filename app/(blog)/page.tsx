import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { Header, MoreStories } from '@/components/';

export default async function Page() {
  const data = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
      <Header title={data?.title} description={data?.description} />

      <aside>
        <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
          Flere artikler
        </h2>
        <Suspense>
          <MoreStories skip={''} limit={5} />
        </Suspense>
      </aside>

    </div>
  );
}
