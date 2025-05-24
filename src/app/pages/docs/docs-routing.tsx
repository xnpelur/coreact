import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsRoutingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="routing" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Routing</h1>
                    <section class="mb-8">
                        <p class="mb-4">
                            The routing module lets you build single-page
                            applications (SPAs) with seamless navigation and
                            clean URLs.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            How Routing Works
                        </h2>
                        <p class="mb-4">
                            Routing is handled on the client side using the
                            History API. It watches the current URL and renders
                            the corresponding component from your route table.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            API Reference
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const routes = {
  "/": Home,
  "/about": About,
  "/users/:id": UserProfile,
};

const CurrentPage = createRouter(routes);`}</code>
                        </pre>
                        <p class="mb-4">
                            Use <code>CurrentPage</code> as a component inside
                            your main layout to display the active view.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`<button onClick={() => navigate("/about")}>Go to About</button>`}</code>
                        </pre>
                        <p class="mb-4">
                            This updates the URL and rerenders without reloading
                            the page.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">useParams()</h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const UserProfile = () => {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
};`}</code>
                        </pre>
                        <p>
                            Perfect for pages like <code>/users/:id</code>,{" "}
                            <code>/posts/:slug</code>, and more.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Back to Overview
                            <svg
                                class="w-5 h-5 ml-1 transform rotate-180"
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
