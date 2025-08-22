import { Palette, Sparkles } from 'lucide-react';
import { getPosts } from '@/lib/posts';
import { FilterProvider } from '@/context/FilterContext';
import FilterablePosts from '@/components/filterablePosts/FilterablePosts';

export default function Home() {
  const allBlogPosts = getPosts();

  return (
    <div className="min-h-screen bg-background">
      <header className="container max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8">
        <div className="text-center mega-spacing">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary via-accent to-destructive
                           rounded-2xl md:rounded-3xl flex items-center justify-center group hover:scale-110
                           transition-all duration-500 shadow-2xl hover:shadow-primary/25
                           hover:rotate-3 transform-gpu">
              <Palette
                className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:rotate-12 transition-transform duration-500" />
            </div>
          </div>
          <div className="hero-text bg-gradient-to-r from-primary via-accent to-destructive
                          bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight">
            Rusås Design
          </div>
          <div className="max-w-4xl mx-auto huge-spacing px-4">
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
              <span className="text-primary font-bold">Creative studio</span> specializing in
              <span className="text-accent font-bold"> modern web applications</span> and
              <span className="text-destructive font-bold"> digital experiences</span>.
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Sharing insights about design, development, and productivity.</span>
            </p>
          </div>
        </div>
      </header>
      <main className="container max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-20">
        <div className="huge-spacing">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            <h2 className="section-title">Latest Posts</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Thoughts on design, development, and creative processes
          </p>
        </div>
        <FilterProvider>
          <FilterablePosts posts={allBlogPosts} />
        </FilterProvider>
      </main>
    </div>
  );
}