import Link from 'next/link';
import { projectsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/fetch';
import NavWrapper from '@/components/nav/NavWrapper';
import { BackButton } from '@/components';

export default async function Projects() {
  const data = await sanityFetch({ query: projectsQuery });

  return (
    <div className="max-w-(--breakpoint-lg) mx-auto">
      <NavWrapper />
      <BackButton />
      <section>
        <h1>Prosjekter</h1>
        <p>Her er noen av prosjektene jeg har jobbet med.</p>
        <div className="mb-16 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-16">
          {data ? data?.map((project: { _id: any; title: any; slug: any; }) => {
            const { _id, title, slug } = project;
            return (
              <article key={_id} className="shadow-lg p-8 bg-gray-100 dark:text-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="text-balance mb-3 text-2xl leading-snug">
                  <Link href={`/prosjekter/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>
              </article>
            );
          }) : <p>Ingen prosjekter å vise.</p>}
        </div>
      </section>
    </div>
  );
}