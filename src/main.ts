import { App } from "@/app/index";
import { mount } from "@/runtime/dom";
import { createElement } from "@/runtime/jsx-runtime";
import "@/styles/index.css";
import "@/generated/styles.css";

function mountApp() {
    const root = document.getElementById("app");

    const isDarkMode = localStorage.getItem("dark-mode");
    if (isDarkMode === null) {
        const isSystemDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        localStorage.setItem("dark-mode", String(isSystemDarkMode));
        document.documentElement.classList.toggle("dark", isSystemDarkMode);
    } else {
        document.documentElement.classList.toggle(
            "dark",
            isDarkMode === "true"
        );
    }

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
