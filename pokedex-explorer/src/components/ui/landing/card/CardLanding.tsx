import React from 'react'

type Props = {
    nome: string
    tipos: string[]
    imagem: string
    alt: string
    keyItem: string
}

export default function CardLanding({ nome, tipos, imagem, alt, keyItem }: Props) {
  function parametrosClassePorTipo(tipo: string) :string{
    const classesPadrao =
      "block w-fit px-2 py-1 text-sm font-semibold rounded-full border-1 transition-all hover:scale-110";

      switch (tipo) {
				case "grass":
				case "Grama":
					return `${classesPadrao} text-lime-400 bg-lime-400/50 border-lime-400`;
				case "bug":
					return `${classesPadrao} text-emerald-400 bg-emerald-400/50 border-emerald-400`;
				case "water":
					return `${classesPadrao} text-sky-500 bg-sky-500/50 border-sky-500`;
				case "flying":
					return `${classesPadrao} text-mist-400 bg-mist-400/50 border-mist-400`;
				case "normal":
					return `${classesPadrao} text-sky-200 bg-sky-200/50 border-sky-200`;
				case "electric":
					return `${classesPadrao} text-amber-300 bg-amber-300/50 border-amber-300`;
				case "fairy":
					return `${classesPadrao} text-fuchsia-400 bg-fuchsia-400/50 border-fuchsia-400`;
				case "fighting":
					return `${classesPadrao} text-red-500 bg-red-500/50 border-red-500`;
				case "dark":
					return `${classesPadrao} text-slate-500 bg-slate-500/50 border-slate-500`;
				case "dragon":
					return `${classesPadrao} text-indigo-800 bg-indigo-800/50 border-indigo-800`;
				case "ghost":
					return `${classesPadrao} text-purple-800 bg-purple-950/50 border-purple-800`;
				case "ice":
					return `${classesPadrao} text-blue-500 bg-blue-500/50 border-blue-500`;
				case "steel":
					return `${classesPadrao} text-mist-700 bg-mist-700/50 border-mist-700`;
				case "psychic":
					return `${classesPadrao} text-fuchsia-600 bg-fuchsia-700/50 border-fuchsia-600`;
				case "rock":
					return `${classesPadrao} text-mist-500 bg-mist-500/50 border-mist-500`;
				case "ground":
					return `${classesPadrao} text-yellow-900 bg-yellow-950/50 border-yellow-900`;
				case "poison":
				case "Venenoso":
					return `${classesPadrao} text-purple-300 bg-purple-600/50 border-purple-300`;
				case "fire":
				case "Fogo":
					return `${classesPadrao} text-orange-400 bg-orange-500/50 border-orange-400`;
				default:
					return `${classesPadrao}`;
			}
  }

  return (
    <li className="list-none" key={keyItem}>
      <article
        data-aos="fade-right"
        className="flex flex-row justify-between items-center text-neutral-200 bg-linear-to-br to-neutral-600/25 from-neutral-700/25 rounded-xl p-7 transition-all hover:scale-103
      "
      >
        <div id="card-infos-container">
          <h3
            className="pb-[10%] font-bold text-2xl
          "
          >
            {nome}
          </h3>
          <ul
            id="tipos-container"
            className="flex gap-2 pt-4 pb-2
          "
          >
            {tipos.map((tipo) => (
              <li key={tipo} className={parametrosClassePorTipo(tipo)}>
                {tipo}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={imagem} alt={alt} className="w-30" />
        </div>
      </article>
    </li>
  );
}