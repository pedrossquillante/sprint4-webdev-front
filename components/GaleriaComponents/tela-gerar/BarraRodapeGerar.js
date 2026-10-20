import Link from 'next/link';

export default function BarraRodapeGerar() {
  return (
    <footer className="absolute left-0 bg-black w-full h-[24%] bottom-[-1px]">
      <div className="absolute top-0 left-0 w-full h-[30%] bg-black flex items-center justify-between pl-0 pr-[3%]">
        <span
          className="block w-[24%] h-[60%] bg-transparent bg-no-repeat bg-contain bg-left"
          style={{ backgroundImage: "url(/icons3/PDF-N1.png)" }}
        ></span>
        <span
          className="block w-[21%] h-[60%] bg-transparent bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: "url(/icons3/PDF-N2.png)" }}
        ></span>
        <span
          className="block w-[21%] h-[60%] bg-transparent bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: "url(/icons3/PDF-N3.png)" }}
        ></span>
        <span
          className="block w-[24%] h-[60%] bg-transparent bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: "url(/icons3/btN4.png)" }}
        ></span>
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