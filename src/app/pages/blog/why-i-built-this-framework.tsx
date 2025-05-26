import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Link } from "@/runtime/router";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { BlogBreadcrumb } from "@/app/components/blog-breadcrumb";
import { useTranslation } from "@/runtime/hooks/translation";

export function WhyIBuiltThisFrameworkPost(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <BlogBreadcrumb article={t("whyIBuilt.articleTitle")} />

                            <header class="mb-12">
                                <Heading
                                    level={1}
                                    text={t("whyIBuilt.heading.title")}
                                />
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>May 22, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            {t("whyIBuilt.badge.state")}
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            {t("whyIBuilt.badge.framework")}
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <section class="mb-8">
                                <Paragraph text={t("whyIBuilt.paragraph.intro1")}/>
                                <Paragraph text={t("whyIBuilt.paragraph.intro2")}/>
                                <Paragraph text={t("whyIBuilt.paragraph.intro3")}/>
                            </section>

                            <section class="mb-8">
                                <Heading level={2} text={t("whyIBuilt.heading.simplicity")}/>
                                <Paragraph text={t("whyIBuilt.paragraph.simplicity1")}/>
                                <Paragraph text={t("whyIBuilt.paragraph.simplicity2")}/>
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.components")}
                                    </li>
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.styling")}
                                    </li>
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.state")}
                                    </li>
                                    <li>
                                        {t("whyIBuilt.list.router")}
                                    </li>
                                </ul>
                                <Paragraph text={t("whyIBuilt.paragraph.simplicity3")}/>
                            </section>

                            <section class="mb-8">
                                <Heading
                                    level={2}
                                    text={t("whyIBuilt.heading.familiarTools")}
                                />
                                <Paragraph text={t("whyIBuilt.paragraph.familiarTools1")}/>
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.vite")}
                                    </li>
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.ts")}
                                    </li>
                                    <li>{t("whyIBuilt.list.jsx")}</li>
                                </ul>
                                <Paragraph text={t("whyIBuilt.paragraph.familiarTools2")}/>
                            </section>

                            <section class="mb-8">
                                <Heading level={2} text={t("whyIBuilt.heading.whosItFor")}/>
                                <Paragraph text={t("whyIBuilt.paragraph.whosItFor1")}/>
                                <ul class="list-disc list-inside mb-4">
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.learnFrontend")}
                                    </li>
                                    <li className="mb-2">
                                        {t("whyIBuilt.list.internalTools")}
                                    </li>
                                    <li>
                                        {t("whyIBuilt.list.fullControl")}
                                    </li>
                                </ul>
                                <Paragraph text={t("whyIBuilt.paragraph.whosItFor2")}/>
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
                                    {t("whyIBuilt.link.backToBlog")}
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
