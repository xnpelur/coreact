import { rerender } from "@/runtime/dom";
import { context, ContextMap } from "@/runtime/context";

type Store<T> = {
    state: T;
    subscribers: ContextMap<() => void>;
};

const storeRegistry: Store<any>[] = [];

/**
 * Creates a new state store with the specified initial state.
 * This function creates a store that can be used to manage global state in the application.
 *
 * @param {T} initialState - The initial state value
 * @returns {Function} A function that returns the current state and a function to update it
 */
export function createStore<T>(
    initialState: T
): () => [T, (newState: T) => void] {
    const store: Store<T> = {
        state: initialState,
        subscribers: new ContextMap(),
    };

    storeRegistry.push(store);

    const useStore = (): [T, (newState: T) => void] => {
        if (!context) {
            throw new Error("useStore must be called within a component");
        }

        const setState = (newState: T) => {
            store.state = newState;
            store.subscribers.values().forEach((subscriber) => subscriber());
        };

        if (store.subscribers.has(context)) {
            return [store.state, setState];
        }

        const currentContext = { ...context };
        const rerenderComponent = () => {
            rerender(currentContext);
        };

        store.subscribers.set(context, rerenderComponent);

        return [store.state, setState];
    };

    return useStore;
}

/**
 * Cleans up a component's subscriptions from all stores.
 * This function is called when a component is unmounted to prevent memory leaks.
 */
export function clearStores() {
    storeRegistry.forEach((store) => {
        if (store.subscribers.has(context!)) {
            store.subscribers.delete(context!);
        }
    });
}

/**
 * Clears all subscribers from all stores.
 */
export function clearStoreSubscribers() {
    storeRegistry.forEach((store) => {
        store.subscribers.clear();
    });
}
