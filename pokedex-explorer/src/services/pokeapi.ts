import { Pokemon } from "@/types/pokeapi";

// Export permite que outros aruqivos enxerguem essa funcao
//Promise<Pokemon[]> => lista de interfaces pokemon
//Promise<Pokemon> => uma interface apenas pokemon
export async function getPokemons(): Promise<Pokemon[]>{
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

    //Comverte a resposta em json
    const respostaJson = await resposta.json();

    // Acessa results da resposta
    return respostaJson.results;
}