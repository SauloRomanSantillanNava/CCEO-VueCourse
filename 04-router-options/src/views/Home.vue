<script lang="ts">
import Title from "@/components/Title.vue";

export default {
  components: { Title },
};
</script>

<template>
  <Title title="Home" />

  <nav class="nav">
    <router-link class="link" to="/blogs">Ir a blogs</router-link>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  font-family: sans-serif;
  font-size: 18px;
  text-decoration: none;
}
</style>
