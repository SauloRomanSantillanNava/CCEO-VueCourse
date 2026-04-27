<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

const { isLoading, message, pokemons } = usePokemons();
</script>

<template>
  <h1>Pokemons Page</h1>
</template>
