import { createElement } from "@runtime/jsx-runtime";
import { useState } from "@runtime/component";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button
                onClick={() => {
                    // Does not work for now, because rerender is not implemented
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
}

export function App() {
    return (
        <div>
            <h1>My Framework App</h1>
            <Counter />
        </div>
    );
}
