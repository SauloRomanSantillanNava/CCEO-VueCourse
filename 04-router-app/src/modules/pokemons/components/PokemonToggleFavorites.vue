<script setup lang="ts">
import type { Pokemon } from "@/modules/common/interfaces";
import { useFavoritePokemonsStore } from "@/store/favorite-pokemons.store";

interface Props {
  isInFavorites: boolean;
  pokemon: Pokemon;
}

const { pokemon, isInFavorites } = defineProps<Props>();

const favoritePokemonsStore = useFavoritePokemonsStore();
const { onAdd, onRemove, isPokemonInFavorites } = favoritePokemonsStore;

const onToggle = () =>
  isInFavorites ? onRemove(pokemon.id ?? 0) : onAdd(pokemon ?? ({} as Pokemon));
</script>

<template>
  <button
    @click="onToggle"
    :class="[
      'btn text-white',
      {
        'bg-orange-500': isInFavorites,
        'bg-pink-800 ': !isInFavorites,
      },
    ]"
  >
    {{ isInFavorites ? "Remover de " : "Agregar a" }} favoritos
  </button>
</template>
