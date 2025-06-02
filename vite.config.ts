import { defineConfig } from "vite";
import { CssGeneratorPlugin } from "./src/runtime/vite-plugins/css-generator";

export default defineConfig({
    esbuild: {
        jsxFactory: "createElement",
        jsxFragment: "Fragment",
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    plugins: [CssGeneratorPlugin()],
});
