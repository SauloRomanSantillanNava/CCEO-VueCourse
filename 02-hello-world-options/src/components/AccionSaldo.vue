<template>
  <button :disabled="desabilitado" @click="accion">{{ texto }} saldo</button>
</template>

<script lang="ts">
export default {
  name: "accion-saldo",
  props: {
    texto: String,
    desabilitado: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    accion() {
      this.$emit("accion", 100);
    },
  },
};
</script>
