import Link from 'next/link';

export default function BarraRodapeGerar() {
  return (
    <footer className="absolute bg-black w-full h-[24%] bottom-[-1px]">
      <div className="absolute w-full h-[30%] bg-black justify-around">
        <span
          className="absolute w-[28%] h-[55%] top-[10px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/PDF-N1.png)", backgroundSize: "80px" }}
        ></span>
        <span
          className="absolute w-[23%] h-[60%] left-[85px] top-[10px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/PDF-N2.png)", backgroundSize: "65px" }}
        ></span>
        <Link
          href="/tela-pdf"
          className="absolute block w-[23%] h-[60%] left-[152px] top-[10px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/PDF-N3.png)", backgroundSize: "68px" }}
        ></Link>
        <Link
          href="/tela-galeria"
          className="absolute block w-[25%] h-[60%] left-[220px] top-[10px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/btN4.png)", backgroundSize: "78px" }}
        ></Link>
      </div>

      <div className="absolute w-full h-[30%] bg-black top-[71%]">
        <span
          className="absolute w-[10%] h-[70%] top-[6px] left-[35px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image9.png)", backgroundSize: "20px", backgroundPosition: "4px" }}
        ></span>
        <span
          className="absolute w-[10%] h-[70%] top-[6px] left-[130px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image8.png)", backgroundSize: "22px", backgroundPosition: "4px" }}
        ></span>
        <Link
          href="/"
          className="absolute block w-[10%] h-[70%] top-[6px] left-[230px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "12px", backgroundPosition: "7px" }}
        ></Link>
      </div>
    </footer>
  );
}