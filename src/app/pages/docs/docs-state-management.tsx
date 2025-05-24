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
                        <Paragraph text="Managing local component state with `useState` works well for isolated logic. However, as your app grows, sharing state between components becomes critical. That’s where the global state management module comes in." />
                        <Heading level={2} text="Creating a Store" />
                        <Code
                            text={`export const useTheme = createStore("light");

const ThemeToggle = () => {
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
                        <Heading level={2} text="Why Global State?" />
                        <Paragraph
                            text="Global state is ideal for data that needs to be
                            accessed and updated across multiple parts of the
                            app: user auth, cart contents, theme mode, sidebar
                            toggles, etc."
                        />
                        <Paragraph
                            text="Example use case: opening a sidebar from a button in
                            the header and closing it from within the sidebar
                            itself. Doing this with <code>useState</code> would
                            require lifting state up and passing it down
                            multiple levels. With <code>createStore</code>, it
                            takes one line to subscribe anywhere in the app."
                        />
                    </section>
                    <NextLink href="/docs/routing" text="Next: Routing" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
