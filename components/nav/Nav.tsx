'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const currentPath = usePathname();

  return (
    <nav className="flex justify-end items-center mb-8">
      <Link href={currentPath === '/' ? '#' : '/'} className="mr-auto">
        <Image src="/assets/logo.png" alt="Logo" width={56} height={56} />
      </Link>
    </nav>
  );
}