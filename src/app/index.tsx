import { createElement, VirtualNode } from "@runtime/jsx-runtime";
import { Counter } from "./counter";

export function App(): VirtualNode {
    return (
        <div>
            <Counter n={1} />
            <Counter n={2} />
        </div>
    );
}
