import { useEffect } from "@/runtime/hooks/effect";
import { createElement, VirtualNode } from "@/runtime/jsx-runtime";
import { Link } from "@/runtime/router";
import { useState } from "@/runtime/hooks/state";

export function ControlledInputPage(): VirtualNode {
    const [value, setValue] = useState("");

    useEffect(() => console.log(value), [value]);

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
            <div style="margin-top: 20px;">
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}
