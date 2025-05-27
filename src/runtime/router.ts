import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { clearStoreSubscribers } from "@/runtime/store";

type RouteConfig = {
    path: string;
    component: (props: any) => VirtualNode;
    params?: Record<string, string>;
};

type RouterState = {
    routes: RouteConfig[];
    currentRoute: RouteConfig | null;
    notFoundComponent: ((props: any) => VirtualNode) | null;
};

const routerState: RouterState = {
    routes: [],
    currentRoute: null,
    notFoundComponent: null,
};

let isRouterInitialized = false;

/**
 * Creates a new router instance with specified routes and optional not found component.
 * This function initializes the router and sets up navigation handling.
 *
 * @param {Object} options - Router configuration options
 * @param {Array} options.routes - Array of route configurations
 * @param {string} options.routes.path - The path pattern for the route
 * @param {Function} options.routes.component - The component to render for this route
 * @param {Function} [options.notFound] - Optional component to render when no route matches
 */
export function createRouter(options: {
    routes: { path: string; component: (props: any) => VirtualNode }[];
    notFound?: (props: any) => VirtualNode;
}) {
    if (isRouterInitialized) {
        console.warn(
            "Router is already initialized. Skipping re-initialization."
        );
        return;
    }

    routerState.routes = options.routes;
    if (options.notFound) {
        routerState.notFoundComponent = options.notFound;
    }

    matchRoute(window.location.pathname);

    window.addEventListener("popstate", () => {
        matchRoute(window.location.pathname);
    });

    window.addEventListener("route-changed", () => {
        const event = new CustomEvent("router-update");
        window.dispatchEvent(event);
    });

    isRouterInitialized = true;
}

function matchRoute(path: string) {
    let matchedRoute = routerState.routes.find((route) => route.path === path);

    if (!matchedRoute) {
        for (const route of routerState.routes) {
            const dynamicSegments = route.path.match(/:\w+/g);

            if (dynamicSegments) {
                const pattern = route.path
                    .replace(/:\w+/g, "([^/]+)")
                    .replace(/\//g, "\\/");

                const regex = new RegExp(`^${pattern}$`);
                const match = path.match(regex);

                if (match) {
                    const params: Record<string, string> = {};

                    dynamicSegments.forEach((segment, index) => {
                        const paramName = segment.substring(1);
                        params[paramName] = match[index + 1];
                    });

                    matchedRoute = {
                        ...route,
                        params,
                    };
                    break;
                }
            }
        }
    }

    routerState.currentRoute = matchedRoute || null;

    window.dispatchEvent(new CustomEvent("route-changed"));
}

/**
 * Navigates to a new path in the application.
 * This function updates the browser's URL and triggers route matching.
 *
 * @param {string} path - The path to navigate to
 */
export function navigate(path: string) {
    window.history.pushState(null, "", path);
    matchRoute(path);
}

/**
 * Creates a link component that handles navigation when clicked.
 * This component is used to create clickable links that navigate between routes.
 *
 * @param {Object} props - Component props
 * @param {string} props.to - The destination path
 * @param {any} [props.children] - The content to display inside the link
 * @returns {VirtualNode} The created link component
 */
export function Link({
    href,
    children,
    ...props
}: {
    href: string;
    children?: any;
    [key: string]: any;
}): VirtualNode {
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        navigate(href);
    };

    return createElement(
        "a",
        { href, onClick: handleClick, ...props },
        ...children
    );
}

/**
 * Returns the current route's parameters.
 * This function is used to access route parameters in components.
 *
 * @returns {Object} The current route's parameters
 */
export function useParams(): object {
    return routerState.currentRoute?.params || {};
}

/**
 * Renders the current route's component or the not found component if no route matches.
 * This component is used to render the current route's content.
 *
 * @returns {VirtualNode} The rendered component
 */
export function Router(): VirtualNode {
    let vnode: VirtualNode;
    if (routerState.currentRoute) {
        vnode = createElement(
            routerState.currentRoute.component,
            routerState.currentRoute.params || {}
        );
    } else if (routerState.notFoundComponent) {
        vnode = createElement(routerState.notFoundComponent, {});
    } else {
        vnode = createElement("div", {}, "Page not found");
    }

    clearStoreSubscribers();

    return vnode;
}
