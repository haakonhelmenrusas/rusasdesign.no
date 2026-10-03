'use client';

import { FaPen } from 'react-icons/fa';
import FilterablePosts from '@/components/filterablePosts/FilterablePosts';
import { FilterProvider } from '@/context/FilterContext';
import { Post } from '@/types/Post';

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog-section" className="huge-spacing">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <FaPen className="w-6 h-6 md:w-8 md:h-8 text-accent" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Blogg</h2>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
        Deler tanker om design, kode og produktivitet.
      </p>
      <FilterProvider>
        <FilterablePosts posts={posts} />
      </FilterProvider>
    </section>
  );
}
