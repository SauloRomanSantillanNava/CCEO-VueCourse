<script setup lang="ts">
import { useFavoritePokemonsStore } from "@/store/favorite-pokemons.store";
import PokemonsListFavorites from "../components/PokemonsListFavorites.vue";
import { storeToRefs } from "pinia";

const favoritePokemonsStore = useFavoritePokemonsStore();
const { onRemove } = favoritePokemonsStore;
const { favoritePokemons } = storeToRefs(favoritePokemonsStore);
</script>

<template>
  <pokemons-list-favorites @remove="onRemove" :favorites="favoritePokemons" />
</template>
