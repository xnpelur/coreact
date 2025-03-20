/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createElement, Fragment } from "@runtime/jsx-runtime";
import { mount, unmount } from "@runtime/dom";
import { clearState, useState } from "@runtime/state";

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

    it("should handle multiple independent counters in conditional rendering", () => {
        const Counter = () => {
            const [count, setCount] = useState(0);
            return createElement(
                "button",
                { onClick: () => setCount(count + 1) },
                count.toString()
            );
        };

        const App = ({ condition1 = true, condition2 = true }) => {
            return createElement(
                Fragment,
                {},
                createElement(Counter, {}),
                condition1 &&
                    createElement(
                        Fragment,
                        {},
                        false && createElement(Counter, {}),
                        createElement(Counter, {})
                    ),
                condition2 && createElement(Counter, {})
            );
        };

        const vnode = createElement(App, {
            condition1: true,
            condition2: true,
        });
        mount(vnode, container);

        let buttons = container.querySelectorAll("button");
        expect(buttons.length).toBe(3);

        buttons[0].click();
        buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("1");
        expect(buttons[1].textContent).toBe("0");
        expect(buttons[2].textContent).toBe("0");

        buttons[1].click();
        buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("1");
        expect(buttons[1].textContent).toBe("1");
        expect(buttons[2].textContent).toBe("0");

        buttons[2].click();
        buttons = container.querySelectorAll("button");
        expect(buttons[0].textContent).toBe("1");
        expect(buttons[1].textContent).toBe("1");
        expect(buttons[2].textContent).toBe("1");

        const vnodeCondition1False = createElement(App, {
            condition1: false,
            condition2: true,
        });
        mount(vnodeCondition1False, container);

        const buttonsAfterCondition1False =
            container.querySelectorAll("button");
        expect(buttonsAfterCondition1False.length).toBe(2);

        const vnodeCondition2False = createElement(App, {
            condition1: true,
            condition2: false,
        });
        mount(vnodeCondition2False, container);

        const buttonsAfterCondition2False =
            container.querySelectorAll("button");
        expect(buttonsAfterCondition2False.length).toBe(2);
    });
});
