import { createElement, VirtualNode } from "@/runtime/jsx-runtime";

export function CodeResult({ Component }: { Component: () => VirtualNode }) {
    return (
        <div class="relative -my-20 w-full p-10 flex grow justify-center">
            <div class="max-w-3xl rounded-2xl mx-auto text-gray-700 leading-normal bg-white overflow-hidden w-full overflow-y-auto shadow-nav dark:shadow-nav-dark">
                <div class="flex flex-col p-10 items-center">
                    <Component />
                </div>
            </div>
            <div class="absolute z-10 inset-0 pointer-events-none transition-opacity transform-gpu opacity-0"></div>
        </div>
    );
}
