import type { ClientPerspective, QueryParams } from 'next-sanity';
import { draftMode } from 'next/headers';

import { client } from '@/sanity/lib/client';
import { token } from '@/sanity/lib/token';

/**
 * Used to fetch data in Server Components, it has built in support for handling Draft Mode and perspectives.
 * When using the "published" perspective then time-based revalidation is used, set to match the time-to-live on Sanity's API CDN (60 seconds)
 * and will also fetch from the CDN.
 * When using the "previewDrafts" perspective then the data is fetched from the live API and isn't cached, it will also fetch draft content that isn't published yet.
 */
export async function sanityFetch<const QueryString extends string>({
                                                                      query,
                                                                      params = {},
                                                                      perspective: _perspective,
                                                                      stega: _stega,
                                                                    }: {
  query: QueryString;
  params?: QueryParams | Promise<QueryParams>;
  perspective?: Omit<ClientPerspective, 'raw'>;
  stega?: boolean;
}) {
  const perspective =
    _perspective || (await draftMode()).isEnabled
      ? 'previewDrafts'
      : 'published';
  const stega =
    _stega ||
    perspective === 'previewDrafts';
  if (perspective === 'previewDrafts') {
    return client.fetch(query, await params, {
      stega,
      perspective: 'previewDrafts',
      token,
      useCdn: false,
      next: { revalidate: 0 },
    });
  }
  return client.fetch(query, await params, {
    stega,
    perspective: 'published',
    useCdn: true,
    next: { revalidate: 60 },
  });
}
