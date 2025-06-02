/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createElement } from "@/runtime/jsx-runtime";
import { mount, unmount } from "@/runtime/dom";
import { clearState } from "@/runtime/hooks/state";

let createRouter: typeof import("@/runtime/router").createRouter;
let navigate: typeof import("@/runtime/router").navigate;
let Link: typeof import("@/runtime/router").Link;
let Router: typeof import("@/runtime/router").Router;
let useParams: typeof import("@/runtime/router").useParams;

const HomeComponent = () => createElement("div", {}, "Home Page");
const AboutComponent = () => createElement("div", {}, "About Page");
const NotFoundComponent = () => createElement("div", {}, "Not Found Page");

describe("Router", () => {
    let container: HTMLElement;
    const mockPushState = vi.fn();
    const mockAddEventListener = vi.fn();
    const mockDispatchEvent = vi.fn();
    const mockScrollTo = vi.fn();

    const originalPushState = window.history.pushState;
    const originalAddEventListener = window.addEventListener;
    const originalDispatchEvent = window.dispatchEvent;
    const originalScrollTo = window.scrollTo;
    const originalLocation = window.location;

    beforeEach(async () => {
        vi.resetModules(); // Reset modules to ensure router state is fresh

        const routerModule = await import("@/runtime/router");
        createRouter = routerModule.createRouter;
        navigate = routerModule.navigate;
        Link = routerModule.Link;
        Router = routerModule.Router;
        useParams = routerModule.useParams;

        container = document.createElement("div");
        document.body.appendChild(container);
        clearState(); // Clear any global state from hooks

        // Mock browser APIs
        window.history.pushState = mockPushState;
        window.addEventListener = mockAddEventListener;
        window.dispatchEvent = mockDispatchEvent;
        window.scrollTo = mockScrollTo;

        // Reset window.location.pathname for each test
        Object.defineProperty(window, "location", {
            writable: true,
            value: { ...originalLocation, pathname: "/" },
        });
    });

    afterEach(() => {
        unmount(createElement(Router, {}));
        document.body.removeChild(container);
        mockPushState.mockClear();
        mockAddEventListener.mockClear();
        mockDispatchEvent.mockClear();
        mockScrollTo.mockClear();

        // Restore original browser APIs
        window.history.pushState = originalPushState;
        window.addEventListener = originalAddEventListener;
        window.dispatchEvent = originalDispatchEvent;
        window.scrollTo = originalScrollTo;

        Object.defineProperty(window, "location", {
            writable: true,
            value: originalLocation,
        });
    });

    describe("createRouter", () => {
        it("should initialize routes and notFound component", () => {
            createRouter({
                routes: [{ path: "/", component: HomeComponent }],
                notFound: NotFoundComponent,
            });
            expect(mockAddEventListener).toHaveBeenCalledWith(
                "popstate",
                expect.any(Function)
            );
            expect(mockAddEventListener).toHaveBeenCalledWith(
                "route-changed",
                expect.any(Function)
            );
        });

        it("should match the initial route based on window.location.pathname", () => {
            Object.defineProperty(window, "location", {
                writable: true,
                value: { ...originalLocation, pathname: "/about" },
            });

            createRouter({
                routes: [
                    { path: "/", component: HomeComponent },
                    { path: "/about", component: AboutComponent },
                ],
                notFound: NotFoundComponent,
            });

            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>About Page</div>");
        });

        it("should warn if router is initialized multiple times", () => {
            const consoleWarnSpy = vi
                .spyOn(console, "warn")
                .mockImplementation(() => {});
            createRouter({ routes: [], notFound: NotFoundComponent });
            createRouter({ routes: [], notFound: NotFoundComponent });
            expect(consoleWarnSpy).toHaveBeenCalledWith(
                "Router is already initialized. Skipping re-initialization."
            );
            consoleWarnSpy.mockRestore();
        });
    });

    describe("navigate", () => {
        it("should update history and current route", () => {
            createRouter({
                routes: [
                    { path: "/", component: HomeComponent },
                    { path: "/about", component: AboutComponent },
                ],
                notFound: NotFoundComponent,
            });

            navigate("/about");

            expect(mockPushState).toHaveBeenCalledWith(null, "", "/about");
            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>About Page</div>");
        });

        it("should render NotFoundComponent for unknown paths", () => {
            createRouter({
                routes: [{ path: "/", component: HomeComponent }],
                notFound: NotFoundComponent,
            });

            navigate("/unknown");
            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>Not Found Page</div>");
        });

        it("should render default not found message if no NotFoundComponent is provided", () => {
            createRouter({
                routes: [{ path: "/", component: HomeComponent }],
            });

            navigate("/unknown");
            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>Page not found</div>");
        });
    });

    describe("Router component", () => {
        it("should render the current route's component", () => {
            createRouter({
                routes: [{ path: "/", component: HomeComponent }],
            });
            navigate("/");
            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>Home Page</div>");
        });

        it("should scroll to top on route change", async () => {
            createRouter({ routes: [{ path: "/", component: HomeComponent }] });
            await navigate("/");
            const routerVNode = createElement(Router, {});
            mount(routerVNode, container);
            expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
        });
    });

    describe("Link component", () => {
        it("should render an anchor tag and navigate on click", () => {
            createRouter({
                routes: [
                    { path: "/", component: HomeComponent },
                    { path: "/about", component: AboutComponent },
                ],
            });
            navigate("/");

            const linkElement = createElement(
                Link,
                { href: "/about" },
                "Go to About"
            );
            mount(linkElement, container);

            expect(container.innerHTML).toBe(
                '<a href="/about">Go to About</a>'
            );

            const anchor = container.querySelector("a");
            anchor?.click();

            expect(mockPushState).toHaveBeenCalledWith(null, "", "/about");

            container.innerHTML = "";
            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>About Page</div>");
        });
    });

    describe("useParams", () => {
        it("should return parameters for dynamic routes", () => {
            const UserProfileUsingParams = () => {
                const params = useParams() as { id: string };
                return createElement("div", {}, `User ID: ${params.id}`);
            };

            Object.defineProperty(window, "location", {
                writable: true,
                value: { ...originalLocation, pathname: "/user/dynamic123" },
            });

            createRouter({
                routes: [
                    { path: "/user/:id", component: UserProfileUsingParams },
                ],
                notFound: NotFoundComponent,
            });

            const routerElement = createElement(Router, {});
            mount(routerElement, container);
            expect(container.innerHTML).toBe("<div>User ID: dynamic123</div>");
        });

        it("should return empty object if no params or no current route", () => {
            createRouter({ routes: [{ path: "/", component: HomeComponent }] });
            navigate("/");

            let paramsResult: any;
            const TestComponentUsingParams = () => {
                paramsResult = useParams();
                return createElement("div", {}, JSON.stringify(paramsResult));
            };

            mount(createElement(TestComponentUsingParams, {}), container);
            expect(paramsResult).toEqual({});
        });
    });
});
