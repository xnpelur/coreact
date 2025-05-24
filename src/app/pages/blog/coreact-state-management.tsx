import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Link } from "@/runtime/router";

export function CoreactStateManagementPost(): VirtualNode {
    return (
        <div class="min-h-screen flex flex-col text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <article class="text-primary dark:text-primary-dark flex-1 mt-12">
                <div class="ps-0">
                    <div class="px-5 sm:px-12 pt-3.5">
                        <div class="max-w-4xl ms-0 2xl:mx-auto">
                            <div class="flex flex-wrap">
                                <div class="flex mb-3 mt-0.5 items-center">
                                    <Link
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                    <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
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
                                    <Link
                                        class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                                        href="/blog"
                                    >
                                        Blog
                                    </Link>
                                    <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
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
                                        State Management in Coreact
                                    </span>
                                </div>
                            </div>

                            <header class="mb-12">
                                <h1 class="text-4xl font-bold mb-6">
                                    State Management in Coreact: Simple,
                                    Scalable, and Efficient
                                </h1>
                                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <time>May 22, 2025</time>
                                    <span class="mx-2">•</span>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            state
                                        </span>
                                        <span class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                                            framework
                                        </span>
                                    </div>
                                </div>
                            </header>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Coreact's Approach to State Management
                                </h2>
                                <p class="mb-6">
                                    Coreact offers a flexible and intuitive
                                    state management system that scales from
                                    simple component state to complex
                                    application-wide state. Let's explore the
                                    different ways to manage state in Coreact
                                    applications.
                                </p>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    1. Local Component State
                                </h3>
                                <p class="mb-6">
                                    The foundation of state management in
                                    Coreact is the{" "}
                                    <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                                        useState
                                    </code>{" "}
                                    hook, which provides a simple way to manage
                                    local component state.
                                </p>

                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    <pre class="m-0">
                                        <code class="text-sm">
                                            {`// Simple counter component using useState
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>
                Increment
            </button>
        </div>
    );
}`}
                                        </code>
                                    </pre>
                                </div>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    2. Custom Hooks for State Logic
                                </h3>
                                <p class="mb-6">
                                    Extract and reuse stateful logic with custom
                                    hooks. This keeps your components clean and
                                    your logic reusable.
                                </p>

                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    <pre class="m-0">
                                        <code class="text-sm">
                                            {`// Custom hook for form state
function useForm(initialState) {
    const [values, setValues] = useState(initialState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    return [values, handleChange];
}

// Usage in component
function UserForm() {
    const [formData, handleChange] = useForm({
        username: '',
        email: ''
    });
    
    // ... rest of component
}`}
                                        </code>
                                    </pre>
                                </div>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    3. Global State with createStore
                                </h3>
                                <p class="mb-6">
                                    For application-wide state, Coreact provides
                                    a simple yet powerful{" "}
                                    <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                                        createStore
                                    </code>{" "}
                                    function that creates a global state
                                    container with a React-like hook interface.
                                </p>

                                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6">
                                    <pre class="m-0">
                                        <code class="text-sm">
                                            {`// Create a global store
const useAuthStore = createStore({
    user: null,
    isAuthenticated: false,
    token: null
});

// In your login component
function LoginForm() {
    const [auth, setAuth] = useAuthStore();
    
    const handleLogin = async (credentials) => {
        const response = await loginUser(credentials);
        setAuth({
            user: response.user,
            isAuthenticated: true,
            token: response.token
        });
    };
    
    // ... rest of component
}

// Anywhere in your app
function UserProfile() {
    const [auth] = useAuthStore();
    
    if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
    }
    
    return <div>Welcome, {auth.user.name}!</div>;
}`}
                                        </code>
                                    </pre>
                                </div>

                                <h3 class="text-xl font-semibold mt-8 mb-4">
                                    4. Optimizing Performance
                                </h3>
                                <p class="mb-6">
                                    Coreact's state management is optimized for
                                    performance. State updates are batched, and
                                    components only re-render when their
                                    specific state dependencies change.
                                </p>
                            </section>

                            <section class="mb-16">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Best Practices
                                </h2>
                                <div>
                                    <div>
                                        <h3 class="text-xl font-semibold mb-2">
                                            1. Start Local, Then Lift State Up
                                        </h3>
                                        <p>
                                            Begin with local component state.
                                            Only lift state up when multiple
                                            components need access to the same
                                            data.
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <h3 class="text-xl font-semibold mb-2">
                                            2. Use Multiple Stores
                                        </h3>
                                        <p>
                                            Instead of one large store, create
                                            multiple smaller stores for
                                            different domains of your
                                            application.
                                        </p>
                                    </div>

                                    <div class="mt-6">
                                        <h3 class="text-xl font-semibold mb-2">
                                            3. Memoize Derived State
                                        </h3>
                                        <p>
                                            Use memoization for expensive
                                            calculations that depend on your
                                            state.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <Link
                                    href="/blog"
                                    class="inline-flex items-center text-cyan-500 hover:underline"
                                >
                                    <span class="inline-block mr-1 rtl:rotate-180">
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
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
