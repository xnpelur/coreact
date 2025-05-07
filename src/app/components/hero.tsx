import { createElement } from "@runtime/jsx-runtime";

export function Hero() {
    return (
        <div className="mx-5 mt-24 mb-32 flex flex-col justify-center">
            <svg
                width="100%"
                height="100%"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="uwu-hidden mt-4 mb-3 text-cyan-600 dark:text-cyan-600-dark w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
            >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
            </svg>
            <h1 className="uwu-hidden font-display text-6xl self-center flex font-semibold leading-snug text-gray-950 dark:text-gray-50">
                Coreact
            </h1>
            <p className="text-4xl font-display max-w-full py-1 text-center text-gray-700 dark:text-gray-50 leading-snug self-center">
                The framework for web user interfaces
            </p>
            <div className="mt-5 self-center flex gap-2 w-auto flex-row">
                <a
                    className="w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-cyan-600 focus:outline-offset-2 focus-visible:dark:focus:outline-blue-400 leading-snug bg-cyan-600 text-white dark:bg-cyan-600-dark dark:text-gray-700 hover:bg-opacity-80 text-lg py-3 rounded-full px-6"
                    target="_self"
                    href="#"
                >
                    Learn Coreact
                </a>
                <a
                    className="w-auto justify-center active:scale-[.98] transition-transform inline-flex font-bold items-center outline-none focus:outline-none focus-visible:outline focus-visible:outline-cyan-600 focus:outline-offset-2 focus-visible:dark:focus:outline-blue-400 leading-snug text-gray-950 dark:text-gray-50 shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10 hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 text-lg py-3 rounded-full px-6"
                    aria-label="API Reference"
                    target="_self"
                    href="#"
                >
                    API Reference
                </a>
            </div>
        </div>
    );
}
