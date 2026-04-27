<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => router.push("/");
</script>

<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
  >
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      alt="Pikachu perdido"
      class="w-56 h-56 object-contain mb-6 drop-shadow-lg animate-pulse"
    />

    <h1 class="text-6xl font-extrabold text-gray-800 mb-2">404</h1>

    <h2 class="text-2xl md:text-3xl font-semibold mb-3">
      Página no encontrada
    </h2>

    <p class="text-gray-500 max-w-md mb-8">
      Este camino no existe en la Pokédex. Tal vez tomaste una ruta equivocada…
      o un Pokémon salvaje te distrajo.
    </p>

    <div class="flex flex-col sm:flex-row gap-3">
      <button @click="goHome" class="btn bg-blue-500 text-white">
        Ir a Pokémons
      </button>

      <button @click="$router.back()" class="btn bg-white text-slate-800">
        Regresar
      </button>
    </div>

    <p class="mt-10 text-xs text-gray-400">Error 404 · Ruta no registrada</p>
  </section>
</template>
