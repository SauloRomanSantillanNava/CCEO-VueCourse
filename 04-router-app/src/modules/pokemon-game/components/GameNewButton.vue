<script setup lang="ts">
const emits = defineEmits(["new-game"]);
</script>

<template>
  <button @click="emits('new-game')" class="btn bg-blue-500">
    Nuevo Juego
  </button>
</template>
