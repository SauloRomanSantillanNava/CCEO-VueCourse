<script setup lang="ts">
import { useRoute } from "vue-router";
import { usePokemon } from "../composables/usePokemon";
import SpinnerLoader from "@/modules/common/components/SpinnerLoader.vue";
import PokemonNotFound from "../components/PokemonNotFound.vue";
import PokemonToggleFavorites from "../components/PokemonToggleFavorites.vue";
import { useFavoritePokemonsStore } from "@/store/favorite-pokemons.store";

const route = useRoute();
const { name } = route.params;

const { isLoading, pokemon } = usePokemon(name as string);
const favoritePokemonsStore = useFavoritePokemonsStore();
const { isPokemonInFavorites } = favoritePokemonsStore;
</script>

<template>
  <section class="p-6 max-w-6xl mx-auto">
    <div v-if="isLoading" class="flex justify-center mt-20">
      <spinner-loader />
    </div>

    <pokemon-not-found
      v-else-if="!pokemon"
      :pokemonNameNotFound="name as string"
    />

    <div v-else class="grid md:grid-cols-2 gap-10 items-start">
      <div class="flex flex-col items-center md:items-start">
        <img
          :src="pokemon?.image"
          :alt="pokemon?.name"
          class="w-64 h-64 object-contain drop-shadow-lg"
        />

        <h1 class="text-4xl font-bold capitalize mt-4">
          {{ pokemon?.name }}
        </h1>

        <p class="text-gray-500 text-lg">#{{ pokemon?.id }}</p>

        <div class="flex gap-2 my-4">
          <span
            v-for="type in pokemon?.types"
            :key="type.type"
            class="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm capitalize"
          >
            {{ type.type }}
          </span>
        </div>

        <pokemon-toggle-favorites
          :isInFavorites="isPokemonInFavorites(pokemon.id)"
          :pokemon="pokemon"
        />
      </div>

      <div class="space-y-8">
        <div>
          <h2 class="text-xl font-semibold mb-3">Stats</h2>

          <div class="space-y-2">
            <div v-for="(value, key) in pokemon?.stats" :key="key">
              <div class="flex justify-between text-sm">
                <span class="capitalize">{{ key }}</span>
                <span>{{ value }}</span>
              </div>

              <div class="w-full bg-gray-200 rounded h-2">
                <div
                  class="bg-blue-500 h-2 rounded"
                  :style="{ width: `${value}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">Abilities</h2>

          <p>
            <span class="text-gray-500">Main:</span>
            <span class="font-medium ml-1">{{ pokemon?.abilities.main }}</span>
          </p>

          <p v-if="pokemon?.abilities.hidden">
            <span class="text-gray-500">Hidden:</span>
            <span class="font-medium ml-1">
              {{ pokemon?.abilities.hidden }}
            </span>
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">Details</h2>

          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-gray-500">Height</span>
              <p>{{ pokemon?.height }} m</p>
            </div>

            <div>
              <span class="text-gray-500">Weight</span>
              <p>{{ pokemon?.weight }} kg</p>
            </div>

            <div>
              <span class="text-gray-500">Base Exp</span>
              <p>{{ pokemon?.baseExperience }}</p>
            </div>

            <div>
              <span class="text-gray-500">Move</span>
              <p class="capitalize">{{ pokemon?.signatureMove }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
