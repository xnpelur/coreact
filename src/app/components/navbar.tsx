import { createElement } from "@/runtime/jsx-runtime";
import { Logo } from "@/app/components/logo";
import { ToggleModeButton } from "./toggle-mode-button";
import { Link } from "@/runtime/router";
import { useTranslation } from "@/runtime/hooks/translation";

export function Navbar() {
    const { t } = useTranslation();
    return (
        <div class="z-40 sticky top-0">
            <nav class="font-medium duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow items-center w-full flex justify-between bg-white dark:bg-darkgray pr-5 pl-4 z-40">
                <div class="flex items-center justify-between w-full h-16 gap-3">
                    <div class="flex flex-row flex-1 items-center">
                        <span data-state="closed" class="flex items-center">
                            <div class="flex items-center">
                                <div>
                                    <Link
                                        class="relative text-gray-950 dark:text-gray-50 p-1 inline-flex"
                                        href="/"
                                    >
                                        <div class="overflow-hidden items-center inline-flex text-lg font-normal gap-2">
                                            <Logo className="text-sm me-0 w-10 h-10 text-cyan-600 dark:text-cyan-600-dark flex origin-center transition-all ease-in-out" />
                                            <span>Coreact</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </span>
                        <div class="flex flex-column justify-center items-center">
                            <a
                                class="flex py-2 flex-column justify-center items-center text-gray-400 dark:text-gray-30 hover:text-cyan-600 hover:dark:text-blue-400 hover:underline text-sm ms-1 cursor-pointer"
                                href="https://github.com/xnpelur/coreact"
                            >
                                v1.0
                            </a>
                        </div>
                    </div>
                    <div class="text-base items-center gap-1.5 flex flex-1 flex-row justify-end">
                        <div class="mx-2.5 gap-1.5 flex">
                            <div class="flex flex-1">
                                <Link
                                    class="scale-95 transition-transform w-full text-center outline-cyan-600 py-2 px-4 rounded-full capitalize whitespace-nowrap hover:bg-darkgray/5 hover:dark:bg-gray-50/5"
                                    href="/docs"
                                >
                                    {t("navbar.link.docs") /* Docs */}
                                </Link>
                            </div>
                            <div class="flex flex-1">
                                <Link
                                    class="scale-95 transition-transform w-full text-center outline-cyan-600 py-2 px-4 rounded-full capitalize whitespace-nowrap hover:bg-darkgray/5 hover:dark:bg-gray-50/5"
                                    href="/blog"
                                >
                                    {t("navbar.link.blog") /* Blog */}
                                </Link>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <ToggleModeButton />
                            <div class="flex">
                                <Link
                                    class="flex items-center justify-center w-12 h-12 transition-transform rounded-full scale-95 hover:bg-darkgray/5 hover:dark:bg-gray-50/5 outline-cyan-600"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Open on GitHub"
                                    href="https://github.com/xnpelur/coreact"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
