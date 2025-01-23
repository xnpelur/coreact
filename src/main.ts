import { createElement } from "@runtime/jsx-runtime";
import { App } from "@app/index";
import { mount } from "@runtime/dom";

const root = document.getElementById("app");
if (root) {
    mount(createElement(App, {}), root);
}
