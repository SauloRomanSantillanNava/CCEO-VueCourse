import { onMounted, reactive, ref } from "vue";
import { getPokemons } from "@/modules/common/actions/get-pokemons.action";
import type { PokemonPagination, Pokemon } from "@/modules/common/interfaces";

const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const usePokemons = () => {
  const pokemons = ref<Pokemon[]>([]);
  const pagination = reactive<PokemonPagination>({
    next: null,
    previous: null,
  });

  const message = ref<string>("");
  const isLoading = ref<boolean>(false);

  const fetchPokemons = async (url: string = DEFAULT_URL) => {
    isLoading.value = true;
    message.value = "";

    try {
      const { data, ok, error } = await getPokemons(url);

      if (!ok) {
        message.value = error ?? "Error";
        return;
      }

      pokemons.value = data!.pokemons;

      pagination.next = data!.pagination.next;
      pagination.previous = data!.pagination.previous;

      message.value = "Pokemones Cargados 😸";
    } finally {
      isLoading.value = false;
    }
  };

  const onNextPage = () => {
    if (!pagination.next) return;
    fetchPokemons(pagination.next);
  };

  const onPrevPage = () => {
    if (!pagination.previous) return;
    fetchPokemons(pagination.previous);
  };

  onMounted(() => fetchPokemons());

  return {
    pokemons,
    pagination,
    message,
    isLoading,

    onNextPage,
    onPrevPage,
    reload: fetchPokemons,
  };
};
