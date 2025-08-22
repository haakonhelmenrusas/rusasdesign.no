import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { Badge } from '@/components/badge/Badge';
import RelatedPosts from '@/components/relatedPosts/RelatedPosts';
import CodeBlock from '@/lib/markdown/CodeBlock';
import { ArrowLeft, Calendar } from 'lucide-react';
import { JSX } from 'react';
import { format } from 'date-fns';
import { nb } from 'date-fns/locale/nb';
import Link from 'next/link';

//@ts-ignore
export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentCodeBlock = '';
    let inCodeBlock = false;
    let codeLanguage = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          elements.push(
            <div key={i} className="post-spacing">
              <CodeBlock language={codeLanguage}>
                {currentCodeBlock.trim()}
              </CodeBlock>
            </div>,
          );
          currentCodeBlock = '';
          inCodeBlock = false;
          codeLanguage = '';
        } else {
          // Start of code block
          codeLanguage = line.slice(3).trim() || 'javascript';
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        currentCodeBlock += line + '\n';
        continue;
      }

      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="text-3xl md:text-4xl font-black leading-tight tracking-tight post-spacing">
            {line.slice(2)}
          </h1>,
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl md:text-3xl font-bold leading-tight tracking-tight post-spacing">
            {line.slice(3)}
          </h2>,
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl md:text-2xl font-bold leading-tight post-spacing">
            {line.slice(4)}
          </h3>,
        );
      } else if (line.startsWith('- ')) {
        // Simple list item handling
        elements.push(
          <li key={i} className="ml-4 mb-2 text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
            {line.slice(2)}
          </li>,
        );
      } else if (line.trim() === '') {
        elements.push(<div key={i} className="h-4" />);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="text-lg md:text-xl font-black post-spacing">
            {line.slice(2, -2)}
          </p>,
        );
      } else if (line.includes('`') && !line.startsWith('```')) {
        // Inline code
        const parts = line.split('`');
        const rendered = parts.map((part, idx) =>
          idx % 2 === 1 ?
            <code key={idx}
                  className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm md:text-base font-bold border border-primary/20">
              {part}
            </code> :
            part,
        );
        elements.push(
          <p key={i} className="text-base md:text-lg leading-relaxed post-spacing">
            {rendered}
          </p>,
        );
      } else if (line.trim()) {
        elements.push(
          <p key={i} className="text-base md:text-lg leading-relaxed font-medium post-spacing">
            {line}
          </p>,
        );
      }
    }

    return elements;
  };

  if (!post) {
    return notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <div className="bg-card border-2 border-border rounded-xl p-4 md:p-8 shadow-2xl large-spacing">
        <Link
          href="/"
          className="mb-4 md:mb-6 hover:-translate-x-2 transition-all duration-300 font-bold text-base md:text-lg px-4 md:px-6 py-2 md:py-3
                    hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 md:gap-4 text-muted-foreground mb-4 md:mb-6 text-base md:text-lg">
          <Calendar className="w-5 h-5 md:w-6 md:h-6" />
          <span className="font-bold">{format(new Date(post.data.created_at), 'd LLLL, yyyy', { locale: nb })}</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight tracking-tight
                       bg-gradient-to-r from-primary via-accent to-destructive
                       bg-clip-text text-transparent">
          {post.data.title}
        </h1>

        <div className="flex flex-wrap gap-2 md:gap-4">
          {post.data.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold cursor-pointer transition-all duration-300
                        hover:scale-110 hover:bg-accent hover:text-accent-foreground border-2 border-border
                        hover:border-accent"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="bg-card border-2 border-border rounded-xl p-4 md:p-8 shadow-xl large-spacing">
        <div className="prose prose-gray max-w-none">
          {renderContent(post.content)}
        </div>
      </div>
      <RelatedPosts
        currentPost={post}
      />
    </article>
  );
};
