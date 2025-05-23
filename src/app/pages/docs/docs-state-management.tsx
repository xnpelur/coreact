import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsStateManagementPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="state-management" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">
                        State Management in Coreact
                    </h1>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Introduction to State
                        </h2>
                        <p class="mb-4">
                            State allows components to manage and track changes
                            to data over time. In Coreact, you can manage state
                            using hooks or context.
                        </p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Using State Hooks
                        </h2>
                        <p class="mb-4">
                            The <code>useState</code> hook lets you add state to
                            function components.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`import { useState } from 'coreact';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">Context API</h2>
                        <p class="mb-4">
                            For global state that needs to be accessed by many
                            components, you can use the Context API.
                        </p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            External State Management
                        </h2>
                        <p class="mb-4">
                            For complex applications, you might want to use
                            external state management solutions like Redux or
                            Zustand.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs/routing"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Next: Routing
                            <svg
                                class="w-5 h-5 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
