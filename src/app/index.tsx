import { useEffect } from "@runtime/effect";
import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { useState } from "@runtime/state";

export function App(): VirtualNode {
    const [value, setValue] = useState("");

    useEffect(() => {
        console.log(value);
    }, [value]);

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
        </div>
    );
}
