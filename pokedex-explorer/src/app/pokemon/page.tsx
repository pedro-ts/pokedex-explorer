import React from 'react'
import { getPokemons } from '@/services/pokeapi'
import TitleAndSubtitle from '@/components/ui/TitleAndSubtitle/TitleAndSubtitle';

type Props = {}

export default async function PokemonPage({}: Props) {
    const pokemons = await getPokemons();
    console.log(pokemons);
  return (
    <main className='text-neutral-200'>
        <TitleAndSubtitle 
        title='Listagem de Pokemons'
        subtitle='dkjkashdkjshajkdhjaks kjashdjhaskjhdkjas kashdhsakjdhkjsa asdkjhsajkhdk  kjashdjkshak'
        headerType='h1'
        />
        <ul>
            {
                pokemons.map(
                    (pokemon) => (
                        <li key={pokemon.name}>
                            <article>
                                <div id="poke-card-info-container">
                                    <div id="poke-card-name-container">
                                        <h3>{pokemon.name}</h3>
                                        <p>{`#${pokemon.id}`}</p>
                                    </div>
                                    <div id='poke-card-tipos-contaier'>
                                        <ul>
                                            {pokemon.types.map((tipo) => (
                                                <li>{tipo.type.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div id="poke-card-img-">
                                    <img
                                        src={pokemon.sprites.other["official-artwork"].front_default}
                                        alt={pokemon.name}
                                    />
                                </div>
                            </article>
                        </li>
                    )
                ) 
            }
        </ul>
    </main>
  )
}