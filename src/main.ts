import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { mount, unmount } from "@runtime/dom";

const root = document.getElementById("app");
if (root) {
    const app = createElement(App, {});
    mount(app, root);
}
