import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { CodeDemo } from "@/app/components/demo/code-demo";

export function Section({
    title,
    firstDescription,
    secondDescription,
    codeTitle,
    CodeCardComponent,
    CodeResultComponent,
}: {
    title: string;
    firstDescription: string;
    secondDescription: string;
    codeTitle: string;
    CodeCardComponent: () => VirtualNode;
    CodeResultComponent: () => VirtualNode;
}) {
    return (
        <div class="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-gray-900/10 dark:border-gray-50/10">
            <div class="flex-col gap-2 flex grow w-full my-32 mx-auto items-center">
                <div class="px-5 lg:px-0 max-w-4xl lg:text-center text-white flex flex-col items-center justify-center">
                    <h2 class="leading-xl font-display text-gray-950 dark:text-gray-50 font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">
                        {title}
                    </h2>
                    <p class="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-100 leading-normal">
                        {firstDescription}
                    </p>
                </div>
                <div class="max-w-7xl mx-auto flex flex-col w-full">
                    <div class="lg:pl-10 lg:pr-5 w-full">
                        <div class="mt-12 mb-2 lg:mt-16 lg:mb-16 max-w-7xl mx-auto flex flex-col w-full lg:rounded-2xl lg:bg-gray-50 lg:dark:bg-gray-800">
                            <CodeDemo
                                codeTitle={codeTitle}
                                CodeCardComponent={CodeCardComponent}
                                CodeResultComponent={CodeResultComponent}
                            />
                        </div>
                    </div>
                </div>
                <div class="px-5 lg:px-0 max-w-4xl lg:text-center text-white flex flex-col items-center justify-center">
                    <p class="max-w-3xl mx-auto text-lg lg:text-xl text-gray-700 dark:text-gray-100 leading-normal">
                        {secondDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}
