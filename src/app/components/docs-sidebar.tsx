import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Link } from "@/runtime/router";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsSidebar({
    currentPage = "",
}: {
    currentPage?: string;
}): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="max-w-80 flex-1 z-10 hidden xl:block">
            <div class="sticky top-20">
                <aside class="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-10 hidden lg:block">
                    <nav class="w-full lg:h-auto grow pr-0 lg:pr-5 lg:pb-16 md:pt-4">
                        <ul>
                            <li>
                                <Link
                                    class={
                                        "p-2 w-full rounded-r-2xl flex items-center justify-between pl-5 font-medium text-base" +
                                        (currentPage === "overview"
                                            ? " text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                                            : " text-gray-950 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-80")
                                    }
                                    href="/docs"
                                >
                                    {
                                        t(
                                            "docsSidebar.link.overview"
                                        ) /* Overview */
                                    }
                                </Link>
                            </li>
                            <h3 class="mb-1 mt-4 text-xs ml-5 text-gray-500 dark:text-gray-300">
                                {
                                    t(
                                        "docsSidebar.header.coreModules"
                                    ) /* CORE MODULES */
                                }
                            </h3>
                            <li>
                                <Link
                                    class={
                                        "p-2 w-full rounded-r-2xl flex items-center justify-between pl-5 font-medium text-base" +
                                        (currentPage === "rendering"
                                            ? " text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                                            : " text-gray-950 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-80")
                                    }
                                    href="/docs/rendering"
                                >
                                    {
                                        t(
                                            "docsSidebar.link.rendering"
                                        ) /* Rendering */
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class={
                                        "p-2 w-full rounded-r-2xl flex items-center justify-between pl-5 font-medium text-base" +
                                        (currentPage === "styling"
                                            ? " text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                                            : " text-gray-950 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-80")
                                    }
                                    href="/docs/styling"
                                >
                                    {
                                        t(
                                            "docsSidebar.link.styling"
                                        ) /* Styling */
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class={
                                        "p-2 w-full rounded-r-2xl flex items-center justify-between pl-5 font-medium text-base" +
                                        (currentPage === "state-management"
                                            ? " text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                                            : " text-gray-950 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-80")
                                    }
                                    href="/docs/state-management"
                                >
                                    {
                                        t(
                                            "docsSidebar.link.stateManagement"
                                        ) /* State Management */
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class={
                                        "p-2 w-full rounded-r-2xl flex items-center justify-between pl-5 font-medium text-base" +
                                        (currentPage === "routing"
                                            ? " text-cyan-500 dark:text-cyan-400 bg-cyan-500/10"
                                            : " text-gray-950 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-80")
                                    }
                                    href="/docs/routing"
                                >
                                    {
                                        t(
                                            "docsSidebar.link.routing"
                                        ) /* Routing */
                                    }
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </div>
    );
}
