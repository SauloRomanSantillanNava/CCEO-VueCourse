<script setup lang="ts">
import type { Pokemon } from "@/modules/common/interfaces";

interface Props {
  correctAnswer: number;
  blockSelection: boolean;
  pokemons: Pokemon[];
}

defineProps<Props>();

const emits = defineEmits<{
  selectPokemon: [pokemonId: number];
}>();
</script>

<template>
  <div class="w-80 flex flex-col justify-center gap-4">
    <button
      :disabled="blockSelection"
      @click="emits('selectPokemon', pokemon.id)"
      :class="[
        'btn bg-slate-600',
        {
          'bg-green-500 text-white':
            correctAnswer === pokemon.id && blockSelection,
          'bg-slate-300 text-gray-900 opacity-30':
            correctAnswer !== pokemon.id && blockSelection,
        },
      ]"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
    >
      {{ pokemon.name }}
    </button>
  </div>
</template>
