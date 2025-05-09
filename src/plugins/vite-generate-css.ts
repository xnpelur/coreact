import path from "path";
import { Plugin } from "vite";
import { generateCSS } from "../scripts/generate-css";

export default function GenerateCSSPlugin(): Plugin {
    const virtualCssPath = path.resolve("src/generated/styles.css");

    return {
        name: "vite-plugin-generate-css",

        async configResolved() {
            await generateCSS(virtualCssPath);
        },

        configureServer(server) {
            const watcher = server.watcher;

            watcher.add("src/**/*.{js,jsx,ts,tsx,html}");

            watcher.on("change", async (file) => {
                if (!file.match(/\.(js|jsx|ts|tsx|html)$/)) return;

                await generateCSS(virtualCssPath);

                const mod = server.moduleGraph.getModuleById(virtualCssPath);
                if (mod) {
                    server.moduleGraph.invalidateModule(mod);
                    server.ws.send({
                        type: "update",
                        updates: [
                            {
                                type: "js-update",
                                path: virtualCssPath,
                                acceptedPath: virtualCssPath,
                                timestamp: Date.now(),
                            },
                        ],
                    });
                }
            });
        },
    };
}
