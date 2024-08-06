import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import inject from "@rollup/plugin-inject";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
    plugins: [
        svelte(),
        inject({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
        nodePolyfills(),
    ],
    resolve: {
        alias: {
            buffer: "buffer",
            crypto: "crypto-browserify",
            stream: "stream-browserify",
            vm: "vm-browserify",
            process: "process/browser",
        },
    },
    optimizeDeps: {
        include: [
            "buffer",
            "crypto-browserify",
            "stream-browserify",
            "vm-browserify",
            "process",
        ],
    },
});
