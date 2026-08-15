"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Search } from "lucide-react";
import { getAutoCompletPokemon } from "@/services/pokeapi";

export default function SearchPokemon() {
  const [termo, setTermo] = useState("");
  const [pokemonsEncontrados, setPokemonsEncontrados] = useState<string[]>([]);

  async function pesquisarPokemon(evento: ChangeEvent<HTMLInputElement>) {
    const novoTermo = evento.target.value;
    setTermo(novoTermo);

    if (!novoTermo.trim()) {
      setPokemonsEncontrados([]);
      return;
    }

    const nomesEncontrados = await getAutoCompletPokemon(novoTermo);
    setPokemonsEncontrados(nomesEncontrados);
  }

  return (
    <div className="relative mx-auto mb-8 w-full max-w-xl">
      <label htmlFor="pesquisa-pokemon" className="sr-only">
        Pesquisar Pokémon
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-neutral-500"
      />
      <input
        id="pesquisa-pokemon"
        type="search"
        value={termo}
        onChange={pesquisarPokemon}
        placeholder="Pesquisar Pokémon"
        className="w-full rounded-md border border-neutral-600 bg-neutral-900 py-3 pr-4 pl-11 text-neutral-100 outline-none transition focus:border-neutral-200"
      />

      {pokemonsEncontrados.length > 0 && (
        <ul className="absolute z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-md border border-neutral-700 bg-neutral-900 p-1 shadow-lg">
          {pokemonsEncontrados.map((nomePokemon) => (
            <li key={nomePokemon}>
              <Link
                href={`/pokemon/${nomePokemon}`}
                className="block rounded px-3 py-2 text-neutral-200 transition hover:bg-neutral-800"
              >
                {nomePokemon}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
