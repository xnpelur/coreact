import { createElement } from "@/runtime/jsx-runtime";

export function StateCode() {
    return (
        <div>
            <span className="text-pink-600">function</span>{" "}
            <span className="text-purple-600">Switch</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">[</span>
                <span className="text-blue-600">state</span>
                <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span className="text-blue-600">setState</span>
                <span className="text-gray-700 dark:text-gray-200">]</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">useState</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-orange-600">true</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-pink-600">return</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <br />
            </div>
            <div>
                {"    "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">div</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">state</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">?</span>{" "}
                <span className="text-orange-600">"🌞"</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">:</span>{" "}
                <span className="text-orange-600">"🌚"</span>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">
                    label
                </span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">
                    input
                </span>{" "}
                <span className="text-blue-600">type</span>=
                <span className="text-orange-600">"checkbox"</span>{" "}
                <span className="text-blue-600">value</span>=
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">state</span>
                <span className="text-gray-700 dark:text-gray-200">
                    &#125;
                </span>{" "}
                <span className="text-blue-600">onClick</span>=
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span className="text-pink-600">=&gt;</span>{" "}
                <span className="text-blue-600">setState</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">!</span>
                <span className="text-blue-600">state</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">
                    &#125;
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200">/&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">
                    label
                </span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">div</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            </div>
        </div>
    );
}
