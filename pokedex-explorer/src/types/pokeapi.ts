import NumerosLanding from "@/components/sections/numerosLanding/NumerosLanding";
import { NumerosLandingType } from "./landing";
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetalheBase {
	sprites: sprites;
	name: string;
	id: number;
	height: number;
	weight: number;
}

export interface PokemonDetalhe extends PokemonDetalheBase {
	stats: Status[];
	types: Tipos[];
}

export interface PokemonDetalheFormatado extends PokemonDetalheBase {
  stats: NumerosLandingType[];
  types: string[];
}

export interface sprites {
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
}

export interface Status {
  base_stat: number;
  effort: number;
  stat: StatusDetail;
}

export interface StatusDetail {
  name: string;
  url: string;
}

export interface Tipos {
  slot: number;
  type: TiposDetails;
}

export interface TiposDetails {
  name: string;
  url: string;
}
