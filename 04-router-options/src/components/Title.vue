<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Título de la página",
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 40px;
}

.title {
  font-family: sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}
</style>
