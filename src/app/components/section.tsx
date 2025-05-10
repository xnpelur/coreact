import { createElement } from "@runtime/jsx-runtime";
import { CodeCard } from "./code-card";
import { CodeResult } from "./code-result";

export function Section() {
    return (
        <div className="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-text-gray-50/10">
            <div className="flex-col gap-2 flex grow w-full my-32 mx-auto items-center">
                <div className="px-0 max-w-4xl text-center text-white text-opacity-80 flex flex-col items-center justify-center">
                    <h2 className="leading-xl font-display text-gray-950 dark:text-gray-50 font-semibold text-6xl -mt-4 mb-7 w-full max-w-xl">
                        Create user interfaces from components
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-secondary-dark leading-normal">
                        Coreact lets you build user interfaces out of individual
                        pieces called components. Create your own Coreact
                        components like{" "}
                        <code
                            dir="ltr"
                            className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left"
                        >
                            Thumbnail
                        </code>
                        ,{" "}
                        <code
                            dir="ltr"
                            className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left"
                        >
                            LikeButton
                        </code>
                        , and{" "}
                        <code
                            dir="ltr"
                            className="font-mono inline rounded-lg bg-gray-15/40 dark:bg-secondary-button-dark py-0.5 px-1 text-left"
                        >
                            Video
                        </code>
                        . Then combine them into entire screens, pages, and
                        apps.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col w-full">
                    <div className="pl-10 pr-5 w-full">
                        <div className="my-16 max-w-7xl mx-auto flex flex-col w-full rounded-2xl bg-gray-50 dark:bg-card-dark">
                            <div className="gap-5 rounded-2xl bg-gray-10 dark:bg-gray-70 shadow-inner-border dark:shadow-inner-border-dark flex-row flex grow w-full mx-auto items-center bg-cover bg-right ltr:bg-[length:60%_100%] bg-no-repeat bg-meta-gradient">
                                <CodeCard />
                                <CodeResult />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-0 max-w-4xl text-center text-white text-opacity-80 flex flex-col items-center justify-center">
                    <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-secondary-dark leading-normal">
                        Whether you work on your own or with thousands of other
                        developers, using Coreact feels the same. It is designed
                        to let you seamlessly combine components written by
                        independent people, teams, and organizations.
                    </p>
                </div>
            </div>
        </div>
    );
}
