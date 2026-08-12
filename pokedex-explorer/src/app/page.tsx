import React from "react";
import LandingHero from "@/components/sections/hero/LandingHero";
import SobreInterface from "@/components/sections/sobreInterface/SobreInterface";
import TeamBuilderLading from "@/components/sections/teamBuilderLanding/TeamBuilderLading";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <LandingHero/>
      <SobreInterface />
      <TeamBuilderLading />
    </div>
  );
}
