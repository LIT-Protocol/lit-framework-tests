<template>
  <div class="App">
    <h1>Lit with Nuxt</h1>
    <p>Check console</p>
    <button @click="instantiateLit">Instantiate Lit</button>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $litNodeClient } = useNuxtApp()

async function instantiateLit() {
  console.log('connecting to Lit...');
  try {
    await $litNodeClient.connect();
    console.log('connected!');
  } catch (error) {
    console.error('Error connecting to Lit:', error);
  }
}
</script>

<style scoped>
.App {
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>