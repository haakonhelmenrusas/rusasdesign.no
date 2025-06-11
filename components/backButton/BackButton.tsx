import Link from 'next/link';

export default async function BackButton() {
  return (

      <Link href="/" className="mb-10 text-xl hover:underline flex items-center">
        Hjem
      </Link>

  );
}