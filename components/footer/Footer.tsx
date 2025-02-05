import { PortableText } from '@/components';
import type { PortableTextBlock } from 'next-sanity';

interface FooterProps {
  footer?: any[];
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-gray-200 dark:text-gray-50 dark:bg-gray-800 border-accent-2 mt-auto">
      <div className="container mx-auto px-5">
        {footer && footer.length > 0 ? (
          <PortableText
            className="prose-sm dark:text-gray-50 bottom-0 w-full max-w-none py-3 text-center md:py-10"
            value={footer as PortableTextBlock[]}
          />
        ) : null}
      </div>
    </footer>
  );
}