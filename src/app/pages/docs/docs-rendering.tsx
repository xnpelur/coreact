import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsRenderingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="rendering" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">
                        Rendering in Coreact
                    </h1>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Introduction to Components
                        </h2>
                        <p class="mb-4">
                            In Coreact, components are the building blocks of
                            your UI. They are reusable, self-contained pieces of
                            code that return what should appear on the screen.
                        </p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Creating Components
                        </h2>
                        <p class="mb-4">
                            To create a component, define a function that
                            returns JSX. Component names must start with a
                            capital letter.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`function Welcome() {
    return <h1>Hello, World!</h1>;
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Rendering Elements
                        </h2>
                        <p class="mb-4">
                            Coreact elements are the smallest building blocks of
                            Coreact applications. They describe what you want to
                            see on the screen.
                        </p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Conditional Rendering
                        </h2>
                        <p class="mb-4">
                            You can use JavaScript operators like if or the
                            conditional (ternary) operator to create elements
                            representing the current state.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs/styling"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Next: Styling
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
