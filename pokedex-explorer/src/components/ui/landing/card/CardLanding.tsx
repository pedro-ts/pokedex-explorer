import React from 'react'

type Props = {
    nome: string
    tipos: string[]
    imagem: string
    alt: string
}

export default function CardLanding({ nome, tipos, imagem, alt }: Props) {
  function parametrosClassePorTipo(tipo: string) :string{
    const classesPadrao =
      "block w-fit px-2 py-1 text-sm font-semibold rounded-full border-1 transition-all hover:scale-110";

      switch(tipo){
        case "Grama":
          return `${classesPadrao} text-lime-400 bg-lime-400/50 border-lime-400`;
        case "Venenoso":
          return `${classesPadrao} text-purple-300 bg-purple-600/50 border-purple-300`;
        case "Fogo":
          return `${classesPadrao} text-orange-400 bg-orange-500/50 border-orange-400`;
        default:
          return `${classesPadrao}`;
      }
  }

  return (
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
          className="grid grid-cols-3 gap-2
        lg:gap-0
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
  );
}