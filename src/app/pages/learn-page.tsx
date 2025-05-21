import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export function LearnPage(): VirtualNode {
    return (
        <div class="h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1">
                <main class="flex-1">
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-8">Learn Coreact</h1>

                        <section id="intro" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Introduction
                            </h2>
                            <p class="mb-4">
                                Welcome to the React documentation! This guide
                                will introduce you to the core concepts of React
                                that you'll use daily.
                            </p>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Creating and nesting components</li>
                                <li>Adding markup and styles</li>
                                <li>Displaying data</li>
                                <li>Rendering conditions and lists</li>
                                <li>Responding to events</li>
                                <li>Sharing data between components</li>
                            </ul>
                        </section>

                        <section id="components" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Creating Components
                            </h2>
                            <p class="mb-4">
                                React apps are made of components. A component
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

                        <section id="jsx" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Writing Markup with JSX
                            </h2>
                            <p class="mb-4">
                                JSX is a syntax extension for JavaScript that
                                looks like HTML. It’s commonly used in React and
                                requires tags to be closed properly. You can
                                only return one top-level element from a
                                component.
                            </p>
                        </section>

                        <section id="styles" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Adding Styles
                            </h2>
                            <p class="mb-4">
                                In React, use <code>className</code> instead of{" "}
                                <code>class</code> to add CSS classes. You can
                                style elements using regular CSS or inline
                                styles with JavaScript objects.
                            </p>
                        </section>

                        <section id="data-display" class="mb-16">
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

                        <section id="conditional-rendering" class="mb-16">
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

                        <section id="lists" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Rendering Lists
                            </h2>
                            <p class="mb-4">
                                Use JavaScript’s <code>map()</code> function to
                                transform arrays into lists of elements. Each
                                list item should have a unique <code>key</code>{" "}
                                prop to help React identify changes.
                            </p>
                        </section>

                        <section id="events" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">
                                Handling Events
                            </h2>
                            <p class="mb-4">
                                React lets you handle events using functions.
                                Pass the handler as a prop like{" "}
                                <code>onClick={`{handleClick}`}</code>. Do not
                                call the function—just pass the reference.
                            </p>
                        </section>

                        <section id="state" class="mb-16">
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

                        <section id="lifting-state" class="mb-16">
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

                        <section id="next-steps" class="mb-16">
                            <h2 class="text-2xl font-bold mb-4">Next Steps</h2>
                            <p class="mb-4">
                                Now that you know the basics, you can continue
                                learning by following the official tutorial or
                                building a small app to practice these concepts.
                            </p>
                        </section>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
}
