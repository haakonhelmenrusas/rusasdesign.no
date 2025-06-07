import { notFound } from 'next/navigation';
import { Key, Suspense } from 'react';
import { getPostBySlug } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import { BackButton, Category, DateComponent, MoreStories, Nav } from '@/components';

export default async function PostPage({ params }: any) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Nav />
      <BackButton />
      <article className="mb-6 lg:max-w-3xl mx-auto sm:px-6 lg:px-8">
        <h1
          className="text-balance mb-12 text-4xl font-medium leading-tight">
          {post.metadata.title}
        </h1>
        <div className="md:mb-4 md:block">
          {post.metadata.categories?.map((category: string, key: Key | null | undefined) => (
            <Category key={key} title={category} />
          ))}
        </div>
        <div className="mx-auto">
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={post.metadata.created_at} />
            </div>
          </div>
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <aside className="my-16">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-4xl">
          Flere artikler
        </h2>
        <Suspense>
          <MoreStories />
        </Suspense>
      </aside>
    </>
  );
}
