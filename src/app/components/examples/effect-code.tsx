import { createElement } from "@/runtime/jsx-runtime";

export function EffectCode() {
    return (
        <div>
            <span class="text-pink-600">function</span>{" "}
            <span class="text-purple-600">Clock</span>
            <span class="text-gray-700 dark:text-gray-200">(</span>
            <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
            <span class="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">[</span>
                <span class="text-blue-600">time</span>
                <span class="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span class="text-blue-600">setTime</span>
                <span class="text-gray-700 dark:text-gray-200">]</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">useState</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-pink-600">new</span>{" "}
                <span class="text-purple-600">Date</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-purple-600">useEffect</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span class="text-pink-600">=&gt;</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-blue-600">intervalId</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">setInterval</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span class="text-pink-600">=&gt;</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-blue-600">setTime</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-pink-600">new</span>{" "}
                <span class="text-purple-600">Date</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span class="text-orange-600">1000</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span class="text-pink-600">return</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span class="text-pink-600">=&gt;</span>{" "}
                <span class="text-purple-600">clearInterval</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-blue-600">intervalId</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">[</span>
                <span class="text-gray-700 dark:text-gray-200">]</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-blue-600">hours</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">formatTime</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-blue-600">time</span>
                <span class="text-gray-700 dark:text-gray-200">.</span>
                <span class="text-purple-600">getHours</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-blue-600">minutes</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">formatTime</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-blue-600">time</span>
                <span class="text-gray-700 dark:text-gray-200">.</span>
                <span class="text-purple-600">getMinutes</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-blue-600">seconds</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">formatTime</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-blue-600">time</span>
                <span class="text-gray-700 dark:text-gray-200">.</span>
                <span class="text-purple-600">getSeconds</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">)</span>
                <span class="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span class="text-pink-600">const</span>{" "}
                <span class="text-blue-600">date</span>{" "}
                <span class="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span class="text-purple-600">getDateFromTime</span>
                <span class="text-gray-700 dark:text-gray-200">(</span>
                <span class="text-blue-600">time</span>
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
                <span class="text-green-700 dark:text-green-400">div</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">hours</span>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">:</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">minutes</span>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">:</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">seconds</span>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">span</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">div</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span class="text-gray-700 dark:text-gray-200">&lt;</span>
                <span class="text-green-700 dark:text-green-400">div</span>
                <span class="text-gray-700 dark:text-gray-200">&gt;</span>
                <span class="text-gray-700 dark:text-gray-200">&#123;</span>
                <span class="text-blue-600">date</span>
                <span class="text-gray-700 dark:text-gray-200">&#125;</span>
                <span class="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span class="text-green-700 dark:text-green-400">div</span>
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
