'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const currentPath = usePathname();

  return (
    <nav className="flex justify-end items-center">
      <Link href={currentPath === '/' ? '#' : '/'} className="mr-auto">
        <Image src="/assets/logo.png" alt="Logo" width={56} height={56} />
      </Link>
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/blogg"
                className={`text-lg font-light hover:underline ${currentPath === '/blogg' ? 'underline' : ''}`}>
            Blogg
          </Link>
        </li>
        <li>
          <Link href="/prosjekter"
                className={`text-lg font-light hover:underline ${currentPath === '/prosjekter' ? 'underline' : ''}`}>
            Prosjekter
          </Link>
        </li>
      </ul>
    </nav>
  );
}