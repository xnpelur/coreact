import path from "path";
import fs from "fs";
import { Plugin } from "vite";
import { tw } from "../runtime/tailwind";

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

async function generateCSS(outputPath: string) {
    const classes = await extractClasses();
    const cssLinesByPropertiesLength: Map<number, string[]> = new Map();

    for (const cls of classes) {
        const { variants, properties } = tw(cls);
        if (properties.length > 0) {
            const css = getCSS(cls, variants, properties);

            if (!cssLinesByPropertiesLength.has(properties.length)) {
                cssLinesByPropertiesLength.set(properties.length, []);
            }
            cssLinesByPropertiesLength.get(properties.length)!.push(css);
        }
    }

    // Sort the CSS lines by the number of properties in descending order
    // Less specific classes should come first
    const cssLines: string[] = [];
    for (const length of Array.from(cssLinesByPropertiesLength.keys()).sort(
        (a, b) => b - a
    )) {
        const lines = cssLinesByPropertiesLength.get(length)!;
        cssLines.push(...lines);
    }

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, cssLines.join("\n"), "utf-8");
}

function walk(dir: string, extensions: string[]): string[] {
    const files = [];

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...walk(fullPath, extensions));
        } else if (extensions.includes(path.extname(entry.name))) {
            files.push(fullPath);
        }
    }

    return files;
}

async function extractClasses() {
    const files = walk("src", [".js", ".jsx", ".ts", ".tsx", ".html"]);
    const classNames = new Set<string>();

    const classRegex = /class(?:Name)?=["'`]([^"'`]+)["'`]/g;

    for (const file of files) {
        const content = fs.readFileSync(file, "utf-8");
        let match;
        while ((match = classRegex.exec(content))) {
            match[1].split(/\s+/).forEach((cls) => classNames.add(cls));
        }
    }

    return classNames;
}

function getCSS(
    className: string,
    variants: string[],
    properties: [string, string][]
) {
    // Escape special characters (:, /)
    let escapedClassName = className.replace(/[:/]/g, "\\$&");
    // If class name starts with a number, escape it with a backslash and space
    if (/^\d/.test(escapedClassName)) {
        escapedClassName = `\\3${escapedClassName.charAt(
            0
        )} ${escapedClassName.slice(1)}`;
    }
    const lines = properties.map(([key, value]) => `${key}: ${value};`);

    // Variant types
    const mediaVariants = ["sm", "md", "lg", "xl", "2xl"];
    const pseudoVariants = [
        "hover",
        "focus",
        "active",
        "visited",
        "disabled",
        "checked",
        "first",
        "last",
        "odd",
        "even",
        "focus-visible",
        "focus-within",
    ];
    let selector = `.${escapedClassName}`;
    let cssRule = "";
    let rule = "";

    const pseudo = variants.find((v) => pseudoVariants.includes(v));
    if (pseudo) {
        selector += `:${pseudo}`;
    }

    const isDark = variants.includes("dark");
    if (isDark) {
        selector = `.dark ${selector}`;
    }

    const media = variants.find((v) => mediaVariants.includes(v));
    rule = `${selector} { ${lines.join(" ")} }`;
    if (media) {
        const breakpoints: Record<string, string> = {
            sm: "(min-width: 40rem)",
            md: "(min-width: 48rem)",
            lg: "(min-width: 64rem)",
            xl: "(min-width: 80rem)",
            "2xl": "(min-width: 96rem)",
        };
        cssRule = `@media ${breakpoints[media]} { ${rule} }`;
    } else {
        cssRule = rule;
    }

    return cssRule;
}
