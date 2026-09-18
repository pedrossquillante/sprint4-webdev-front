import Image from 'next/image';

export default function Solucao() {
  return (
    <section className="container" id="solucao">
      <h2>Solução</h2>
      <div className="grid-solucao">
        <div className="card-funcionalidade">
          <h3>
            <Image
              src="/icons/iconfoldertree.svg"
              alt="icone folder tree"
              className="icone-foldertree icone-azul"
            />
            Criação automática de pastas por similaridade de conteúdo
          </h3>
          <p>
            A criação de pastas automáticas com base em similaridade
            semântica é um recurso de grande relevância para o dia a dia do
            estudante, pois a funcionalidade permite que a galeria dele seja
            organizada de forma automática, sem que ele tenha que fazer esse
            trabalho manualmente, com isso ele otimiza tempo e aumenta a
            produtividade.
          </p>
        </div>
        <div className="card-funcionalidade">
          <h3>
            <Image
              src="/icons/iconfilepdf.svg"
              alt="icone de PDF"
              className="icone-de-pdf icone-azul"
            />
            Geração de PDF através da câmera
          </h3>
          <p>
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