import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function ListaParaIcon({children}: Props) {
  return (
    <ul>
        {children}
    </ul>
  )
}