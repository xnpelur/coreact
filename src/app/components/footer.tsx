import { createElement } from "@runtime/jsx-runtime";

export function Footer() {
    return (
        <div className="self-stretch w-full bg-wash dark:bg-gray-95 mt-[-1px]">
            <div className="px-5 py-4">
                <footer className="text-gray-700 dark:text-secondary-dark">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="text-sm text-gray-700 dark:text-secondary-dark">
                                Made with{" "}
                                <a href="#" className="font-bold">
                                    Coreact
                                </a>
                                ️ by{" "}
                                <a href="#" className="font-bold">
                                    xnpelur
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
