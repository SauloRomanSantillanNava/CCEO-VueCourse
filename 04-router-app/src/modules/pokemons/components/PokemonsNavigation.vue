<template>
  <nav class="flex items-center gap-3">
    <router-link class="btn-nav" :to="{ name: 'pokemons' }">Lista</router-link>
    <router-link class="btn-nav" :to="{ name: 'pokemons-favorite' }"
      >Favoritos</router-link
    >
  </nav>
</template>
