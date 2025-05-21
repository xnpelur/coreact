import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function PerformanceOptimizationPost(): VirtualNode {
    return (
        <div class="h-screen flex flex-col font-medium text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <div class="flex flex-wrap">
                                <div class="flex mb-3 mt-0.5 items-center">
                                    <a
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase me-1 hover:underline"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                    <span class="inline-block me-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    <a
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase me-1 hover:underline"
                                        href="/blog"
                                    >
                                        Blog
                                    </a>
                                    <span class="inline-block me-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase">
                                        Performance Optimization
                                    </span>
                                </div>
                            </div>

                            <header class="mb-12">
                                <h1 class="text-4xl font-bold mb-6">
                                    Optimizing Performance in Coreact
                                    Applications
                                </h1>
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>April 10, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            performance
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            optimization
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <div class="prose dark:prose-invert max-w-none">
                                <h2>Why Performance Matters</h2>
                                <p>
                                    Performance is a crucial aspect of user
                                    experience. Fast, responsive applications
                                    lead to higher user engagement, better
                                    conversion rates, and improved
                                    accessibility.
                                </p>

                                <h2>Code Splitting</h2>
                                <p>
                                    Split your code into smaller chunks that can
                                    be loaded on demand:
                                </p>
                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    {/* <pre class="m-0"><code>const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}</code></pre> */}
                                </div>

                                <h2>Memoization</h2>
                                <p>
                                    Use <code>useMemo</code> and{" "}
                                    <code>useCallback</code> to avoid
                                    unnecessary recalculations and re-renders:
                                </p>
                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    {/* <pre class="m-0"><code>const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b] // Only re-compute when a or b changes
);

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // Only re-create if a or b changes
);</code></pre> */}
                                </div>

                                <h2>List Virtualization</h2>
                                <p>
                                    For long lists, only render the items that
                                    are currently visible in the viewport:
                                </p>
                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    {/* <pre class="m-0"><code>import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const Example = () => (
  <List
    height={400}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);</code></pre> */}
                                </div>

                                <h2>Production Build</h2>
                                <p>
                                    Always use the production build when
                                    deploying to ensure optimal performance.
                                </p>
                            </div>

                            <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <a
                                    href="/blog"
                                    class="inline-flex items-center text-cyan-500 hover:underline"
                                >
                                    <span class="inline-block me-1 rtl:rotate-180">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="rotate-180"
                                        >
                                            <path
                                                d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                    Back to Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
