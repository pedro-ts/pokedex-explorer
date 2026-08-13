import React from 'react'
import ListaParaIcon from '@/components/ui/landing/ListaParaIcon/ListaParaIcon'
import ListItemComIcon from '@/components/ui/landing/ListItemComIcon/ListItemComIcon'
import { CircleCheck, Trophy } from "lucide-react";

type Props = {}

export default function TeamBuilderLading({}: Props) {
  return (
    <section
        className="min-h-[calc(100vh-4.5rem)] flex flex-col-reverse justify-center items-center text-neutral-200 px-5
        lg:px-0
    "
    >
        <div
        id="temaBuilder-bg-container"
        className="flex flex-col-reverse justify-center items-center bg-[url('/landing/preto-vermelho-bg.jpg')] bg-cover bg-center p-7 rounded-2xl
        lg:flex-row lg:w-full lg:rounded-none lg:min-h-[calc(100vh-4.5rem)] lg:justify-between lg:px-[20%]
        "
        >
            <div data-aos="fade-in" id="teamBuilder-content-container">
                <Trophy
                className="hidden bg-red-300/30 text-red-300 p-3 rounded
                lg:block
                "
                size={"3.5rem"}
                />
                <h2
                className=" text-2xl font-bold text-center py-4
                lg:text-left
                "
                >
                Team Builder Inteligente
                </h2>
                <p
                className=" text-red-300 text-center
                lg:w-120 lg:text-left lg:pb-4
                ">
                Analise fraquezas, crie sinergias e monte o time perfeito para
                competições.
                </p>
                <ListaParaIcon>
                    <ListItemComIcon
                        texto="Análise de Tipos"
                        icon={<CircleCheck />}
                        corTailwindIcon="text-neutral-100"
                        corTailwindTexto="text-neutral-200"
                    />

                    <ListItemComIcon
                        texto="Calculadora de IV/EV"
                        icon={<CircleCheck />}
                        corTailwindIcon="text-neutral-100"
                        corTailwindTexto="text-neutral-200"
                    />

                    <ListItemComIcon
                        texto="Sugestões de Moveset"
                        icon={<CircleCheck />}
                        corTailwindIcon="text-neutral-100"
                        corTailwindTexto="text-neutral-200"
                    />
                </ListaParaIcon>
            </div>

            <div id="teamBuilder-img-container ">
                <img
                src="/landing/pokebola.png"
                alt=""
                data-aos="fade-up"
                className=" h-40 mb-5 transition-all animate-pulse
                lg:h-60
                2xl:h-[45vh]
                    "
                />
            </div>
        </div>
    </section>
  );
}