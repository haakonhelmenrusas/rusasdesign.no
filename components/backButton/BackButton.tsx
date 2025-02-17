import Link from 'next/link';
import { Icon } from '@sanity/icons';

export default async function BackButton() {
  return (
    <button className="mb-16 text-2xl md:text-2xl">
      <Link href="/" className="hover:underline flex items-center">
        <Icon symbol={'arrow-left'} /> Hjem
      </Link>
    </button>
  );
}