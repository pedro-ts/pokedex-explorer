import React from 'react'
import { PokemonDetalhe } from '@/types/pokeapi';
import { getPokemons } from '@/services/pokeapi'
import TitleAndSubtitle from '@/components/ui/TitleAndSubtitle/TitleAndSubtitle';
import CardLandingContainer from '@/components/ui/landing/cardContainer/CardLandingContainer';
import CardLanding from '@/components/ui/landing/card/CardLanding';

type Props = {}

export default async function PokemonPage({}: Props) {
    const pokemons = await getPokemons();

return (
    <main className="text-neutral-200">
        <TitleAndSubtitle
        title="Listagem de Pokemons"
        subtitle="dkjkashdkjshajkdhjaks kjashdjhaskjhdkjas kashdhsakjdhkjsa asdkjhsajkhdk  kjashdjkshak"
        headerType="h1"
    />
        <div id="list-ontainer" 
            className="px-5
            lg:pb-10
            2xl:px-[20%]
        ">
            <CardLandingContainer>
                {pokemons.map((pokemon) => (
                    <CardLanding
                        nome={pokemon.name}
                        imagem={pokemon.sprites.other["official-artwork"].front_default}
                        alt={pokemon.name}
                        tipos={pokemon.types}
                        key={pokemon.name}
            />
            ))}
            </CardLandingContainer>
        </div>
    </main>
);
}