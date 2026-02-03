import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Noto_Sans, Oswald } from 'next/font/google';
import { ReactNode } from 'react';
import { ClarityInit } from '@/lib/ClarityInit';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Rusås Design',
    description: 'En blogg fra en web utvikler med 10 års erfaring i webutvikling, UX design og app-utvikling',
    metadataBase: new URL('https://rusasdesign.no'),
    openGraph: {
      title: 'Rusås Design',
      description: 'En blogg fra en web utvikler',
      url: 'https://rusasdesign.no',
      siteName: 'Rusås Design',
      locale: 'no_NO',
      type: 'website',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Rusås Design',
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
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
      <head>
        <meta name="color-scheme" content="light dark" />
        <title>Rusås Design</title>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ClarityInit />
          {children}
      </body>
    </html>
  );
}
