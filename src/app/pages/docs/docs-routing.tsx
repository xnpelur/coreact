import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsRoutingPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="routing" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text={t("docsRouting.heading.title")} />
                    <section class="mb-8">
                        <Paragraph text={t("docsRouting.paragraph.intro")} />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text={t("docsRouting.heading.clientSide")} />
                        <Paragraph text={t("docsRouting.paragraph.clientSide")} />
                        <Paragraph text={t("docsRouting.paragraph.clientSide2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRouting.heading.definingRoutes")} />
                        <Paragraph text={t("docsRouting.paragraph.definingRoutes")} />
                        <Code
                            text={`const routes = {
  "/": Home,
  "/about": About,
  "/users/:id": UserProfile,
};`}
                        />
                        <Paragraph text={t("docsRouting.paragraph.createRouter")} />
                        <Code
                            text={`const CurrentPage = createRouter(routes);`}
                        />
                        <Paragraph text={t("docsRouting.paragraph.currentPage")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRouting.heading.programmatic")} />
                        <Paragraph text={t("docsRouting.paragraph.programmatic")} />
                        <Code
                            text={`<button onClick={() => navigate("/about")}>Go to About</button>`}
                        />
                        <Paragraph text={t("docsRouting.paragraph.programmatic2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRouting.heading.links")} />
                        <Paragraph text={t("docsRouting.paragraph.links")} />
                        <Code text={`<Link href="/about">About</Link>`} />
                        <Paragraph text={t("docsRouting.paragraph.links2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRouting.heading.dynamic")} />
                        <Paragraph text={t("docsRouting.paragraph.dynamic")} />
                        <Code
                            text={`const routes = {
  "/users/:id": UserProfile,
};`}
                        />
                        <Paragraph text={t("docsRouting.paragraph.useParams")} />
                        <Code
                            text={`const UserProfile = () => {
  const { id } = useParams();
  return <h1>Viewing profile for user {id}</h1>;
};`}
                        />
                        <Paragraph text={t("docsRouting.paragraph.useParams2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRouting.heading.tips")} />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">{t("docsRouting.list.useLink")}</li>
                            <li className="mb-2">{t("docsRouting.list.groupRoutes")}</li>
                            <li className="mb-2">{t("docsRouting.list.dynamicParams")}</li>
                            <li>{t("docsRouting.list.wrapRouter")}</li>
                        </ul>
                    </section>

                    <NextLink href="/docs" text={t("docsRouting.link.backOverview")} />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
