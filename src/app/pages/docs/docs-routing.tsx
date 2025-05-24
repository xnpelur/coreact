import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";

export function DocsRoutingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="routing" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Routing" />
                    <section class="mb-8">
                        <Paragraph
                            text="The routing module lets you build single-page
                            applications (SPAs) with seamless navigation and
                            clean URLs."
                        />
                        <Heading level={2} text="How Routing Works" />
                        <Paragraph
                            text="Routing is handled on the client side using the
                            History API. It watches the current URL and renders
                            the corresponding component from your route table."
                        />
                        <Heading level={2} text="API Reference" />
                        <Code
                            text={`const routes = {
  "/": Home,
  "/about": About,
  "/users/:id": UserProfile,
};

const CurrentPage = createRouter(routes);`}
                        />
                        <Paragraph
                            text="Use `CurrentPage` as a component inside
                            your main layout to display the active view."
                        />
                        <Code
                            text={`<button onClick={() => navigate("/about")}>Go to About</button>`}
                        />
                        <Paragraph
                            text="This updates the URL and rerenders without reloading
                            the page."
                        />
                    </section>
                    <NextLink href="/docs" text="Back to Overview" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
