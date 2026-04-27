import pokemonApi from "../api/pokemons.api";
import type { PokemonsResponse, Pokemon, ResultResponse } from "../interfaces";

const DEFAULT_POKEMONS_QUANTITY = 160;

const formatPokemons = (pokemons: PokemonsResponse): Pokemon[] => {
  return pokemons.results.map((pokemon) => {
    const pokemonId = Number(pokemon.url.split("/").at(-2) ?? 0);
    return {
      id: pokemonId,
      name: pokemon.name,
    };
  });
};

export const getPokemons = async (
  howMany: number = DEFAULT_POKEMONS_QUANTITY,
): Promise<ResultResponse<Pokemon[]>> => {
  try {
    const { data } = await pokemonApi.get<PokemonsResponse>(
      `/?limit=${howMany}`,
    );
    const formattedPokemons = formatPokemons(data);

    return {
      ok: true,
      data: formattedPokemons,
    };
  } catch (error: unknown) {
    return {
      ok: false,
      error: "Error obteniendo los pokemons",
    };
  }
};
