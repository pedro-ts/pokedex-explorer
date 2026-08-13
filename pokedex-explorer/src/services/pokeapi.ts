import { PokemonDetalhe, Pokemon } from "@/types/pokeapi";

// Export permite que outros aruqivos enxerguem essa funcao
//Promise<Pokemon[]> => lista de interfaces pokemon
//Promise<Pokemon> => uma interface apenas pokemon
export async function getPokemons(): Promise<PokemonDetalhe[]>{
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

    //Comverte a resposta em json
    const respostaJson: {results: Pokemon[]} = await resposta.json();
    // Acessa results da resposta
    const listaPokemonSimples = respostaJson.results;

    const listaPokemonDetalhes: PokemonDetalhe[] = []; 
    const obterListaDetalhada = listaPokemonSimples.map(async (pokemon) => {
        const nomePokemon = pokemon.name;

        const detalhePokemon: PokemonDetalhe = await getPokemonDetalhe(nomePokemon);

        listaPokemonDetalhes.push(detalhePokemon);
    })

    await Promise.all(obterListaDetalhada);

    console.log(listaPokemonDetalhes);
    return listaPokemonDetalhes;
}

export async function getPokemonDetalhe(nome: string): Promise<PokemonDetalhe>{
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const respostaJson = await resposta.json();

    return respostaJson;
}