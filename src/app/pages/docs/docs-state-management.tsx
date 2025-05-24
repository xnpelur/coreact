import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { NextLink } from "@/app/components/text/next-link";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";

export function DocsStateManagementPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="state-management" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="State Management" />
                    <section class="mb-8">
                        <Paragraph text="While useState is great for managing local, per-component data, real-world applications often need global state—data that needs to be accessed and updated across multiple, possibly unrelated components." />
                    </section>
                    <section class="mb-8">
                        <Heading level={2} text="Why Global State?" />
                        <Paragraph text="Consider the following scenarios:" />
                        <ul class="list-disc list-inside mb-4">
                            <li class="mb-2">
                                Opening a sidebar from a button in the header
                                and closing it from within the sidebar itself.
                            </li>
                            <li class="mb-2">
                                Managing user authentication state across
                                multiple components.
                            </li>
                            <li>
                                Maintaining shopping cart contents while
                                navigating between pages.
                            </li>
                        </ul>
                        <Paragraph text="Managing this with prop drilling or lifting state becomes complex and error-prone. This is where the framework’s store-based state management comes in." />
                    </section>
                    <section class="mb-8">
                        <Heading level={2} text="Creating a Store" />
                        <Paragraph text="You can define a reactive global state with `createStore`:" />
                        <Code
                            text={`export const useTheme = createStore("light");`}
                        />
                        <Paragraph text="Then use it inside any component:" />
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
                        <Paragraph text="The store acts like a shared useState. Any component that calls the store hook automatically re-renders when the value changes." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Best Practices" />
                        <ul class="list-disc list-inside mb-4">
                            <li class="mb-2">
                                Use global state for application-wide data, not
                                per-component UI.
                            </li>
                            <li class="mb-2">
                                Keep stores small and focused. A useUser() store
                                for auth, useCart() for ecommerce, etc.
                            </li>
                            <li>
                                Wrap store logic in custom hooks if you need
                                derived state, memoization, or actions.
                            </li>
                        </ul>
                    </section>

                    <NextLink href="/docs/routing" text="Next: Routing" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
