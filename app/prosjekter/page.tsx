import Link from 'next/link';

export default async function Prosjekter() {
  return (
    <div className={'max-w-3xl mx-auto px-5 dark:text-white dark:bg-gray-800'}>
      <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Rusås Design
        </Link>
      </h2>
      <section>
        <h1>Prosjekter</h1>
        <p>Her er noen av prosjektene jeg har jobbet med.</p>
      </section>
    </div>
  );
}