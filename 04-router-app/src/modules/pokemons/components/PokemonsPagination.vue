<script setup lang="ts">
import type { PokemonPagination } from "@/modules/common/interfaces";

interface Props {
  pagination: PokemonPagination;
}

const { pagination } = defineProps<Props>();

const emits = defineEmits<{
  nextPage: [];
  prevPage: [];
}>();
</script>

<template>
  <section class="flex items-center gap-2">
    <button
      :disabled="!pagination.previous"
      @click="emits('prevPage')"
      :class="[
        'bg-blue-500 text-white btn',
        {
          'btn-disabled': !pagination.previous,
        },
      ]"
    >
      Anterior
    </button>
    <button
      :disabled="!pagination.next"
      @click="emits('nextPage')"
      :class="[
        'bg-blue-500 text-white btn',
        {
          'btn-disabled': !pagination.next,
        },
      ]"
    >
      Siguiente
    </button>
  </section>
</template>
