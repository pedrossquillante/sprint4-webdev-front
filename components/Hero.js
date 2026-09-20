import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="paginainicial"
      className="max-w-330 mx-auto px-4 pt-30 text-center lg:overflow-hidden"
    >
      <h1 className="text-5xl font-bold tracking-[-0.02em] mb-6 lg:text-[4.4rem] lg:max-w-275 lg:mx-auto lg:mb-8 lg:leading-none">
        Descubra uma câmera que entende o que você precisa!
      </h1>

      <p className="text-[1.1rem] font-bold text-texto max-w-150 mx-auto mb-6">
        Através da câmera, suas fotos de textos são organizadas por assunto na
        galeria e podem ser transformadas em PDFs.
      </p>

      <a
        href="#contato"
        className="inline-block bg-primaria text-fundo-secundaria no-underline font-bold py-3.5 px-8 rounded-full mb-8 transition-all duration-200"
      >
        Testar agora
      </a>

      <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden">
        <Image
          src="/images/estudante-funcionalidade.webp"
          alt="Estudante apontando câmera pro caderno"
          fill
          className="object-cover object-[100%_33%] transition-all duration-500 lg:hover:scale-105 lg:hover:brightness-105"
        />
      </div>
    </section>
  );
}