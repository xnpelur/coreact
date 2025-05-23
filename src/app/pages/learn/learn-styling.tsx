import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { LearnSidebar } from "@/app/components/learn-sidebar";

export function LearnStylingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <LearnSidebar currentPage="styling" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Styling in Coreact</h1>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">CSS Classes</h2>
                        <p class="mb-4">
                            You can use the <code>class</code> prop to apply CSS
                            classes to your elements. Coreact supports both
                            regular CSS and CSS-in-JS solutions.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`function Button() {
    return <button class="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>;
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">Inline Styles</h2>
                        <p class="mb-4">
                            For dynamic styles, you can pass a JavaScript object
                            to the <code>style</code> prop.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`function ColoredBox() {
    const style = {
        backgroundColor: 'blue',
        padding: '1rem',
        color: 'white'
    };
    return <div style={style}>Hello, styled div!</div>;
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">CSS Modules</h2>
                        <p class="mb-4">
                            Coreact supports CSS Modules out of the box for
                            component-scoped styles.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/learn/state-management"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Next: State Management
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
