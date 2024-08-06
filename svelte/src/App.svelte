<script>
  import { LitNodeClient } from "@lit-protocol/lit-node-client";
  import { LitNetwork } from "@lit-protocol/constants";

  async function instantiateLit() {
    console.log("connecting to lit...");
    const litNodeClient = new LitNodeClient({
      litNetwork: LitNetwork.DatilDev,
      debug: false,
    });

    await litNodeClient.connect();
    console.log("connected!");
  }
</script>

<style>
  .App {
    text-align: center;
  }
</style>

<div class="App">
  <h1>Lit with Svelte</h1>
  <p>Check console</p>
  <button on:click={instantiateLit}>Instantiate Lit</button>
</div>