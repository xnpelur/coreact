export type Context = {
    parentElement: HTMLElement;
    index: number;
};

export let context: Context | null = null;

export function setContext(parentElement: HTMLElement, index: number) {
    context = {
        parentElement,
        index,
    };
}

export function clearContext() {
    context = null;
}

export class ContextMap<T> {
    private map: Map<HTMLElement, Map<number, T>>;

    constructor() {
        this.map = new Map();
    }

    set(key: Context, value: T) {
        if (!this.map.has(key.parentElement)) {
            this.map.set(key.parentElement, new Map());
        }
        this.map.get(key.parentElement)!.set(key.index, value);
    }

    get(key: Context): T | undefined {
        return this.map.get(key.parentElement)?.get(key.index);
    }

    has(key: Context): boolean {
        return (
            this.map.has(key.parentElement) &&
            this.map.get(key.parentElement)!.has(key.index)
        );
    }

    values() {
        const values: T[] = [];
        this.map.forEach((innerMap) => {
            innerMap.forEach((value) => {
                values.push(value);
            });
        });
        return values;
    }

    delete(key: Context): boolean {
        const innerMap = this.map.get(key.parentElement);
        if (!innerMap) return false;

        const deleted = innerMap.delete(key.index);
        if (innerMap.size === 0) {
            this.map.delete(key.parentElement);
        }

        return deleted;
    }

    clear() {
        this.map.clear();
    }
}

export class ContextSet {
    private map: Map<HTMLElement, Set<number>>;

    constructor() {
        this.map = new Map();
    }

    add(value: Context): void {
        if (!this.map.has(value.parentElement)) {
            this.map.set(value.parentElement, new Set());
        }
        this.map.get(value.parentElement)!.add(value.index);
    }

    has(value: Context): boolean {
        return (
            this.map.has(value.parentElement) &&
            this.map.get(value.parentElement)!.has(value.index)
        );
    }

    delete(value: Context): boolean {
        const set = this.map.get(value.parentElement);
        if (!set) return false;
        const deleted = set.delete(value.index);
        if (set.size === 0) {
            this.map.delete(value.parentElement);
        }
        return deleted;
    }

    clear(): void {
        this.map.clear();
    }

    forEach(callback: (value: Context) => void): void {
        this.map.forEach((set, parentElement) => {
            set.forEach((index) => {
                callback({ parentElement, index });
            });
        });
    }

    values(): Context[] {
        const values: Context[] = [];
        this.map.forEach((set, parentElement) => {
            set.forEach((index) => {
                values.push({ parentElement, index });
            });
        });
        return values;
    }
}
