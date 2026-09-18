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
    <section className="container" id="nossaequipe">
      <h2>Equipe Exptech</h2>
      <ul>
        {membros.map((membro) => (
          <li key={membro.nome}>
            <figure>
              <Image src={membro.img} alt={`Imagem de ${membro.nome}`} width={200} height={200} />
              <figcaption>
                <span className="nome-membro">{membro.nome}</span>
                <span className="cargo-membro">{membro.cargo}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}