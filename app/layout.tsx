import './globals.css';

import type { Metadata } from 'next';
import { toPlainText, VisualEditing } from 'next-sanity';
import { Noto_Sans, Oswald } from 'next/font/google';
import { draftMode } from 'next/headers';

import { AlertBanner } from '@/components';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { ReactNode } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });
  const title = settings?.title || 'Untitled';
  const description = settings?.description || [];

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
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
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="no-nb"
          className={`${oswald.variable} ${notoSans.variable} bg-gray-200 dark:text-gray-50 dark:bg-gray-800 text-black h-full`}>
    <body className="min-h-screen flex flex-col">
    {isDraftMode && <AlertBanner />}
    {children}
    {isDraftMode && <VisualEditing />}
    </body>
    </html>
  );
}
