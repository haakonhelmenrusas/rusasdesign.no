'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/button/Button';
import { Badge } from '@/components/badge/Badge';
import BlogCard from '@/components/blogCard/BlogCard';
import type { Post } from '@/types/Post';
import { useFilter } from '@/context/FilterContext';

type Props = {
  posts: Post[];
};

export default function FilterablePosts({ posts }: Props) {
  const [mounted, setMounted] = useState(false);
  const { selectedTag, toggleTag, clear } = useFilter();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.data.tags.includes(selectedTag))
    : posts;

  const allTags = Array.from(new Set(posts.flatMap((post) => post.data.tags)));

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="large-spacing">
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">Les etter tema</h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'secondary'}
                className={`px-3 md:px-6 py-2 md:py-3 text-sm md:text-base font-bold cursor-pointer 
                            transition-all duration-300 hover:scale-105 md:hover:scale-110 border-2
                            ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                    : 'hover:bg-accent hover:text-accent-foreground hover:border-accent'
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 p-4 md:p-6 bg-muted/50 rounded-xl border-2 border-border">
            <span className="text-base md:text-lg font-bold text-foreground">
              Filtrert på: <span className="text-primary">{selectedTag}</span>
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clear}
              className="hover:bg-destructive hover:text-destructive-foreground font-bold text-sm md:text-base"
            >
              <X className="w-4 h-4 mr-2" />
              Fjern filter
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
        {mounted &&
          filteredPosts.map((post, index) => (
            <BlogCard
              key={post.data.id}
              post={post}
              onTagClick={toggleTag}
              animationDelay={index}
            />
          ))}
      </div>

      {filteredPosts.length === 0 && selectedTag && (
        <div className="text-center bold-spacing bg-card border-2 border-border rounded-xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-black mb-4">No Posts Found</h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
            Ingen innlegg funnet med dette tema &#34;{selectedTag}&#34;
          </p>
          <Button
            onClick={clear}
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
          >
            Fjern filter og vis alle innlegg
          </Button>
        </div>
      )}
    </>
  );
}