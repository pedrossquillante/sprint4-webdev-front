import Image from "next/image";

export default function Footer() {
  const redes = [
    {
      icone: "/icons/iconinstagram.svg",
      alt: "icone do Instagram",
      nome: "Instagram",
      link: "https://www.instagram.com/jovi.brasil?igsh=YXB1bW9lYTY5cXNm",
    },
    {
      icone: "/icons/icontiktok.svg",
      alt: "icone do tiktok",
      nome: "Tiktok",
      link: "https://www.tiktok.com/@jovi.brasil",
    },
    {
      icone: "/icons/iconfacebook.svg",
      alt: "icone do facebook",
      nome: "Facebook",
      link: "https://www.facebook.com/JOVI.Brasil",
    },
    {
      icone: "/icons/iconyoutube.svg",
      alt: "icone do youtube",
      nome: "Youtube",
      link: "https://www.youtube.com/@Jovi.Brasil",
    },
    {
      icone: "/icons/iconlinkedIn.svg",
      alt: "icone do linkedin",
      nome: "LinkedIn",
      link: "https://www.linkedin.com/company/jovi-mobile/",
    },
  ];

  return (
    <footer className="text-center p-6 bg-primaria text-fundo-secundaria border-t-10 border-primaria">
      <p className="mx-auto text-fundo-secundaria">
        © 2026 Jovi Mobile. Todos os direitos reservados.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-4">
        {redes.map((rede) => (
          <a
            key={rede.nome}
            href={rede.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-fundo-secundaria no-underline transition-opacity hover:opacity-60"
          >
            <Image
              src={rede.icone}
              alt={rede.alt}
              width={20}
              height={20}
              className="brightness-0 invert"
            />
            {rede.nome}
          </a>
        ))}
      </div>
    </footer>
  );
}