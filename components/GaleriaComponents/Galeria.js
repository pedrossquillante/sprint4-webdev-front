'use client';

import { useState } from 'react';
import { previews } from './TelasPreview';

const conteudos = [
  {
    titulo: 'Pastas criadas automaticamente após a captura da foto!',
    texto: 'Suas fotos são organizadas na galeria de maneira prática!',
    legenda:
      'Esta é a página inicial, onde é possível acessar a funcionalidade que escaneia imagens. Nela é possível visualizar as fotos capturadas e acessar as opções de criação de pastas e geração de PDF.',
  },
  {
    titulo: 'Pastas criadas automaticamente após a captura da foto!',
    texto: 'Suas fotos são organizadas na galeria de maneira prática!',
    legenda:
      'Na interface da câmera, o sistema identifica em tempo real, textos sendo capturados, e sugere um escaneamento, num ícone que aparece na parte inferior da tela, após escanear, o usuário tem a opção de "Gerar PDF", o texto é extraído da imagem e acrescentado num novo arquivo PDF que fica salvo na área de arquivos do celular. E também existe a opção "Criar Pasta" que permite com que o conteúdo seja agrupado conforme o assunto, na galeria.',
  },
  {
    titulo: 'Gere arquivos PDF a partir da sua câmera!',
    texto: 'Você pode fazer das suas fotos de lousas, livros e anotações, um documento!',
    legenda:
      'Após o escaneamento da imagem, a funcionalidade identifica o contexto do texto que há nela, busca outras imagens que contenham informações iguais E também o usuário tem a opção de "Gerar PDF", o texto é extraído da imagem e acrescentado num novo arquivo PDF que fica salvo na área de arquivos do celular.',
  },
  {
    titulo: 'Gere arquivos PDF através da sua galeria!',
    texto: 'Você também pode gerar PDFs através das fotos que já estão na sua galeria!',
    legenda:
      'A funcionalidade de "Gerar PDF" também pode ser acionada através da galeria. O fluxo ocorre de maneira semelhante ao que foi apresentado na imagem anterior, você entra na galeria, seleciona a imagem e gera o PDF.',
  },
];

const botaoClasses =
  'inline-flex items-center justify-center min-h-11 min-w-11 px-4 rounded-full bg-primaria text-sobre-primaria font-bold text-sm cursor-pointer hover:bg-primaria-hover focus-visible:bg-primaria-hover motion-safe:transition-colors';

export default function Galeria() {
  const [indexAtual, setIndexAtual] = useState(0);

  const TelaAtual = previews[indexAtual];
  const conteudo = conteudos[indexAtual];

  function avancar() {
    setIndexAtual((atual) => (atual + 1) % previews.length);
  }

  return (
    <section
      className="max-w-330 mx-auto px-4 py-16 lg:py-24 scroll-mt-20 lg:scroll-mt-24"
      id="galeria"
    >
      <h2 className="titulo-secao">Galeria</h2>

      <div className="card w-full max-w-125 mx-auto text-center">
        <p aria-live="polite" className="text-sm font-bold text-texto-suave mb-4">
          Tela {indexAtual + 1} de {previews.length}
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{conteudo.titulo}</h3>
          <p className="text-base leading-relaxed">{conteudo.texto}</p>
        </div>

        <figure className="flex flex-col items-center gap-6">
          <div key={indexAtual} className="motion-safe:animate-surgir">
            <TelaAtual />
          </div>

          {indexAtual === 1 ? (
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIndexAtual(2)}
                aria-label="Pasta, ver tela da galeria"
                className={botaoClasses}
              >
                Pasta
              </button>
              <button
                type="button"
                onClick={() => setIndexAtual(3)}
                aria-label="PDF, ver tela do PDF"
                className={botaoClasses}
              >
                PDF
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={avancar}
              aria-label="Ver próxima tela"
              className={botaoClasses}
            >
              <span aria-hidden="true">→</span>
            </button>
          )}

          <figcaption className="text-sm leading-relaxed text-texto-suave text-left max-w-prose">
            {conteudo.legenda}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}