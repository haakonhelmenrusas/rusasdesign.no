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
                  transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-primary group opacity-0 fade-in-grid ${staggerClass}
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
            className="object-cover transition-transform duration-500 group-hover:scale-105"
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

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-card/60 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight
                       group-hover:text-primary transition-colors duration-300 tracking-tight">
          {project.title}
        </h3>

        <p className="text-foreground/75 leading-relaxed text-sm md:text-base font-medium flex-1 mb-6">
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
            className="self-start group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary/20 dark:hover:text-primary dark:hover:border-primary"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt
                className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                aria-hidden="true"
              />
              Besøk prosjekt
            </a>
          </Button>
        )}
      </div>

      {/* Accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent to-destructive
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}

