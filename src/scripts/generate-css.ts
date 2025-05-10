import fs from "fs";
import path from "path";
import { tw } from "../runtime/tailwind";

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
    variant: string | null,
    properties: [string, string][]
) {
    const escapedClassName = className.replace(":", "\\:");
    const lines = properties.map(([key, value]) => `${key}: ${value};`);

    if (variant === "dark") {
        return `.dark .${escapedClassName} { ${lines.join(" ")} }`;
    }

    if (variant) {
        return `.${escapedClassName}:${variant} { ${lines.join(" ")} }`;
    }

    return `.${escapedClassName} { ${lines.join(" ")} }`;
}

export async function generateCSS(outputPath: string) {
    const classes = await extractClasses();
    const cssLinesByPropertiesLength: Map<number, string[]> = new Map();

    for (const cls of classes) {
        const { variant, properties } = tw(cls);
        if (properties.length > 0) {
            const css = getCSS(cls, variant, properties);

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
