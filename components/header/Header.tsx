
interface HeaderProps {
  title: string;
  description: string;
}

export default async function Header({ title, description }: HeaderProps) {

  return (
    <header className="my-24 flex flex-col lg:mb-12">
      <h1 className="text-balance mt-6 pb-3 text-4xl font-medium leading-tight tracking-tighter lg:pr-8 lg:text-6xl">
        {title}
      </h1>
      <h2 className="text-lg">
        <p
          className="prose-lg dark:text-gray-50">
          {description}
        </p>
      </h2>
    </header>
  );
}