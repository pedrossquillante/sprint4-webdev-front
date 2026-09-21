'use client';

import { useState } from 'react';
import { previews } from './TelasPreview';

const conteudos = [
  {
    titulo: 'Pastas criadas automaticamente após a captura da foto!',
    texto: 'Suas fotos são organizadas na galeria de maneira prática!',
    legenda:
      'Após o escaneamento da imagem, a funcionalidade identifica o contexto do texto que há nela, busca outras imagens que contenham informações iguais, e oferece a opção "Criar Pasta" que permite com que o conteúdo seja agrupado conforme o assunto, na galeria.',
  },
  {
    titulo: 'Pastas criadas automaticamente após a captura da foto!',
    texto: 'Suas fotos são organizadas na galeria de maneira prática!',
    legenda:
      'Após o escaneamento da imagem, a funcionalidade identifica o contexto do texto que há nela, busca outras imagens que contenham informações iguais, e oferece a opção "Criar Pasta" que permite com que o conteúdo seja agrupado conforme o assunto, na galeria.',
  },
  {
    titulo: 'Gere arquivos PDF a partir da sua câmera!',
    texto: 'Você pode fazer das suas fotos de lousas, livros e anotações, um documento!',
    legenda:
      'Na interface da câmera, o sistema identifica em tempo real, textos sendo capturados, e sugere um escaneamento, num ícone que aparece na parte inferior da tela, após escanear, o usuário tem a opção de "Gerar PDF", o texto é extraído da imagem e acrescentado num novo arquivo PDF que fica salvo na área de arquivos do celular.',
  },
  {
    titulo: 'Gere arquivos PDF através da sua galeria!',
    texto: 'Você também pode gerar PDFs através das fotos que já estão na sua galeria!',
    legenda:
      'A funcionalidade de "Gerar PDF" também pode ser acionada através da galeria. O fluxo ocorre de maneira semelhante ao que foi apresentado na imagem anterior, você entra na galeria, seleciona a imagem e gera o PDF.',
  },
];

export default function Galeria() {
  const [indexAtual, setIndexAtual] = useState(0);

  const TelaAtual = previews[indexAtual];
  const conteudo = conteudos[indexAtual];

  function avancar() {
    setIndexAtual((atual) => (atual + 1) % previews.length);
  }

  return (
    <section className="container" id="galeria">
      <h2>Galeria</h2>
      <ul>
        <li>
          <div className="texto-galeria">
            <h3>{conteudo.titulo}</h3>
            <p>{conteudo.texto}</p>
          </div>
          <figure>
            <div className="relative inline-block">
              <TelaAtual />

              {indexAtual === 1 ? (
                <div className="absolute top-1/2 -right-14 -translate-y-1/2 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setIndexAtual(2)}
                    aria-label="Ver tela da galeria"
                    className="w-12 h-10 rounded-full bg-[#5779ff] text-white flex items-center justify-center cursor-pointer border-none text-xs"
                  >
                    Galeria
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndexAtual(3)}
                    aria-label="Ver tela do PDF"
                    className="w-12 h-10 rounded-full bg-[#5779ff] text-white flex items-center justify-center cursor-pointer border-none text-xs"
                  >
                    PDF
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={avancar}
                  aria-label="Ver próxima tela"
                  className="absolute top-1/2 -right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-[#5779ff] text-white flex items-center justify-center cursor-pointer border-none"
                >
                  →
                </button>
              )}
            </div>
            <figcaption>{conteudo.legenda}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}