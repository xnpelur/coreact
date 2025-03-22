import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { mount } from "@runtime/dom";

function mountApp() {
    const root = document.getElementById("app");
    if (root) {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }

        const app = createElement(App, {});
        mount(app, root);
    }
}

window.addEventListener("router-update", () => {
    mountApp();
});

mountApp();
