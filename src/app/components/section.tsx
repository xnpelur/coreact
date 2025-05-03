import { createElement } from "@runtime/jsx-runtime";
import { CodeCard } from "./code-card";
import { CodeResult } from "./code-result";

export function Section() {
    return (
        <div className="mx-auto flex flex-col w-full bg-gradient-left dark:bg-gradient-left-dark border-t border-primary/10 dark:border-primary-dark/10">
            <div className="flex-col gap-2 flex grow w-full my-20 lg:my-32 mx-auto items-center">
                <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
                    <h2 className="leading-xl font-display text-primary dark:text-primary-dark font-semibold text-5xl lg:text-6xl -mt-4 mb-7 w-full max-w-3xl lg:max-w-xl">
                        Create user interfaces from components
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg lg:text-xl text-secondary dark:text-secondary-dark leading-normal">
                        X lets you build user interfaces out of individual
                        pieces called components. Create your own X components
                        like{" "}
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
                    <div className="lg:ps-10 lg:pe-5 w-full">
                        <div className="mt-12 mb-2 lg:my-16 max-w-7xl mx-auto flex flex-col w-full lg:rounded-2xl lg:bg-card lg:dark:bg-card-dark">
                            <div className="flex-col gap-0 lg:gap-5 lg:rounded-2xl lg:bg-gray-10 lg:dark:bg-gray-70 shadow-inner-border dark:shadow-inner-border-dark lg:flex-row flex grow w-full mx-auto items-center bg-cover bg-center lg:bg-right ltr:lg:bg-[length:60%_100%] bg-no-repeat meta-gradient">
                                <CodeCard />
                                <CodeResult />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 lg:px-0 max-w-4xl lg:text-center text-white text-opacity-80 flex flex-col items-center justify-center">
                    <p className="max-w-3xl mx-auto text-lg lg:text-xl text-secondary dark:text-secondary-dark leading-normal">
                        Whether you work on your own or with thousands of other
                        developers, using X feels the same. It is designed to
                        let you seamlessly combine components written by
                        independent people, teams, and organizations.
                    </p>
                </div>
            </div>
        </div>
    );
}
