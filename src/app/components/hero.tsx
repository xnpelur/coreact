import { createElement } from "@/runtime/jsx-runtime";
import { Logo } from "@/app/components/logo";

export function Hero() {
    return (
        <div class="mx-5 mt-24 mb-32 flex flex-col justify-center">
            <Logo className="mt-4 mb-3 text-cyan-600 dark:text-cyan-600-dark w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out" />
            <h1 class="font-display text-6xl self-center flex font-semibold leading-snug text-gray-950 dark:text-gray-50">
                Coreact
            </h1>
            <p class="text-4xl font-display max-w-full py-1 text-center text-gray-700 dark:text-gray-50 leading-snug self-center">
                The framework for web user interfaces
            </p>
            <div class="mt-5 self-center flex gap-2 w-auto flex-row">
                <a
                    class="w-auto justify-center scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-cyan-600 focus:outline-offset-2 focus-visible:dark:focus:outline-blue-400 leading-snug bg-cyan-600 text-white dark:bg-cyan-600-dark dark:text-gray-700 text-lg py-3 rounded-full px-6"
                    target="_self"
                    href="/learn"
                >
                    Learn Coreact
                </a>
                <a
                    class="w-auto justify-center scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-cyan-600 focus:outline-offset-2 focus-visible:dark:focus:outline-blue-400 leading-snug text-gray-950 dark:text-gray-50 shadow-secondary-button-stroke hover:bg-gray-400/10  hover:dark:bg-gray-60/5 dark:bg-gray-60/10 text-lg py-3 rounded-full px-6"
                    aria-label="API Reference"
                    target="_self"
                    href="/blog"
                >
                    Read Blog
                </a>
            </div>
        </div>
    );
}
