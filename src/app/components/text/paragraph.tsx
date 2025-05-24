import { createElement } from "@/runtime/jsx-runtime";

export function Paragraph({ text }: { text: string }) {
    return <p class="mb-4">{text}</p>;
}
