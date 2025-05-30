import { createElement } from "@/runtime/jsx-runtime";
import { Link } from "@/runtime/router";

export function NextLink({ href, text }: { href: string; text: string }) {
    return (
        <div class="mt-12 pt-8 mb-8 border-t border-gray-200 dark:border-gray-700">
            <Link
                href={href}
                class="inline-flex items-center text-cyan-500 hover:underline"
            >
                {text}
                <svg
                    class="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </Link>
        </div>
    );
}
