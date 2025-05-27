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
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="overview" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
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
                            text="git clone <your-repo-link>
cd <your-project-directory>
npm install
npm run dev"
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
                            text="/src
  ├── app         ← Your components, pages, and styles
  ├── runtime     ← Internal framework logic
  ├── styles      ← Base styles and theme variables
  ├── plugins     ← Vite plugin for style scanning
  ├── generated   ← Compiled utility-first CSS
  └── main.ts     ← Mounts your main App component"
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
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
