import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Router, createRouter } from "@/runtime/router";
import { HomePage } from "@/app/pages/home-page";
import { NotFoundPage } from "@/app/pages/not-found-page";
import { LearnPage } from "@/app/pages/learn-page";
import { BlogPage } from "@/app/pages/blog-page";
import { IntroducingCoreactPost } from "@/app/pages/blog/introducing-coreact";
import { CoreactStateManagementPost } from "@/app/pages/blog/coreact-state-management";
import { CoreactPerformanceOptimizationPost } from "@/app/pages/blog/coreact-performance-optimization";
import "@/app/styles.css";

createRouter({
    routes: [
        { path: "/", component: HomePage },
        { path: "/learn", component: LearnPage },
        { path: "/blog", component: BlogPage },
        {
            path: "/blog/introducing-coreact",
            component: IntroducingCoreactPost,
        },
        {
            path: "/blog/state-management",
            component: CoreactStateManagementPost,
        },
        {
            path: "/blog/performance-optimization",
            component: CoreactPerformanceOptimizationPost,
        },
    ],
    notFound: NotFoundPage,
});

export function App(): VirtualNode {
    return <Router />;
}
