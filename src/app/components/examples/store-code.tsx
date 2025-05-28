import { createElement } from "@/runtime/jsx-runtime";

export function StoreCode() {
    return (
        <div>
            <span className="text-pink-600">const</span>{" "}
            <span className="text-blue-600">useCounterStore</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
            <span className="text-purple-600">createStore</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-orange-600">0</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            <br />
            <span className="text-pink-600">function</span>{" "}
            <span className="text-purple-600">Counters</span>
            <span className="text-gray-700 dark:text-gray-200">()</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            {"  "}
            <span className="text-pink-600">return</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <br />
            {"    "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">
                Counter
            </span>{" "}
            <span className="text-gray-700 dark:text-gray-200">/&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">
                Counter
            </span>{" "}
            <span className="text-gray-700 dark:text-gray-200">/&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">
                Counter
            </span>{" "}
            <span className="text-gray-700 dark:text-gray-200">/&gt;</span>
            <br />
            {"    "}
            <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"  "}
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            <br />
            <br />
            <span className="text-pink-600">function</span>{" "}
            <span className="text-purple-600">Counter</span>
            <span className="text-gray-700 dark:text-gray-200">()</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            {"  "}
            <span className="text-pink-600">const</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">[</span>
            <span className="text-blue-600">count</span>
            <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
            <span className="text-blue-600">setCount</span>
            <span className="text-gray-700 dark:text-gray-200">]</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
            <span className="text-purple-600">useState</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-orange-600">0</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            {"  "}
            <span className="text-pink-600">const</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">[</span>
            <span className="text-blue-600">storeCount</span>
            <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
            <span className="text-blue-600">setStoreCount</span>
            <span className="text-gray-700 dark:text-gray-200">]</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
            <span className="text-blue-600">useCounterStore</span>
            <span className="text-gray-700 dark:text-gray-200">()</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            {"  "}
            <span className="text-pink-600">function</span>{" "}
            <span className="text-purple-600">increment</span>
            <span className="text-gray-700 dark:text-gray-200">()</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            {"    "}
            <span className="text-blue-600">setCount</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-blue-600">count</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">+</span>{" "}
            <span className="text-orange-600">1</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            {"    "}
            <span className="text-blue-600">setStoreCount</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-blue-600">storeCount</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">+</span>{" "}
            <span className="text-orange-600">1</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            {"  "}
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            <br />
            {"  "}
            <span className="text-pink-600">return</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <br />
            {"    "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <span className="text-blue-600">count</span>
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">
                button
            </span>{" "}
            <span className="text-blue-600">onClick</span>=
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <span className="text-purple-600">increment</span>
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>+
            <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
            <span className="text-green-700 dark:text-green-400">button</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"      "}
            <span className="text-gray-700 dark:text-gray-200">&lt;</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            Sum:{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <span className="text-blue-600">storeCount</span>
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
            <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"    "}
            <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
            <span className="text-green-700 dark:text-green-400">div</span>
            <span className="text-gray-700 dark:text-gray-200">&gt;</span>
            <br />
            {"  "}
            <span className="text-gray-700 dark:text-gray-200">)</span>
            <span className="text-gray-700 dark:text-gray-200">;</span>
            <br />
            <span className="text-gray-700 dark:text-gray-200">&#125;</span>
        </div>
    );
}
