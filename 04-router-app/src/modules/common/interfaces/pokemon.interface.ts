export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonWithPagination {
  next: string | null;
  prev: string | null;
  pokemons: Pokemon[];
}
