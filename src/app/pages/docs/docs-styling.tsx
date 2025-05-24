import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsStylingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="styling" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Styling</h1>
                    <section class="mb-8">
                        <p class="mb-4">
                            The styling module provides a utility-first approach
                            to styling components, inspired by Tailwind CSS. You
                            define styles directly in the class attribute of
                            your JSX elements using descriptive utility classes.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">Basic Usage</h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`<div class="text-xl font-bold text-center text-blue-600">
  Hello, styled world!
</div>`}</code>
                        </pre>
                        <h2 class="text-xl font-semibold mb-2">
                            Utility Class Examples
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`<button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
  Submit
</button>`}</code>
                        </pre>
                        <h2 class="text-xl font-semibold mb-2">
                            Responsive Design
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-gray-100 p-4">Sidebar</div>
  <div class="flex-3 bg-white p-4">Content</div>
</div>`}</code>
                        </pre>
                        <p>
                            On small screens, the elements stack vertically. On
                            medium screens and up, they lay out side by side.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs/state-management"
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
