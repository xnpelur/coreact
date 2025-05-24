import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsStateManagementPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="state-management" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">State Management</h1>
                    <section class="mb-8">
                        <p class="mb-4">
                            Managing local component state with{" "}
                            <code>useState</code> works well for isolated logic.
                            However, as your app grows, sharing state between
                            components becomes critical. That’s where the global
                            state management module comes in.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            Creating a Store
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`export const useTheme = createStore("light");

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Theme: {theme}</button>
  );
};`}</code>
                        </pre>
                        <h2 class="text-xl font-semibold mb-2">
                            Why Global State?
                        </h2>
                        <p class="mb-4">
                            Global state is ideal for data that needs to be
                            accessed and updated across multiple parts of the
                            app: user auth, cart contents, theme mode, sidebar
                            toggles, etc.
                        </p>
                        <p class="mb-4">
                            Example use case: opening a sidebar from a button in
                            the header and closing it from within the sidebar
                            itself. Doing this with <code>useState</code> would
                            require lifting state up and passing it down
                            multiple levels. With <code>createStore</code>, it
                            takes one line to subscribe anywhere in the app.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs/routing"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Next: Routing
                            <svg
                                class="w-5 h-5 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
