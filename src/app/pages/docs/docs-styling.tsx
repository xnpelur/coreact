import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsStylingPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-col lg:flex-row flex-1 pt-4 justify-between w-full">
                <DocsSidebar currentPage="styling" />
                <main class="w-full max-w-full lg:max-w-4xl px-4 sm:px-8 pt-2 mx-auto flex-1">
                    <Heading level={1} text={t("docsStyling.heading.title")} />
                    <section class="mb-8">
                        <Paragraph text={t("docsStyling.paragraph.intro")} />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text={t("docsStyling.heading.utilityFirst")}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.utilityFirst")}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.insteadOf")}
                        />
                        <Code
                            text={`<style>
  .hero-text {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    color: #2563eb;
  }
</style>
<div class="hero-text">Welcome!</div>`}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.writeThis")}
                        />
                        <Code
                            text={`<div class="text-xl font-bold text-center text-blue-600">
  Hello, styled world!
</div>`}
                        />
                        <Paragraph text={t("docsStyling.paragraph.result")} />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text={t("docsStyling.heading.commonUtilities")}
                        />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">
                                {t("docsStyling.list.typography")}
                            </li>
                            <li className="mb-2">
                                {t("docsStyling.list.color")}
                            </li>
                            <li className="mb-2">
                                {t("docsStyling.list.spacing")}
                            </li>
                            <li className="mb-2">
                                {t("docsStyling.list.layout")}
                            </li>
                            <li>{t("docsStyling.list.effects")}</li>
                        </ul>

                        <Paragraph text={t("docsStyling.paragraph.combine")} />
                        <Code
                            text={`<button class="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
  Save Changes
</button>`}
                        />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text={t("docsStyling.heading.responsive")}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.breakpoints")}
                        />
                        <Code
                            text={`<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-gray-100 p-4">Sidebar</div>
  <div class="flex-3 bg-white p-4">Content</div>
</div>`}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.responsive")}
                        />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text={t("docsStyling.heading.theming")}
                        />
                        <Paragraph
                            text={t("docsStyling.paragraph.defaultStyles")}
                        />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">
                                {t("docsStyling.list.preflight")}
                            </li>
                            <li>{t("docsStyling.list.themeVars")}</li>
                        </ul>
                        <Paragraph
                            text={t("docsStyling.paragraph.customize")}
                        />
                    </section>
                    <NextLink
                        href="/docs/state-management"
                        text={t("docsStyling.link.nextState")}
                    />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
