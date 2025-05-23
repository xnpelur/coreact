import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { LearnSidebar } from "@/app/components/learn-sidebar";

export function LearnPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <LearnSidebar currentPage="overview" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Learn Coreact</h1>
                    <p class="text-xl mb-8 text-gray-600 dark:text-gray-300">
                        Learn how to build modern web applications with Coreact.
                    </p>

                    <div class="space-y-8">
                        <section>
                            <h2 class="text-2xl font-bold mb-4">
                                Getting Started
                            </h2>
                            <p class="mb-4">
                                Welcome to the Coreact documentation! This guide
                                will help you get started with the framework.
                            </p>
                        </section>

                        <section>
                            <h2 class="text-2xl font-bold mb-4">Quick Links</h2>
                            <div class="grid md:grid-cols-2 gap-4">
                                <a
                                    href="/learn/rendering"
                                    class="p-4 border rounded-lg hover:border-cyan-500 transition-colors"
                                >
                                    <h3 class="font-bold text-lg mb-2">
                                        Rendering
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        Learn how to render UI with Coreact
                                        components.
                                    </p>
                                </a>
                                <a
                                    href="/learn/styling"
                                    class="p-4 border rounded-lg hover:border-cyan-500 transition-colors"
                                >
                                    <h3 class="font-bold text-lg mb-2">
                                        Styling
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        Style your components with various
                                        approaches.
                                    </p>
                                </a>
                                <a
                                    href="/learn/state-management"
                                    class="p-4 border rounded-lg hover:border-cyan-500 transition-colors"
                                >
                                    <h3 class="font-bold text-lg mb-2">
                                        State Management
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        Manage your application state
                                        effectively.
                                    </p>
                                </a>
                                <a
                                    href="/learn/routing"
                                    class="p-4 border rounded-lg hover:border-cyan-500 transition-colors"
                                >
                                    <h3 class="font-bold text-lg mb-2">
                                        Routing
                                    </h3>
                                    <p class="text-gray-600 dark:text-gray-300">
                                        Handle navigation in your Coreact
                                        application.
                                    </p>
                                </a>
                            </div>
                        </section>
                    </div>
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
