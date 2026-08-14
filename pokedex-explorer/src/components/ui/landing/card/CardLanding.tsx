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