English | [Русский](README.ru.md)

# Coreact

Coreact is a modern frontend framework using TypeScript and Vite for high-performance, scalable, and maintainable UIs.

Experience Coreact firsthand and explore its capabilities through the live **[Demo](https://coreact-five.vercel.app/)**.

## Core Philosophy

-   **Developer Experience:** Fast builds (HMR), modular architecture.
-   **Performance:** Efficient VDOM, lazy loading, optimized builds.
-   **Modularity:** Clear separation of concerns.
-   **Modern Tooling:** TypeScript & Vite.

## Key Features

### Rendering (Inspired by React)

-   **JSX Syntax:** UI description, transpiled by esbuild/Vite.
-   **DOM Layer:** Manages real DOM elements.
-   **JSX Runtime:** Interprets JSX for HTML tags, components, fragments.
-   **Reconciliation:** Diffs virtual trees for efficient DOM updates.
-   **Component Context:** Uniquely identifies component instances for state and hook management.

### Hooks (Inspired by React)

-   **`useState(initialState)`:** Local component state. Returns `[state, setState]`.
-   **`useEffect(effectFn, dependencies?)`:** Side effects management. Optional cleanup function.
-   **`useTranslation()`:** Internationalization. Returns `[t, language, setLanguage]`. Translations registered via `registerTranslations()`.

### State Management

-   **Local State:** Via `useState` hook (React-inspired).
-   **Global State (Inspired by Zustand):** `createStore(initialState)` returns a hook for shared global state.

### Routing (Inspired by React Router)

-   **`createRouter(routes, fallbackComponent)`:** SPA routing component.
-   **Browser History API:** Integrated for back/forward navigation.
-   **Dynamic Routes:** Supports path parameters.
-   **`Link` Component:** Optimized client-side navigation, preventing full page reloads.

### Styling (Inspired by Tailwind CSS)

-   **Utility-First CSS:** Tailwind-like classes in JSX.
-   **Vite Plugin:** Generates `generated.css` from used utility classes.
-   **Responsive Design:** Breakpoint prefixes.
-   **Pseudo-classes & Dark Mode:** Supported via prefixes/modifiers.
-   **Theming:** CSS variables for dynamic theming.
-   **Preflight Styles:** Base style reset included.

## Project Structure

-   `src/main.ts`: Application entry point.
-   `src/app/`: User application code.
-   `src/runtime/`: Framework core (VDOM, rendering, state, routing, hooks).
-   `src/styles/`: Base styles and theme variables.

## Getting Started

### Prerequisites

-   Node.js (LTS version recommended)
-   A JavaScript package manager (e.g., npm, yarn, pnpm, bun)
-   Git

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/xnpelur/coreact.git
    cd coreact
    ```

2.  **Install dependencies** (using your preferred package manager):
    ```bash
    npm install
    ```

### Development

Start the development server with Hot Module Replacement (using your preferred package manager):

```bash
npm run dev
```

The application will typically be available at `http://localhost:5173` (this port might vary depending on Vite's configuration or availability).

### Building for Production

To create an optimized production build (using your preferred package manager):

```bash
npm run build
```

The output will be in the `dist/` directory.
