<script setup lang="ts">
import GameNewButton from "../components/GameNewButton.vue";
import GameOptions from "../components/GameOptions.vue";
import GamePokemonPicture from "../components/GamePokemonPicture.vue";
import { usePokemonGame } from "../composables/usePokemonGame";
import { GameStatus } from "../interfaces/game-status.enum";
const { pokemonsOptions, randomPokemon, gameStatus, checkAnswer } =
  usePokemonGame();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <header class="mb-5">
      <h1 class="font-bold text-black text-3xl">¿Quién es este Pokemon?</h1>
    </header>
    <div class="flex flex-col gap-8 items-center">
      <game-new-button />
      <game-pokemon-picture
        :pokemon-id="randomPokemon?.id ?? 0"
        :pokemon-name="randomPokemon?.name ?? ''"
        :is-visible="gameStatus !== GameStatus.Playing"
      />
      <game-options
        :correct-answer="randomPokemon?.id ?? 0"
        :block-selection="gameStatus !== GameStatus.Playing"
        @select-pokemon="checkAnswer"
        :pokemons="pokemonsOptions"
      />
    </div>
  </div>
</template>
