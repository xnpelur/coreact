import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";

export function DocsStylingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="styling" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Styling" />
                    <section class="mb-8">
                        <Paragraph text="The styling module provides a utility-first approach to styling components, inspired by Tailwind CSS. You define styles directly in the class attribute of your JSX elements using descriptive utility classes." />
                        <Heading level={2} text="Basic Usage" />
                        <Code
                            text={`<div class="text-xl font-bold text-center text-blue-600">
  Hello, styled world!
</div>`}
                        />
                        <Heading level={2} text="Utility Class Examples" />
                        <Code
                            text={`<button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
  Submit
</button>`}
                        />
                        <Heading level={2} text="Responsive Design" />
                        <Code
                            text={`<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-gray-100 p-4">Sidebar</div>
  <div class="flex-3 bg-white p-4">Content</div>
</div>`}
                        />
                        <Paragraph text="On small screens, the elements stack vertically. On medium screens and up, they lay out side by side." />
                    </section>
                    <NextLink
                        href="/docs/state-management"
                        text="Next: State Management"
                    />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
