import React from 'react'

type Props = {
    icon: React.ReactNode
    texto: string
    corTailwindIcon: string
    corTailwindTexto: string
}

export default function ListItemComIcon({
  icon,
  texto,
  corTailwindIcon,
  corTailwindTexto,
}: Props) {
return (
  <li data-aos="fade-right">
    <div
      className={`flex gap-2 items-center my-2 ${corTailwindIcon} ${corTailwindTexto}`}
    >
      <span className={`${corTailwindIcon}`}>{icon}</span>
      <span className={`${corTailwindTexto}`}>{texto}</span>
    </div>
  </li>
);
}