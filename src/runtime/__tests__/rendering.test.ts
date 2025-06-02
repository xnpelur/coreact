/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createElement, Fragment } from "@/runtime/jsx-runtime";
import { mount, unmount } from "@/runtime/dom";
import { clearState, useState } from "@/runtime/hooks/state";
import { useEffect } from "@/runtime/hooks/effect";

describe("Runtime", () => {
    let container: HTMLElement;

    beforeEach(async () => {
        container = document.createElement("div");
        document.body.appendChild(container);

        clearState();
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it("should mount and unmount basic elements", () => {
        const vnode = createElement("div", { class: "test" }, "Hello");
        mount(vnode, container);

        expect(container.innerHTML).toBe('<div class="test">Hello</div>');

        unmount(vnode);
        expect(container.innerHTML).toBe("");
    });

    it("should handle fragments", () => {
        const vnode = createElement(
            Fragment,
            {},
            createElement("span", {}, "Item 1"),
            createElement("span", {}, "Item 2")
        );
        mount(vnode, container);

        expect(container.innerHTML).toBe(
            "<span>Item 1</span><span>Item 2</span>"
        );
    });

    it("should handle functional components", () => {
        const TestComponent = (props: { message: string }) => {
            return createElement("div", {}, props.message);
        };

        const vnode = createElement(TestComponent, { message: "Hello World" });
        mount(vnode, container);

        expect(container.innerHTML).toBe("<div>Hello World</div>");
    });

    it("should handle event listeners", () => {
        const handleClick = vi.fn();
        const vnode = createElement(
            "button",
            { onClick: handleClick },
            "Click me"
        );

        mount(vnode, container);
        const button = container.querySelector("button");
        button?.click();

        expect(handleClick).toHaveBeenCalled();
    });

    it("should handle state updates", () => {
        const TestComponent = () => {
            const [count, setCount] = useState(0);
            return createElement(
                "button",
                { onClick: () => setCount(count + 1) },
                count.toString()
            );
        };

        const vnode = createElement(TestComponent, {});
        mount(vnode, container);

        expect(container.innerHTML).toBe("<button>0</button>");

        const button = container.querySelector("button");
        button?.click();

        expect(container.innerHTML).toBe("<button>1</button>");
    });

    it("should handle multiple states in a single parent", () => {
        const Counter = () => {
            const [count, setCount] = useState(0);
            return createElement(
                "button",
                { onClick: () => setCount(count + 1) },
                count.toString()
            );
        };

        const vnode = createElement(
            "div",
            {},
            createElement(Counter, {}),
            createElement(Counter, {})
        );

        mount(vnode, container);

        let buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("0");
        expect(buttons[1].textContent).toBe("0");

        buttons[0].click();
        buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("1");
        expect(buttons[1].textContent).toBe("0");

        buttons[1].click();
        buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("1");
        expect(buttons[1].textContent).toBe("1");
    });

    it("should handle virtual DOM reconciliation", () => {
        const App = () => {
            const [count, setCount] = useState(0);

            return createElement(
                "div",
                {},
                createElement("span", {}, `Count: ${count}`),
                createElement(
                    "button",
                    { onClick: () => setCount(count + 1) },
                    "Increment"
                )
            );
        };

        const vnode = createElement(App, {});
        mount(vnode, container);

        // Initial render
        expect(container.innerHTML).toContain("Count: 0");

        // Update state and check reconciliation
        const button = container.querySelector("button");
        button?.click();
        expect(container.innerHTML).toContain("Count: 1");

        // Update again
        button?.click();
        expect(container.innerHTML).toContain("Count: 2");
    });

    it("should handle useEffect", () => {
        const mockEffect = vi.fn();
        const mockCleanup = vi.fn();

        const TestComponent = () => {
            const [count, setCount] = useState(0);
            useEffect(() => {
                mockEffect();
                return mockCleanup;
            }, [count]);

            return createElement(
                "button",
                { onClick: () => setCount(count + 1) },
                count.toString()
            );
        };

        const vnode = createElement(TestComponent, {});
        mount(vnode, container);

        // Initial mount
        expect(mockEffect).toHaveBeenCalledTimes(1);
        expect(mockCleanup).not.toHaveBeenCalled();

        // Trigger effect with state change
        const button = container.querySelector("button");
        button?.click();
        expect(mockEffect).toHaveBeenCalledTimes(2);
        expect(mockCleanup).toHaveBeenCalledTimes(1);

        // Cleanup on unmount
        unmount(vnode);
        expect(mockCleanup).toHaveBeenCalledTimes(2);
    });

    it("should handle conditional rendering", () => {
        const ConditionComponent = ({ show }: { show: boolean }) => {
            return show
                ? createElement("p", {}, "Visible")
                : createElement("span", {}, "Hidden");
        };

        let vnode = createElement(ConditionComponent, { show: true });
        mount(vnode, container);
        expect(container.innerHTML).toBe("<p>Visible</p>");
        unmount(vnode);

        vnode = createElement(ConditionComponent, { show: false });
        mount(vnode, container);
        expect(container.innerHTML).toBe("<span>Hidden</span>");
    });

    it("should render nested functional components", () => {
        const ChildComponent = (props: { text: string }) => {
            return createElement("span", {}, props.text);
        };

        const ParentComponent = (props: { message: string }) => {
            return createElement(
                "div",
                {},
                createElement(ChildComponent, { text: props.message }),
                createElement(ChildComponent, { text: "Static" })
            );
        };

        const vnode = createElement(ParentComponent, { message: "Dynamic" });
        mount(vnode, container);
        expect(container.innerHTML).toBe(
            "<div><span>Dynamic</span><span>Static</span></div>"
        );
    });
});
