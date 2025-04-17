import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Router, createRouter } from "@runtime/router";
import { Home } from "./pages/Home";
import { CounterPage } from "./pages/CounterPage";
import { UserProfile } from "./pages/UserProfile";
import { NotFound } from "./pages/NotFound";
import { ControlledInputPage } from "./pages/ControlledInputPage";

createRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/controlled-input", component: ControlledInputPage },
        { path: "/counter", component: CounterPage },
        { path: "/user/:id", component: UserProfile },
    ],
    notFound: NotFound,
});

export function App(): VirtualNode {
    return <Router />;
}
