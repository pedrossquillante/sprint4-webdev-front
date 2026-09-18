import Image from 'next/image';

export default function PublicoAlvo() {
  return (
    <section className="container" id="publicoalvo">
      <h2>Público-alvo</h2>
      <div className="grid-publico">
        <div className="texto-publico">
          <h3>
            <Image
              src="/icons/iconstudent.svg"
              alt="icone de estudante"
              className="icone-estudante icone-azul"
            />
            Estudantes Full-Time
          </h3>
          <p>
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
        <Image
          src="/images/estudantesfulltime.jpg"
          alt="estudantes em sala de aula, interagindo com o celular na mão"
        />
      </div>
    </section>
  );
}