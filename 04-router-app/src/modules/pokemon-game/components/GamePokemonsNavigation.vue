<template>
  <nav class="flex items-center gap-3">
    <router-link class="btn-nav" :to="{ name: 'pokemon-game-play' }"
      >Juego</router-link
    >
    <router-link class="btn-nav" :to="{ name: 'pokemon-game-stats' }"
      >Estadísticas</router-link
    >
  </nav>
</template>
