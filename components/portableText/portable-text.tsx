import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity';
import { getImageDimensions } from '@sanity/asset-utils';
import { Image } from 'next-sanity/image';
import { urlForImage } from '@/sanity/lib/utils';
import Code from '@/components/code/Code';

interface ImageComponentProps {
  value: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  isInline: boolean;
}

const ImageComponent = ({ value, isInline }: ImageComponentProps) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      width={width}
      height={height}
      src={urlForImage(value)?.url() as string || ''}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
      }}
    />
  );
};

export default function CustomPortableText({ className, value }: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      p: ({ children }) => <p className="mb-4 dark:text-gray-50">{children}</p>,
      h1: ({ children }) => (
        <h1 className="mb-4 text-3xl font-semibold dark:text-gray-50">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-4 text-2xl font-semibold dark:text-gray-50">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-3 text-lg font-semibold dark:text-gray-50">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-2 text-base font-semibold dark:text-gray-50">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold dark:text-gray-50">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold dark:text-gray-50">{children}</h6>
      ),
      strong: ({ children }) => <strong className="font-semibold dark:text-gray-50">{children}</strong>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-600 dark:text-gray-400">
          {children}
        </blockquote>
      ),
      code: ({ children }) => (
        Code({ code: children ? children.toString() : '', lang: 'bash', theme: 'nord' })
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="mb-4 dark:text-gray-50">{children}</ul>,
      number: ({ children }) => <ol className="mb-4 dark:text-gray-50">{children}</ol>,
    },
    listItem: ({ children }) => <li className="mb-2 dark:text-gray-50">{children}</li>,
    types: {
      image: ImageComponent,
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href}
             rel="noreferrer noopener dark:text-blue-300 text-blue-600 dark:hover:text-blue-300 hover:text-blue-800">
            {children}
          </a>
        );
      },
      code: ({ children }) => (
        Code({ code: children ? children.toString() : '', lang: 'bash', theme: 'nord' })
      ),
    },
  };

  return (
    <div className={['prose', className].filter(Boolean).join(' ')}>
      <PortableText components={components} value={value} />
    </div>
  );
}
