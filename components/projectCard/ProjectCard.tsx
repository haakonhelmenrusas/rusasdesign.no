import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Badge } from '@/components/badge/Badge';
import { Button } from '@/components/button/Button';
import type { Project } from '@/types/Project';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

export default function ProjectCard({ project, animationDelay = 0 }: ProjectCardProps) {
  const staggerClass = `stagger-${Math.min(animationDelay + 1, 6)}`;

  return (
    <article
      className={`relative flex flex-col bg-card border-2 border-border rounded-md overflow-hidden
                  opacity-0 fade-in-grid ${staggerClass}
                  transform-gpu will-change-transform`}
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="eager"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/20 to-secondary/20
                          flex items-center justify-center">
            <span className="text-5xl font-black text-primary/30 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 md:p-5">
        <h3 className="text-base md:text-lg font-black mb-2 leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-foreground/75 leading-relaxed text-sm font-medium flex-1 mb-3">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 text-xs font-bold border border-border"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Link */}
        {project.url && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="self-start hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary/20 dark:hover:text-primary dark:hover:border-primary"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt
                className="w-3 h-3"
                aria-hidden="true"
              />
              Besøk prosjekt
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}

