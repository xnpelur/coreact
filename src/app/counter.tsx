import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";
import { createStore, useStore } from "@runtime/store";
import { CounterState } from "./stores";

createStore<CounterState>("counters", { total: 0 });

export function Counter({ n }: { n: number }): VirtualNode {
    const [count, setCount] = useState(0);
    const [sharedState, setSharedState] = useStore<CounterState>("counters");

    const handleIncrement = () => {
        setCount(count + 1);
        setSharedState({ total: sharedState.total + 1 });
    };

    return (
        <div>
            <h1>
                Count {n}: {count}
            </h1>
            <p>Total across all counters: {sharedState.total}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}
