import { useState } from "@/runtime/hooks/state";
import { createElement } from "@/runtime/jsx-runtime";
import { createStore } from "@/runtime/store";

const useCounterStore = createStore(0);

export function StoreResult() {
    return (
        <div className="flex items-center justify-center p-4 w-92">
            <div className="flex justify-between w-full">
                <Counter />
                <Counter />
                <Counter />
            </div>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [storeCount, setStoreCount] = useCounterStore();

    function increment() {
        setCount(count + 1);
        setStoreCount(storeCount + 1);
    }

    return (
        <div className="flex justify-center items-center flex-1 flex-col gap-2 rounded-xl shadow p-4 text-center">
            <div className="text-4xl font-bold text-indigo-600">{count}</div>
            <button
                className="bg-indigo-500 text-white px-4 py-1 rounded-sm hover:bg-indigo-600"
                onClick={increment}
            >
                +
            </button>
            <div className="text-sm text-slate-500">
                Sum: <span className="text-slate-700">{storeCount}</span>
            </div>
        </div>
    );
}
