<script setup lang="ts">
import { computed } from "vue";

interface Props {
  isVisible: boolean;
  pokemonId: number;
  pokemonName: string;
}

const props = defineProps<Props>();

const image = computed(() => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`;
});
</script>

<template>
  <img
    v-if="image"
    :src="image"
    :alt="pokemonName"
    class="w-40 h-40 object-contain transition-all duration-300"
    :class="{
      'brightness-0': !isVisible,
      'scale-110': isVisible,
    }"
  />
</template>
