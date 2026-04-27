<script setup lang="ts">
import { computed } from "vue";

interface Props {
  id: number;
  name: string;
}

const props = defineProps<Props>();

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`,
);
</script>

<template>
  <router-link
    :to="`/pokemon/${name}`"
    class="transition-all hover:scale-105 hover:shadow-md bg-white border border-gray-300 p-5 rounded-full mb-3 flex justify-between items-center"
  >
    <div class="flex items-center gap-3">
      <div
        class="rounded-full bg-blue-300 h-12 w-12 flex justify-center items-center"
      >
        <span class="font-bold">#{{ id }}</span>
      </div>
      <p class="font-semibold text-xl">{{ name }}</p>
    </div>
    <img
      class="w-12 h-12"
      v-if="pokemonImage"
      :src="pokemonImage"
      :alt="name"
    />
  </router-link>
</template>
