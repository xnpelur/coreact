import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "@/runtime/router";
import { BlogBreadcrumb } from "../components/blog-breadcrumb";

export function BlogPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <BlogBreadcrumb />
                            <h1 class="text-4xl font-bold mb-8">
                                Coreact Blog
                            </h1>
                            <p class="text-xl text-gray-600 dark:text-gray-300 mb-16">
                                The latest news and updates from the Coreact
                                team.
                            </p>

                            <div class="pb-8">
                                <article>
                                    <time class="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        May 24, 2025
                                    </time>
                                    <h2 class="text-2xl font-bold mb-3">
                                        <Link
                                            href="/blog/performance-optimization"
                                            class="hover:text-cyan-500 hover:underline"
                                        >
                                            Optimizing Performance in Coreact
                                            Applications
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        Discover techniques and best practices
                                        for optimizing the performance of your
                                        Coreact applications.
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            performance
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            optimization
                                        </span>
                                    </div>
                                </article>

                                <div class="border-b border-gray-200 dark:border-gray-700 my-8"></div>

                                <article>
                                    <time class="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        May 17, 2025
                                    </time>
                                    <h2 class="text-2xl font-bold mb-3">
                                        <Link
                                            href="/blog/why-i-built-this-framework"
                                            class="hover:text-cyan-500 hover:underline"
                                        >
                                            Why I Built This Framework: A Deep
                                            Dive into Coreact's Design
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        In this post, I share the motivation
                                        behind creating Coreact and the design
                                        principles that guided its development.
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            motivation
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            design
                                        </span>
                                    </div>
                                </article>

                                <div class="border-b border-gray-200 dark:border-gray-700 my-8"></div>

                                <article>
                                    <time class="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        May 15, 2025
                                    </time>
                                    <h2 class="text-2xl font-bold mb-3">
                                        <Link
                                            href="/blog/introducing-coreact"
                                            class="hover:text-cyan-500 hover:underline"
                                        >
                                            Introducing Coreact: A New Way to
                                            Build Web Apps
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        We are excited to announce the release
                                        of Coreact, a modern framework for
                                        building web applications with a focus
                                        on performance and developer experience.
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            announcement
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            release
                                        </span>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
