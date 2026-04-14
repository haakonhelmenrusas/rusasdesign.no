import Image from 'next/image';
import { FaBriefcase, FaPen } from 'react-icons/fa';
import FilterablePosts from '@/components/filterablePosts/FilterablePosts';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { FilterProvider } from '@/context/FilterContext';
import { projects } from '@/lib/projects';
import { getPosts } from '@/lib/posts';

export default function Home() {
  const allBlogPosts = getPosts(); 

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#blog-section"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-2 focus:outline-offset-2"
      >
        Skip to blog content
      </a>

      <header className="container max-w-6xl mx-auto py-10 md:py-20 px-4 md:px-8">
        <div className="text-center mega-spacing">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg md:rounded-xl relative overflow-hidden shadow-2xl transform-gpu"
            >
              <Image
                src="/assets/logo.png"
                alt="Rusås Design - Creative web developer logo"
                fill
                className="object-contain hover:rotate-12 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <div className="hero-text text-4xl md:text-6xl text-foreground leading-tight mb-8 md:mb-12 tracking-tight">
            Rusås Design
          </div>
          <div className="max-w-4xl mx-auto huge-spacing px-4">
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
              En kreativ utvikler som elsker å lage ting. 10 års erfaring med webutvikling, UX Design og app-utvikling.
              Alt fra små enkle nettsider til store komplekse webapplikasjoner.
            </p>
          </div>
        </div>
      </header>
      <main className="container max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-20">

        {/* Projects section */}
        {projects.length > 0 && (
          <section id="projects-section" className="huge-spacing">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <FaBriefcase className="w-6 h-6 md:w-8 md:h-8 text-accent" aria-hidden="true" />
              <h2 className="section-title">Prosjekter</h2>
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
        )}

        {/* Blog section */}
        <section id="blog-section" className="huge-spacing">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
             <FaPen className="w-6 h-6 md:w-8 md:h-8 text-accent" aria-hidden="true" />
             <h2 className="section-title">Blogg</h2>
           </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Deler tanker om design, kode og produktivitet.
          </p>
        </section>
        <FilterProvider>
          <FilterablePosts posts={allBlogPosts} />
        </FilterProvider>
      </main>
    </div>
  );
}