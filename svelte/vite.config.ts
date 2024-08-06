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
    build: {
        rollupOptions: {
            output: {
                globals: {
                    "js-sha3": "sha3",
                },
            },
            plugins: [
                {
                    name: "fix-import-sha3",
                    transform(code, id) {
                        if (
                            id.includes(
                                "node_modules/@ethersproject/keccak256/lib.esm/index.js"
                            )
                        ) {
                            return code.replace(
                                'import sha3 from "js-sha3";',
                                'import * as sha3 from "js-sha3";'
                            );
                        }
                        return code;
                    },
                },
            ],
        },
    },
});
