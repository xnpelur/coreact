import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Link } from "@/runtime/router";
import { BlogBreadcrumb } from "@/app/components/blog-breadcrumb";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { useTranslation } from "@/runtime/hooks/translation";

export function CoreactPerformanceOptimizationPost(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <BlogBreadcrumb article={t("coreactPerfOpt.articleTitle")} />

                            <header class="mb-12">
                                <Heading
                                    level={1}
                                    text={t("coreactPerfOpt.heading.title")}
                                />
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>May 22, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            {t("coreactPerfOpt.badge.performance")}
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            {t("coreactPerfOpt.badge.framework")}
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <section class="mb-8">
                                <Heading
                                    level={2}
                                    text={t("coreactPerfOpt.heading.philosophy")}
                                />
                                <Paragraph text={t("coreactPerfOpt.paragraph.intro")}/>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    {t("coreactPerfOpt.h3.virtualDom")}
                                </h3>
                                <Paragraph text={t("coreactPerfOpt.paragraph.virtualDom")}/>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    {t("coreactPerfOpt.h3.stateManagement")}
                                </h3>
                                <Paragraph text={t("coreactPerfOpt.paragraph.stateManagement")}/>

                                <Code
                                    text={`// Coreact's efficient component update pattern\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    \n    // Only triggers re-render when count actually changes\n    const increment = () => setCount(c => c + 1);\n    \n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={increment}>Increment</button>\n        </div>\n    );\n}`}
                                />

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    {t("coreactPerfOpt.h3.treeShaking")}
                                </h3>
                                <Paragraph text={t("coreactPerfOpt.paragraph.treeShaking")}/>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    {t("coreactPerfOpt.h3.memoryManagement")}
                                </h3>
                                <Paragraph text={t("coreactPerfOpt.paragraph.memoryManagement")}/>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    {t("coreactPerfOpt.h3.eventHandling")}
                                </h3>
                                <Paragraph text={t("coreactPerfOpt.paragraph.eventHandling")}/>
                            </section>

                            <section class="mb-8">
                                <Heading
                                    level={2}
                                    text={t("coreactPerfOpt.heading.realWorld")}
                                />
                                <Paragraph text={t("coreactPerfOpt.paragraph.realWorld")}/>
                                <ul class="list-disc list-inside mb-8">
                                    <li>{t("coreactPerfOpt.list.smallerBundle")}</li>
                                    <li class="mt-2">{t("coreactPerfOpt.list.fasterRender")}</li>
                                    <li class="mt-2">{t("coreactPerfOpt.list.lowerMemory")}</li>
                                    <li class="mt-2">{t("coreactPerfOpt.list.efficientUpdates")}</li>
                                </ul>
                            </section>

                            <section class="mb-8">
                                <Heading
                                    level={2}
                                    text={t("coreactPerfOpt.heading.bestPractices")}
                                />
                                <div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">
                                            {t("coreactPerfOpt.h3.minimizeRerenders")}
                                        </h3>
                                        <Paragraph text={t("coreactPerfOpt.paragraph.minimizeRerenders")}/>
                                    </div>

                                    <div class="mt-6">
                                        <h3 class="text-xl font-semibold mb-2">
                                            {t("coreactPerfOpt.h3.optimizeStructure")}
                                        </h3>
                                        <Paragraph text={t("coreactPerfOpt.paragraph.optimizeStructure")}/>
                                    </div>

                                    <div class="mt-6">
                                        <h3 class="text-xl font-semibold mb-2">
                                            {t("coreactPerfOpt.h3.lazyLoading")}
                                        </h3>
                                        <Paragraph text={t("coreactPerfOpt.paragraph.lazyLoading")}/>
                                    </div>
                                </div>
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
                                    {t("coreactPerfOpt.link.backToBlog")}
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
