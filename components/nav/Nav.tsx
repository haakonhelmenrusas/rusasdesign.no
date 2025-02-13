import Link from 'next/link';

export default async function Nav() {
  return (
    <nav className="flex justify-end items-center">
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/blogg" className="text-lg font-light hover:underline">
            Blogg
          </Link>
        </li>
        <li>
          <Link href="/prosjekter" className="text-lg font-light hover:underline">
            Prosjekter
          </Link>
        </li>
        <li>
          <Link href="/om-meg" className="text-lg font-light hover:underline">
            Om meg
          </Link>
        </li>
      </ul>
    </nav>
  );
}