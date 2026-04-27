<script setup lang="ts">
import {
  FormLayout,
  type FormStateLogin,
} from "@/modules/common/interfaces/ui/form.interface";
import { formRules } from "@/modules/common/utils/form-utils";
import { reactive, type UnwrapRef } from "vue";

const formState: UnwrapRef<FormStateLogin> = reactive({
  layout: FormLayout.vertical,
  email: "",
  password: "",
});
</script>

<template>
  <div class="w-full">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">Bienvenido de vuelta 🚀</h1>
      <p class="mt-2 text-sm text-slate-500">
        Inicia sesión con tus credenciales
      </p>
    </header>

    <a-form
      class="flex flex-col gap-3"
      :layout="formState.layout"
      :model="formState"
      name="login"
    >
      <a-form-item
        label="Correo Electrónico"
        name="email"
        :rules="formRules.emailRules"
      >
        <a-input
          v-model:value="formState.email"
          placeholder="correo@ejemplo.com"
          class="rounded-lg"
        />
      </a-form-item>

      <a-form-item
        label="Contraseña"
        name="password"
        :rules="formRules.passwordRules"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="Ingresa tu contraseña"
          class="rounded-lg"
        />
      </a-form-item>

      <div class="mt-5">
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            block
            class="h-11 rounded-lg font-medium"
          >
            Iniciar Sesión
          </a-button>
        </a-form-item>
      </div>
    </a-form>

    <div class="flex items-center justify-between">
      <p class="font-bold text-gray-700">¿No tienes una cuenta?</p>
      <router-link
        class="border-b border-current pb-2 text-blue-500"
        :to="{ name: 'auth-register' }"
        >Regístrate &rarr;
      </router-link>
    </div>
  </div>
</template>
