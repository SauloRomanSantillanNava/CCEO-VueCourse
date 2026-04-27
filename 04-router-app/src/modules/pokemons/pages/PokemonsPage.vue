<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

import PokemonCard from "../components/PokemonCard.vue";
import PokemonsData from "../components/PokemonsData.vue";
import PokemonsPagination from "../components/PokemonsPagination.vue";
import SpinnerLoader from "@/modules/common/components/SpinnerLoader.vue";

const { isLoading, message, pokemons, pagination, onNextPage, onPrevPage } =
  usePokemons();
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-screen">
    <spinner-loader />
  </div>
  <template v-else>
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
</template>
