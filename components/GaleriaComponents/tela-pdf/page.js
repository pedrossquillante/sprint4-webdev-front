import PdfTopo from './PdfTopo';
import PdfConteudo from './PdfConteudo';
import PdfRodape from './PdfRodape';

export default function TelaPdf() {
  return (
    <div
      className="absolute w-[328px] h-[669px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 bg-no-repeat"
      style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pixel_2_XL_front.svg/330px-Pixel_2_XL_front.svg.png)" }}
    >
      <div className="absolute w-[290px] h-[580px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[5%] bg-transparent">
        <PdfTopo />
        <PdfConteudo />
        <PdfRodape />
      </div>
    </div>
  );
}