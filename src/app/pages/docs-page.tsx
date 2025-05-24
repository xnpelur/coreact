import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";

export function DocsPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="overview" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Getting Started" />
                    <section class="mb-8">
                        <Paragraph
                            text="Welcome to the official documentation of our
                            lightweight frontend framework. This guide is your
                            entry point to building modern web applications with
                            a clear separation of logic and layout,
                            component-based rendering, and built-in support for
                            styling, routing, and state management."
                        />
                        <Paragraph
                            text="Whether you're building a single-page app (SPA), a
                            dashboard, or a static marketing site, this
                            framework provides you with the essential tools
                            without the bloat."
                        />
                    </section>

                    <section class="mb-12">
                        <Heading level={2} text="Installation" />
                        <Paragraph
                            text="To begin using the framework, clone the repository
                            and install dependencies using the following
                            commands:"
                        />
                        <Code
                            text="git clone <your-repo-link>
cd <your-project-directory>
npm install
npm run dev"
                        />
                        <Paragraph
                            text="This will start the development server and
                            automatically reload the browser when you make
                            changes. The framework is powered by modern tooling
                            (Vite, TypeScript), enabling blazing-fast builds and
                            efficient development cycles."
                        />
                    </section>

                    <section class="mb-12">
                        <Heading level={2} text="Project Structure" />
                        <Paragraph
                            text="
                            User-defined application code lives in the 
                            `/src/app`
                            directory. All other folders house internal runtime
                            logic or auto-generated code and should not be
                            modified manually."
                        />
                        <Code
                            text="/src
  ├── app         ← Your components, pages, and styles
  ├── runtime     ← Internal framework logic
  ├── styles      ← Base styles and theme variables
  ├── plugins     ← Vite plugin for style scanning
  ├── generated   ← Compiled utility-first CSS
  └── main.ts     ← Mounts your main App component"
                        />
                        <Paragraph
                            text="
                            This clear separation allows you to upgrade
                            framework internals independently of your own
                            project logic and maintain a clean development
                            environment."
                        />
                    </section>

                    <section class="mb-12">
                        <Heading level={2} text="What's Next?" />
                        <Paragraph text="Explore the core modules of the framework:" />
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">
                                <a
                                    href="/docs/rendering"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>Rendering</strong>
                                </a>{" "}
                                — Build components and interact with JSX.
                            </li>
                            <li class="mb-2">
                                <a
                                    href="/docs/styling"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>Styling</strong>
                                </a>{" "}
                                — Use utility-first classes like Tailwind.
                            </li>
                            <li class="mb-2">
                                <a
                                    href="/docs/state-management"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>State Management</strong>
                                </a>{" "}
                                — Share reactive state across your app.
                            </li>
                            <li>
                                <a
                                    href="/docs/routing"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>Routing</strong>
                                </a>{" "}
                                — Enable dynamic, client-side navigation.
                            </li>
                        </ul>
                    </section>
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
