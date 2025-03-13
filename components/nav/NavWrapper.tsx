import Nav from './Nav';
import { sanityFetch } from '@/sanity/lib/fetch';
import { settingsQuery } from '@/sanity/lib/queries';

export default async function NavWrapper() {
  const settings = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });

  return <Nav settings={settings} />;
}