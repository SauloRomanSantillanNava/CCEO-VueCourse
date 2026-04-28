<template>
  <Titulo texto="Mi titulo" />
  <Cuenta />
</template>

<script lang="ts">
// import Cuenta from "./components/Cuenta.vue";
import Titulo from "./components/Titulo.vue";

export default {
  name: "App",
  components: { Titulo /* Cuenta */ },
};
</script>
