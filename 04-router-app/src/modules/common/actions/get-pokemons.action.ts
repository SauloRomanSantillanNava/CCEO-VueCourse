import { HTTPClient } from "../config/plugins/http-client.plugin";
import type {
  PokemonsResponse,
  Pokemon,
  ResultResponse,
  PokemonWithPagination,
  PokemonItemResponse,
} from "../interfaces";

const mapPokemonResponse = (pokemons: PokemonItemResponse[]): Pokemon[] => {
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
    const { results, next, previous } = await HTTPClient.get<PokemonsResponse>(url);
    const formattedPokemons = mapPokemonResponse(results);

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
