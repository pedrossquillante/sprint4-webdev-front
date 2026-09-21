import Link from 'next/link';

export default function PdfTopo() {
  return (
    <header className="absolute bg-black top-[-1px] w-full h-[13%]">
      <div
        className="absolute w-full h-full left-[5px] top-[20px] bg-no-repeat"
        style={{ backgroundSize: "280px" }}
      ></div>

      <div className="absolute w-full h-[40%] top-1/2">
        <p className="absolute text-white left-[13%] w-[52%] top-[1px] text-center overflow-hidden text-ellipsis whitespace-nowrap font-sans">
          PDF_Movimento_...
        </p>

        <Link
          href="/tela-gerar"
          className="absolute block w-[10%] h-[80%] top-[3px] left-[3%] rounded-full bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/botaovoltar.png)", backgroundSize: "25px" }}
        ></Link>
        <span
          className="absolute w-[10%] h-[75%] top-[3px] left-[65%] rounded-[70%] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/botaomensagem.png)", backgroundSize: "20px", backgroundPosition: "1px 4px" }}
        ></span>
        <span
          className="absolute w-[10%] h-[75%] top-[4px] left-[78%] rounded-[70%] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/botaoprocurardoc.png)", backgroundSize: "20px", backgroundPosition: "3px 2px" }}
        ></span>
        <span
          className="absolute w-[10%] h-[75%] top-[6px] left-[93%] rounded-[70%] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/botaotrespontos.png)", backgroundSize: "4px", backgroundPosition: "4px 2px" }}
        ></span>
        <span
          className="absolute w-full h-[75%] top-[-45px] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/barradehoras.png)", backgroundSize: "296px" }}
        ></span>
      </div>
    </header>
  );
}