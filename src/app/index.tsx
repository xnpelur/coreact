import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Router, createRouter } from "@/runtime/router";
import { HomePage } from "@/app/pages/home-page";
import { NotFoundPage } from "@/app/pages/not-found-page";
import "@/app/styles.css";

createRouter({
    routes: [{ path: "/", component: HomePage }],
    notFound: NotFoundPage,
});

export function App(): VirtualNode {
    return <Router />;
}
