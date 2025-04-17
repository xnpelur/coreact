import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Router, createRouter } from "@runtime/router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CounterPage } from "./pages/CounterPage";
import { UserProfile } from "./pages/UserProfile";
import { NotFound } from "./pages/NotFound";

createRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/about", component: About },
        { path: "/counter", component: CounterPage },
        { path: "/user/:id", component: UserProfile },
    ],
    notFound: NotFound,
});

export function App(): VirtualNode {
    return <Router />;
}
