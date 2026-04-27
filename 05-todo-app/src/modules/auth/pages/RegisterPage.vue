<script setup lang="ts">
import {
  FormLayout,
  type FormStateRegister,
} from "@/modules/common/interfaces/ui/form.interface";
import { formRules } from "@/modules/common/utils/form-utils";
import { reactive, type UnwrapRef } from "vue";

const formState: UnwrapRef<FormStateRegister> = reactive({
  layout: FormLayout.vertical,
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
});
</script>

<template>
  <div class="w-full">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">Crea tu cuenta ✨</h1>
      <p class="mt-2 text-sm text-slate-500">
        Regístrate para comenzar a usar la plataforma
      </p>
    </header>

    <a-form
      class="flex flex-col gap-3"
      :layout="formState.layout"
      :model="formState"
      name="register"
    >
      <a-form-item label="Nombre" name="name" :rules="formRules.nameRules">
        <a-input
          v-model:value="formState.name"
          placeholder="Ingresa tu nombre"
          class="rounded-lg"
        />
      </a-form-item>

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
          placeholder="Crea una contraseña"
          class="rounded-lg"
        />
      </a-form-item>

      <a-form-item
        label="Confirmar Contraseña"
        name="repeatPassword"
        :rules="formRules.repeatPasswordRules(formState.password)"
      >
        <a-input-password
          v-model:value="formState.repeatPassword"
          placeholder="Repite tu contraseña"
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
            Crear Cuenta
          </a-button>
        </a-form-item>
      </div>
    </a-form>

    <div class="flex items-center justify-between mt-4">
      <router-link
        class="border-b border-current pb-1 text-blue-500"
        to="/auth/login"
      >
        &larr; Inicia sesión
      </router-link>
      <p class="font-bold text-gray-700">¿Ya tienes una cuenta?</p>
    </div>
  </div>
</template>
