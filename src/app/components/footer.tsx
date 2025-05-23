import { createElement } from "@/runtime/jsx-runtime";

export function Footer() {
    return (
        <div class="self-stretch w-full bg-white dark:bg-darkgray mt-[-1px]">
            <div class="px-5 py-4">
                <footer class="text-gray-700 dark:text-gray-100">
                    <div class="flex flex-col items-center justify-center gap-2">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <p class="text-sm text-gray-700 dark:text-gray-100">
                                Made with{" "}
                                <a
                                    href="https://github.com/xnpelur/coreact"
                                    class="font-bold"
                                >
                                    Coreact
                                </a>
                                ️ by{" "}
                                <a
                                    href="https://github.com/xnpelur"
                                    class="font-bold"
                                >
                                    xnpelur
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
