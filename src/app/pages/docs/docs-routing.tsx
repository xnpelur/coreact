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
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4">
                <DocsSidebar currentPage="routing" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Routing" />
                    <section class="mb-8">
                        <Paragraph text="Routing is a foundational feature for any single-page application (SPA). It allows you to navigate between pages, preserve application state, and deliver fast, seamless user experiences without full page reloads. This framework includes a lightweight, powerful routing system designed to be simple to use and flexible enough for real-world applications." />
                    </section>

                    <section class="mb-8">
                        <Heading
                            level={2}
                            text="What is Client-Side Routing?"
                        />
                        <Paragraph text="Unlike traditional websites where navigation triggers a full page reload, client-side routing updates the browser’s URL and dynamically renders the corresponding component — all within the same page. This keeps your app fast and interactive." />
                        <Paragraph text="For example, when a user clicks a link to `/about`, your app doesn’t reload the entire page. Instead, the router updates the browser's history and swaps out the component tree." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Defining Routes" />
                        <Paragraph text="To get started with routing, define a route table that maps URL paths to components. This route table acts as the blueprint for your application’s navigation:" />
                        <Code
                            text={`const routes = {
  "/": Home,
  "/about": About,
  "/users/:id": UserProfile,
};`}
                        />
                        <Paragraph text="Then use createRouter() to create a reactive router instance that listens for changes and renders the appropriate page:" />
                        <Code
                            text={`const CurrentPage = createRouter(routes);`}
                        />
                        <Paragraph text="Place <CurrentPage /> wherever you want your routed views to appear — usually within your main layout component." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Navigating Programmatically" />
                        <Paragraph text="You can trigger navigation from anywhere in your app using the navigate() function. This is useful for form submissions, button clicks, or redirect logic after an action:" />
                        <Code
                            text={`<button onClick={() => navigate("/about")}>Go to About</button>`}
                        />
                        <Paragraph text="This updates the URL and renders the new route without a reload. It's fast and maintains the state of other components." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Navigation Links" />
                        <Paragraph text="For standard navigation between pages, use the built-in `Link` component. This works similarly to an `<a>` tag but uses the framework's internal routing to avoid full reloads." />
                        <Code text={`<Link href="/about">About</Link>`} />
                        <Paragraph text="`Link` ensures that the browser history is updated correctly, scroll positions are preserved, and transitions feel instant. It's the preferred way to build menus, tab bars, and inline navigation." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Dynamic Parameters" />
                        <Paragraph text="Sometimes, you'll want to match routes with variable segments — for example, viewing a user profile by ID. You can define dynamic paths like this:" />
                        <Code
                            text={`const routes = {
  "/users/:id": UserProfile,
};`}
                        />
                        <Paragraph text="To access the `:id` parameter inside the `UserProfile` component, use the `useParams()` hook:" />
                        <Code
                            text={`const UserProfile = () => {
  const { id } = useParams();
  return <h1>Viewing profile for user {id}</h1>;
};`}
                        />
                        <Paragraph text="This makes it easy to build pages like `/products/:slug`, `/posts/:id`, or any route that depends on dynamic input." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Tips for Effective Routing" />
                        <ul class="list-disc list-inside mb-4">
                            <li className="mb-2">
                                Always use the `Link` component instead of{" "}
                                {"`<a>`"} for internal navigation.
                            </li>
                            <li className="mb-2">
                                Group related routes and components logically to
                                keep code organized.
                            </li>
                            <li className="mb-2">
                                Use dynamic parameters sparingly and validate
                                them if pulling from external data.
                            </li>
                            <li>
                                Wrap your router in layout components to
                                maintain consistent structure across pages.
                            </li>
                        </ul>
                    </section>

                    <NextLink href="/docs" text="Back to Overview" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
