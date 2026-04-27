import { defineStore } from "pinia";
import { ref } from "vue";

export enum GameCounterType {
    won = 'won',
    lost = 'lost'
}

export const useGameStatsStore = defineStore('game-pokemon-stats', () => {

    const counterWonGames = ref<number>(0)
    const counterLostGames = ref<number>(0)

    const onIncrement = (counterType: GameCounterType) => {
        if (counterType === GameCounterType.won) return counterWonGames.value++
        counterLostGames.value++
    }

    return {
        counterWonGames,
        counterLostGames,

        onIncrement
    }

})