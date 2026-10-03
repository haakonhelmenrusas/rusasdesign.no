'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/button/Button';

export default function ContactMe() {
  return (
    <section id="contact-section" className="huge-spacing">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Kontakt meg</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Har du et prosjekt eller spørsmål? Ta gjerne kontakt.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary/20 transition-all duration-200"
          asChild
        >
          <a
            href="mailto:kontakt@rusasdesign.no"
            aria-label="Send meg en e-post"
          >
            <FaEnvelope className="w-5 h-5 mr-2" aria-hidden="true" />
            E-post
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-accent hover:text-accent-foreground hover:border-accent dark:hover:bg-accent/20 transition-all duration-200"
          asChild
        >
          <a
            href="https://github.com/haakonhelmenrusas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (åpnes i nytt vindu)"
          >
            <FaGithub className="w-5 h-5 mr-2" aria-hidden="true" />
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-accent hover:text-accent-foreground hover:border-accent dark:hover:bg-accent/20 transition-all duration-200"
          asChild
        >
          <a
            href="https://www.linkedin.com/in/haakon-helmen-rusas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (åpnes i nytt vindu)"
          >
            <FaLinkedin className="w-5 h-5 mr-2" aria-hidden="true" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}
