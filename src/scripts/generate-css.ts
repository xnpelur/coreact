import fs from "fs";
import path from "path";
import { tw } from "@runtime/tailwind";

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

async function generateCSS() {
    const classes = await extractClasses();
    const cssLines: string[] = [];

    for (const cls of classes) {
        const result = tw(cls);
        if (Object.keys(result).length > 0) {
            const css = `.${cls} { ${Object.entries(result)
                .map(([key, value]) => `${key}: ${value};`)
                .join(" ")} }`;
            cssLines.push(css);
        }
    }

    const outputPath = path.join("public", "generated.css");
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, cssLines.join("\n"), "utf-8");
}

generateCSS();
