import { getCurrentComponentInfo, rerender, ComponentInfo } from "./dom";

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
        const componentInfo = getCurrentComponentInfo();
        if (!componentInfo) {
            throw new Error("useStore must be called within a component");
        }

        const key = JSON.stringify(componentInfo);

        const setState = (newState: T) => {
            store.state = newState;
            store.subscribers.forEach((subscriber) => subscriber());
        };

        if (store.subscribers.has(key)) {
            return [store.state, setState];
        }

        const rerenderComponent = () => {
            rerender(componentInfo);
        };

        store.subscribers.set(key, rerenderComponent);

        return [store.state, setState];
    };

    return useStore;
}

/**
 * Cleans up a component's subscriptions from all stores.
 * This function is called when a component is unmounted to prevent memory leaks.
 *
 * @param {ComponentInfo} componentInfo - Information about the component to cleanup
 */
export function cleanupComponent(componentInfo: ComponentInfo) {
    const key = JSON.stringify(componentInfo);

    storeRegistry.forEach((store) => {
        if (store.subscribers.has(key)) {
            store.subscribers.delete(key);
        }
    });
}
