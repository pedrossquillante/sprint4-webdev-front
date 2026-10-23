import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="paginainicial"
      className="max-w-330 mx-auto px-4 pt-4 lg:pt-6 scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="relative lg:flex lg:items-center lg:min-h-144 lg:p-12">
        <div className="relative overflow-hidden rounded-3xl aspect-4/3 md:aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/images/estudante-funcionalidade2.webp"
            alt="Estudante apontando a câmera para o caderno"
            fill
            preload
            sizes="(min-width:1320px) 1288px, 100vw"
            className="object-cover object-[100%_33%]"
          />
        </div>

        <div className="relative -mt-16 mx-4 md:-mt-24 md:mx-8 lg:m-0 lg:max-w-xl rounded-3xl p-6 md:p-10 bg-painel/85 backdrop-blur-md shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-sobre-primaria mb-6 motion-safe:animate-surgir">
            Descubra uma <span className="text-destaque-claro">câmera</span> que
            entende o que você precisa!
          </h1>

          <p className="text-lg lg:text-xl text-sobre-primaria mb-8 motion-safe:animate-surgir motion-safe:[animation-delay:150ms]">
            Através da câmera, suas fotos de textos são organizadas por assunto
            na galeria e podem ser transformadas em PDFs.
          </p>

          <a
            href="#contato"
            className="inline-flex items-center min-h-11 px-8 rounded-full font-bold no-underline bg-sobre-primaria text-primaria hover:bg-primaria hover:text-sobre-primaria focus-visible:bg-primaria focus-visible:text-sobre-primaria focus-visible:outline-destaque-claro motion-safe:transition-colors motion-safe:duration-200 motion-safe:animate-surgir motion-safe:[animation-delay:300ms]"
          >
            Testar agora
          </a>
        </div>
      </div>
    </section>
  );
}