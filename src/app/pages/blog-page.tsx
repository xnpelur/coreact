import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link } from "@/runtime/router";
import { BlogBreadcrumb } from "../components/blog-breadcrumb";
import { useTranslation } from "@/runtime/hooks/translation";

export function BlogPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <BlogBreadcrumb />
                            <h1 class="text-4xl font-bold mb-4">
                                {t("blogPage.heading.title")}
                            </h1>
                            <p class="text-xl text-gray-600 dark:text-gray-300 mb-16">
                                {t("blogPage.paragraph.intro")}
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
                                            {t(
                                                "blogPage.article.performance.title"
                                            )}
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        {t(
                                            "blogPage.article.performance.summary"
                                        )}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.performance.tag1"
                                            )}
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.performance.tag2"
                                            )}
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
                                            {t(
                                                "blogPage.article.whyBuilt.title"
                                            )}
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        {t("blogPage.article.whyBuilt.summary")}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.whyBuilt.tag1"
                                            )}
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.whyBuilt.tag2"
                                            )}
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
                                            {t(
                                                "blogPage.article.introducing.title"
                                            )}
                                        </Link>
                                    </h2>
                                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                                        {t(
                                            "blogPage.article.introducing.summary"
                                        )}
                                    </p>
                                    <div class="flex flex-wrap gap-2 mt-4">
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.introducing.tag1"
                                            )}
                                        </span>
                                        <span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                            {t(
                                                "blogPage.article.introducing.tag2"
                                            )}
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
