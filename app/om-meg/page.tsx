import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';

export default async function About() {
  const data = await sanityFetch({ query: settingsQuery });

  return (
    <div className="max-w-3xl mx-auto px-5 dark:text-white dark:bg-gray-800">
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          {data?.title || ''}
        </Link>
      </h2>
      <section>
        <h1 className="dark:text-gray-50 lg:text-4xl mb-8">Om meg</h1>
        <p>Mitt navn er Haakon Helmen Rusås. Jeg har en bachelor i IT med fokus på Interaksjonsdesign.</p>
        <p>Har jobbet med webutvikling i over 10 år, og har erfaring med både UX Design, web og apputvikling.</p>
        <p>Jobber til daglig som Lead Software Engineer i Oslo. På fritiden liker jeg å jobbe i hagen, dyrke min egne
          grønnsaker og jobbe med hendene.</p>
      </section>
    </div>
  );
}