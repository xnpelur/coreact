/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { createElement, Fragment } from "@/runtime/jsx-runtime";
import { mount, unmount } from "@/runtime/dom";
import { createStore } from "@/runtime/store";
import { clearState } from "@/runtime/hooks/state";

describe("Store Tests", () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        clearState();
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it("should handle global state with createStore", () => {
        const useCounterStore = createStore({ count: 0 });

        const Counter = () => {
            const [state, setState] = useCounterStore();
            return createElement(
                Fragment,
                {},
                createElement("p", {}, `Count: ${state.count}`),
                createElement(
                    "button",
                    { onClick: () => setState({ count: state.count + 1 }) },
                    "Increment"
                )
            );
        };

        const vnode = createElement(Counter, {});
        mount(vnode, container);

        expect(container.innerHTML).toContain("Count: 0");

        const button = container.querySelector("button");
        button?.click();
        expect(container.innerHTML).toContain("Count: 1");

        const App = () =>
            createElement(
                "div",
                {},
                createElement(Counter, {}),
                createElement(Counter, {})
            );

        unmount(vnode);
        container.innerHTML = "";

        const appVnode = createElement(App, {});
        mount(appVnode, container);

        const buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("Increment");
        expect(buttons[1].textContent).toBe("Increment");
        buttons[0].click();
        expect(container.innerHTML).toContain("Count: 2"); // Both should show 2
    });

    it("should handle cleanup of store subscriptions", () => {
        const useCounterStore = createStore({ count: 0 });
        let capturedSetState: ((newState: { count: number }) => void) | null =
            null;

        const Counter = () => {
            const [state, setState] = useCounterStore();
            if (capturedSetState === null) {
                capturedSetState = setState;
            }
            return createElement(
                "button",
                { onClick: () => setState({ count: state.count + 1 }) },
                state.count.toString()
            );
        };

        const vnode = createElement(Counter, {});
        mount(vnode, container);

        const button = container.querySelector("button");
        button?.click();
        expect(container.innerHTML).toBe("<button>1</button>");

        unmount(vnode);
        expect(container.innerHTML).toBe("");

        expect(capturedSetState).not.toBeNull();
        if (capturedSetState) {
            expect(() => {
                capturedSetState!({ count: 2 });
            }).not.toThrow();
        }

        const NewCounterDisplay = () => {
            const [state] = useCounterStore();
            return createElement("p", {}, `New count: ${state.count}`);
        };
        const newVnode = createElement(NewCounterDisplay, {});
        mount(newVnode, container);
        expect(container.innerHTML).toBe("<p>New count: 2</p>");
        unmount(newVnode);
    });

    it("should allow multiple independent stores", () => {
        const useUserStore = createStore({ name: "Guest" });
        const useThemeStore = createStore({ mode: "light" });

        const UserDisplay = () => {
            const [userState] = useUserStore();
            return createElement("p", {}, `User: ${userState.name}`);
        };

        const ThemeToggler = () => {
            const [themeState, setThemeState] = useThemeStore();
            return createElement(
                "button",
                {
                    onClick: () =>
                        setThemeState({
                            mode:
                                themeState.mode === "light" ? "dark" : "light",
                        }),
                },
                `Toggle Theme (Currently: ${themeState.mode})`
            );
        };

        const App = () => {
            return createElement(
                Fragment,
                {},
                createElement(UserDisplay, {}),
                createElement(ThemeToggler, {})
            );
        };

        const vnode = createElement(App, {});
        mount(vnode, container);

        expect(container.innerHTML).toContain("User: Guest");
        expect(container.innerHTML).toContain(
            "Toggle Theme (Currently: light)"
        );

        const button = container.querySelector("button");
        button?.click();

        expect(container.innerHTML).toContain("User: Guest");
        expect(container.innerHTML).toContain("Toggle Theme (Currently: dark)");
    });
});
