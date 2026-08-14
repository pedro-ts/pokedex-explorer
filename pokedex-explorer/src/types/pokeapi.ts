export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetalhe {
  sprites: string[];
  name: string;
  id: number;
  height: number;
  weight: number;
  status: Status[];
  types: Tipos[];
}

export interface PokemonDetalheFormatado {
  sprites: string[];
  name: string;
  id: number;
  height: number;
  weight: number;
  status: Status[];
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
