import { getCurrentComponentInfo, rerender } from "./dom";

// Store states as a map of component keys to arrays of state values
const stateMap = new Map<string, any[]>();
// Track the current hook index for each component during render
const hookIndexMap = new Map<string, number>();

export function useState<T>(initialValue: T): [T, (value: T) => void] {
    const componentInfo = getCurrentComponentInfo();
    if (!componentInfo) {
        throw new Error("useState must be called within a component");
    }

    const componentKey = JSON.stringify(componentInfo);
    
    // Initialize hook index for this component if not already set
    if (!hookIndexMap.has(componentKey)) {
        hookIndexMap.set(componentKey, 0);
    }
    
    // Get the current hook index and increment it for the next hook
    const hookIndex = hookIndexMap.get(componentKey)!;
    hookIndexMap.set(componentKey, hookIndex + 1);
    
    // Initialize state array for this component if not already set
    if (!stateMap.has(componentKey)) {
        stateMap.set(componentKey, []);
    }
    
    const states = stateMap.get(componentKey)!;
    
    // Initialize this specific state if not already set
    if (states.length <= hookIndex) {
        states[hookIndex] = initialValue;
    }
    
    const setValue = (value: T) => {
        const states = stateMap.get(componentKey)!;
        states[hookIndex] = value;
        rerender(componentInfo);
    };

    return [states[hookIndex], setValue];
}

export function clearState() {
    if (process.env.NODE_ENV !== "test") {
        throw new Error(
            "clearState function is not supposed to be used in this environment"
        );
    }
    stateMap.clear();
    hookIndexMap.clear();
}

// Reset hook indices before each component render
export function resetHookIndices(componentKey: string) {
    hookIndexMap.set(componentKey, 0);
}
