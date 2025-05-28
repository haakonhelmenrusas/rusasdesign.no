import Link from 'next/link';
import { Icon } from '@sanity/icons';

export default async function BackButton() {
  return (

      <Link href="/" className="mb-10 text-xl hover:underline flex items-center">
        <Icon symbol={'arrow-left'} style={{ marginRight: 4 }} /> Hjem
      </Link>

  );
}