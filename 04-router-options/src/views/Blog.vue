<script lang="ts">
import Title from "@/components/Title.vue";
import type { Blog } from "@/interfaces/blog.interface";

interface Data {
  blog: Blog | null;
  isLoading: boolean;
}

export default {
  components: { Title },
  data(): Data {
    return {
      blog: null,
      isLoading: false,
    };
  },
  methods: {
    async getBlog() {
      this.isLoading = true;
      try {
        console.log(this.$route.params.id);

        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`,
        );
        const data = await resp.json();
        return data;
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  async created() {
    this.blog = await this.getBlog();
  },
};
</script>

<template>
  <Title :title="`Blog ${$route.params.id}`" />

  <h2 v-if="isLoading">Cargando</h2>
  <div v-else>
    <span>{{ blog?.id ?? 0 }}</span>
    <h2>{{ blog?.title ?? "Sin titulo" }}</h2>
    <p>{{ blog?.body ?? "Sin body" }}</p>
  </div>
</template>
