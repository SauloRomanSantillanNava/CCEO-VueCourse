export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonWithPagination {
  pagination: PokemonPagination;
  pokemons: Pokemon[];
}

export interface PokemonPagination {
  next: string | null;
  previous: string | null;
}
