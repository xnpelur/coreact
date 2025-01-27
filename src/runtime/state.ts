import { getCurrentComponentInfo, rerender } from "./dom";

const stateMap = new Map<string, any>();

export function useState(initialValue: any) {
    const componentInfo = getCurrentComponentInfo();
    if (!componentInfo) {
        throw new Error("useState must be called within a component");
    }

    const json = JSON.stringify(componentInfo);

    const state = stateMap.get(json);
    if (!state) {
        stateMap.set(json, initialValue);
    }

    const setValue = (value: any) => {
        stateMap.set(json, value);
        rerender(componentInfo);
    };

    return [stateMap.get(json), setValue];
}
