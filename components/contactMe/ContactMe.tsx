'use client';

import { FaEnvelope } from 'react-icons/fa';
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
            href="mailto:haakon.rusas@pm.me"
            aria-label="Send meg en e-post"
          >
            <FaEnvelope className="w-5 h-5 mr-2" aria-hidden="true" />
            E-post
          </a>
        </Button>
      </div>
    </section>
  );
}
