import { FaBriefcase } from 'react-icons/fa';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section id="projects-section" className="huge-spacing">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <FaBriefcase className="w-6 h-6 md:w-8 md:h-8 text-accent" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Prosjekter</h2>
      </div>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8 md:mb-12">
        Et utvalg prosjekter jeg har jobbet med.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} animationDelay={index} />
        ))}
      </div>
    </section>
  );
}
