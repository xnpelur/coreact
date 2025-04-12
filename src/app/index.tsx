import { useEffect } from "@runtime/effect";
import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";

export function App(): VirtualNode {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(value, count);
    }, [value, count]);

    return (
        <div>
            <h1>Controlled Input</h1>
            <input
                type="text"
                value={value}
                onInput={({ target }: { target: HTMLInputElement }) =>
                    setValue(target.value)
                }
            />
            <h1>Counter</h1>
            <span>{count}</span>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
        </div>
    );
}
