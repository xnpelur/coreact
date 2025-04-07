import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";
import { useCounterStore } from "./stores";

export function Counter({ n }: { n: number }): VirtualNode {
    const [count, setCount] = useState(0);
    const [sharedState, setSharedState] = useCounterStore();

    const handleIncrement = () => {
        setCount(count + 1);
        setSharedState(sharedState + 1);
    };

    return (
        <div>
            <h1>
                Count {n}: {count}
            </h1>
            <p>Total across all counters: {sharedState}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
