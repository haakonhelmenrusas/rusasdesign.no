import { Github, Linkedin, Palette } from 'lucide-react';
import { Button } from '@/components/button/Button';
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle';

export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-gradient-to-r from-card to-muted/20 mt-16 md:mt-32">
      <div className="container max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 md:items-center">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Palette className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-black">Rusås Design</h3>
              <p className="text-muted-foreground font-medium text-sm md:text-base">Skaper digitale opplevelser</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 order-3 md:order-2">
            <Button
              variant="ghost"
              size="default"
              className="hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:bg-primary
                      hover:text-primary-foreground font-bold border-2 border-transparent
                      hover:border-primary text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://github.com/haakonhelmenrusas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                GitHub
              </a>
            </Button>
            <Button
              variant="ghost"
              size="default"
              className="hover:scale-105 md:hover:scale-110 transition-all duration-300 hover:bg-accent
                      hover:text-accent-foreground font-bold border-2 border-transparent
                      hover:border-accent text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/haakon-helmen-rusas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 md:w-6 md:h-6 mr-2 md:mr-3" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 order-2 md:order-3">
            <ThemeToggle />
            <p className="text-muted-foreground font-medium text-center md:text-right text-sm md:text-base">
              © 2025 Rusås Design
              <br />
              <span className="font-bold">Bygger digitale opplevelser</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}