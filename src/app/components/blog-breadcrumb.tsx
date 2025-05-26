import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Link } from "@/runtime/router";

export function BlogBreadcrumb({ article }: { article?: string }): VirtualNode {
    return (
        <div class="flex flex-wrap">
            <div class="flex mb-3 mt-0.5 items-center">
                <Link
                    class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                    href="/"
                >
                    Home
                </Link>
                <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </span>
                {article ? (
                    <div class="flex items-center">
                        <Link
                            class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase mr-1 hover:underline"
                            href="/blog"
                        >
                            Blog
                        </Link>
                        <span class="inline-block mr-1 text-cyan-500 dark:text-cyan-400 text-lg rtl:rotate-180">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>
                        <span class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase">
                            {article}
                        </span>
                    </div>
                ) : (
                    <span class="text-cyan-500 dark:text-cyan-400 text-sm tracking-wide font-bold uppercase">
                        Blog
                    </span>
                )}
            </div>
        </div>
    );
}
