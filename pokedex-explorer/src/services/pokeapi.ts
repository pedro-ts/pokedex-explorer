import { NumerosLandingType } from "@/types/landing";
import { PokemonDetalhe, Pokemon, PokemonDetalheFormatado } from "@/types/pokeapi";

// Export permite que outros aruqivos enxerguem essa funcao
//Promise<Pokemon[]> => lista de interfaces pokemon
//Promise<Pokemon> => uma interface apenas pokemon
export async function getPokemons(pagina :number = 0): Promise<PokemonDetalheFormatado[]>{
    const offset = pagina * 20;
    const resposta = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
		);

    //Comverte a resposta em json
    const respostaJson: {results: Pokemon[]} = await resposta.json();
    // Acessa results da resposta
    const listaPokemonSimples = respostaJson.results;

    const listaPokemonDetalhes: PokemonDetalheFormatado[] = []; 
    const obterListaDetalhada = listaPokemonSimples.map(async (pokemon) => {
        const nomePokemon = pokemon.name;

        const detalhePokemon: PokemonDetalheFormatado = await getPokemonDetalhe(nomePokemon);

        listaPokemonDetalhes.push(detalhePokemon);
    })

    await Promise.all(obterListaDetalhada);

    console.log(listaPokemonDetalhes);
    return listaPokemonDetalhes;
}

export async function getPokemonDetalhe(nome: string): Promise<PokemonDetalheFormatado>{
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const respostaJson: PokemonDetalhe = await resposta.json();
    const tipos: string[] = [];
    const statusArray: NumerosLandingType[] = [];

    respostaJson.stats.map((status) => {
        let arrayParaInserir: NumerosLandingType = {
            valor: status.base_stat,
            desc: status.stat.name,
        }

        statusArray.push(arrayParaInserir);
    })

    respostaJson.types.map((tipo) => {
        tipos.push(tipo.type.name);
    });

    return {
        ...respostaJson,
        types: tipos,
        stats: statusArray
    };
}

export async function getAutoCompletPokemon(termo: string): Promise<string[]> {
    const listaDePokemonsRequest = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9999999`);
    const listaPokemonJson: { results: Pokemon[] } =
			await listaDePokemonsRequest.json();
    const listaPokemons: string[] = [];
    const listaPokemonsEncontrados: string[] = [];
    const termoFormatado: string = termo.toLocaleLowerCase();

    listaPokemonJson.results.map((pokemon) => {
			listaPokemons.push(pokemon.name);
	});

    listaPokemonsEncontrados.push(
        // ... tira os "[]" do array e deixa só a lista de strings separados por ",""
        ...listaPokemons.filter((nomeDoPokemon) => {
            return nomeDoPokemon.includes(termoFormatado);
        })
    );

    return listaPokemonsEncontrados;
}
