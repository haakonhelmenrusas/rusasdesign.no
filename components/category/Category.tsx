import Link from 'next/link';

interface CategoryProps {
  title: string;
}

export default function Category({ title }: CategoryProps) {

  function renderCategoryColor() {
    switch (title) {
      case 'UX Design':
        return 'text-blue-500 dark:text-blue-400';
      case 'Programmering':
        return 'text-green-500 dark:text-green-400';
      case 'Produktivitet':
        return 'text-yellow-500 dark:text-yellow-400';
      case 'Marketsføring':
        return 'text-pink-500 dark:text-pink-400';
      case 'Teknologi':
        return 'text-purple-500 dark:text-purple-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  }

  return (
    <Link href={`/posts/${encodeURIComponent(title)}`}
          className={`mb-4 text-sm ${renderCategoryColor()} hover:underline`}>
      #{title}
    </Link>
  );
}