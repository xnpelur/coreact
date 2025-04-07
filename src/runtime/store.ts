import { getCurrentComponentInfo, rerender, ComponentInfo } from "./dom";

type Store<T> = {
    state: T;
    subscribers: Map<string, () => void>;
};

const storeRegistry: Store<any>[] = [];

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

export function cleanupComponent(componentInfo: ComponentInfo) {
    const key = JSON.stringify(componentInfo);

    storeRegistry.forEach((store) => {
        if (store.subscribers.has(key)) {
            store.subscribers.delete(key);
        }
    });
}
