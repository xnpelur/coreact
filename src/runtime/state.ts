import { getCurrentComponentInfo, rerender } from "./dom";

const stateMap = new Map<string, any>();

export function useState(initialValue: any) {
    const componentInfo = getCurrentComponentInfo();
    if (!componentInfo) {
        throw new Error("useState must be called within a component");
    }

    const json = JSON.stringify(componentInfo);

    if (!stateMap.has(json)) {
        stateMap.set(json, initialValue);
    }

    const setValue = (value: any) => {
        stateMap.set(json, value);
        rerender(componentInfo);
    };

    return [stateMap.get(json), setValue];
}

export function clearState() {
    if (process.env.NODE_ENV !== "test") {
        throw new Error(
            "clearState function is not supposed to be used in this environment"
        );
    }
    stateMap.clear();
}
