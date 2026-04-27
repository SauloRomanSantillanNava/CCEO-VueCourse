import { computed, onMounted, ref } from "vue";
import confetti from "canvas-confetti";

import type { Pokemon } from "@/modules/common/interfaces";
import { getPokemons } from "@/modules/common/actions/get-pokemons.action";

import { GameStatus } from "../interfaces/game-status.enum";
import { getRandomNumber } from "../helpers/get-random-number";

export const usePokemonGame = () => {
    const gameStatus = ref<GameStatus>(GameStatus.Playing);

    const pokemons = ref<Pokemon[]>([]);
    const pokemonsOptions = ref<Pokemon[]>([]);
    const randomPokemon = ref<Pokemon | null>(null);

    const isLoading = computed(() => pokemons.value.length === 0);

    const pickRandomPokemon = () => {
        const randomIndex = getRandomNumber(0, pokemonsOptions.value.length);
        randomPokemon.value = pokemonsOptions.value.at(randomIndex) ?? null;
    };

    const checkAnswer = (pokemonId: number) => {
        if (!randomPokemon.value) return;

        const isCorrect = randomPokemon.value.id === pokemonId;

        if (isCorrect) {
            gameStatus.value = GameStatus.Won;

            confetti({
                particleCount: 300,
                spread: 150,
                origin: { y: 0.6 },
            });

            return;
        }

        gameStatus.value = GameStatus.Lost;
    };

    const getNextRound = (howMany: number = 4) => {
        gameStatus.value = GameStatus.Playing;
        pokemonsOptions.value = pokemons.value.sort(() => Math.random() - 0.5).slice(0, howMany);
        pickRandomPokemon();
    };

    const getPokemonsInGame = async (): Promise<Pokemon[]> => {
        const { data } = await getPokemons(
            "https://pokeapi.co/api/v2/pokemon?limit=160"
        );

        return data?.pokemons.sort(() => Math.random() - 0.5) ?? [];
    };

    onMounted(async () => {
        pokemons.value = await getPokemonsInGame();
        getNextRound();
    });

    return {
        isLoading,
        gameStatus,
        pokemonsOptions,
        randomPokemon,

        getNextRound,
        checkAnswer,
    };
};