import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Footer } from "@/app/components/footer";
import { Hero } from "@/app/components/hero";
import { Navbar } from "@/app/components/navbar";
import { Section } from "@/app/components/section";
import { Welcome } from "@/app/components/welcome";
import { StateCode } from "@/app/components/examples/state-code";
import { StateResult } from "@/app/components/examples/state-result";
import { EffectCode } from "@/app/components/examples/effect-code";
import { EffectResult } from "@/app/components/examples/effect-result";
import { StoreCode } from "@/app/components/examples/store-code";
import { StoreResult } from "@/app/components/examples/store-result";

export function HomePage(): VirtualNode {
    return (
        <div class="font-text antialiased text-lg bg-white dark:bg-darkgray text-gray-700 dark:text-gray-100 leading-base">
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
                        <Section
                            codeTitle="Store"
                            CodeCardComponent={StoreCode}
                            CodeResultComponent={StoreResult}
                        />
                        <Welcome />
                    </div>
                </article>
                <Footer />
            </main>
        </div>
    );
}
