import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { mount } from "@runtime/dom";
import { createTailwindElementFactory } from "@runtime/tailwind-jsx";
import "@runtime/styles/index.css";

const createElementWithTailwind = createTailwindElementFactory(createElement);

function mountApp() {
    const root = document.getElementById("app");
    if (root) {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        const app = createElementWithTailwind(App, {});
        mount(app, root);
    }
}

window.addEventListener("router-update", () => {
    mountApp();
});

mountApp();
