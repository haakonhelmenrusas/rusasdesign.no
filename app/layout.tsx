import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans, Oswald } from 'next/font/google';
import { ReactNode } from 'react';
import { ClarityInit } from '@/lib/ClarityInit';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rusås Design',
    description: 'En blogg fra en web utvikler',
    metadataBase: new URL('https://rusasdesign.no'),
    openGraph: {
      title: 'Rusås Design',
      description: 'En blogg fra en web utvikler',
      url: 'https://rusasdesign.no',
      siteName: 'Rusås Design',
      locale: 'no_NO',
      type: 'website',
    }
  };
}

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="nb-NO" className={`${oswald.variable} ${notoSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-3 py-2 bg-white dark:bg-black text-sm rounded"
        >
          Skip to content
        </a>
        <ClarityInit />
        <main id="content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
