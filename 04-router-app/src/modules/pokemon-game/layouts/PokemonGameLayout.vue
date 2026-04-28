<script setup lang="ts">
import MenuNav from "@/modules/common/components/MenuNav.vue";
import GamePokemonsNavigation from "../components/GamePokemonsNavigation.vue";
</script>

<template>
  <section
    class="min-h-screen flex flex-col bg-lin-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
  >
    <header
      class="bg-pink-800 text-white flex items-center p-5 justify-between"
    >
      <div class="flex items-center gap-5">
        <h1 class="font-bold text-2xl">PokemonApp &mdash; Juego</h1>
        <game-pokemons-navigation />
      </div>
      <menu-nav />
    </header>

    <main class="flex-1 flex flex-col items-center justify-center px-6">
      <div class="w-full max-w-3xl py-10">
        <router-view />
      </div>
    </main>

    <footer
      class="text-center text-xs text-gray-400 py-3 border-t border-gray-700"
    >
      Adivina el Pokémon lo más rápido posible ⚡
    </footer>
  </section>
</template>
