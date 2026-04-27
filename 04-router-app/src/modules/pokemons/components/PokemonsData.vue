<template>
  <div class="flex justify-between items-center mb-10">
    <h1 class="font-bold text-2xl">Pokemones Obtenidos</h1>
    <p>
      Cantidad Disponible:
      <span class="font-bold text-lg">{{ quantity }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  quantity: number;
}

defineProps<Props>();
</script>
