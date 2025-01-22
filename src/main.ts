import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { render } from "@runtime/render";

const root = document.getElementById("app");
if (root) {
    render(createElement(App, {}), root);
}
