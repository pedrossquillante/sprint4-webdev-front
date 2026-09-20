import Image from 'next/image';

export default function PublicoAlvo() {
  return (
    <section className="max-w-330 mx-auto px-4 pt-30 pb-32" id="publicoalvo">
      <h2 className="text-5xl font-bold tracking-[-0.02em] text-center mb-8 pb-8 relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-primaria after:mx-auto">
        Público-alvo
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        <div className="bg-fundo-secundaria p-6 rounded-lg flex flex-col gap-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
          <h3 className="text-[1.2rem] font-bold">
            <Image
              src="/icons/iconstudent.svg"
              alt="icone de estudante"
              width={20}
              height={20}
              className="inline-block align-middle mr-[0.4rem] filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            Estudantes Full-Time
          </h3>
          <p className="text-base leading-[1.6] max-w-[65ch] text-texto">
            Ser um estudante full-time exige-se viver uma rotina onde os
            estudos e a preparação para o mercado de trabalho se tornam o
            centro de tudo. Não é apenas assistir aulas diariamente, esse
            estilo de vida exige um controle sobre o tempo com eficiência,
            para dar conta de uma carga horária pesada. No dia a dia são
            diversas atividades desafiadoras que precisam ser feitas dentro
            do prazo. A solução é direcionada principalmente para estudantes
            que utilizam uma grande demanda de materiais, exercícios e
            anotações. A organização automática da galeria por similaridade
            semântica e a conversão de imagens em PDFs por meio de OCR são
            recursos relevantes para esse público, pois exigem menos ações
            manuais e permitem a reutilização do material. Dessa forma, a
            solução contribui para uma rotina mais organizada e produtiva,
            permite que o estudante concentre seu foco naquilo que realmente
            importa, seu desenvolvimento pessoal.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl">
        <Image
        src="/images/estudantesfulltime.webp"
        alt="estudantes em sala de aula, interagindo com o celular na mão"
        width={1920}
        height={1080}
        className="w-full h-auto transition-transform duration-500 lg:hover:scale-105 lg:hover:brightness-105"
        />
      </div>
      </div>
    </section>
  );
}