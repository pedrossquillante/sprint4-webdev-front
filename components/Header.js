"use client";

import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  const linkClasses =
    "relative text-primaria no-underline font-bold transition-opacity duration-300 hover:opacity-30 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primaria after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="lg:sticky lg:top-0 lg:z-10 lg:py-4">
      <div className="max-w-330 mx-auto px-4">
        <nav className="lg:flex lg:justify-center lg:items-center lg:relative lg:bg-fundo-secundaria lg:rounded-full lg:py-3 lg:px-8 lg:shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="text-2xl font-bold text-center bg-fundo-secundaria rounded-full py-3 px-12 block w-fit mx-auto mt-6 mb-4 lg:absolute lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:transition-transform lg:duration-300 lg:bg-transparent lg:p-0 lg:rounded-none lg:w-auto lg:m-0 lg:hover:scale-110">
            JOVI
          </div>

          <button
            className="bg-transparent border-none text-2xl text-primaria cursor-pointer p-2 lg:hidden"
            id="menuToggle"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto((prev) => !prev)}
          >
            ☰
          </button>

          <ul
            className={`${menuAberto ? "flex" : "hidden"} flex-col list-none items-start lg:flex lg:flex-row lg:gap-8 lg:items-center`}
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