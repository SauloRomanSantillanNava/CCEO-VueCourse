<script setup lang="ts">
import type { Pokemon } from "@/modules/common/interfaces";

interface Props {
  favorites: Pokemon[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  remove: [id: number];
}>();

const getImage = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
</script>

<template>
  <section>
    <div v-if="favorites.length === 0" class="text-center text-gray-400 py-10">
      No tienes pokémon favoritos aún 💤
    </div>

    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <div
        v-for="pokemon in favorites"
        :key="pokemon.id"
        class="group relative bg-white rounded-xl border p-4 flex flex-col items-center hover:shadow-md transition"
      >
        <button
          @click="emit('remove', pokemon.id)"
          class="btn bg-red-500 text-white"
          title="Eliminar de favoritos"
        >
          ✕
        </button>

        <router-link :to="`/pokemons/pokemon/${pokemon.id}`">
          <img
            :src="getImage(pokemon.id)"
            :alt="pokemon.name"
            class="w-24 h-24 object-contain mb-2 group-hover:scale-110 transition"
          />
        </router-link>

        <h3 class="capitalize text-sm font-medium text-center">
          {{ pokemon.name }}
        </h3>

        <span class="text-xs text-gray-400"> #{{ pokemon.id }} </span>
      </div>
    </div>
  </section>
</template>
