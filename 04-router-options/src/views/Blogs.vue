<script lang="ts">
import Title from "@/components/Title.vue";
import type { Blog } from "@/interfaces/blog.interface";

interface Data {
  blogs: Blog[];
  isLoading: boolean;
}

export default {
  data(): Data {
    return {
      blogs: [],
      isLoading: false,
    };
  },
  components: { Title },
  methods: {
    async getBlogs(quantity: number) {
      this.isLoading = true;
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/posts?limit=${quantity}`,
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
    this.blogs = await this.getBlogs(30);
  },
};
</script>

<template>
  <Title title="Blogs" />

  <ul class="blogs">
    <router-link
      :to="`/blog/${blog.id}`"
      class="blog"
      v-for="blog in blogs"
      :key="blog.id"
    >
      {{ blog.title }}
    </router-link>
  </ul>
</template>

<style scoped>
.blogs {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.blog {
  font-family: sans-serif;
}
</style>
