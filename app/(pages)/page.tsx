import { Pen } from 'lucide-react';
import { getPosts } from '@/lib/posts';
import { FilterProvider } from '@/context/FilterContext';
import FilterablePosts from '@/components/filterablePosts/FilterablePosts';
import Image from 'next/image';

export default function Home() {
  const allBlogPosts = getPosts();

  return (
    <div className="min-h-screen bg-background">
      <header className="container max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8">
        <div className="text-center mega-spacing">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl transform-gpu"
            >
              <Image
                src="/assets/logo.png"
                alt="Rusås Design"
                fill
                className="object-contain hover:rotate-12 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <div className="hero-text text-4xl md:text-6xl text-white leading-tight mb-8 md:mb-12 tracking-tight">
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
        <div className="huge-spacing">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Pen className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            <h2 className="section-title">Blogg</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Deler tanker om design, kode og produktivitet.
          </p>
        </div>
        <FilterProvider>
          <FilterablePosts posts={allBlogPosts} />
        </FilterProvider>
      </main>
    </div>
  );
}