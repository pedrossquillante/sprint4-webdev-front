import Image from 'next/image';

export default function Solucao() {
  return (
    <section className="max-w-330 mx-auto px-4 pt-30 pb-32" id="solucao">
      <h2 className="text-5xl font-bold tracking-[-0.02em] text-center mb-8 pb-8 relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-primaria after:mx-auto">
        Solução
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-fundo-secundaria p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
          <h3 className="text-[1.2rem] font-bold mb-2">
            <Image
              src="/icons/iconfoldertree.svg"
              alt="icone folder tree"
              width={25}
              height={25}
              className="inline-block align-middle mr-2 filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            Criação automática de pastas por similaridade de conteúdo
          </h3>
          <p className="text-base leading-[1.6] max-w-[65ch] text-texto">
            A criação de pastas automáticas com base em similaridade
            semântica é um recurso de grande relevância para o dia a dia do
            estudante, pois a funcionalidade permite que a galeria dele seja
            organizada de forma automática, sem que ele tenha que fazer esse
            trabalho manualmente, com isso ele otimiza tempo e aumenta a
            produtividade.
          </p>
        </div>

        <div className="bg-fundo-secundaria p-6 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
          <h3 className="text-[1.2rem] font-bold mb-2">
            <Image
              src="/icons/iconfilepdf.svg"
              alt="icone de PDF"
              width={25}
              height={25}
              className="inline-block align-middle mr-2 filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            Geração de PDF através da câmera
          </h3>
          <p className="text-base leading-[1.6] max-w-[65ch] text-texto">
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