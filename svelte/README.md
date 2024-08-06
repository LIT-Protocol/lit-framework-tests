## Used framework
Svelte

## Framework docs
https://svelte.dev/docs/

## Configuration file
You need to follow these steps for using polyfills with svelte 
1. Configure by replacing the [vite.config.ts](https://github.com/anshss/lit-configuration-guides/blob/svelte/svelte/vite.config.ts)
2. In src, create a [polyfills.ts](https://github.com/anshss/lit-configuration-guides/blob/svelte/svelte/src/polyfills.ts) file
3. In src, create a [global.d.ts](https://github.com/anshss/lit-configuration-guides/blob/svelte/svelte/src/globals.d.ts) file
4. Change [tsconfig.json](https://github.com/anshss/lit-configuration-guides/blob/svelte/svelte/tsconfig.json) to make it read gloabl.d.ts

## Getting started
1. `npm i`
2. `npm run dev`
