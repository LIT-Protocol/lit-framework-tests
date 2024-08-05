import { LitNodeClient } from "@lit-protocol/lit-node-client";
// import { LitNetwork } from "@lit-protocol/constants";
import * as LitNodeClientModule from '@lit-protocol/lit-node-client'


export default defineNuxtPlugin(async (nuxtApp) => {
    console.log('LitNodeClient module exports:', LitNodeClientModule)
    const client = new LitNodeClientModule.LitNodeClient({
        // litNetwork: LitNetwork.DatilDev,
        litNetwork: "datil-dev",
        debug: false,
    });
    // await client.connect();
    return {
        provide: {
            litNodeClient: client,
        },
    };
});
