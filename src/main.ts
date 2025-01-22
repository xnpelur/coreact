import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";

const root = document.getElementById("app");
if (root) {
    root.appendChild(createElement(App, null));
}
