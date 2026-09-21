import Link from 'next/link';

export default function PdfRodape() {
  return (
    <footer className="absolute bg-transparent w-full h-[30%] bottom-[-1px]">
      <div className="absolute bg-black w-full h-[40px] bottom-0 justify-around items-center">
        <span
          className="absolute left-[9%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
          style={{ backgroundImage: "url(/icons3/image9.png)", backgroundSize: "24px", backgroundPosition: "5px" }}
        ></span>
        <span
          className="absolute left-[44%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
          style={{ backgroundImage: "url(/icons3/image8.png)", backgroundSize: "25px", backgroundPosition: "5px" }}
        ></span>
        <Link
          href="/"
          className="absolute block left-[80%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
          style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "11px", backgroundPosition: "7px" }}
        ></Link>
      </div>
    </footer>
  );
}