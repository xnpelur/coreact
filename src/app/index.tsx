import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Router, createRouter } from "@/runtime/router";
import { HomePage } from "@/app/pages/home-page";
import { NotFoundPage } from "@/app/pages/not-found-page";
import { DocsPage } from "@/app/pages/docs-page";
import { BlogPage } from "@/app/pages/blog-page";
import { IntroducingCoreactPost } from "@/app/pages/blog/introducing-coreact";
import { WhyIBuiltThisFrameworkPost } from "@/app/pages/blog/why-i-built-this-framework";
import { CoreactPerformanceOptimizationPost } from "@/app/pages/blog/coreact-performance-optimization";
import { DocsRenderingPage } from "@/app/pages/docs/docs-rendering";
import { DocsStylingPage } from "@/app/pages/docs/docs-styling";
import { DocsStateManagementPage } from "@/app/pages/docs/docs-state-management";
import { DocsRoutingPage } from "@/app/pages/docs/docs-routing";
import "@/app/styles.css";
import { registerTranslations } from "@/runtime/hooks/translation";
import en from "@/app/translations/en.json";
import ru from "@/app/translations/ru.json";

registerTranslations({ en, ru }, "en");

createRouter({
    routes: [
        { path: "/", component: HomePage },
        { path: "/docs", component: DocsPage },
        { path: "/blog", component: BlogPage },
        {
            path: "/blog/introducing-coreact",
            component: IntroducingCoreactPost,
        },
        {
            path: "/blog/why-i-built-this-framework",
            component: WhyIBuiltThisFrameworkPost,
        },
        {
            path: "/blog/performance-optimization",
            component: CoreactPerformanceOptimizationPost,
        },
        { path: "/docs/rendering", component: DocsRenderingPage },
        { path: "/docs/styling", component: DocsStylingPage },
        {
            path: "/docs/state-management",
            component: DocsStateManagementPage,
        },
        { path: "/docs/routing", component: DocsRoutingPage },
    ],
    notFound: NotFoundPage,
});

export function App(): VirtualNode {
    return <Router />;
}
