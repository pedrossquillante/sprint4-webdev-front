import Link from 'next/link';

const NOME_PADRAO = 'Pasta_Movimento_...';

export default function GaleriaTopo({ quantidadeImagens = '10 imagens' }) {
  const nomePasta = NOME_PADRAO;

  return (
    <header className="absolute bg-black top-[-1px] w-full h-[35%]">
      <span
        className="absolute w-full h-[13%] top-[1px] bg-transparent bg-no-repeat"
        style={{ backgroundImage: "url(/icons2/bateria.png)", backgroundSize: "299px" }}
      ></span>

      <span
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-[20%] bg-transparent bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/image5.png)", backgroundSize: "100px" }}
      ></span>

      <p className="absolute top-[120px] left-[35px] text-[27px] text-white">
        {nomePasta}
      </p>

      <p className="absolute top-[169px] left-[105px] text-gray-500 text-[17px]">
        {quantidadeImagens}
      </p>

      <Link
        href="/tela-gerar"
        className="absolute block w-[30px] h-[30px] top-[165px] left-[10px] bg-transparent bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "10px", backgroundPosition: "5px" }}
      ></Link>

      <span
        className="absolute w-[30px] h-[30px] top-[165px] left-[220px] bg-transparent bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/lupa.png)", backgroundSize: "30px", backgroundPosition: "0px 2px" }}
      ></span>

      <span
        className="absolute w-[30px] h-[30px] top-[165px] left-[255px] bg-transparent bg-no-repeat border-none p-0"
        style={{ backgroundImage: "url(/icons3/botaotrespontos.png)", backgroundSize: "5px", backgroundPosition: "12px 6px" }}
      ></span>
    </header>
  );
}