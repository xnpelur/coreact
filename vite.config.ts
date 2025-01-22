import { defineConfig } from "vite";

export default defineConfig({
    esbuild: {
        jsxFactory: "createElement",
        jsxFragment: "Fragment",
    },
    resolve: {
        alias: {
            "@runtime": "/src/runtime",
            "@app": "/src/app",
        },
    },
});
