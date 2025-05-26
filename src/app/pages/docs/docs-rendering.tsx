import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { NextLink } from "@/app/components/text/next-link";
import { useTranslation } from "@/runtime/hooks/translation";

export function DocsRenderingPage(): VirtualNode {
    const { t } = useTranslation();
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="rendering" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text={t("docsRendering.heading.title")} />
                    <section class="mb-8">
                        <Paragraph text={t("docsRendering.paragraph.intro")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRendering.heading.definingComponents")} />
                        <Paragraph text={t("docsRendering.paragraph.definingComponents")} />
                        <Code
                            text={`const Button = () => {
  return <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>;
}`}
                        />
                        <Paragraph text={t("docsRendering.paragraph.noClassSyntax")} />
                        <Paragraph text={t("docsRendering.paragraph.nesting")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRendering.heading.conditionalRendering")} />
                        <Paragraph text={t("docsRendering.paragraph.conditionalRendering")} />
                        <Code
                            text={`const Welcome = ({ loggedIn }) => {
  return <div>{loggedIn ? "Welcome back!" : "Please sign in."}</div>;
};`}
                        />
                        <Paragraph text={t("docsRendering.paragraph.conditionalRendering2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRendering.heading.useState")} />
                        <Paragraph text={t("docsRendering.paragraph.useState")} />
                        <Code
                            text={`const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="text-center">
      <p class="mb-2">Count: {count}</p>
      <button class="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
                        />
                        <Paragraph text={t("docsRendering.paragraph.useState2")} />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text={t("docsRendering.heading.useEffect")} />
                        <Paragraph text={t("docsRendering.paragraph.useEffect")} />
                        <Code
                            text={`const Logger = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Input changed:", value);
  }, [value]);

  return <input value={value} onInput={e => setValue(e.target.value)} />;
};`}
                        />
                        <Paragraph text={t("docsRendering.paragraph.useEffect2")} />
                    </section>
                    <NextLink href="/docs/styling" text={t("docsRendering.link.nextStyling")} />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
