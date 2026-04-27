<script setup lang="ts">
interface Props {
  isInFavorites: boolean;
}

defineProps<Props>();

const emits = defineEmits<{
  onToggle: [];
}>();
</script>

<template>
  <button
    @click="emits('onToggle')"
    :class="[
      'btn text-white',
      {
        'bg-orange-500': isInFavorites,
        'bg-pink-800 ': !isInFavorites,
      },
    ]"
  >
    {{ isInFavorites ? "Remover de " : "Agregar a" }} favoritos
  </button>
</template>
