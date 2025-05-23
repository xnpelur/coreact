import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { LearnSidebar } from "@/app/components/learn-sidebar";

export function LearnRoutingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <LearnSidebar currentPage="routing" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Routing in Coreact</h1>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Introduction to Routing
                        </h2>
                        <p class="mb-4">
                            Routing allows you to navigate between different
                            components in your application, keeping the UI in
                            sync with the URL.
                        </p>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">Basic Routing</h2>
                        <p class="mb-4">
                            Coreact provides a simple way to handle routing
                            using the <code>Router</code> and <code>Route</code>{" "}
                            components.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`import { Router, Route } from 'coreact';
import Home from './pages/home';
import About from './pages/about';

function App() {
    return (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </Router>
    );
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">Navigation</h2>
                        <p class="mb-4">
                            Use the <code>Link</code> component to navigate
                            between routes without a full page reload.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`import { Link } from 'coreact';

function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}`}
                            </code>
                        </pre>
                    </section>

                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">
                            Route Parameters
                        </h2>
                        <p class="mb-4">
                            You can define dynamic segments in your routes using
                            the <code>:</code> syntax.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>
                                {`// In your router
<Route path="/users/:id" component={UserDetail} />

// Access the parameter in your component
function UserDetail({ params }) {
    const userId = params.id;
    // ...
}`}
                            </code>
                        </pre>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/learn"
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
