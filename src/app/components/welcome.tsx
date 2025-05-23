import { createElement } from "@/runtime/jsx-runtime";
import { Logo } from "@/app/components/logo";

export function Welcome() {
    return (
        <div class="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-gray-900/10 dark:border-gray-50/10">
            <div class="flex-col gap-2 flex grow w-full my-32 mx-auto items-center">
                <div class="mt-20 px-0 mb-6 max-w-4xl text-center">
                    <Logo className="text-cyan-600 dark:text-cyan-600-dark w-28 mb-8 mt-12 h-auto mx-auto self-start" />
                    <h2 class="leading-xl font-display text-gray-950 dark:text-gray-50 font-semibold text-6xl -mt-4 mb-7 w-full max-w-xl">
                        Welcome to the
                        <br class="inline" /> Coreact community
                    </h2>
                    <a
                        class="scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-cyan-600 focus:outline-offset-2 focus-visible:dark:focus:outline-blue-400 leading-snug bg-cyan-600 text-white dark:bg-cyan-600-dark dark:text-gray-700 text-lg py-3 rounded-full px-6"
                        aria-label="Take the Tutorial"
                        target="_self"
                        href="/learn"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}
