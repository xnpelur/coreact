import { createElement, VirtualNode } from "@/runtime/jsx-runtime";

export function CodeCard({
    title,
    Component,
}: {
    title: string;
    Component: () => VirtualNode;
}) {
    return (
        <div class="lg:-m-5 h-full shadow-nav dark:shadow-nav-dark lg:rounded-2xl bg-white dark:bg-darkgray w-full flex grow flex-col">
            <div class="w-full bg-gray-50 dark:bg-darkgray lg:rounded-t-2xl border-b border-black/5 dark:border-white/5">
                <h3 class="text-sm my-2 mx-5 text-gray-500 dark:text-gray-300 select-none text-start">
                    {title}
                </h3>
            </div>
            <div class="codeblock rounded-b-2xl h-full w-full overflow-x-auto flex items-center bg-white dark:bg-darkgray shadow-lg overflow-hidden">
                <div class="w-full">
                    <div class="flex flex-col w-full">
                        <div class="flex-1 relative overflow-auto bg-white dark:bg-darkgray">
                            <pre class="flex align-start font-mono text-sm leading-6 p-4">
                                <Component />
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
