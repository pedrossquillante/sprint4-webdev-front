export default function Solucao() {
  return (
    <section className="max-w-330 mx-auto px-4 py-16 lg:py-24 scroll-mt-20 lg:scroll-mt-24" id="solucao">
      <h2 className="titulo-secao">
        Solução
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card flex flex-col gap-4">
          <div className="icone-caixa" aria-hidden="true"><span className="icone size-6 mask-[url(/icons/iconfoldertree.svg)]"/></div>
          <h3 className="text-xl font-bold">
            Criação automática de pastas por similaridade de conteúdo
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            A criação de pastas automáticas com base em similaridade
            semântica é um recurso de grande relevância para o dia a dia do
            estudante, pois a funcionalidade permite que a galeria dele seja
            organizada de forma automática, sem que ele tenha que fazer esse
            trabalho manualmente, com isso ele otimiza tempo e aumenta a
            produtividade.
          </p>
        </div>

        <div className="card flex flex-col gap-4">
          <div className="icone-caixa" aria-hidden="true"><span className="icone size-6 mask-[url(/icons/iconfilepdf.svg)]"/></div>
          <h3 className="text-xl font-bold">
            Geração de PDF através da câmera
          </h3>
          <p className="text-base leading-relaxed max-w-prose">
            A geração de PDF através da câmera, facilita ao usuário
            transformar os textos em imagens em arquivos por meio de OCR,
            que mantém a organização e estrutura. Com isso, fotos de
            exercícios e anotações podem ser transformadas em documentos
            organizados e editáveis, isso facilita o armazenamento e
            utilização posteriormente.
          </p>
        </div>
      </div>
    </section>
  );
}