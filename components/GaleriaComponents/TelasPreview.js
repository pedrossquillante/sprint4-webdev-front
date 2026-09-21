import PassarSlide from '../GaleriaComponents/tela-galeria/PassarSlide';

function FrameCelular({ children }) {
  return (
    <div
      className="relative w-[328px] h-[669px] bg-no-repeat mx-auto"
      style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pixel_2_XL_front.svg/330px-Pixel_2_XL_front.svg.png)" }}
    >
      <div className="absolute w-[290px] h-[580px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5%] bg-transparent overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function ModoSelecionadoPreview() {
  return (
    <>

      <div className="absolute bg-[rgb(2,0,0)] w-full h-[15%] top-[-6px] left-[-5px] m-[5px] pt-[5px] border-black">
        <a className="relative text-base text-white/90 left-[4px] ml-[6px]">Noite</a>
        <a className="relative text-base text-white/90 left-[4px] ml-[6px]">Retrato</a>
        <a className="relative text-base text-[#5779FF] left-[4px] ml-[6px]">Foto</a>
        <a className="relative text-base text-white/90 left-[4px] ml-[6px]">Video</a>
        <a className="relative text-base text-white/90 left-[4px] ml-[6px]">Microfilme</a>
      </div>

      <div className="absolute bottom-full left-0 w-full mb-[10px] h-[32px]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[1px] w-[130px] h-[30px]">
          <span
            className="absolute inset-0 bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/bttns1.png)", backgroundSize: "100% 100%" }}
          />
          <span
            className="absolute left-1/2 -translate-x-1/2 top-[-1px] w-[32px] h-[32px] bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/bttns2.png)", backgroundSize: "100% 100%" }}
          />
        </div>

        <span
          className="absolute right-[12px] top-0 w-[32px] h-[32px] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/bttns3.png)", backgroundSize: "100% 100%" }}
        />
      </div>
    </>
  );
}

function FaixaFuncoesPreview() {
  return (
    <>
      <div className="absolute bg-black top-[24px] w-full h-[40%]">
        
        <a
          className="absolute w-[50px] h-[50px] bg-[rgb(250,255,255)] rounded-full top-[14px] left-[118px] border-white"
        />

        <div
          className="absolute w-[35px] h-[35px] bg-[#222222] rounded-full top-[18px] left-[20px] bg-no-repeat border-black"
          style={{
            backgroundImage: "url(/icons3/image4.png)",
            backgroundSize: "18px",
            backgroundPosition: "8px",
          }}
        />

        <div
          className="absolute w-[35px] h-[35px] rounded-full top-[18px] left-[230px] bg-no-repeat border-black"
          style={{
            backgroundImage: "url(/icons3/image3.png)",
            backgroundSize: "35px",
          }}
        />

      </div>

      <div className="absolute bg-black w-full h-[40px] bottom-[5px]">

        <div
          className="absolute left-[9%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
          style={{
            backgroundImage: "url(/icons3/image9.png)",
            backgroundSize: "24px",
            backgroundPosition: "5px",
          }}
        />

        <div
          className="absolute left-[44%] top-[4px] w-[35px] h-[35px] bg-[rgb(0,0,0)] bg-no-repeat border-none"
          style={{
            backgroundImage: "url(/icons3/image8.png)",
            backgroundSize: "25px",
            backgroundPosition: "5px",
          }}
        />

        <div
          className="absolute left-[80%] top-[4px] bg-[rgb(0,0,0)] bg-no-repeat border-none w-[35px] h-[35px]"
          style={{
            backgroundImage: "url(/icons3/image10.png)",
            backgroundSize: "11px",
            backgroundPosition: "7px",
          }}
        />

      </div>
    </>
  );
}

function TelaInicialPreview() {
  return (
    <FrameCelular>
      <header className="absolute bg-black top-[-1px] w-full h-[10%]">
        <div
          className="absolute w-full h-full left-[5px] top-[20px] bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image2.png)", backgroundSize: "280px" }}
        />
      </header>
      <div
        className="absolute w-full h-[66%] top-[10%] left-0 bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/image5.png)", backgroundSize: "300px" }}
      />
      <footer className="absolute bg-black w-full h-[24%] bottom-[-1px]">
        <ModoSelecionadoPreview />
        <FaixaFuncoesPreview />
      </footer>
    </FrameCelular>
  );
}


function TelaGerarPreview() {
  return (
    <FrameCelular>
      <header className="absolute top-[-1px] w-full h-[10%] bg-black" />
      <div
        className="absolute w-full h-[66%] top-[10%] left-0 bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/telaPDF.png)", backgroundSize: "300px" }}
      />
      <footer className="absolute bg-black w-full h-[24%] bottom-[-1px]">
        <div className="absolute w-full h-[30%] bg-black">
          <span
            className="absolute w-[28%] h-[55%] top-[10px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/PDF-N1.png)", backgroundSize: "80px" }}
          />
          <span
            className="absolute w-[23%] h-[60%] left-[85px] top-[10px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/PDF-N2.png)", backgroundSize: "65px" }}
          />
          <span
            className="absolute w-[23%] h-[60%] left-[152px] top-[10px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/PDF-N3.png)", backgroundSize: "68px" }}
          />
          <span
            className="absolute w-[25%] h-[60%] left-[220px] top-[10px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/btN4.png)", backgroundSize: "78px" }}
          />
        </div>
        <div className="absolute w-full h-[30%] bg-black top-[71%]">
          <span
            className="absolute w-[10%] h-[70%] top-[6px] left-[35px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/image9.png)", backgroundSize: "20px", backgroundPosition: "4px" }}
          />
          <span
            className="absolute w-[10%] h-[70%] top-[6px] left-[130px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/image8.png)", backgroundSize: "22px", backgroundPosition: "4px" }}
          />
          <span
            className="absolute w-[10%] h-[70%] top-[6px] left-[230px] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "12px", backgroundPosition: "7px" }}
          />
        </div>
      </footer>
    </FrameCelular>
  );
}


function TelaGaleriaPreview() {
  return (
    <FrameCelular>
      <header className="absolute bg-black top-[-1px] w-full h-[35%]">
        <span
          className="absolute w-full h-[13%] top-[1px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons2/bateria.png)", backgroundSize: "299px" }}
        />
        <span
          className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-[20%] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image5.png)", backgroundSize: "100px" }}
        />
        <p className="absolute top-[120px] left-[35px] text-[27px] text-white">
          Pasta_Movimento_...
        </p>
        <p className="absolute top-[169px] left-[105px] text-gray-500 text-[17px]">
          10 imagens
        </p>
        <span
          className="absolute w-[30px] h-[30px] top-[165px] left-[10px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "10px", backgroundPosition: "5px" }}
        />
        <span
          className="absolute w-[30px] h-[30px] top-[165px] left-[220px] bg-transparent bg-no-repeat"
          style={{ backgroundImage: "url(/icons3/lupa.png)", backgroundSize: "30px", backgroundPosition: "0px 2px" }}
        />
        <span
          className="absolute w-[30px] h-[30px] top-[165px] left-[255px] bg-transparent bg-no-repeat border-none p-0"
          style={{ backgroundImage: "url(/icons3/botaotrespontos.png)", backgroundSize: "5px", backgroundPosition: "12px 6px" }}
        />
      </header>
      <main className="absolute w-full h-[65%] top-[35%] left-0 bg-black overflow-hidden">
        <PassarSlide />
      </main>
    </FrameCelular>
  );
}


function TelaPdfPreview() {
  return (
    <FrameCelular>
      <header className="absolute bg-black top-[-1px] w-full h-[13%]">
        <div
          className="absolute w-full h-full left-[5px] top-[20px] bg-no-repeat"
          style={{ backgroundSize: "280px" }}
        />
        <div className="absolute w-full h-[40%] top-1/2">
          <p className="absolute text-white left-[13%] w-[52%] top-[1px] text-center overflow-hidden text-ellipsis whitespace-nowrap">
            PDF_Movimento_...
          </p>
          <span
            className="absolute w-[10%] h-[80%] top-[3px] left-[3%] rounded-full bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/botaovoltar.png)", backgroundSize: "25px" }}
          />
          <span
            className="absolute w-[10%] h-[75%] top-[3px] left-[65%] rounded-[70%] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/botaomensagem.png)", backgroundSize: "20px", backgroundPosition: "1px 4px" }}
          />
          <span
            className="absolute w-[10%] h-[75%] top-[4px] left-[78%] rounded-[70%] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/botaoprocurardoc.png)", backgroundSize: "20px", backgroundPosition: "3px 2px" }}
          />
          <span
            className="absolute w-[10%] h-[75%] top-[6px] left-[93%] rounded-[70%] bg-transparent bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/botaotrespontos.png)", backgroundSize: "4px", backgroundPosition: "4px 2px" }}
          />
          <span
            className="absolute w-full h-[75%] top-[-45px] bg-no-repeat"
            style={{ backgroundImage: "url(/icons3/barradehoras.png)", backgroundSize: "296px" }}
          />
        </div>
      </header>
      <div
        className="absolute w-full h-[66%] top-[13%] left-0 bg-no-repeat"
        style={{ backgroundImage: "url(/icons3/teladePDF.png)", backgroundSize: "300px" }}
      />
      <footer className="absolute bg-transparent w-full h-[30%] bottom-[-1px]">
        <div className="absolute bg-black w-full h-[40px] bottom-0">
          <span
            className="absolute left-[9%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
            style={{ backgroundImage: "url(/icons3/image9.png)", backgroundSize: "24px", backgroundPosition: "5px" }}
          />
          <span
            className="absolute left-[44%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
            style={{ backgroundImage: "url(/icons3/image8.png)", backgroundSize: "25px", backgroundPosition: "5px" }}
          />
          <span
            className="absolute left-[80%] top-[4px] w-[35px] h-[35px] bg-black bg-no-repeat border-none"
            style={{ backgroundImage: "url(/icons3/image10.png)", backgroundSize: "11px", backgroundPosition: "7px" }}
          />
        </div>
      </footer>
    </FrameCelular>
  );
}

export const previews = [
  TelaInicialPreview,
  TelaGerarPreview,
  TelaGaleriaPreview,
  TelaPdfPreview,
];