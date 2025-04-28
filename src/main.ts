import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { mount } from "@runtime/dom";
import { injectTailwindBase } from "@runtime/tailwind";
import { createTailwindElementFactory } from "@runtime/tailwind-jsx";

const createElementWithTailwind = createTailwindElementFactory(createElement);

function mountApp() {
    const root = document.getElementById("app");
    if (root) {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        // Inject Tailwind base styles
        injectTailwindBase();

        const app = createElementWithTailwind(App, {});
        mount(app, root);
    }
}

window.addEventListener("router-update", () => {
    mountApp();
});

mountApp();
