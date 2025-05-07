import { Footer } from "@app/components/footer";
import { Hero } from "@app/components/hero";
import { Navbar } from "@app/components/navbar";
import { Section } from "@app/components/section";
import { Welcome } from "@app/components/welcome";
import { createElement, VirtualNode } from "@runtime/jsx-runtime";

export function LandingPage(): VirtualNode {
    return (
        <div className="font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-gray-700 dark:text-secondary-dark leading-base">
            <Navbar />
            <main className="min-w-0 isolate">
                <article className="font-normal break-words text-gray-950 dark:text-gray-50">
                    <div className="pl-0">
                        <Hero />
                        <Section />
                        <Welcome />
                    </div>
                </article>
                <Footer />
            </main>
        </div>
    );
}
