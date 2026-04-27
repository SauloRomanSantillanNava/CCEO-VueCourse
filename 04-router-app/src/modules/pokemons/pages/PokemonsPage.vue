<script setup lang="ts">
import PokemonCard from "../components/PokemonCard.vue";
import PokemonsData from "../components/PokemonsData.vue";
import PokemonsPagination from "../components/PokemonsPagination.vue";
import { usePokemons } from "../composables/usePokemons";

const { isLoading, message, pokemons, pagination, onNextPage, onPrevPage } =
  usePokemons();
</script>

<template>
  <pokemons-data :quantity="pokemons.length" />

  <main class="grid md:grid-cols-2 gap-x-5 gap-y-2 mb-10">
    <pokemon-card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      v-bind="pokemon"
    />
  </main>

  <div class="flex justify-end w-full">
    <pokemons-pagination
      @prev-page="onPrevPage"
      @next-page="onNextPage"
      :pagination="pagination"
    />
  </div>
</template>
