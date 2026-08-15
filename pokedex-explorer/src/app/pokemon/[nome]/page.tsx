import React from "react";
import TitleAndSubtitle from "@/components/ui/TitleAndSubtitle/TitleAndSubtitle";
import NumerosLanding from "@/components/sections/numerosLanding/NumerosLanding";
import { MoveVertical, Weight } from "lucide-react";
import InfoCard from "@/components/ui/infoCard/InfoCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getPokemonDetalhe } from "@/services/pokeapi";
import { PokemonDetalheFormatado } from "@/types/pokeapi";
import { Card, CardContent } from "@/components/ui/card";
import TypeBadge from "@/components/shared/TypeBadge";

type Props = {
	params: Promise<{
		nome: string;
	}>;
};

export default async function Page({ params }: Props) {
	const { nome } = await params;
  const pokemon: PokemonDetalheFormatado = await getPokemonDetalhe(nome);

	return (
		<main
			className="text-neutral-200
		lg:grid lg:grid-cols-2
		2xl:mx-[20%]
		"
		>
			<TitleAndSubtitle
				headerType="h1"
				title={nome}
				subtitle={`ID: #${pokemon.id}`}
				className="col-span-2"
			/>
			<div
				data-aos="fade-right"
				id="carousel-container"
				className="p-5
      "
			>
				<Carousel>
					<CarouselContent>
						<CarouselItem>
							<Card
								className=" bg-neutral-800/50
              "
							>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									<img
										src={
											pokemon.sprites.other["official-artwork"].front_default
										}
										alt={pokemon.name}
									/>
								</CardContent>
							</Card>
						</CarouselItem>
					</CarouselContent>
					{/* <CarouselPrevious />
					<CarouselNext /> */}
				</Carousel>
			</div>

			<div id="dados-container">
				<div id="types-container" className="mx-auto w-fit py-4 *:mx-2">
					{pokemon.types.map((tipo) => (
						<TypeBadge size="lg" tipo={tipo} />
					))}
				</div>
				<div
					id="info-cards-container"
					className="
				px-5
				lg:px-10
				2xl:px-[20%]
				"
				>
					<InfoCard
						infoTitulo="Altura"
						infoValor={`${pokemon.height}dm`}
						icon={<MoveVertical />}
					/>
					<InfoCard
						infoTitulo="Peso"
						infoValor={`${pokemon.weight}hg`}
						icon={<Weight />}
					/>
				</div>
				<NumerosLanding valores={pokemon.stats} />
			</div>
		</main>
	);
}
