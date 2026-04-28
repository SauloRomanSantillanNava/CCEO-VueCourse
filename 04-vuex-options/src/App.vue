<template>
  <div class="container">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
body,
html {
  background-color: #f5f5f5;
  font-family: sans-serif;
}

.container {
  width: 1300px;
  max-width: 95%;
  margin-inline: auto;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
}

.nav a {
  color: blue;
  text-decoration: none;
  cursor: pointer;
}
</style>
