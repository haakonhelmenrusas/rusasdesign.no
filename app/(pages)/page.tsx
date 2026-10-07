import AboutMe from '@/components/aboutMe/AboutMe';
import BlogSection from '@/components/blogSection/BlogSection';
import ContactMe from '@/components/contactMe/ContactMe';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projectsSection/ProjectsSection';
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

      <Hero />
      <main className="container max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-20">

        <ProjectsSection />

        <BlogSection posts={allBlogPosts} />

        <AboutMe />

        <ContactMe />
      </main>
    </div>
  );
}