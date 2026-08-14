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
            Dados Detalhados
        </h2>
        <p className=" pb-10 text-red-200
        ">
        Explore informações completas sobre cada espécie, evoluções e status base.
        </p>

        <CardLandingContainer>
            <CardLanding
            nome="Bulbasaur"
            tipos={["Grama", "Venenoso"]}
            imagem="/landing/bulbasaur.png"
            alt="bulbasaur"
            key="bulbasaur"
            />

            <CardLanding
            nome="Ivysaur"
            tipos={["Grama", "Venenoso"]}
            imagem="/landing/ivysaur.png"
            alt="ivysaur"
            key="ivysaur"
            />

            <CardLanding
            nome="charmander"
            tipos={["Fogo"]}
            imagem="/landing/charmander.png"
            alt="charmander"
            key="charmander"
            />
        </CardLandingContainer>
    </section>
  );
}