import { useEffect } from "@runtime/effect";
import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";

function Counter({ n }: { n: number }): VirtualNode {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("effect");
        return () => console.log("cleanup");
    }, [count]);

    return (
        <div>
            <h1>
                Count {n}: {count}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export function App(): VirtualNode {
    return (
        <div>
            <Counter n={1} />
            <Counter n={2} />
        </div>
    );
}
