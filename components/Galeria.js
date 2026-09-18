import Image from 'next/image';

export default function Galeria() {
  return (
    <section className="container" id="galeria">
      <h2>Galeria</h2>
      <ul>
        <li>
          <div className="texto-galeria">
            <h3>Pastas criadas automaticamente após a captura da foto!</h3>
            <p>Suas fotos são organizadas na galeria de maneira prática!</p>
          </div>
          <figure>
            <Image
              src="/images/funcionalidade2.0.gif"
              alt="Apresentação da primeira funcionalidade"
            />
            <figcaption>
              Após o escaneamento da imagem, a funcionalidade identifica o
              contexto do texto que há nela, busca outras imagens que
              contenham informações iguais, e oferece a opção &quot;Criar Pasta&quot;
              que permite com que o conteúdo seja agrupado conforme o
              assunto, na galeria.
            </figcaption>
          </figure>
        </li>
        <li>
          <div className="texto-galeria">
            <h3>Gere arquivos PDF a partir da sua câmera!</h3>
            <p>
              Você pode fazer das suas fotos de lousas, livros e anotações,
              um documento!
            </p>
          </div>
          <figure>
            <Image
              src="/images/funcionalidade3.0.gif"
              alt="Apresentação da segunda funcionalidade"
            />
            <figcaption>
              Na interface da câmera, o sistema identifica em tempo real,
              textos sendo capturados, e sugere um escaneamento, num ícone
              que aparece na parte inferior da tela, após escanear, o
              usuário tem a opção de &quot;Gerar PDF&quot;, o texto é extraído da
              imagem e acrescentado num novo arquivo PDF que fica salvo na
              área de arquivos do celular.
            </figcaption>
          </figure>
        </li>
        <li>
          <div className="texto-galeria">
            <h3>Gere arquivos PDF através da sua galeria!</h3>
            <p>
              Você também pode gerar PDFs através das fotos que já estão na
              sua galeria!
            </p>
          </div>
          <figure>
            <Image
              src="/images/funcionalidade1.0.gif"
              alt="Apresentação da segunda funcionalidade parte 2"
            />
            <figcaption>
              A funcionalidade de &quot;Gerar PDF&quot; também pode ser acionada
              através da galeria. O fluxo ocorre de maneira semelhante ao
              que foi apresentado na imagem anterior, você entra na
              galeria, seleciona a imagem e gera o PDF.
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}