export default function PdfConteudo() {
  return (
    <main>
      <div
        className="absolute w-full h-[66%] top-[13%] left-0 bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/teladePDF.png)", backgroundSize: "300px" }}
      ></div>
      <div className="absolute bg-white w-full h-[5%] top-[69%]">
        <button
          type="button"
          className="absolute w-[45px] h-[45px] bg-[#5779ff] rounded-[25%] left-[78%] top-[80px] bg-no-repeat border-none cursor-pointer"
          style={{ backgroundImage: "url(/icons3/botaodoPDF.png)", backgroundSize: "30px", backgroundPosition: "8px" }}
        ></button>
      </div>
    </main>
  );
}