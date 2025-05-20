import { createElement, VirtualNode } from "@/runtime/jsx-runtime";

export function CodeCard({ title, Component }: { title: string; Component: () => VirtualNode }) {
    return (
        <div className="-m-5 h-full shadow-nav dark:shadow-nav-dark rounded-2xl bg-white dark:bg-gray-950 w-full flex grow flex-col">
            <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-t-2xl border-b border-black/5 dark:border-white/5">
                <h3 className="text-sm my-2 mx-5 text-gray-500 dark:text-gray-300 select-none text-start">
                    {title}
                </h3>
            </div>
            <div className="codeblock rounded-b-2xl h-full w-full overflow-x-auto flex items-center bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex-1 relative overflow-auto bg-white dark:bg-gray-900">
                            <pre className="flex align-start font-mono text-sm leading-6 p-4">
                                <Component />
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
