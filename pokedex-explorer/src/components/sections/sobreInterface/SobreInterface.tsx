import React from 'react'
import CardLanding from '@/components/ui/landing/card/CardLanding';
import CardLandingContainer from '@/components/ui/landing/cardContainer/CardLandingContainer';

type Props = {}

export default function SobreInterface({}: Props) {
  return (
    <section
        className="min-h-[calc(100vh-4.5rem)] min-w-full p-5 text-neutral-200
        lg:flex lg:flex-col lg:justify-center lg:items-center
        2xl:min-h-[50vh] 2xl:px-[20%] 2xl:py-40 
    "
    >
        <h2 className=" text-2xl pt-10 pb-4 font-semibold
        lg:text-3xl
        ">
            Informações de cada Pokémon
        </h2>
        <p className=" pb-10 text-red-200
        ">
        Consulte tipos, altura, peso, status base e a arte oficial de cada Pokémon.
        </p>

        <CardLandingContainer>
            <CardLanding
            nome="Bulbasaur"
            tipos={["Grama", "Venenoso"]}
            imagem="/landing/bulbasaur.png"
            alt="bulbasaur"
            keyItem="1"
            />

            <CardLanding
            nome="Ivysaur"
            tipos={["Grama", "Venenoso"]}
            imagem="/landing/ivysaur.png"
            alt="ivysaur"
            keyItem="2"
            />

            <CardLanding
            nome="charmander"
            tipos={["Fogo"]}
            imagem="/landing/charmander.png"
            alt="charmander"
            keyItem="3"
            />
        </CardLandingContainer>
    </section>
  );
}
