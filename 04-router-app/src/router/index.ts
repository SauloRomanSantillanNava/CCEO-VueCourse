import Page404 from "@/modules/common/pages/Page404.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/pokemons",
      name: "app",
      component: () => import("@/modules/common/layouts/PokemonLayout.vue"),
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
    {
      path: '/game',
      name: 'pokemon-game',
      component: () => import("@/modules/common/layouts/PokemonLayout.vue"),
      children: [
        {
          path: 'play',
          name: 'pokemon-game-play',
          component: () => import('@/modules/pokemon-game/pages/PageGame.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'no-page',
      component: () => Page404
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/common/pages/HomePage.vue')
    }
  ],
});

export default router;
