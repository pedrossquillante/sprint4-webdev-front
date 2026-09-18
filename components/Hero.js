import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero_container" id="paginainicial">
      <h1>Descubra uma câmera que entende o que você precisa!</h1>
      <p className="hero-subtitulo">
        Através da câmera, suas fotos de textos são organizadas por assunto
        na galeria e podem ser transformadas em PDFs.
      </p>
      <a href="#contato" className="btn-cta">
        Testar agora
      </a>
      <Image
        src="/images/estudante+funcionalidade.png"
        alt="Estudante apontando câmera pro caderno"
      />
    </section>
  );
}