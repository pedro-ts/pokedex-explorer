import React from 'react'
import { getPokemons } from '@/services/pokeapi'

type Props = {}

export default async function PokemonPage({}: Props) {
    const pokemons = await getPokemons();
    console.log(pokemons);
  return (
    <main>
        <h1>Listagem de todos pokemons</h1>
        <ul>
            {
                pokemons.map(
                    (pokemon) => (
                        <li key={pokemon.name}>
                            {pokemon.name}
                        </li>
                    )
                ) 
            }
        </ul>
    </main>
  )
}