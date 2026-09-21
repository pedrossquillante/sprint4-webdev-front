import ModoSelecionado from '.ModoSelecionado';
import FaixaFuncoes from '.FaixaFuncoes';

export default function BarraRodape() {
  return (
    <footer className="absolute bg-black w-full h-[24%] bottom-[-1px]">
      <ModoSelecionado />
      <FaixaFuncoes />
    </footer>
  );
}