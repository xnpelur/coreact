import { getCurrentComponentInfo, rerender, ComponentInfo } from "./dom";

type Store<T> = {
    state: T;
    subscribers: Map<string, () => void>;
};

const stores = new Map<string, Store<any>>();

export function createStore<T>(name: string, initialState: T): Store<T> {
    if (stores.has(name)) {
        throw new Error(`Store with name "${name}" already exists`);
    }

    const store: Store<T> = {
        state: initialState,
        subscribers: new Map(),
    };

    stores.set(name, store);
    return store;
}

export function useStore<T>(name: string): [T, (newState: T) => void] {
    const store = stores.get(name);
    if (!store) {
        throw new Error(`Store with name "${name}" not found`);
    }

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
}

export function cleanupComponent(componentInfo: ComponentInfo) {
    stores.forEach((store) => {
        const key = JSON.stringify(componentInfo);
        if (store.subscribers.has(key)) {
            store.subscribers.delete(key);
        }
    });
}

export function clearStores() {
    if (process.env.NODE_ENV !== "test") {
        throw new Error(
            "clearStores function is not supposed to be used in this environment"
        );
    }
    stores.clear();
}
