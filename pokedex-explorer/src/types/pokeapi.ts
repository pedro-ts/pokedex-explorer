export interface Pokemon{
    name: string;
    url: string;
}

export interface PokemonDetalhe{
    name: string;
    height: number;
    weight: number;
    status: Status;
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