"use client";

import React, { useEffect, useState } from 'react'
import { PokemonDetalhe, PokemonDetalheFormatado } from '@/types/pokeapi';
import { getPokemons } from '@/services/pokeapi'
import TitleAndSubtitle from '@/components/ui/TitleAndSubtitle/TitleAndSubtitle';
import CardLandingContainer from '@/components/ui/landing/cardContainer/CardLandingContainer';
import CardLanding from '@/components/ui/landing/card/CardLanding';
import PaginatBtn from '@/components/ui/PaginateBtn/PaginatBtn';

type Props = {}

export default function PokemonPage({}: Props) {
    const [panginaAtual, setPaginaAtual] = useState(0);
    const [pokemons, setPokemons] = useState<PokemonDetalheFormatado[]>([]);

    useEffect(() => {
        // Cria função
        async function buscarPokemons() {
            const resposta = await getPokemons(panginaAtual);
            setPokemons(resposta);
        }

        // O que vai acontecer sempre que mudar a pgaina
        buscarPokemons();
    }, [panginaAtual])

return (
	<main className="text-neutral-200">
		<TitleAndSubtitle
			title="Listagem de Pokemons"
			subtitle="dkjkashdkjshajkdhjaks kjashdjhaskjhdkjas kashdhsakjdhkjsa asdkjhsajkhdk  kjashdjkshak"
			headerType="h1"
		/>
		<div
			id="list-ontainer"
			className="px-5
            lg:pb-10
            2xl:px-[20%]
        "
		>
			<CardLandingContainer>
				{pokemons.map((pokemon) => (
					<CardLanding
						nome={pokemon.name}
						imagem={pokemon.sprites.other["official-artwork"].front_default}
						alt={pokemon.name}
						tipos={pokemon.types}
						keyItem={pokemon.name}
						key={pokemon.id}
					/>
				))}
			</CardLandingContainer>
		</div>
		<div
        id="paginate-btn-container"
        className=' flex items-center justify-center py-5
        '>
			<PaginatBtn
                paginaAtual={panginaAtual}
                setState={setPaginaAtual}
            />
		</div>
	</main>
);
}