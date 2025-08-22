import Footer from '@/components/footer/Footer';
import { ReactNode } from 'react';

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