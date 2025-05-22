import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function LearnPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1">
                <main class="flex-1">
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold">Learn Coreact</h1>

                        <section id="intro" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Introduction
                            </h2>
                            <p class="mb-4">
                                Welcome to the Coreact documentation! This guide
                                will introduce you to the core concepts of
                                Coreact that you'll use daily.
                            </p>
                            <ul class="list-disc list-inside">
                                <li>
                                    <a href="#components">
                                        Creating and nesting components
                                    </a>
                                </li>
                                <li class="mt-1">
                                    <a href="#jsx">Adding markup and styles</a>
                                </li>
                                <li class="mt-1">
                                    <a href="#data-display">Displaying data</a>
                                </li>
                                <li class="mt-1">
                                    <a href="#conditional-rendering">
                                        Rendering conditions
                                    </a>
                                </li>
                                <li class="mt-1">
                                    <a href="#events">Responding to events</a>
                                </li>
                                <li class="mt-1">
                                    <a href="#lifting-state">
                                        Sharing data between components
                                    </a>
                                </li>
                            </ul>
                        </section>

                        <section id="components" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Creating Components
                            </h2>
                            <p class="mb-4">
                                Coreact apps are made of components. A component
                                is a piece of UI that has its own logic and
                                appearance. Components are JavaScript functions
                                that return markup.
                            </p>
                            <p class="mb-4">
                                Component names must start with a capital
                                letter. You can nest components inside others to
                                build complex interfaces.
                            </p>
                        </section>

                        <section id="jsx" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Writing Markup with JSX
                            </h2>
                            <p class="mb-4">
                                JSX is a syntax extension for JavaScript that
                                looks like HTML. It’s commonly used in Coreact
                                and requires tags to be closed properly. You can
                                only return one top-level element from a
                                component.
                            </p>
                        </section>

                        <section id="styles" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Adding Styles
                            </h2>
                            <p class="mb-4">
                                In Coreact, you can use both{" "}
                                <code>className</code> and <code>class</code> to
                                add CSS classes. You can style elements using
                                regular CSS or inline styles with JavaScript
                                objects.
                            </p>
                        </section>

                        <section id="data-display" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Displaying Data
                            </h2>
                            <p class="mb-4">
                                Use curly braces <code>{}</code> in JSX to embed
                                JavaScript expressions. This is useful for
                                displaying variables or calling functions inside
                                your markup.
                            </p>
                        </section>

                        <section id="conditional-rendering" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Conditional Rendering
                            </h2>
                            <p class="mb-4">
                                You can use regular JavaScript conditionals like{" "}
                                <code>if</code> statements or the ternary{" "}
                                <code>?</code> operator to conditionally render
                                JSX elements.
                            </p>
                            <p class="mb-4">
                                You can also use logical <code>&&</code> to
                                render content only when a condition is true.
                            </p>
                        </section>

                        <section id="events" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Handling Events
                            </h2>
                            <p class="mb-4">
                                Coreact lets you handle events using functions.
                                Pass the handler as a prop like{" "}
                                <code>onClick={`{handleClick}`}</code>. Do not
                                call the function — just pass the reference.
                            </p>
                        </section>

                        <section id="state" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                State and Updating the UI
                            </h2>
                            <p class="mb-4">
                                State lets components remember information. Use
                                the <code>useState</code> Hook to declare state
                                and update it with a setter function. When state
                                changes, the component re-renders.
                            </p>
                            <p class="mb-4">
                                Each instance of a component gets its own state.
                            </p>
                        </section>

                        <section id="lifting-state" class="pt-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Sharing State Between Components
                            </h2>
                            <p class="mb-4">
                                When multiple components need to share state,
                                move the state up to their closest common
                                ancestor. Pass the shared state and its updater
                                as props.
                            </p>
                            <p class="mb-4">
                                This pattern is called “lifting state up.”
                            </p>
                        </section>

                        <section id="next-steps" class="pt-16 pb-8">
                            <h2 class="text-2xl font-bold mb-4">Next Steps</h2>
                            <p class="mb-4">
                                Now that you know the basics, you can continue
                                learning by building a small app to practice
                                these concepts.
                            </p>
                        </section>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
