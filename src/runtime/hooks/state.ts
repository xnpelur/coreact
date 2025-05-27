import { rerender } from "@/runtime/dom";
import { context, ContextMap } from "@/runtime/context";

// Store states as a map of component keys to arrays of state values
const stateMap = new ContextMap<any[]>();
// Track the current hook index for each component during render
const hookIndexMap = new ContextMap<number>();

/**
 * Creates a state variable that can be used in components.
 * This function is similar to React's useState hook and allows components to have state.
 *
 * @param {T} initialValue - The initial value of the state
 * @returns {[T, (value: T) => void]} A tuple containing the current state value and a function to update it
 * @throws {Error} If called outside of a component context
 */
export function useState<T>(initialValue: T): [T, (value: T) => void] {
    if (!context) {
        throw new Error("useState must be called within a component");
    }

    // Initialize hook index for this component if not already set
    if (!hookIndexMap.has(context)) {
        hookIndexMap.set(context, 0);
    }

    // Get the current hook index and increment it for the next hook
    const hookIndex = hookIndexMap.get(context)!;
    hookIndexMap.set(context, hookIndex + 1);

    // Initialize state array for this component if not already set
    if (!stateMap.has(context)) {
        stateMap.set(context, []);
    }

    const states = stateMap.get(context)!;

    // Initialize this specific state if not already set
    if (states.length <= hookIndex) {
        states[hookIndex] = initialValue;
    }

    const currentContext = { ...context };
    const setValue = (value: T) => {
        const states = stateMap.get(currentContext)!;
        states[hookIndex] = value;
        rerender(currentContext);
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
 */
export function resetHookIndices() {
    hookIndexMap.set(context!, 0);
}
