import pokemonApi from "../api/pokemons.api";
import type {
  PokemonsResponse,
  Pokemon,
  ResultResponse,
  PokemonWithPagination,
  PokemonItemResponse,
} from "../interfaces";

const formatPokemons = (pokemons: PokemonItemResponse[]): Pokemon[] => {
  return pokemons.map((pokemon) => {
    const pokemonId = Number(pokemon.url.split("/").at(-2) ?? 0);
    return {
      id: pokemonId,
      name: pokemon.name,
    };
  });
};

export const getPokemons = async (
  url: string,
): Promise<ResultResponse<PokemonWithPagination>> => {
  try {
    const { data } = await pokemonApi.get<PokemonsResponse>(url);
    const formattedPokemons = formatPokemons(data.results);
    const { next, previous } = data;

    return {
      ok: true,
      data: {
        pagination: { next, previous },
        pokemons: formattedPokemons,
      },
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: "Error obteniendo los pokemons",
    };
  }
};
