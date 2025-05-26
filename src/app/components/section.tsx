import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { CodeDemo } from "@/app/components/demo/code-demo";
import { useTranslation } from "@/runtime/hooks/translation";

export function Section({
    codeTitle,
    CodeCardComponent,
    CodeResultComponent,
}: {
    codeTitle: string;
    CodeCardComponent: () => VirtualNode;
    CodeResultComponent: () => VirtualNode;
}) {
    const { t } = useTranslation();
    return (
        <div class="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-gray-900/10 dark:border-gray-50/10">
            <div class="flex-col gap-2 flex grow w-full my-32 mx-auto items-center">
                <div class="px-0 max-w-4xl text-center text-white flex flex-col items-center justify-center">
                    <h2 class="leading-xl font-display text-gray-950 dark:text-gray-50 font-semibold text-6xl -mt-4 mb-7 w-full max-w-xl">
                        {
                            t(
                                "section.heading.createUI"
                            ) /* Create user interfaces from components */
                        }
                    </h2>
                    <p class="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-100 leading-normal">
                        {
                            t(
                                "section.text.coreactLets"
                            ) /* Coreact lets you build user interfaces out of individual pieces called components. Create your own Coreact components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps. */
                        }
                    </p>
                </div>
                <div class="max-w-7xl mx-auto flex flex-col w-full">
                    <div class="pl-10 pr-5 w-full">
                        <div class="my-16 max-w-7xl mx-auto flex flex-col w-full rounded-2xl bg-gray-50 dark:bg-gray-800">
                            <CodeDemo
                                codeTitle={codeTitle}
                                CodeCardComponent={CodeCardComponent}
                                CodeResultComponent={CodeResultComponent}
                            />
                        </div>
                    </div>
                </div>
                <div class="px-0 max-w-4xl text-center text-white flex flex-col items-center justify-center">
                    <p class="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-100 leading-normal">
                        {
                            t(
                                "section.text.whetherYou"
                            ) /* Whether you work on your own or with thousands of other developers, using Coreact feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations. */
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}
