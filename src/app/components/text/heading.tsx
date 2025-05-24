import { createElement } from "@/runtime/jsx-runtime";

export function Heading({ level, text }: { level: 1 | 2; text: string }) {
    if (level === 1) {
        return <h1 class="text-4xl font-bold mb-8">{text}</h1>;
    }
    return <h2 class="text-2xl font-bold mb-4">{text}</h2>;
}
