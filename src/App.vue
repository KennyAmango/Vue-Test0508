<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="title">
      <h1>這是標題</h1>
    </div>
    <nav class="link">
      <RouterLink to="/home">home</RouterLink>
      <RouterLink to="/v-bind">連結1</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/v-for">v-for</RouterLink>
      <RouterLink to="/props">props</RouterLink>
      <RouterLink to="/emit">emit</RouterLink>
      <RouterLink to="/v-show">VShow</RouterLink>
      <RouterLink to="/model">Model</RouterLink>
    </nav>
  </header>

  <body>

    <div class="container">
      <RouterView />
    </div>

  </body>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  background-color: blanchedalmond;
}

.link {
  display: flex;
  justify-content: space-around;
  background-color: aquamarine;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gainsboro;
}
</style>
