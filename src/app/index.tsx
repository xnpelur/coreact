import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Router, createRouter } from "@/runtime/router";
import { HomePage } from "@/app/pages/home-page";
import { CounterPage } from "@/app/pages/counter-page";
import { UserProfilePage } from "@/app/pages/user-profile-page";
import { NotFoundPage } from "@/app/pages/not-found-page";
import { ControlledInputPage } from "@/app/pages/controlled-input-page";
import { LandingPage } from "@/app/pages/landing-page";
import "@/app/styles.css";

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
