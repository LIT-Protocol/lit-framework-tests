import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  vite: {
    define: {
      'process.env.DEBUG': false,
      'global': 'globalThis',
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        external: ['buffer', 'crypto-browserify', 'stream-browserify', 'vm-browserify']
      }
    },
    optimizeDeps: {
      include: ['buffer', 'process'],
      exclude: ['@lit-protocol/lit-node-client'],
      esbuildOptions: {
        define: {
          global: 'globalThis'
        },
      },
    },
    resolve: {
      alias: {
        stream: 'stream-browserify',
        crypto: 'crypto-browserify',
        vm: 'vm-browserify',
      },
    },
  },

  build: {
    transpile: [
      '@blocto/sdk',
      '@lit-protocol/lit-node-client',
      '@lit-protocol/constants',
      '@lit-protocol/crypto',
      '@lit-protocol/misc',
      '@lit-protocol/uint8arrays'
    ],
  },

  plugins: [
    { src: '~/plugins/polyfills.client.ts', mode: 'client' },
    { src: '~/plugins/lit.ts', mode: 'client' }
  ],
})