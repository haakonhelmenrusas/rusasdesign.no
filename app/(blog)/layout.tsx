import '../globals.css';

import type { Metadata } from 'next';
import { toPlainText, VisualEditing } from 'next-sanity';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';

import { AlertBanner, Footer } from '@/components/';
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

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({ children }: { children: ReactNode; }) {
  const data = await sanityFetch({ query: settingsQuery });
  const footer = data?.footer || [];
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="no" className={`${inter.variable} bg-gray-200 dark:text-gray-50 dark:bg-gray-800 text-black h-full`}>
    <body className="min-h-screen flex flex-col">
    {isDraftMode && <AlertBanner />}
    <main className="grow">{children}</main>
    <Footer footer={footer} />
    {isDraftMode && <VisualEditing />}
    </body>
    </html>
  );
}
