import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/component";

function Counter(): VirtualNode {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={() => {
                    // Does not work for now, because rerender is not implemented
                    setCount(count + 1);
                    console.log("button clicked");
                }}
            >
                Increment
            </button>
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
