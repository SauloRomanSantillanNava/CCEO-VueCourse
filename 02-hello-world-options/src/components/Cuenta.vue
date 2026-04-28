<template>
  <h2>Tipo de cuenta: {{ tipo }}</h2>
  <h1>Cuenta:{{ saldo }}</h1>
  <p>Estado: {{ estado ? "Activa" : "Desactivada" }}</p>

  <ul>
    <li v-for="(servicio, index) in servicios" :key="index">
      {{ index + 1 }}.{{ servicio }}
    </li>
  </ul>

  <AccionSaldo @accion="aumentar" texto="Aumenter" />
  <AccionSaldo
    :desabilitado="estaBotonDesabilitado"
    @accion="disminuir"
    texto="Disminuir"
  />
</template>

<script>
import AccionSaldo from "./AccionSaldo.vue";

export default {
  name: "Cuenta",
  components: { AccionSaldo },
  data() {
    return {
      tipo: "Visa",
      saldo: 1000,
      estado: true,
      servicios: ["giro", "abono", "transferencia"],
      estaBotonDesabilitado: false,
    };
  },
  methods: {
    aumentar(saldo) {
      this.saldo += saldo;
      this.estaBotonDesabilitado = false;
    },
    disminuir(saldo) {
      if (this.saldo === 0) {
        alert("Saldo agotado");
        this.estaBotonDesabilitado = true;
        return;
      }
      this.saldo -= saldo;
    },
  },
};
</script>

<style lang="css" scoped></style>
