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
                        <Heading level={2} text="Installation" />
                        <Paragraph text="A component is a JavaScript (or TypeScript) function that returns JSX. It's a reusable building block that defines how your interface should look and" />
                        <Code
                            text={`const Button = () => {
  return <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>;
}`}
                        />
                        <Paragraph text="You can reuse components and compose them to build complex interfaces. There is no special class or API required—just plain functions and JSX." />
                        <Heading level={2} text="Conditional Rendering" />
                        <Code
                            text={`const Welcome = ({ loggedIn }) => {
  return <div>{loggedIn ? "Welcome back!" : "Please sign in."}</div>;
};`}
                        />
                        <Paragraph text="This keeps your templates clean and concise, without requiring special syntax." />
                        <Heading level={2} text="useState Hook" />
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
                        <Paragraph text="This simple pattern is the foundation for interactive UI elements. You can create as many state variables as needed inside a component." />
                        <Heading level={2} text="useEffect Hook" />
                        <Code
                            text={`const Logger = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Input changed:", value);
  }, [value]);

  return <input value={value} onInput={e => setValue(e.target.value)} />;
};`}
                        />
                        <Paragraph text="The second argument to useEffect is a dependency array. The effect runs every time the dependencies change. In this case, the message will be logged every time value is updated." />
                    </section>
                    <NextLink href="/docs/styling" text="Next: Styling" />
                </main>
                <div class="flex-1 hidden 2xl:block max-w-80"></div>
            </div>
            <Footer />
        </div>
    );
}
