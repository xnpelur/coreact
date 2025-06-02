import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { Link } from "@/runtime/router";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-col lg:flex-row flex-1 pt-4 justify-between w-full">
                <DocsSidebar currentPage="overview" />
                <main class="w-full max-w-full lg:max-w-4xl px-4 sm:px-8 pt-2 mx-auto flex-1">
                    <Heading
                        level={1}
                        text={t("docsPage.heading.gettingStarted")}
                    />
                    <section class="mb-8">
                        <Paragraph text={t("docsPage.paragraph.welcome")} />
                        <Paragraph
                            text={t("docsPage.paragraph.frameworkDescription")}
                        />
                    </section>

                    <section class="mb-12">
                        <Heading
                            level={2}
                            text={t("docsPage.heading.installation")}
                        />
                        <Paragraph
                            text={t("docsPage.paragraph.installation")}
                        />
                        <Code
                            text={`git clone https://github.com/xnpelur/coreact.git\ncd coreact\nnpm install\nnpm run dev`}
                        />
                        <Paragraph
                            text={t("docsPage.paragraph.developmentServer")}
                        />
                    </section>

                    <section class="mb-12">
                        <Heading
                            level={2}
                            text={t("docsPage.heading.projectStructure")}
                        />
                        <Paragraph
                            text={t("docsPage.paragraph.projectStructure")}
                        />
                        <Code
                            text={`/src\n  ├── app         ← Your components, pages, and styles\n  ├── runtime     ← Internal framework logic\n  ├── styles      ← Base styles, theme variables and styles generated from classes\n  └── main.ts     ← Mounts your main App component`}
                        />
                        <Paragraph
                            text={t("docsPage.paragraph.separationOfLogic")}
                        />
                    </section>

                    <section class="mb-12">
                        <Heading
                            level={2}
                            text={t("docsPage.heading.whatsNext")}
                        />
                        <Paragraph
                            text={t("docsPage.paragraph.exploreCoreModules")}
                        />
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">
                                <Link
                                    href="/docs/rendering"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>
                                        {t("docsPage.link.rendering")}
                                    </strong>
                                </Link>
                                <span>
                                    {" "}
                                    — {t("docsPage.link.renderingDescription")}
                                </span>
                            </li>
                            <li class="mb-2">
                                <Link
                                    href="/docs/styling"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>
                                        {t("docsPage.link.styling")}
                                    </strong>
                                </Link>
                                <span>
                                    {" "}
                                    — {t("docsPage.link.stylingDescription")}
                                </span>
                            </li>
                            <li class="mb-2">
                                <Link
                                    href="/docs/state-management"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>
                                        {t("docsPage.link.stateManagement")}
                                    </strong>
                                </Link>
                                <span>
                                    {" "}
                                    —{" "}
                                    {t(
                                        "docsPage.link.stateManagementDescription"
                                    )}
                                </span>
                            </li>
                            <li>
                                <Link
                                    href="/docs/routing"
                                    class="text-cyan-600 hover:underline"
                                >
                                    <strong>
                                        {t("docsPage.link.routing")}
                                    </strong>
                                </Link>
                                <span>
                                    {" "}
                                    — {t("docsPage.link.routingDescription")}
                                </span>
                            </li>
                        </ul>
                    </section>
                </main>
                <div class="hidden 2xl:block flex-1 max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
