import Link from 'next/link';

export default function FotoExibida() {
  return (
    <main>
      <div
        className="absolute w-full h-[66%] top-[10%] left-0 bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/image5.png)", backgroundSize: "300px" }}
      ></div>
      <div className="absolute bg-white/50 w-full h-[5%] top-[69%]">
        <span
          className="absolute w-[70px] h-[30px] top-[5px] left-[35%] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/bttns1.png)", backgroundSize: "70px" }}
        ></span>
        <span
          className="absolute w-[70px] h-[30px] top-[5px] left-[43%] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/bttns2.png)", backgroundSize: "23px" }}
        ></span>
        <Link
          href="/tela-gerar"
          className="absolute block w-[25px] h-[25px] bg-transparent left-[86%] top-[2px] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/bttns3.png)", backgroundSize: "30px", backgroundPosition: "-2px" }}
        ></Link>
      </div>
    </main>
  );
}