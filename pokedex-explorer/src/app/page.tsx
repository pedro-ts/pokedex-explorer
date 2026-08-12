import React from "react";
import LandingHero from "@/components/sections/hero/LandingHero";
import SobreInterface from "@/components/sections/sobreInterface/SobreInterface";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <LandingHero/>
      <SobreInterface />
    </div>
  );
}
