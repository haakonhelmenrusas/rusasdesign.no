import { Header, MoreStories } from '@/components';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
import Nav from '@/components/nav/Nav';

export default async function Home() {
  const data = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <>
      <Nav />
      <Header title={data?.title} description={data?.description} />
      <section className="my-50">
        <h3 className="mb-8 text-4xl font-medium leading-tight tracking-tighter md:text-4xl">
          Hei, jeg er Haakon!
        </h3>
        <p className="mb-4 text-lg font-light">
          En kreativ utvikler som elsker å lage ting. Jeg har jobbet med
          webutvikling i over 10 år, og har erfaring med både UX Design, web og apputvikling.
          Jeg har jobbet med alt fra små enkle nettsider til store komplekse webapplikasjoner. Jeg har også jobbet med
          design og utvikling av mobilapplikasjoner.
        </p>
      </section>
      <aside>
        <h3 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-4xl">
          <Link className="hover:underline" href="/blogg">Blogg</Link>
        </h3>
        <MoreStories skip={''} limit={5} />
      </aside>
    </>
  );
}