import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Navbar } from "@/app/components/navbar";
import { Section } from "@/app/components/section";
import { Welcome } from "@/app/components/welcome";
import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { StateCode } from "../components/examples/state-code";
import { StateResult } from "../components/examples/state-result";
import { EffectCode } from "../components/examples/effect-code";
import { EffectResult } from "../components/examples/effect-result";

export function HomePage(): VirtualNode {
    return (
        <div class="font-text font-medium antialiased text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
            <Navbar />
            <main class="min-w-0 isolate">
                <article class="font-normal break-words text-gray-950 dark:text-gray-50">
                    <div class="pl-0">
                        <Hero />
                        <Section
                            codeTitle="State"
                            CodeCardComponent={StateCode}
                            CodeResultComponent={StateResult}
                        />
                        <Section
                            codeTitle="Effect"
                            CodeCardComponent={EffectCode}
                            CodeResultComponent={EffectResult}
                        />
                        <Welcome />
                    </div>
                </article>
                <Footer />
            </main>
        </div>
    );
}
