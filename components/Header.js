"use client";

import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  const linkClasses =
    "relative text-destaque no-underline font-bold after:content-[''] after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-destaque after:scale-x-0 motion-safe:after:transition-transform motion-safe:after:duration-300 hover:after:scale-x-100 inline-block py-2.5 focus-visible:after:scale-x-100";

  return (
    <header className="sticky top-0 z-10 lg:py-4 lg:bg-transparent lg:backdrop-blur-none lg:border-b-0 bg-fundo/80 backdrop-blur-md border-b border-borda">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-20 focus:bg-primaria focus:text-sobre-primaria focus:rounded-full focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <div className="max-w-330 mx-auto px-4">
        <nav
          aria-label="Principal"
          className="flex flex-wrap items-center justify-between py-3 lg:flex-nowrap lg:justify-center lg:items-center lg:relative lg:bg-fundo-secundaria lg:rounded-full lg:py-1 lg:px-8 lg:shadow-sm lg:dark:shadow-none lg:dark:border lg:dark:border-borda"
        >
          <a
            href="#paginainicial"
            onClick={fecharMenu}
            aria-label="JOVI, página inicial"
            className="font-titulo text-2xl font-bold text-destaque lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2 motion-safe:transition-transform motion-safe:duration-300 lg:hover:scale-110"
          >
            JOVI
          </a>

          <button
            className="size-11 inline-flex items-center justify-center rounded-full text-2xl text-destaque cursor-pointer lg:hidden"
            type="button"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuAberto((prev) => !prev)}
          >
            {menuAberto ? "✕" : "☰"}
          </button>

          <ul
            id="menu-principal"
            className={`${menuAberto ? "flex" : "hidden"} w-full gap-1 pb-4 flex-col list-none items-start lg:flex lg:flex-row lg:gap-8 lg:items-center lg:w-auto lg:pb-0`}
          >
            <li>
              <a
                href="#paginainicial"
                onClick={fecharMenu}
                className={linkClasses}
              >
                Página Inicial
              </a>
            </li>
            <li>
              <a
                href="#publicoalvo"
                onClick={fecharMenu}
                className={linkClasses}
              >
                Público-alvo
              </a>
            </li>
            <li>
              <a href="#solucao" onClick={fecharMenu} className={linkClasses}>
                Solução
              </a>
            </li>
            <li>
              <a href="#galeria" onClick={fecharMenu} className={linkClasses}>
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#nossaequipe"
                onClick={fecharMenu}
                className={linkClasses}
              >
                Nossa equipe
              </a>
            </li>
            <li>
              <a href="#contato" onClick={fecharMenu} className={linkClasses}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}