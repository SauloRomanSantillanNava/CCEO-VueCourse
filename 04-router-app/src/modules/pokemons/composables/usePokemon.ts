import { getPokemon } from "@/modules/common/actions/get-pokemon.action"
import type { PokemonItem } from "@/modules/common/interfaces"
import { onMounted, ref } from "vue"

export const usePokemon = (pokemonName: string) => {

    const pokemon = ref<PokemonItem | null>(null)
    const isLoading = ref<boolean>(false)
    const message = ref<string>('')

    const fetchPokemon = async () => {
        isLoading.value = true
        try {

            const { ok, data, error } = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

            if (!ok) {
                message.value = error!
                return
            }

            pokemon.value = data!
            message.value = `Pokemon ${data?.name} cargado 😸`
        } finally {
            isLoading.value = false
        }
    }

    onMounted(fetchPokemon)

    return {
        pokemon,
        isLoading,
        message
    }
}