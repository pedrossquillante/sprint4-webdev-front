import Image from 'next/image';

export default function Equipe() {
  const membros = [
    {
      img: "/images/imagemGiovana.jpeg",
      nome: "Giovana",
      cargo: "Gestora e idealizadora do projeto",
    },
    {
      img: "/images/imagemGiovane.jpeg",
      nome: "Giovane",
      cargo: "UI/UX Designer e Desenvolvedor",
    },
    {
      img: "/images/imagemMie.jpeg",
      nome: "Mie",
      cargo: "Desenvolvedora de sistemas",
    },
    {
      img: "/images/imagemPedro.jpeg",
      nome: "Pedro",
      cargo: "UI/UX Designer e Desenvolvedor",
    },
    {
      img: "/images/imagemThiago.png",
      nome: "Thiago",
      cargo: "Analista de TI",
    },
  ];

  return (
    <section className="max-w-330 mx-auto px-4 pt-16 pb-32" id="nossaequipe">
      <h2 className="text-5xl font-bold tracking-[-0.02em] text-center mb-8 pb-8 relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-primaria after:mx-auto">
        Equipe Exptech
      </h2>

      <ul className="grid grid-cols-1 gap-6 list-none md:grid-cols-3 lg:grid-cols-5">
        {membros.map((membro) => (
          <li
            key={membro.nome}
            className="bg-fundo-secundaria p-6 rounded-lg text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
            >
              <figure className="flex flex-col gap-3">
              <Image 
                src={membro.img}
                alt={`Imagem de ${membro.nome}`}
                width={200}
                height={200} 
                className="rounded-full aspect-square object-cover max-w-[140px] mx-auto"
              />
              <figcaption className="flex flex-col text-texto">
                <span className="font-bold text-primaria text-[1.05rem]">
                  {membro.nome}
                </span>
                <span className="text-[0.9rem] opacity-70">
                  {membro.cargo}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}