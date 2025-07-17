import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center vh-100 m-auto">
      <h1 className="text-2xl lg:text-4xl text-center mb-4">Side ikke funnet</h1>
      <p className="text-center text-2xl mb-4">Obs! Her var det tomt, beklager vi finner ikke siden du ønsker.</p>
      <Link aria-label="Lenke hjem" className="mt-5 hover:cursor-pointer hover:underline" href="/">Returner hjem her</Link>
    </div>
  )
}