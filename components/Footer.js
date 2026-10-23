import Image from "next/image";

export default function Footer() {
  const redes = [
    {
      icone: "/icons/iconinstagram.svg",
      nome: "Instagram",
      link: "https://www.instagram.com/jovi.brasil?igsh=YXB1bW9lYTY5cXNm",
    },
    {
      icone: "/icons/icontiktok.svg",
      nome: "Tiktok",
      link: "https://www.tiktok.com/@jovi.brasil",
    },
    {
      icone: "/icons/iconfacebook.svg",
      nome: "Facebook",
      link: "https://www.facebook.com/JOVI.Brasil",
    },
    {
      icone: "/icons/iconyoutube.svg",
      nome: "Youtube",
      link: "https://www.youtube.com/@Jovi.Brasil",
    },
    {
      icone: "/icons/iconlinkedIn.svg",
      nome: "LinkedIn",
      link: "https://www.linkedin.com/company/jovi-mobile/",
    },
  ];

  return (
    <footer className="bg-primaria text-sobre-primaria">
      <div className="max-w-330 mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-titulo text-2xl font-bold">JOVI</p>

          <ul
            role="list"
            aria-label="Redes sociais"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 list-none"
          >
            {redes.map((rede) => (
              <li key={rede.nome}>
                <a
                  href={rede.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-11 px-2 rounded-lg text-sobre-primaria no-underline underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-sobre-primaria"
                >
                  <Image
                    src={rede.icone}
                    alt=""
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                  {rede.nome}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 pt-6 border-t border-sobre-primaria/20 text-sm text-sobre-primaria/80 text-center">
          © 2026 Jovi Mobile. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}