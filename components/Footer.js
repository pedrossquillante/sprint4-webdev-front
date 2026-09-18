import Image from 'next/image';

export default function Footer() {
  const redes = [
    {
      icone: "/icons/iconinstagram.svg",
      alt: "icone do Instagram",
      classe: "icone-instagram",
      nome: "Instagram",
      link: "https://www.instagram.com/jovi.brasil?igsh=YXB1bW9lYTY5cXNm",
    },
    {
      icone: "/icons/icontiktok.svg",
      alt: "icone do tiktok",
      classe: "icone-tiktok",
      nome: "Tiktok",
      link: "https://www.tiktok.com/@jovi.brasil",
    },
    {
      icone: "/icons/iconfacebook.svg",
      alt: "icone do facebook",
      classe: "icone-facebook",
      nome: "Facebook",
      link: "https://www.facebook.com/JOVI.Brasil",
    },
    {
      icone: "/icons/iconyoutube.svg",
      alt: "icone do youtube",
      classe: "icone-youtube",
      nome: "Youtube",
      link: "https://www.youtube.com/@Jovi.Brasil",
    },
    {
      icone: "/icons/iconlinkedIn.svg",
      alt: "icone do linkedin",
      classe: "icone-linkedin",
      nome: "LinkedIn",
      link: "https://www.linkedin.com/company/jovi-mobile/",
    },
  ];

  return (
    <footer>
      <div className="redes-sociais">
        {redes.map((rede) => (
          <span key={rede.nome}>
            <Image src={rede.icone} alt={rede.alt} className={rede.classe} />
            <a href={rede.link} target="_blank" rel="noopener noreferrer">
              {rede.nome}
            </a>
          </span>
        ))}
      </div>
      <p>© 2026 Jovi Mobile. Todos os direitos reservados.</p>
    </footer>
  );
}