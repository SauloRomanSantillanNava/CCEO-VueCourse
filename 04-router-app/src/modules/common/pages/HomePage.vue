<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center linear-gradient-to-br from-blue-50 via-white to-red-50"
  >
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
      alt="Charizard"
      class="w-56 h-56 object-contain mb-6 drop-shadow-lg"
    />

    <h1 class="text-5xl font-extrabold mb-2">Pokédex App</h1>

    <p class="text-gray-500 max-w-md mb-10">
      Explora, busca y administra tus Pokémon favoritos. También puedes poner a
      prueba tus conocimientos en el juego.
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <router-link
        to="/pokemons/list"
        class="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition shadow"
      >
        Ver Pokémons
      </router-link>

      <router-link
        to="/game/play"
        class="px-6 py-3 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition shadow"
      >
        Jugar
      </router-link>
    </div>

    <p class="mt-12 text-xs text-gray-400">
      Proyecto Pokédex · Vue 3 + Tailwind
    </p>
  </section>
</template>
