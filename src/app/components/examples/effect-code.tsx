import { createElement } from "@/runtime/jsx-runtime";

export function EffectCode() {
    return (
        <div>
            <span className="text-pink-600">function</span>{" "}
            <span className="text-purple-600">Clock</span>
            <span className="text-gray-700 dark:text-gray-200">(</span>
            <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
            <span className="text-gray-700 dark:text-gray-200">&#123;</span>
            <br />
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">[</span>
                <span className="text-blue-600">time</span>
                <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span className="text-blue-600">setTime</span>
                <span className="text-gray-700 dark:text-gray-200">]</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">useState</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-pink-600">new</span>{" "}
                <span className="text-purple-600">Date</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-purple-600">useEffect</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span className="text-pink-600">=&gt;</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">intervalId</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">setInterval</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span className="text-pink-600">=&gt;</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-blue-600">setTime</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-pink-600">new</span>{" "}
                <span className="text-purple-600">Date</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span className="text-orange-600">1000</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"    "}
                <span className="text-pink-600">return</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>{" "}
                <span className="text-pink-600">=&gt;</span>{" "}
                <span className="text-purple-600">clearInterval</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-blue-600">intervalId</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">,</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">[</span>
                <span className="text-gray-700 dark:text-gray-200">]</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">hours</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">formatTime</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-blue-600">time</span>
                <span className="text-gray-700 dark:text-gray-200">.</span>
                <span className="text-purple-600">getHours</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">minutes</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">formatTime</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-blue-600">time</span>
                <span className="text-gray-700 dark:text-gray-200">.</span>
                <span className="text-purple-600">getMinutes</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">seconds</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">formatTime</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-blue-600">time</span>
                <span className="text-gray-700 dark:text-gray-200">.</span>
                <span className="text-purple-600">getSeconds</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">)</span>
                <span className="text-gray-700 dark:text-gray-200">;</span>
                <br />
            </div>
            <div>
                {"  "}
                <span className="text-pink-600">const</span>{" "}
                <span className="text-blue-600">date</span>{" "}
                <span className="text-gray-700 dark:text-gray-200">=</span>{" "}
                <span className="text-purple-600">getDateFromTime</span>
                <span className="text-gray-700 dark:text-gray-200">(</span>
                <span className="text-blue-600">time</span>
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
                <span className="text-green-700 dark:text-green-400">div</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">
                    &gt;
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">hours</span>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <span className="text-gray-700 dark:text-gray-200">:</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">
                    &gt;
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">minutes</span>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <span className="text-gray-700 dark:text-gray-200">:</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"        "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">seconds</span>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">span</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">div</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <br />
            </div>
            <div>
                {"      "}
                <span className="text-gray-700 dark:text-gray-200">&lt;</span>
                <span className="text-green-700 dark:text-green-400">div</span>
                <span className="text-gray-700 dark:text-gray-200">&gt;</span>
                <span className="text-gray-700 dark:text-gray-200">&#123;</span>
                <span className="text-blue-600">date</span>
                <span className="text-gray-700 dark:text-gray-200">&#125;</span>
                <span className="text-gray-700 dark:text-gray-200">&lt;/</span>
                <span className="text-green-700 dark:text-green-400">div</span>
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
