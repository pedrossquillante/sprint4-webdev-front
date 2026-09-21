const linhaSuperior = ['f1', 'f2', 'f3'];
const linhaInferior = ['f4', 'f5', 'f6'];

const classesPorId = {
  f1: "absolute w-[50px] h-[50px] bg-[rgb(250,255,255)] rounded-full top-[14px] left-[118px] border-white",
  f2: "absolute w-[35px] h-[35px] bg-[#222222] rounded-full top-[18px] left-[20px] bg-no-repeat border-black",
  f3: "absolute w-[35px] h-[35px] rounded-full top-[18px] left-[230px] bg-no-repeat border-black",
  f4: "absolute left-[9%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none",
  f5: "absolute left-[44%] top-[4px] w-[35px] h-[35px] bg-[rgb(0,0,0)] bg-no-repeat border-none",
  f6: "absolute left-[80%] top-[4px] bg-[rgb(0,0,0)] bg-no-repeat border-none w-[35px] h-[35px]",
};

const estiloPorId = {
  f1: {},
  f2: { backgroundImage: "url(/icons3/image4.png)", backgroundSize: "18px", backgroundPosition: "8px" },
  f3: { backgroundImage: "url(/icons3/image3.png)", backgroundSize: "35px" },
  f4: { backgroundImage: "url(/icons3/image9.png)", backgroundSize: "24px", backgroundPosition: "5px" },
  f5: { backgroundImage: "url(/icons3/image8.png)", backgroundSize: "25px", backgroundPosition: "5px" },
  f6: { backgroundImage: "url(/icons3/image10.png)", backgroundSize: "11px", backgroundPosition: "7px" },
};

export default function FaixaFuncoes() {
  return (
    <>
      <div className="absolute bg-black top-[24px] w-full h-[40%] justify-between">
        {linhaSuperior.map((id) => (
          <a key={id} className={classesPorId[id]} style={estiloPorId[id]}></a>
        ))}
      </div>
      <div className="absolute bg-black w-full h-[40px] bottom-[5px] justify-around items-center">
        {linhaInferior.map((id) => (
          <a key={id} className={classesPorId[id]} style={estiloPorId[id]}></a>
        ))}
      </div>
    </>
  );
}