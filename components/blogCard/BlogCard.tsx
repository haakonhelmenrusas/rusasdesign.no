'use client';

import React from 'react';
import { Badge } from '@/components/badge/Badge';
import { Calendar } from 'lucide-react';
import { Post } from '@/types/Post';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  post: Post;
  onTagClick?: (tag: string) => void;
  animationDelay?: number;
}

export default function BlogCard({ post, onTagClick, animationDelay = 0 }: BlogCardProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('no-nb', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    onTagClick?.(tag);
  };

  const staggerClass = `stagger-${Math.min(animationDelay + 1, 6)}`;

  return (
    <div
      className={`relative bg-card border-2 border-border rounded-xl p-8 cursor-pointer 
                 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 hover:scale-105 
                 hover:border-primary group opacity-0 fade-in-grid ${staggerClass}
                 transform-gpu will-change-transform overflow-hidden`}
      onClick={() => router.push(`/blogg/${post.data.slug}`)}
    >
      <div className="flex items-center gap-3 text-foreground/80 mb-4 text-lg">
        <Calendar className="w-5 h-5" />
        <span className="font-medium">{formatDate(post.data.created_at)}</span>
      </div>
      <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-primary
                     transition-colors duration-300 tracking-tight">
        {post.data.title}
      </h3>
      <p className="text-foreground/80 mb-6 md:mb-8 leading-relaxed text-base md:text-lg font-medium">
        {post.data.slug}
      </p>
      <div className="flex flex-wrap gap-3">
        {post.data.tags.map((tag: string) => (
          <Badge
            key={tag}
            variant="secondary"
            className="px-4 py-2 text-sm font-bold cursor-pointer
                      transition-all duration-300 hover:scale-110 hover:rotate-1
                      group-hover:bg-primary group-hover:text-primary-foreground
                      hover:bg-accent hover:text-accent-foreground
                      border border-border hover:border-accent"
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleTagClick(e, tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-destructive
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
                      rounded-b-xl" />
    </div>
  );
};