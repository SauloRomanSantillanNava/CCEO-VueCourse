import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/pokemons",
      name: "app",
      component: () => import("@/modules/pokemons/layouts/PokemonLayout.vue"),
      children: [
        {
          path: "list",
          name: "pokemons",
          component: () => import("@/modules/pokemons/pages/PokemonsPage.vue"),
        },
        {
          path: "pokemon/:name",
          component: () => import("@/modules/pokemons/pages/PokemonPage.vue"),
        },
        {
          path: "favorites",
          name: "pokemons-favorite",
          component: () =>
            import("@/modules/pokemons/pages/PokemonsFavoritePage.vue"),
        },
      ],
    },
  ],
});

export default router;
