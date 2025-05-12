import { getCurrentComponentInfo } from "@/runtime/dom";

const effectMap = new Map<
    string,
    {
        effect: () => void | (() => void);
        deps: any[] | null;
        cleanup?: () => void;
    }[]
>();

/**
 * Creates a side effect that runs after rendering.
 * This is similar to React's useEffect hook and allows for cleanup functions.
 *
 * @param {() => void | (() => void)} effect - The effect function to run
 * @param {any[]} [deps] - Optional dependency array to control when the effect runs
 * @throws {Error} If called outside of a component context
 */
export function useEffect(effect: () => void | (() => void), deps?: any[]) {
    const componentInfo = getCurrentComponentInfo();
    if (!componentInfo) {
        throw new Error("useEffect must be called within a component");
    }

    const json = JSON.stringify(componentInfo);

    if (!effectMap.has(json)) {
        effectMap.set(json, []);
    }

    const effectList = effectMap.get(json)!;
    const previousEffect = effectList[effectList.length - 1];

    const hasChanged =
        !previousEffect ||
        !deps ||
        !previousEffect.deps ||
        deps.some((dep, i) => dep !== previousEffect.deps![i]);

    if (hasChanged) {
        if (previousEffect?.cleanup) {
            previousEffect.cleanup();
            // Mark as cleaned up to avoid double cleanup during unmount
            previousEffect.cleanup = undefined;
        }
        const cleanup = effect();
        effectList.push({
            effect,
            deps: deps ?? null,
            cleanup: cleanup ?? undefined,
        });
    }
}

/**
 * Clears all effects associated with a component.
 * This function is called when a component is unmounted to clean up any side effects.
 *
 * @param {any} componentInfo - Information about the component to clear effects for
 */
export function clearEffects(componentInfo: any) {
    const json = JSON.stringify(componentInfo);
    const effectList = effectMap.get(json);
    if (effectList) {
        for (const effectEntry of effectList) {
            if (effectEntry.cleanup) {
                effectEntry.cleanup();
            }
        }
        effectMap.delete(json);
    }
}
