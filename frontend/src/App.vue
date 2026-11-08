<script setup>
import { Navbar } from "./components/Navbar.vue"
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  background-color: #2c3e50;
  color: white;
  font-family: Arial, sans-serif;
}
</style>