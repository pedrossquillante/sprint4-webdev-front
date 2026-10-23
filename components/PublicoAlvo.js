import Image from "next/image";

export default function PublicoAlvo() {
  return (
    <section
      className="max-w-330 mx-auto px-4 py-16 lg:py-24 scroll-mt-20 lg:scroll-mt-24"
      id="publicoalvo"
    >
      <h2 className="titulo-secao">Público-alvo</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card flex flex-col gap-4">
          <div className="icone-caixa" aria-hidden="true">
            <span className="icone size-6 mask-[url(/icons/iconstudent.svg)]" />
          </div>
          <h3 className="text-xl font-bold">Estudantes Full-Time</h3>
          <p className="text-base leading-relaxed max-w-prose">
            Ser um estudante full-time exige-se viver uma rotina onde os estudos
            e a preparação para o mercado de trabalho se tornam o centro de
            tudo. Não é apenas assistir aulas diariamente, esse estilo de vida
            exige um controle sobre o tempo com eficiência, para dar conta de
            uma carga horária pesada. No dia a dia são diversas atividades
            desafiadoras que precisam ser feitas dentro do prazo. A solução é
            direcionada principalmente para estudantes que utilizam uma grande
            demanda de materiais, exercícios e anotações. A organização
            automática da galeria por similaridade semântica e a conversão de
            imagens em PDFs por meio de OCR são recursos relevantes para esse
            público, pois exigem menos ações manuais e permitem a reutilização
            do material. Dessa forma, a solução contribui para uma rotina mais
            organizada e produtiva, permite que o estudante concentre seu foco
            naquilo que realmente importa, seu desenvolvimento pessoal.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl lg:h-full">
          <Image
            src="/images/estudantesfulltime1.webp"
            alt="estudantes em sala de aula, interagindo com o celular na mão"
            width={1920}
            height={1080}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="w-full h-auto object-cover lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}