import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { Header, MoreStories } from '@/components/';
import { Image } from 'next-sanity/image';
import { Icon } from '@sanity/icons';

export default async function Page() {
  const data = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
      <Header title={data?.title} description={data?.description} />
      <section className="mb-8">
        <p className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:text-4xl">
          Bygger du en ny nettside? Vi kan hjelpe deg!
        </p>
        <p className="mb-4 text-lg font-semibold leading-tight tracking-tighter md:text-xl">
          Vi har lang erfaring med å bygge nettsider og kan hjelpe deg med alt fra design til
          utvikling.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="rounded-2xl overflow-hidden height-400 w-full">
          <Image
            src={'https://www.shutterstock.com/nb/image-illustration/responsive-web-design-studio-page-displayed-2528620173'}
            alt={''} width={440} height={400} loading="lazy" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="rounded-2xl flex bg-gray-700 dark:bg-gray-900 p-6">
            <div className="mr-2">
              <Icon aria-label="icon" width={40} height={40} symbol={'checkmark'} />
            </div>
            <div>
              <h4 className="text-gray-50 font-medium text-lg mb-2">Sanity - lag innhold</h4>
              <p className="text-gray-400 font-light leading-5">Sanity er et headless CMS som gjør det enkelt å lage
                innhold til
                nettsiden.</p>
            </div>
          </div>
          <div className="rounded-2xl flex bg-gray-700 dark:bg-gray-800 p-6">
            <div className="mr-2">
              <Icon aria-label="icon" width={40} height={40} symbol={'checkmark'} />
            </div>
            <div>
              <h4>Next.js - rask nettside</h4>
              <p>Next.js er et rammeverk for React som gjør nettsiden rask og effektiv.</p>
            </div>
          </div>
          <div className="rounded-2xl flex bg-gray-700 dark:bg-gray-800 p-6">
            <div className="mr-2">
              <Icon aria-label="icon" width={40} height={40} symbol={'checkmark'} />
            </div>
            <div>
              <h4>Netlify - hosting</h4>
              <p>Netlify er en tjeneste for hosting som gjør det enkelt å deploye nettsiden.</p>
            </div>
          </div>
        </div>
      </section>
      <aside>
        <h3 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
          Flere artikler
        </h3>
        <Suspense>
          <MoreStories skip={''} limit={5} />
        </Suspense>
      </aside>

    </div>
  );
}
