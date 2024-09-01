<script lang="ts">
import { defineComponent } from 'vue';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { LitNetwork } from '@lit-protocol/constants';

export default defineComponent({
  name: 'App',
  data() {
    return {
      status: '',
    };
  },
  methods: {
    async instantiateLit() {
      this.status = 'Connecting to Lit...';
      console.log("Connecting to Lit...");
      const litNodeClient = new LitNodeClient({
        litNetwork: LitNetwork.DatilDev,
        debug: false,
      });

      await litNodeClient.connect();
      console.log("Connected!")
      this.status = 'Connected!';
    },
  },
});
</script>

<template>
  <div class="App">
    <h1>Lit with Vue</h1>
    <p>{{ status }}</p>
    <button @click="instantiateLit">Instantiate Lit</button>
  </div>
</template>

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