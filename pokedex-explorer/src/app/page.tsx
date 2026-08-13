import React from "react";
import LandingHero from "@/components/sections/hero/LandingHero";
import SobreInterface from "@/components/sections/sobreInterface/SobreInterface";
import TeamBuilderLading from "@/components/sections/teamBuilderLanding/TeamBuilderLading";
import NumerosLanding from "@/components/sections/numerosLanding/NumerosLanding";
import { NumerosLandingType } from "@/types/landing";

type Props = {};

export default function page({}: Props) {
  const valoresSection: NumerosLandingType[] = [
    {
      valor: "1.025+",
      desc: "Espécies mapeadas"
    },
    {
      valor: "50K+",
      desc: "Treinadores Ativos"
    },
    {
      valor: "99.9%",
      desc: "Precisão de dados"
    },
    {
      valor: "0ms",
      desc: "Latência de busca"
    },
  ]
  return (
    <div>
      <LandingHero />
      <SobreInterface />
      <TeamBuilderLading />
      <NumerosLanding
        valores={valoresSection}
      />
    </div>
  );
}
