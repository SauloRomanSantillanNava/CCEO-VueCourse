<script setup lang="ts">
import MenuNav from "@/modules/common/components/MenuNav.vue";
</script>

<template>
  <header class="bg-slate-800 text-white flex items-center p-5 justify-between">
    <menu-nav />
    <div class="flex items-center gap-5">
      <h1 class="font-bold text-2xl">PokemonApp &mdash;</h1>
    </div>
  </header>

  <main class="p-5 min-h-svh">
    <router-view />
  </main>

  <footer class="bg-slate-800 p-5 text-white">
    <p>Todos los derechos reservados &copy;. Saulo Román Santillán Nava</p>
  </footer>
</template>
