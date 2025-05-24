import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "@/runtime/router";

export function BlogPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <div class="flex flex-wrap">
                                <div class="flex mb-3 mt-0.5 items-center">
                                    <Link
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase me-1 hover:underline"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <span class="inline-block me-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase">
                                        Blog
                                    </span>
                                </div>
                            </div>
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
