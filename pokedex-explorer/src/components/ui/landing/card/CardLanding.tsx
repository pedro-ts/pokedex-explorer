import React from 'react'
import TypeBadge from '@/components/shared/TypeBadge';

type Props = {
    nome: string
    tipos: string[]
    imagem: string
    alt: string
    keyItem: string
}

export default function CardLanding({ nome, tipos, imagem, alt, keyItem }: Props) {
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
              <li key={tipo}>
                <TypeBadge tipo={tipo} />
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
