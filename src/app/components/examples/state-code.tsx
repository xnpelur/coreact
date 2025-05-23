import { createElement } from "@/runtime/jsx-runtime";

export function StateCode() {
    return (
        <div>
            <span class="text-pink-600">function</span>{" "}
            <span class="text-purple-600">Switch</span>
            <span class="text-gray-700 dark:text-gray-200">(</span>
            <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
            <span class="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">[</span>
                <span class="text-blue-600">state</span>
                <span class="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span class="text-blue-600">setState</span>
                <span class="text-gray-700 dark:text-gray-200">]</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">useState</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-orange-600">true</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-pink-600">return</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <br />
            </div>
            <div>
                {"    "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">div</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">state</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">?</span>{" "}
                <span class="text-orange-600">"🌞"</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">:</span>{" "}
                <span class="text-orange-600">"🌚"</span>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">label</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">
                    input
                </span>{" "}
                <span class="text-blue-600">type</span>=
                <span class="text-orange-600">"checkbox"</span>{" "}
                <span class="text-blue-600">value</span>=
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">state</span>
                <span class="text-gray-700 dark:text-gray-200">
                    &#125;
                </span>{" "}
                <span class="text-blue-600">onClick</span>=
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span class="text-pink-600">=&gt;</span>{" "}
                <span class="text-blue-600">setState</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">!</span>
                <span class="text-blue-600">state</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">
                    &#125;
                </span>{" "}
                <span class="text-gray-700 dark:text-gray-200">/&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">label</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">div</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
            </div>
        </div>
    );
}
