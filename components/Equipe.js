import Image from "next/image";

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
    <section
      className="max-w-330 mx-auto px-4 py-16 lg:py-24 scroll-mt-20 lg:scroll-mt-24"
      id="nossaequipe"
    >
      <h2 className="titulo-secao">Equipe Exptech</h2>

      <ul
        role="list"
        className="flex flex-wrap justify-center gap-4 md:gap-6 list-none"
      >
        {membros.map((membro) => (
          <li
            key={membro.nome}
            className="card text-center w-[calc(50%_-_0.5rem)] md:w-[calc((100%_-_3rem)_/_3)] lg:w-[calc((100%_-_6rem)_/_5)]"
          >
            <figure className="flex flex-col gap-3">
              <Image
                src={membro.img}
                alt=""
                width={200}
                height={200}
                sizes="140px"
                className="w-full max-w-35 aspect-square rounded-full object-cover mx-auto ring-4 ring-destaque/20"
              />
              <figcaption className="flex flex-col">
                <span className="font-titulo font-bold text-lg text-destaque">
                  {membro.nome}
                </span>
                <span className="text-sm text-texto-suave">{membro.cargo}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}