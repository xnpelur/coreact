import { createElement } from "@/runtime/jsx-runtime";

export function CodeCard() {
    return (
        <div className="-m-5 h-full shadow-nav dark:shadow-nav-dark rounded-2xl bg-white dark:bg-gray-950 w-full flex grow flex-col">
            <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-t-2xl border-b border-black/5 dark:border-white/5">
                <h3 className="text-sm my-2 mx-5 text-gray-500 dark:text-gray-300 select-none text-start">
                    Video.js
                </h3>
            </div>
            <div className="codeblock rounded-b-2xl h-full w-full overflow-x-auto flex items-center bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex-1 relative overflow-auto bg-white dark:bg-gray-900">
                            <pre className="flex align-start font-mono text-sm leading-6 p-4">
                                <code className="grow-[2]">
                                    <div className="pl-5">
                                        <span className="text-pink-600">
                                            function
                                        </span>{" "}
                                        <span className="text-purple-600">
                                            Video
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            (
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>{" "}
                                        <span className="text-blue-600">
                                            video
                                        </span>{" "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            )
                                        </span>{" "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"  "}
                                        <span className="text-pink-600">
                                            return
                                        </span>{" "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            (
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"    "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            div
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"      "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-purple-600">
                                            Thumbnail
                                        </span>{" "}
                                        <span className="text-blue-600">
                                            video
                                        </span>
                                        =
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            video
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>{" "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            /&gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"      "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            a
                                        </span>{" "}
                                        <span className="text-blue-600">
                                            href
                                        </span>
                                        =
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            video
                                        </span>
                                        .
                                        <span className="text-blue-600">
                                            url
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"        "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            h3
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            video
                                        </span>
                                        .
                                        <span className="text-blue-600">
                                            title
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;/
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            h3
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"        "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            p
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            video
                                        </span>
                                        .
                                        <span className="text-blue-600">
                                            description
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;/
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            p
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"      "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;/
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            a
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"      "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;
                                        </span>
                                        <span className="text-purple-600">
                                            LikeButton
                                        </span>{" "}
                                        <span className="text-blue-600">
                                            video
                                        </span>
                                        =
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#123;
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            video
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>{" "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            /&gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"    "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &lt;/
                                        </span>
                                        <span className="text-green-700 dark:text-green-400">
                                            div
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &gt;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        {"  "}
                                        <span className="text-gray-700 dark:text-gray-200">
                                            )
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-200">
                                            ;
                                        </span>
                                        <br />
                                    </div>
                                    <div className="pl-5">
                                        <span className="text-gray-700 dark:text-gray-200">
                                            &#125;
                                        </span>
                                    </div>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
