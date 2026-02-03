import { ReactNode } from 'react';
import Footer from '@/components/footer/Footer';

export default async function Layout({ children }: { children: ReactNode; }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}