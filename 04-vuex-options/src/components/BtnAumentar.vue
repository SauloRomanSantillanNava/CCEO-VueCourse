<template>
  <button @click="incrementarAc(50)">Aumentar</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["incrementarAc"]),
  },
};
</script>
