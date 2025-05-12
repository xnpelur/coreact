import { currentComponentId, rerender } from "@/runtime/dom";

// Store states as a map of component keys to arrays of state values
const stateMap = new Map<string, any[]>();
// Track the current hook index for each component during render
const hookIndexMap = new Map<string, number>();

/**
 * Creates a state variable that can be used in components.
 * This function is similar to React's useState hook and allows components to have state.
 *
 * @param {T} initialValue - The initial value of the state
 * @returns {[T, (value: T) => void]} A tuple containing the current state value and a function to update it
 * @throws {Error} If called outside of a component context
 */
export function useState<T>(initialValue: T): [T, (value: T) => void] {
    if (!currentComponentId) {
        throw new Error("useState must be called within a component");
    }

    // Initialize hook index for this component if not already set
    if (!hookIndexMap.has(currentComponentId)) {
        hookIndexMap.set(currentComponentId, 0);
    }

    // Get the current hook index and increment it for the next hook
    const hookIndex = hookIndexMap.get(currentComponentId)!;
    hookIndexMap.set(currentComponentId, hookIndex + 1);

    // Initialize state array for this component if not already set
    if (!stateMap.has(currentComponentId)) {
        stateMap.set(currentComponentId, []);
    }

    const states = stateMap.get(currentComponentId)!;

    // Initialize this specific state if not already set
    if (states.length <= hookIndex) {
        states[hookIndex] = initialValue;
    }

    const id = currentComponentId;
    const setValue = (value: T) => {
        const states = stateMap.get(id)!;
        states[hookIndex] = value;
        rerender(id);
    };

    return [states[hookIndex], setValue];
}

/**
 * Clears all state for all components.
 * This function is intended for testing purposes only and should not be used in production.
 *
 * @throws {Error} If called in a non-test environment
 */
export function clearState() {
    if (process.env.NODE_ENV !== "test") {
        throw new Error(
            "clearState function is not supposed to be used in this environment"
        );
    }
    stateMap.clear();
    hookIndexMap.clear();
}

/**
 * Resets the hook indices for a component before rendering.
 * This function is called internally to ensure hooks are called in the correct order.
 *
 * @param {string} componentId - The unique key for the component
 */
export function resetHookIndices(componentId: string) {
    hookIndexMap.set(componentId, 0);
}
