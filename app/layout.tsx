import './globals.css';

import type { Metadata } from 'next';
import { Noto_Sans, Oswald } from 'next/font/google';
import { ReactNode } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rusås Design",
    description: "En blogg fra en web utvikler",
  };
}

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: '--font-noto_sans',
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: ReactNode; }) {
  return (
    <html lang="no-nb"
          className={`${oswald.variable} ${notoSans.variable} bg-gray-200 dark:text-gray-50 dark:bg-gray-800 text-black h-full`}>
    <body className="min-h-screen flex flex-col">
    {children}
    </body>
    </html>
  );
}
