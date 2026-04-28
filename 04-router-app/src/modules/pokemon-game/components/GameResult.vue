<script setup lang="ts">
import { computed } from "vue";
import { GameStatus } from "../interfaces/game-status.enum";

interface Props {
  result: GameStatus;
}

const props = defineProps<Props>();

const statusText = computed(() => {
  switch (props.result) {
    case GameStatus.Playing:
      return "En juego...";
    case GameStatus.Won:
      return "¡Correcto!";
    case GameStatus.Lost:
      return "Incorrecto";
    default:
      return "";
  }
});

const statusStyles = computed(() => {
  switch (props.result) {
    case GameStatus.Playing:
      return "text-yellow-400 border-yellow-400";
    case GameStatus.Won:
      return "text-green-400 border-green-400";
    case GameStatus.Lost:
      return "text-red-400 border-red-400";
    default:
      return "";
  }
});
</script>

<template>
  <div
    class="w-full max-w-md mx-auto mt-6 px-6 py-4 rounded-xl border bg-white backdrop-blur-md shadow-lg text-center"
    :class="statusStyles"
  >
    <h2
      class="text-2xl font-bold transition-all duration-300"
      :class="{
        'animate-pulse': result === GameStatus.Playing,
        'scale-110': result === GameStatus.Won,
      }"
    >
      {{ statusText }}
    </h2>
  </div>
</template>
