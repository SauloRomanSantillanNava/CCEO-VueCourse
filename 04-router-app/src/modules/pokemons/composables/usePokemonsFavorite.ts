import type { Pokemon } from "@/modules/common/interfaces"
import { ref } from "vue"

export const usePokemonsFavorite = () => {

    const favoritePokemons = ref<Pokemon[]>([])

    const isPokemonInFavorites = (pokemonId: number): boolean => {
        const pokemonsId = favoritePokemons.value.map(po => po.id)
        return pokemonsId.includes(pokemonId)
    }

    const onAdd = (pokemon: Pokemon) => {
        favoritePokemons.value.unshift(pokemon)
    }

    const onRemove = (pokemonId: number) => {
        favoritePokemons.value = favoritePokemons.value?.filter(po => po.id !== pokemonId)
    }

    return {
        favoritePokemons,

        onAdd,
        onRemove,
        isPokemonInFavorites
    }
}