import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Link } from "@/runtime/router";
import { BlogBreadcrumb } from "@/app/components/blog-breadcrumb";

export function IntroducingCoreactPost(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <BlogBreadcrumb article="Introducing Coreact" />

                            <header class="mb-12">
                                <h1 class="text-4xl font-bold mb-6">
                                    Introducing Coreact: A New Way to Build Web
                                    Apps
                                </h1>
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>May 15, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            announcement
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            release
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Welcome to Coreact
                                </h2>
                                <p class="mb-8">
                                    We're thrilled to introduce Coreact, a new
                                    framework designed to make web development
                                    more intuitive and efficient. Coreact
                                    combines the best parts of modern web
                                    frameworks with a focus on performance and
                                    developer experience.
                                </p>
                            </section>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Why Coreact?
                                </h2>
                                <p class="mb-8">
                                    We built Coreact with several key principles
                                    in mind:
                                </p>
                                <ul class="list-disc list-inside mb-8">
                                    <li>
                                        <strong>Performance:</strong> Built with
                                        performance in mind from the ground up
                                    </li>
                                    <li>
                                        <strong>Simplicity:</strong> Intuitive
                                        API that's easy to learn
                                    </li>
                                    <li>
                                        <strong>Flexibility:</strong> Build
                                        anything from simple websites to complex
                                        applications
                                    </li>
                                    <li>
                                        <strong>Modern:</strong> Uses the latest
                                        web standards and best practices
                                    </li>
                                </ul>
                            </section>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Getting Started
                                </h2>
                                <p class="mb-8">
                                    To get started with Coreact, check out our
                                    documentation. We can't wait to see what
                                    you'll build!
                                </p>
                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    <pre class="m-0">
                                        <code>
                                            git clone
                                            https://github.com/xnpelur/coreact.git
                                        </code>
                                    </pre>
                                </div>
                            </section>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    What's Next?
                                </h2>
                                <p class="mb-8">
                                    We have an exciting roadmap ahead, with
                                    plans for server-side rendering, static site
                                    generation, and more. Stay tuned for
                                    updates!
                                </p>
                            </section>

                            <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    href="/blog"
                                    class="inline-flex items-center text-cyan-500 hover:underline"
                                >
                                    <span class="inline-block mr-1 rtl:rotate-180">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="rotate-180"
                                        >
                                            <path
                                                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    Back to Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
