import { useCounterStore } from "@app/stores/counter-store";
import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Link } from "@runtime/router";
import { useState } from "@runtime/state";

function Counter({ n }: { n: number }): VirtualNode {
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

export function CounterPage(): VirtualNode {
    return (
        <div>
            <h1>Counter Page</h1>
            <Counter n={1} />
            <Counter n={2} />
            <div style="margin-top: 20px;">
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
