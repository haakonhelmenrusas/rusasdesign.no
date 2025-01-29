import '../globals.css';

import type { Metadata } from 'next';
import { type PortableTextBlock, toPlainText, VisualEditing } from 'next-sanity';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';

import { AlertBanner, PortableText } from '@/components/';
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
    <html lang="no" className={`${inter.variable} bg-white text-black`}>
    <body>
    <section className="min-h-screen">
      {isDraftMode && <AlertBanner />}
      <main>{children}</main>
      <footer className="bg-accent-1 border-accent-2 border-t">
        <div className="container mx-auto px-5">
          {footer.length > 0 ? (
            <PortableText
              className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
              value={footer as PortableTextBlock[]}
            />
          ) : null}
        </div>
      </footer>
    </section>
    {isDraftMode && <VisualEditing />}
    </body>
    </html>
  );
}
