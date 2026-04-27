<script setup lang="ts">
import MenuNav from "@/modules/common/components/MenuNav.vue";
import PokemonsNavigation from "@/modules/pokemons/components/PokemonsNavigation.vue";
</script>

<template>
  <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
    <div class="flex items-center gap-5">
      <h1 class="font-bold text-2xl">PokemonApp &mdash;</h1>
      <pokemons-navigation />
    </div>
    <menu-nav />
  </header>

  <main class="p-5">
    <router-view />
  </main>

  <footer class="bg-slate-800 p-5 text-white">
    <p>Todos los derechos reservados &copy;. Saulo Román Santillán Nava</p>
  </footer>
</template>
