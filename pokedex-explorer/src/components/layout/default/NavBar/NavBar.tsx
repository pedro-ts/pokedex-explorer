"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between bg-neutral-900 px-4 border-b-2 border-red-300/50">
      <div id="logo-container" className="py-4 text-red-300">
        <p className="text-lg font-bold">PokeDex Pro</p>
      </div>

      <div
        className={`fixed right-0 top-[3.7rem] z-40 w-screen bg-neutral-900 pb-6 pt-4 text-red-300 transition-all duration-300 ease-out motion-reduce:transition-none lg:static lg:w-fit lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto ${
          menuAberto
            ? "translate-y-0 pointer-events-auto opacity-100"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex justify-around">
          <li>
            <a
              className="border-red-300 py-3 transition-all hover:border-b-2 hover:font-bold 
                lg:m-5
              "
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="border-red-300 py-3 transition-all hover:border-b-2 hover:font-bold 
                lg:m-5
              "
              href="/pokemon"
            >
              Pokemons
            </a>
          </li>
          <li>
            <a
              className="border-red-300 py-3 transition-all hover:border-b-2 hover:font-bold 
                lg:m-5
              "
              href="/pokemon/gengar"
            >
              Gengar
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          className="text-red-300"
        >
          <Menu size={35} strokeWidth={3} absoluteStrokeWidth />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
