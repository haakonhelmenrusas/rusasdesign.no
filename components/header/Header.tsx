import PortableText from '@/components/portableText/portable-text';

interface HeaderProps {
  title: string | null | undefined;
  description: any;
}

export default async function Header({ title, description }: HeaderProps) {

  return (
    <header className="my-24 flex flex-col lg:mb-12">
      <h1 className="text-balance mt-6 pb-3 text-4xl font-medium leading-tight tracking-tighter lg:pr-8 lg:text-6xl">
        {title || ''}
      </h1>
      <h2 className="text-lg">
        <PortableText
          className="prose-lg dark:text-gray-50"
          value={description?.length ? description : ''}
        />
      </h2>
    </header>
  );
}