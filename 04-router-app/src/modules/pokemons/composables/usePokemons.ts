import { getPokemons } from "@/modules/common/actions/get-pokemons.action";
import { type Pokemon } from "@/modules/common/interfaces";
import { onMounted, ref } from "vue";

export const usePokemons = () => {
  const pokemons = ref<Pokemon[]>([]);
  const message = ref<string>("");

  const isLoading = ref<boolean>(false);

  const loadPokemons = async () => {
    isLoading.value = true;
    try {
      const { data, error, ok } = await getPokemons();

      if (!ok) {
        message.value = error ?? "";
        return;
      }

      pokemons.value = data ?? [];
      message.value = "Pokemones Cargados 😸";
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(loadPokemons);

  return {
    pokemons,
    message,
    isLoading,
  };
};
