import { Footer } from '@/components';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode; }) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];

  return (
    <>
      <main className="grow max-w-[420] lg:max-w-(--breakpoint-lg) mx-auto px-5 mt-8">
        {children}
      </main>
      <Footer footer={footer} />
    </>
  );
}