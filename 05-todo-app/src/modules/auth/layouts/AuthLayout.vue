<script setup lang="ts">
import LoginPage from "../pages/LoginPage.vue";
</script>

<template>
  <div
    class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-blue-600 to-blue-400"
  >
    <div class="hidden md:flex items-center justify-center text-white px-10">
      <div class="text-center">
        <h1 class="mb-4 text-5xl lg:text-6xl font-bold">Bienvenido</h1>
        <p class="text-xl lg:text-2xl opacity-90">
          Accede a tu cuenta para continuar
        </p>
      </div>
    </div>

    <div class="flex items-center justify-center bg-white px-8">
      <div class="w-full max-w-md">
        <router-view />
      </div>
    </div>
  </div>
</template>
