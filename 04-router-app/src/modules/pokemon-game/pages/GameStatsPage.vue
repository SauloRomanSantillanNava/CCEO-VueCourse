<script setup lang="ts">
import { useGameStatsStore } from "@/store/game-stats.store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const gameStatsStore = useGameStatsStore();
const { counterLostGames, counterWonGames } = storeToRefs(gameStatsStore);

const totalGames = computed(
  () => counterLostGames.value + counterWonGames.value,
);

const winRate = computed(() => {
  if (totalGames.value === 0) return 0;
  return Math.round((counterWonGames.value / totalGames.value) * 100);
});
</script>

<template>
  <section class="flex items-center justify-center px-6">
    <div class="w-full max-w-xl">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
        Estadísticas del Juego
      </h1>

      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div class="grid grid-cols-2 gap-6 text-center">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <p class="text-sm text-gray-500">Ganados</p>
            <p class="text-3xl font-bold text-green-600">
              {{ counterWonGames }}
            </p>
          </div>

          <div class="bg-red-50 border border-red-200 rounded-xl p-4">
            <p class="text-sm text-gray-500">Perdidos</p>
            <p class="text-3xl font-bold text-red-500">
              {{ counterLostGames }}
            </p>
          </div>
        </div>

        <div class="my-6 border-t border-gray-200"></div>

        <div class="text-center space-y-2">
          <p class="text-gray-500 text-sm">
            Total de partidas: {{ totalGames }}
          </p>

          <p class="text-lg font-semibold text-gray-700">
            Win Rate:
            <span class="text-blue-600">{{ winRate }}%</span>
          </p>
        </div>

        <div class="mt-4">
          <div class="w-full bg-gray-200 rounded h-3">
            <div
              class="bg-blue-500 h-3 rounded transition-all duration-500"
              :style="{ width: winRate + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
