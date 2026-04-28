<template>
  <h1>Hola {{ name }}</h1>
  <ul>
    <li :key="name" v-for="{ name, price, description, stock } in availableFruits">
      {{ name }} - {{ price }} - {{ description }} - {{ stock }}
    </li>
  </ul>
</template>

<script setup>
const name = 'Vue Dinámico'

const arrayFrutas = [
  {
    name: 'Manzana',
    price: '$1.00',
    description: 'Una manzana',
    stock: 0,
  },
  {
    name: 'Pera',
    price: '$2.00',
    description: 'Una pera',
    stock: 10,
  },
  {
    name: 'Naranja',
    price: '$3.00',
    description: 'Una naranja',
    stock: 20,
  },
]

const availableFruits = computed(() => arrayFrutas.filter((fruit) => fruit.stock > 0))
</script>
