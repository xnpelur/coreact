import { context, ContextMap } from "@/runtime/context";

const effectMap = new ContextMap<
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
    if (!context) {
        throw new Error("useEffect must be called within a component");
    }

    if (!effectMap.has(context)) {
        effectMap.set(context, []);
    }

    const effectList = effectMap.get(context)!;
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
 */
export function clearEffects() {
    const effectList = effectMap.get(context!);
    if (effectList) {
        for (const effectEntry of effectList) {
            if (effectEntry.cleanup) {
                effectEntry.cleanup();
            }
        }
        effectMap.delete(context!);
    }
}
