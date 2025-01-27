import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";

function Counter(): VirtualNode {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export function App(): VirtualNode {
    return (
        <div>
            <h1>My Framework App</h1>
            <Counter />
        </div>
    );
}
