<script setup lang="ts">
import { usePokemonsFavorite } from "../composables/usePokemonsFavorite";

const { favoritePokemons } = usePokemonsFavorite();
</script>

<template>
  <h1>Pokemons Favorite Page</h1>
</template>
