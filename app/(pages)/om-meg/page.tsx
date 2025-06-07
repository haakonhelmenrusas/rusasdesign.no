import { Nav } from '@/components';

export default async function About() {
  return (
    <>
      <Nav />
      <section className="my-50">
        <h3 className="mb-8 text-4xl font-medium leading-tight tracking-tighter md:text-4xl">
          Hei, jeg er Haakon!
        </h3>
        <p className="mb-4 text-lg font-light">
          En kreativ utvikler som elsker å lage ting. Jeg har jobbet med
          webutvikling i over 10 år, og har erfaring med både UX Design, web og apputvikling.
          Jeg har jobbet med alt fra små enkle nettsider til store komplekse webapplikasjoner. Jeg har også jobbet med
          design og utvikling av mobilapplikasjoner.
        </p>
        <div className="flex space-x-4">
          <a aria-label="LinkedIn link" href="https://www.linkedin.com/in/haakon-helmen-rusas/" target="_blank"
             rel="noreferrer noopener">
            <i> width={24} height={24} </i>
          </a>
        </div>
      </section>
    </>
  );
}