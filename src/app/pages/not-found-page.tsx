import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "@/runtime/router";
import { useTranslation } from "@/runtime/hooks/translation";

export function NotFoundPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="">
                        <div class="px-5 sm:px-12 pt-3.5">
                            <div class="max-w-4xl ms-0 2xl:mx-auto">
                                <div class="flex flex-wrap">
                                    <div class="flex mb-3 mt-0.5 items-center">
                                        <Link
                                            class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase me-1 hover:underline"
                                            href="/"
                                        >
                                            {
                                                t(
                                                    "notFoundPage.link.home"
                                                ) /* Home */
                                            }
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
                                    </div>
                                </div>
                                <h1 class="mdx-heading mt-0 text-primary dark:text-primary-dark -mx-.5 break-words text-5xl font-display font-bold leading-tight">
                                    {
                                        t(
                                            "notFoundPage.heading.notFound"
                                        ) /* Not Found */
                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 sm:px-12">
                        <div class="max-w-7xl mx-auto">
                            <div class="max-w-4xl ms-0 2xl:mx-auto">
                                <div class="font-display text-xl text-primary dark:text-primary-dark leading-relaxed">
                                    <p class="whitespace-pre-wrap my-4">
                                        {
                                            t(
                                                "notFoundPage.text.thisPage"
                                            ) /* This page doesn’t exist. */
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
