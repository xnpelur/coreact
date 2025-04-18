# Framework

A lightweight, React-like framework implemented in TypeScript.

## Features

-   **JSX Support**: Write components using familiar JSX syntax
-   **Virtual DOM**: Efficient DOM manipulation with reconciliation
-   **State Management**: Component-level state with useState hook
-   **Hooks**: Custom hooks for managing component behavior
-   **Router**: Client-side routing with dynamic routes
-   **Effects**: Side effects management with useEffect
-   **Global State**: Store-based global state management

## Project Structure

```
framework/
├── src/
│   ├── app/           # Application components and pages
│   └── runtime/       # Framework core implementation
│       ├── dom.ts     # DOM operations and mounting
│       ├── effect.ts  # Side effects management
│       ├── jsx-runtime.ts  # JSX implementation
│       ├── reconciliation.ts  # Virtual DOM reconciliation
│       ├── router.ts  # Routing implementation
│       ├── state.ts   # Component state management
│       └── store.ts   # Global state management
├── dist/              # Build output
├── index.html         # Entry point
└── package.json       # Project dependencies
```

## Getting Started

### Prerequisites

-   Node.js (latest LTS version recommended)
-   npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:

```bash
npm run dev
```

This will start a development server with hot module replacement.

### Building

To build the project for production:

```bash
npm run build
```

### Testing

Run tests:

```bash
npm test
```

## Core Concepts

### Components

Components are the building blocks of the framework.

```typescript
// Functional component example
function MyComponent(props: { message: string }) {
    return <div>{props.message}</div>;
}
```

### State Management

Use the `useState` hook to manage component state:

```typescript
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

### Routing

Set up routing using the `createRouter` function:

```typescript
createRouter({
    routes: [
        { path: "/home", component: HomePage },
        { path: "/about", component: AboutPage },
        { path: "/user/:id", component: UserProfile },
    ],
});
```

### Global State

Use `createStore` to manage global state:

```typescript
const useUserStore = createStore({
    user: null,
    isLoggedIn: false,
});

function UserProfile() {
    const [user, setUser] = useUserStore();
    // ...
}
```

## Development Tools

-   **TypeScript**: For type safety and better development experience
-   **Vite**: For fast development server and build tool
-   **Vitest**: For testing
-   **JSDOM**: For DOM testing in Node.js
