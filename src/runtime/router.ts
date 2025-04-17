import { createElement, VirtualNode } from "./jsx-runtime";

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

export function navigate(path: string) {
    window.history.pushState(null, "", path);
    matchRoute(path);
}

export function Link({
    to,
    children,
    ...props
}: {
    to: string;
    children?: any;
    [key: string]: any;
}) {
    console.log(to, children);
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        navigate(to);
    };

    return createElement(
        "a",
        { href: to, onClick: handleClick, ...props },
        ...children
    );
}

export function Router() {
    window.addEventListener("route-changed", () => {
        const event = new CustomEvent("router-update");
        window.dispatchEvent(event);
    });

    if (routerState.currentRoute) {
        return createElement(
            routerState.currentRoute.component,
            routerState.currentRoute.params || {}
        );
    } else if (routerState.notFoundComponent) {
        return createElement(routerState.notFoundComponent, {});
    }

    return createElement("div", {}, "Page not found");
}

export function useParams() {
    return routerState.currentRoute?.params || {};
}
