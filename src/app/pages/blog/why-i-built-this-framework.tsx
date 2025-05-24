import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Link } from "@/runtime/router";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";

export function WhyIBuiltThisFrameworkPost(): VirtualNode {
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
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
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
                                    <Link
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                                        href="/blog"
                                    >
                                        Blog
                                    </Link>
                                    <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
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
                                        Why I Built This Framework
                                    </span>
                                </div>
                            </div>

                            <header class="mb-12">
                                <Heading
                                    level={1}
                                    text="Why I Built This Framework"
                                />
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>May 22, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            state
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            framework
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <section class="mb-8">
                                <Paragraph text="When I started building modern web apps, I loved the power of React and the ecosystem around it — but over time, I noticed patterns repeating. Boilerplate piled up. Tooling slowed down. And I found myself reaching for lighter solutions that were just... easier to reason about." />
                                <Paragraph text="So I asked myself: what if I could distill the frontend development experience down to its essentials?" />
                                <Paragraph text="That question led to this framework." />
                            </section>

                            <section class="mb-8">
                                <Heading level={2} text="Simplicity First" />
                                <Paragraph text="I believe most SPAs don’t need 1,000+ dependencies, endless Babel configs, or a mile-long webpack file." />
                                <Paragraph text="My framework provides:" />
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        Components via plain functions and JSX
                                    </li>
                                    <li className="mb-2">
                                        First-class styling with Tailwind-style
                                        utility classes
                                    </li>
                                    <li className="mb-2">
                                        Built-in global state management
                                    </li>
                                    <li>
                                        Lightweight router powered by the
                                        History API
                                    </li>
                                </ul>
                                <Paragraph text="All with near-zero configuration and a simple file structure." />
                            </section>

                            <section class="mb-8">
                                <Heading
                                    level={2}
                                    text="Built on Familiar Tools"
                                />
                                <Paragraph text="I didn’t reinvent the wheel. I leaned into tools developers already love:" />
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        Vite for instant feedback and fast
                                        builds
                                    </li>
                                    <li className="mb-2">
                                        TypeScript for safety without compromise
                                    </li>
                                    <li>JSX for expressive, declarative UI</li>
                                </ul>
                                <Paragraph text="You get a familiar developer experience without the overhead." />
                            </section>

                            <section class="mb-8">
                                <Heading level={2} text="Who’s It For?" />
                                <Paragraph text="This framework is perfect if you want to:" />
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        Learn frontend fundamentals without
                                        framework complexity
                                    </li>
                                    <li className="mb-2">
                                        Build internal tools, dashboards, or
                                        lightweight SPAs
                                    </li>
                                    <li>
                                        Create something fast, with full control
                                        and zero fluff
                                    </li>
                                </ul>
                                <Paragraph text="I hope you enjoy using it as much as I’ve enjoyed building it." />
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
