"use client";

import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header>
      <div className="header-top container">
        <nav>
          <div className="logo">JOVI</div>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menu"
            onClick={() => setMenuAberto((prev) => !prev)}
          >
            ☰
          </button>
          <ul className={menuAberto ? "menu-aberto" : ""}>
            <li>
              <a href="#paginainicial" onClick={fecharMenu}>
                Página Inicial
              </a>
            </li>
            <li>
              <a href="#publicoalvo" onClick={fecharMenu}>
                Público-alvo
              </a>
            </li>
            <li>
              <a href="#solucao" onClick={fecharMenu}>
                Solução
              </a>
            </li>
            <li>
              <a href="#galeria" onClick={fecharMenu}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#nossaequipe" onClick={fecharMenu}>
                Nossa equipe
              </a>
            </li>
            <li>
              <a href="#contato" onClick={fecharMenu}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}