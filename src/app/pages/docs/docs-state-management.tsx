import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsStateManagementPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="state-management" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text={t("docsState.heading.title")} />
                    <section class="mb-8">
                        <Paragraph text={t("docsState.paragraph.intro")} />
                    </section>
                    <section class="mb-8">
                        <Heading level={2} text={t("docsState.heading.whyGlobal")} />
                        <Paragraph text={t("docsState.paragraph.scenarios")} />
                        <ul class="list-disc list-inside mb-4">
                            <li class="mb-2">{t("docsState.list.sidebar")}</li>
                            <li class="mb-2">{t("docsState.list.auth")}</li>
                            <li>{t("docsState.list.cart")}</li>
                        </ul>
                        <Paragraph text={t("docsState.paragraph.storeIntro")} />
                    </section>
                    <section class="mb-8">
                        <Heading level={2} text={t("docsState.heading.createStore")} />
                        <Paragraph text={t("docsState.paragraph.createStore")} />
                        <Code
                            text={`export const useTheme = createStore("light");`}
                        />
                        <Paragraph text={t("docsState.paragraph.useStore")} />
                        <Code
                            text={`const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
        Theme: {theme}
    </button>
  );
};`}
                        />
                        <Paragraph text={t("docsState.paragraph.storeBehavior")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsState.heading.bestPractices")} />
                        <ul class="list-disc list-inside mb-4">
                            <li class="mb-2">{t("docsState.list.globalData")}</li>
                            <li class="mb-2">{t("docsState.list.focusedStores")}</li>
                            <li>{t("docsState.list.customHooks")}</li>
                        </ul>
                    </section>

                    <NextLink href="/docs/routing" text={t("docsState.link.nextRouting")} />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
