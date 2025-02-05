import { Header, MoreStories } from '@/components';
import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';


export default async function Home() {
  const data = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
      <Header title={data?.title} description={data?.description} />
      <section className="my-30">
        <h3 className="mb-8 text-4xl font-medium leading-tight tracking-tighter md:text-4xl">
          Hei, jeg er Haakon!
        </h3>
        <p className="mb-4 text-lg font-light md:text-xl">
          En kreativ utvikler som elsker å lage ting. Jeg har jobbet med
          webutvikling i over 10 år, og har erfaring med både UX Design, web og apputvikling.
        </p>
        <p className="mb-4 text-lg font-light md:text-xl">
          Jeg har jobbet med alt fra små enkle nettsider til store komplekse webapplikasjoner. Jeg har også jobbet med
          design og utvikling av mobilapplikasjoner. Jeg er veldig opptatt av å lage gode brukeropplevelser.
        </p>
        <p className="mb-4 text-lg font-light md:text-xl">Om du vil lese litt i bloggen så er det
          en <Link className="dark:text-blue-300 hover:underline" href="/blogg"
                   aria-label="lenke til bloggen">lenke
            her</Link>, <Link className="dark:text-blue-300 hover:underline" href="/prosjekter"
                              aria-label="lenke til prosjekter">her er</Link> noen av prosjektene jeg
          gjort, og her kan du lese litt mer om <Link className="dark:text-blue-300 hover:underline"
                                                      href="/om-meg">meg</Link>.</p>
      </section>
      <aside>
        <h3 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
          <Link className="hover:underline" href="/blogg">Blogg</Link>
        </h3>
        <Suspense>
          <MoreStories skip={''} limit={5} />
        </Suspense>
      </aside>
    </div>
  );
}