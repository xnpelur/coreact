import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import { DocsSidebar } from "@/app/components/docs-sidebar";

export function DocsRenderingPage(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <div class="flex flex-1 pt-4 justify-between">
                <DocsSidebar currentPage="rendering" />
                <main class="flex-2 max-w-4xl px-8 pt-2 mx-auto">
                    <h1 class="text-4xl font-bold mb-8">Rendering</h1>
                    <section class="mb-8">
                        <p class="mb-4">
                            The rendering module is the heart of the framework.
                            It allows you to write components in a declarative
                            style using JSX, making your UI logic expressive and
                            intuitive.
                        </p>
                        <h2 class="text-2xl font-bold mb-4">Installation</h2>
                        <p class="mb-4">
                            A component is a JavaScript (or TypeScript) function
                            that returns JSX. It's a reusable building block
                            that defines how your interface should look and
                            behave.
                        </p>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const Button = () => {
  return <button class="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>;
};`}</code>
                        </pre>
                        <p class="mb-4">
                            You can reuse components and compose them to build
                            complex interfaces. There is no special class or API
                            required—just plain functions and JSX.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            Conditional Rendering
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const Welcome = ({ loggedIn }) => {
  return <div>{loggedIn ? "Welcome back!" : "Please sign in."}</div>;
};`}</code>
                        </pre>
                        <p class="mb-4">
                            This keeps your templates clean and concise, without
                            requiring special syntax.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            useState Hook
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div class="text-center">
      <p class="mb-2">Count: {count}</p>
      <button class="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`}</code>
                        </pre>
                        <p class="mb-4">
                            This simple pattern is the foundation for
                            interactive UI elements. You can create as many
                            state variables as needed inside a component.
                        </p>
                        <h2 class="text-xl font-semibold mb-2">
                            useEffect Hook
                        </h2>
                        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-base mb-4">
                            <code>{`const Logger = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Input changed:", value);
  }, [value]);

  return <input value={value} onInput={e => setValue(e.target.value)} />;
};`}</code>
                        </pre>
                        <p>
                            The second argument to useEffect is a dependency
                            array. The effect runs every time the dependencies
                            change. In this case, the message will be logged
                            every time value is updated.
                        </p>
                    </section>

                    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <a
                            href="/docs/styling"
                            class="inline-flex items-center text-cyan-500 hover:underline"
                        >
                            Next: Styling
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
