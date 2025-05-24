import { createElement } from "@/runtime/jsx-runtime";

export function Code({ text }: { text: string }) {
    return (
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
            <code>{text}</code>
        </pre>
    );
}
