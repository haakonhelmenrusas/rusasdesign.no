import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/lib/markdown/CodeBlock';
import ImageNode from '@/lib/markdown/ImageNode';

interface MarkdownProps {
  children: string;
}

export default async function Markdown({ children }: MarkdownProps) {

  const inlineCodeStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2px 4px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
  };

  const renderInlineCode = ({ children, ...props }: any) => {
    return (
      <code style={inlineCodeStyle} {...props}>
        {children}
      </code>
    );
  };

  const renderers: Components = {
    a: ({ children, href, ...props }) => (
      <a {...props} href={href}
         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
         rel="noreferrer noopener">
        {children}
      </a>
    ),
    code: ({ className, children, ...props }) => {
      if (!className) {
        return renderInlineCode({ children, ...props });
      }

      const match = /language-([\w-]+)/.exec(className || '');
      const language = match?.[1] || 'plaintext';
      const code = String(children ?? '').replace(/\n$/, '');

      return <CodeBlock language={language}>{code}</CodeBlock>;
    },

    p: ({ children, ...props }) => <p {...props} className="mb-4 dark:text-gray-100 text-gray-900">{children}</p>,
    h1: ({ children }) => (
      <h1 className="mb-4 text-3xl font-semibold dark:text-gray-100 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 text-2xl font-semibold dark:text-gray-100 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 text-lg font-semibold dark:text-gray-100 text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 text-base font-semibold dark:text-gray-100 text-gray-900">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-2 text-sm font-semibold dark:text-gray-100 text-gray-900">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-1 text-xs font-semibold dark:text-gray-100 text-gray-900">{children}</h6>
    ),
    strong: ({ children }) => <strong className="font-semibold dark:text-gray-100 text-gray-900">{children}</strong>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-400 dark:border-gray-600 pl-4 text-gray-700 dark:text-gray-300 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-6 border-gray-300 dark:border-gray-700" />,
    img: ({ alt, src, ...props }) => {
      return <ImageNode alt={alt || 'Blog post image'} src={src as string} {...props} />;
    },
    li: ({ children, ...props }) => <li {...props} className="mb-2 dark:text-gray-100 text-gray-900 list-disc">{children}</li>,
    ol: ({ children, ...props }) => <ol {...props} className="pl-6 mb-4 dark:text-gray-100 text-gray-900">{children}</ol>,
    ul: ({ children, ...props }) => <ul {...props} className="pl-6 mb-4 mt-0 dark:text-gray-100 text-gray-900">{children}</ul>,
    pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,
  };

  return (
    <ReactMarkdown components={renderers} remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
  );
}