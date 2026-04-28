export interface PokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonItemResponse[];
}

export interface PokemonItemResponse {
  name: string;
  url: string;
}
