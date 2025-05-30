import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { CodeCard } from "@/app/components/demo/code-card";
import { CodeResult } from "@/app/components/demo/code-result";

export function CodeDemo({
    codeTitle,
    CodeCardComponent,
    CodeResultComponent,
}: {
    codeTitle: string;
    CodeCardComponent: () => VirtualNode;
    CodeResultComponent: () => VirtualNode;
}) {
    return (
        <div class="flex-col gap-0 lg:gap-5 lg:rounded-2xl lg:bg-gray-100 lg:dark:bg-gray-700 shadow-inner-border dark:shadow-inner-border-dark lg:flex-row flex grow w-full mx-auto items-center bg-cover bg-right ltr:bg-[length:60%_100%] bg-no-repeat bg-meta-gradient">
            <CodeCard title={codeTitle} Component={CodeCardComponent} />
            <CodeResult Component={CodeResultComponent} />
        </div>
    );
}
