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
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="styling" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Styling" />
                    <section class="mb-8">
                        <Paragraph text="Styling in this framework is powered by a utility-first system inspired by Tailwind CSS. It enables developers to write expressive, low-overhead styles directly in their JSX without the need for writing or maintaining separate CSS files." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Why Utility-First Styling?" />
                        <Paragraph text="Traditional CSS often requires you to create and manage dozens of unique class names, maintain large stylesheets, and constantly context-switch between markup and style definitions. Utility-first CSS solves this by letting you compose styles inline using standardized utility classes." />
                        <Paragraph text="Instead of this:" />
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
                        <Paragraph text="You can write this:" />
                        <Code
                            text={`<div class="text-xl font-bold text-center text-blue-600">
  Hello, styled world!
</div>`}
                        />
                        <Paragraph text="The result? Less mental overhead, smaller CSS bundles, and lightning-fast styling iterations." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Common Utility Classes" />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">
                                <span class="font-semibold">Typography</span>:
                                text-sm, text-lg, font-semibold, leading-tight
                            </li>
                            <li className="mb-2">
                                <span class="font-semibold">Color</span>:
                                text-blue-600, bg-gray-100, hover:bg-blue-700,
                                border-red-500
                            </li>
                            <li className="mb-2">
                                <span class="font-semibold">Spacing</span>: m-4,
                                mt-2, px-6, gap-4
                            </li>
                            <li className="mb-2">
                                <span class="font-semibold">Layout</span>: flex,
                                grid, items-center, justify-between
                            </li>
                            <li>
                                <span class="font-semibold">Effects</span>:
                                shadow, rounded, hover:scale-105, transition
                            </li>
                        </ul>

                        <Paragraph text="You can combine these to build custom interfaces without writing any custom CSS:" />
                        <Code
                            text={`<button class="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
  Save Changes
</button>`}
                        />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Responsive Design" />
                        <Paragraph text="By default, utility classes apply to all screen sizes. You can prefix them with breakpoints for responsive behavior:" />
                        <Code
                            text={`<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1 bg-gray-100 p-4">Sidebar</div>
  <div class="flex-3 bg-white p-4">Content</div>
</div>`}
                        />
                        <Paragraph text="This will display a vertical stack on mobile and switch to horizontal layout on medium and larger screens." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Theming and Defaults" />
                        <Paragraph text="Default styles are preloaded from `/src/styles` and include:" />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">
                                CSS Preflight (reset styles)
                            </li>
                            <li>
                                Root theme variables (colors, spacing, fonts)
                            </li>
                        </ul>
                        <Paragraph text="These can be customized or extended to reflect your brand identity or design system." />
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
