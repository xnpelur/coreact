export function serializeComponentId(
    fn: Function,
    parentElement: HTMLElement,
    path: number[]
) {
    const fnName = fn.name || "anonymous";
    const tagName = parentElement.tagName.toLowerCase();
    const pathStr = path.join(".");
    return `${fnName}|${tagName}|${pathStr}`;
}

export function deserializeComponentId(componentId: string) {
    const [fnName, parentTagName, pathStr] = componentId.split("|");
    const path = pathStr.split(".").map(Number);
    return {
        fnName,
        parentElement: document.querySelector(parentTagName) as HTMLElement,
        path,
    };
}
