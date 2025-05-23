import { createElement, VirtualNode } from "@/runtime/jsx-runtime";

interface LearnSidebarProps {
    currentPage?: string;
}

export function LearnSidebar({ currentPage = '' }: LearnSidebarProps): VirtualNode {
    const isActive = (page: string) => 
        currentPage === page ? 'text-cyan-500 dark:text-cyan-400 font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400';

    return (
        <div class="w-64 flex-shrink-0 pr-8 text-sm">
            <nav class="sticky top-20">
                <ul class="space-y-2">
                    <li>
                        <a 
                            href="/learn" 
                            class={`block py-1.5 ${isActive('overview')}`}
                        >
                            Overview
                        </a>
                    </li>
                    <li class="mt-4 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Core Concepts
                    </li>
                    <li>
                        <a 
                            href="/learn/rendering" 
                            class={`block py-1.5 ${isActive('rendering')}`}
                        >
                            Rendering
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/learn/styling" 
                            class={`block py-1.5 ${isActive('styling')}`}
                        >
                            Styling
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/learn/state-management" 
                            class={`block py-1.5 ${isActive('state-management')}`}
                        >
                            State Management
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/learn/routing" 
                            class={`block py-1.5 ${isActive('routing')}`}
                        >
                            Routing
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
