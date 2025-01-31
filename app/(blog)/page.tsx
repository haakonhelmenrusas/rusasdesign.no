import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { heroQuery, settingsQuery } from '@/sanity/lib/queries';
import { Header, HeroPost, MoreStories } from '@/components/';

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch({
      query: settingsQuery,
    }),
    sanityFetch({ query: heroQuery }),
  ]);

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
      <Header title={settings?.title} description={settings?.description} />
      {heroPost ? (
        <HeroPost
          title={heroPost.title}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          date={heroPost.date}
          author={heroPost.author}
        />
      ) : null}
      {heroPost?._id && (
        <aside>
          <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
            Flere artikler
          </h2>
          <Suspense>
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )}
    </div>
  );
}
