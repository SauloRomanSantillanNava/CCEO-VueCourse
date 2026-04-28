<script setup lang="ts">
import { useRouter } from "vue-router";

interface Props {
  pokemonNameNotFound: string;
}

defineProps<Props>();

const router = useRouter();

const goBack = () => router.push("/pokemons");
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
  >
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
      alt="Psyduck confundido"
      class="w-48 h-48 object-contain mb-6 opacity-90"
    />

    <h1 class="text-4xl md:text-5xl font-bold mb-2">Pokémon no encontrado</h1>

    <p class="text-gray-500 max-w-md mb-6">
      Parece que este Pokémon se escondió mejor que un Ditto. Verifica el nombre
      o intenta con otro.
    </p>

    <p v-if="pokemonNameNotFound" class="text-sm text-gray-400 mb-6">
      Búsqueda:
      <span class="font-medium text-gray-600">{{ pokemonNameNotFound }}</span>
    </p>

    <div class="flex gap-3">
      <router-link to="/pokemons/list" class="btn bg-blue-700 text-white">
        Ver pokemones
      </router-link>
    </div>

    <div class="mt-10 text-xs text-gray-400">
      Error 404 - Pokémon no registrado en la Pokédex
    </div>
  </section>
</template>
