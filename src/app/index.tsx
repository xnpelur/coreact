import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Router, createRouter } from "@runtime/router";
import { HomePage } from "./pages/home-page";
import { CounterPage } from "./pages/counter-page";
import { UserProfilePage } from "./pages/user-profile-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ControlledInputPage } from "./pages/controlled-input-page";
import { LandingPage } from "./pages/landing-page";

createRouter({
    routes: [
        { path: "/", component: HomePage },
        { path: "/controlled-input", component: ControlledInputPage },
        { path: "/counter", component: CounterPage },
        { path: "/user/:id", component: UserProfilePage },
        { path: "/landing", component: LandingPage },
    ],
    notFound: NotFoundPage,
});

export function App(): VirtualNode {
    return <Router />;
}
