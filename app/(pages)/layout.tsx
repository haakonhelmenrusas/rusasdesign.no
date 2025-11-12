import { ReactNode } from 'react';
import Footer from '@/components/footer/Footer';

export default async function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      <main className="grow max-w-[420] lg:max-w-(--breakpoint-xl) mx-auto px-5 mt-8">
        {children}
      </main>
      <Footer />
    </>
  );
}