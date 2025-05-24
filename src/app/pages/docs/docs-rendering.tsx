import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";
import { Heading } from "@/app/components/text/heading";
import { Paragraph } from "@/app/components/text/paragraph";
import { Code } from "@/app/components/text/code";
import { NextLink } from "@/app/components/text/next-link";

export function DocsRenderingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="rendering" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <Heading level={1} text="Rendering" />
                    <section class="mb-8">
                        <Paragraph text="The rendering module is the heart of the framework. It allows you to write components in a declarative style using JSX, making your UI logic expressive and intuitive." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Defining Components" />
                        <Paragraph text="A component is a JavaScript (or TypeScript) function that returns JSX. It's a reusable building block that defines how your interface should look and behave" />
                        <Code
                            text={`const Button = () => {
  return <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>;
}`}
                        />
                        <Paragraph text="There is no class-based syntax or complex lifecycle model. Just write functions that describe UI elements." />
                        <Paragraph text="Components can be nested, passed props, or conditionally rendered. If you've used React, you'll feel right at home." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="Conditional Rendering" />
                        <Paragraph text="Conditional rendering is useful for toggling UI content based on application logic, user actions, or state changes." />
                        <Code
                            text={`const Welcome = ({ loggedIn }) => {
  return <div>{loggedIn ? "Welcome back!" : "Please sign in."}</div>;
};`}
                        />
                        <Paragraph text="This lets you show or hide sections of your app without managing display styles manually. It's especially useful for authentication flows, loading indicators, and UI personalization." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="useState Hook" />
                        <Paragraph text="The `useState` hook is the simplest way to add interactivity to your components. It returns a state value and a setter to update it." />
                        <Code
                            text={`const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="text-center">
      <p class="mb-2">Count: {count}</p>
      <button class="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}
                        />
                        <Paragraph text="Each time you call setCount, the component re-renders with the new value. This makes useState ideal for tracking local UI values like form inputs, toggle switches, or counters." />
                    </section>

                    <section class="mb-8">
                        <Heading level={2} text="useEffect Hook" />
                        <Paragraph text="The useEffect hook lets you perform side effects after a component renders. This includes tasks like fetching data, logging to the console, or interacting with the browser DOM" />
                        <Code
                            text={`const Logger = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Input changed:", value);
  }, [value]);

  return <input value={value} onInput={e => setValue(e.target.value)} />;
};`}
                        />
                        <Paragraph text="The hook runs after every render where dependencies (in this case value) change. Effects are isolated from rendering, so you can cleanly manage asynchronous behavior without blocking the UI." />
                    </section>
                    <NextLink href="/docs/styling" text="Next: Styling" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
