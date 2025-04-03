import { getCurrentComponentInfo } from "./dom";

const effectMap = new Map<
    string,
    {
        effect: () => void | (() => void);
        deps: any[] | null;
        cleanup?: () => void;
    }[]
>();

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
        }
        const cleanup = effect();
        effectList.push({
            effect,
            deps: deps ?? null,
            cleanup: cleanup ?? undefined,
        });
    }
}

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
