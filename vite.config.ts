import { defineConfig } from "vite";
import GenerateCSSPlugin from "./src/plugins/vite-generate-css";

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
    plugins: [GenerateCSSPlugin()],
});
