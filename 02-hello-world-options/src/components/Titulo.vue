<template>
  <h1>{{ texto }}</h1>
</template>

<script lang="ts">
export default {
  name: "Titulo",
  props: {
    texto: String,
  },
};
</script>

<style scoped>
h1 {
  color: peru;
}
</style>
