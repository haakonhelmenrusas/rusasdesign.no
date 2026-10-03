'use client';

import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about-section" className="pt-12 md:pt-20 huge-spacing">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <FaUser className="w-6 h-6 md:w-8 md:h-8 text-accent" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Om meg</h2>
      </div>
      <div className="bg-card border-2 border-border rounded-md p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg md:rounded-xl bg-muted overflow-hidden shadow-lg">
              <Image
                src="/assets/logo.png"
                alt="Håkon Helmen Rusås"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Håkon Helmen Rusås</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Kreativ utvikler og designer
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Jeg har hatt roller som fullstack-utvikler, frontend-utvikler, UX-designer og team lead.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Jeg elsker å lage digitale løsninger som er brukervennlige, tilgjengelige og smarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
