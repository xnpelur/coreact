import { currentComponentId, rerender } from "@/runtime/dom";

type Store<T> = {
    state: T;
    subscribers: Map<string, () => void>;
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
        subscribers: new Map(),
    };

    storeRegistry.push(store);

    const useStore = (): [T, (newState: T) => void] => {
        if (!currentComponentId) {
            throw new Error("useStore must be called within a component");
        }

        const setState = (newState: T) => {
            store.state = newState;
            store.subscribers.forEach((subscriber) => subscriber());
        };

        if (store.subscribers.has(currentComponentId)) {
            return [store.state, setState];
        }

        const id = currentComponentId;
        const rerenderComponent = () => {
            rerender(id);
        };

        store.subscribers.set(currentComponentId, rerenderComponent);

        return [store.state, setState];
    };

    return useStore;
}

/**
 * Cleans up a component's subscriptions from all stores.
 * This function is called when a component is unmounted to prevent memory leaks.
 *
 * @param {string} componentId - Information about the component to cleanup
 */
export function cleanupComponent(componentId: string) {
    storeRegistry.forEach((store) => {
        if (store.subscribers.has(componentId)) {
            store.subscribers.delete(componentId);
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
