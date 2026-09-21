export default function ModoSelecionado() {
  return (
    <div className="absolute bg-[rgb(2,0,0)] w-full h-[15%] top-[-6px] left-[-5px] m-[5px] pt-[5px] border-black">
      <a className="relative text-base text-white/90 items-center justify-around left-[4px] ml-[6px]">Noite</a>
      <a className="relative text-base text-white/90 items-center justify-around left-[4px] ml-[6px]">Retrato</a>
      <a className="relative text-base text-[#5779FF] items-center justify-around left-[4px] ml-[6px]">Foto</a>
      <a className="relative text-base text-white/90 items-center justify-around left-[4px] ml-[6px]">Video</a>
      <a className="relative text-base text-white/90 items-center justify-around left-[4px] ml-[6px]">Microfilme</a>
    </div>
  );
}