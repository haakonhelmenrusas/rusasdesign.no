import Image from 'next/image';

export default function Hero() {
  return (
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
  );
}
