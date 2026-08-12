import React from "react";
import { MoveRight } from "lucide-react";

type Props = {};

export default function LandingHero({}: Props) {
  return (
    <section
      id="hero-container"
      className="min-h-[calc(100vh-4.5rem)] min-w-full flex flex-col justify-center items-center text-red-300 bg-linear-to-tl to-rose-950 via-neutral-900 from-neutral-950 px-7
        "
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="350"
        data-aos-delay="0"
        id="hero-info-container"
      >
        <h1
          className=" text-[3.5rem] text-center text-neutral-200 font-bold pb-7 leading-13 tracking-tight
            lg:mx-[10%]
            "
        >
          A Próxima Geração de{" "}
          <span className="text-rose-600">Exploração Pokémon</span>
        </h1>
        <p
          className="text-center pb-7
            lg:mx-[25%]
          "
        >
          Descubra, construa equipes e analise dados com a plataforma mais
          avançada para treinadores Pokémon.
        </p>
      </div>

      <div data-aos="fade-down" data-aos-delay="300" id="btn-container">
        <a href="/pokemon">
          <div
            className="flex gap-3 items-center justify-center bg-rose-600 px-7 py-4 rounded-full text-neutral-200 text-[1.4rem] font-semibold transition-all duration-600 hover:scale-105 hover:font-bold hover:bg-neutral-200 hover:text-rose-600
          "
          >
            <p>Começar agora</p>
            <MoveRight />
          </div>
        </a>
      </div>
    </section>
  );
}
