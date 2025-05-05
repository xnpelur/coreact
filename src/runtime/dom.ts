import { clearEffects } from "./effect";
import { Fragment, isElement, isText, Props, VirtualNode } from "./jsx-runtime";
import { reconcile } from "./reconciliation";
import { resetHookIndices } from "./state";
import { cleanupComponent } from "./store";

type DOMNode = HTMLElement | Text;

/**
 * Information about a component being rendered.
 * This includes the component function, its parent element, and its path in the DOM.
 */
export type ComponentInfo = {
    fn: Function;
    parentElement: HTMLElement;
    path: number[];
};

let currentComponentInfo: ComponentInfo | null = null;

const componentsVirtualNodes = new Map<ComponentInfo, VirtualNode>();

/**
 * Gets the current component information being rendered.
 * This is used internally by the framework to track the current component
 * context during rendering operations.
 *
 * @returns {ComponentInfo | null} The current component information or null if none
 */
export function getCurrentComponentInfo(): ComponentInfo | null {
    return currentComponentInfo;
}

/**
 * Mounts a virtual node (VNode) into the DOM.
 * This function takes a VNode and renders it into the specified parent element.
 * It handles the actual DOM insertion of the rendered elements.
 *
 * @param {VirtualNode} vnode - The virtual node to mount
 * @param {HTMLElement} parent - The parent element to mount the vnode into
 * @param {number} [index=0] - Optional index to insert the node at
 */
export function mount(
    vnode: VirtualNode,
    parent: HTMLElement,
    index?: number,
    parentPath: number[] = [],
    inSVG: boolean = false
) {
    const rendered = render(vnode, parent, index ?? 0, parentPath, inSVG);

    let child: Element | undefined;
    if (index !== undefined) {
        child = parent.children[index];
    }

    rendered.forEach((element) => {
        if (child) {
            parent.insertBefore(element, child);
        } else {
            parent.appendChild(element);
        }
    });
}

/**
 * Unmounts a virtual node from the DOM.
 * This function removes the virtual node and its children from the DOM.
 * It can optionally keep effects if needed.
 *
 * @param {VirtualNode} vnode - The virtual node to unmount
 * @param {boolean} [keepEffects=false] - Whether to keep effects when unmounting
 * @throws {Error} If the unmounted element doesn't have a parent element
 */
export function unmount(
    vnode: VirtualNode,
    keepEffects: boolean = false,
    parentPath: number[] = []
) {
    if (
        isElement(vnode) &&
        typeof vnode.tag === "function" &&
        vnode.componentInstance?.node?.element
    ) {
        const element = vnode.componentInstance.node.element;

        if (!element.parentElement) {
            throw new Error(
                "Unmounted element should always have parent element"
            );
        }

        const parentElement = element.parentElement;
        const parentChildren = Array.from(parentElement.children);

        const index = parentChildren.findIndex((value) => value === element);

        const componentInfo: ComponentInfo = {
            fn: vnode.tag,
            parentElement: element.parentElement,
            path: [...parentPath, index],
        };

        if (!keepEffects) {
            clearEffects(componentInfo);
            cleanupComponent(componentInfo);
        }
    }

    if (isElement(vnode) && vnode.element) {
        vnode.element.remove();
    }

    if (isElement(vnode)) {
        vnode.children.forEach((child, childIndex) =>
            unmount(child, keepEffects, parentPath.concat(childIndex))
        );
        unmount(vnode.componentInstance?.node, keepEffects, parentPath);
    }
}

/**
 * Re-renders a component by updating its virtual node and reconciling with the DOM.
 * This function handles the complete re-rendering process of a component,
 * including creating new instances, reconciling with the old state, and updating the DOM.
 *
 * @param {ComponentInfo} componentInfo - Information about the component to rerender
 * @throws {Error} If the component is not found or parent element is not found
 */
export function rerender(componentInfo: ComponentInfo) {
    const vnode = componentsVirtualNodes.get(componentInfo);
    if (!isElement(vnode)) {
        throw new Error("Component not found");
    }

    const parentElement = vnode.componentInstance?.node?.element?.parentElement;
    if (!parentElement) {
        throw new Error("Parent element not found");
    }

    const index = componentInfo.path[componentInfo.path.length - 1];
    const parentPath = componentInfo.path.slice(0, -1);

    // Store the old component instance node for reconciliation
    const oldComponentNode = vnode.componentInstance?.node;

    // Create a new component instance
    currentComponentInfo = componentInfo;
    const componentKey = JSON.stringify(componentInfo);
    // Reset hook indices before rendering the component
    resetHookIndices(componentKey);
    const Component = vnode.tag as Function;
    const newComponentNode = Component(vnode.props);
    currentComponentInfo = null;

    // Update the component instance with the new node
    vnode.componentInstance = {
        node: newComponentNode,
    };

    // Reconcile the old and new nodes
    if (oldComponentNode) {
        reconcile(
            oldComponentNode,
            newComponentNode,
            parentElement,
            index,
            (v, p, i) => mount(v, p, i, parentPath),
            (v, k) => unmount(v, k, parentPath)
        );
    } else {
        // Fallback to mount if there's no old node to reconcile with
        mount(newComponentNode, parentElement, index, parentPath);
    }
}

function render(
    vnode: VirtualNode,
    parentElement: HTMLElement,
    index: number,
    parentPath: number[] = [],
    inSVG: boolean = false
): DOMNode[] {
    if (typeof vnode === "boolean" || vnode === null || vnode === undefined) {
        return [];
    }

    if (isText(vnode)) {
        vnode.element = document.createTextNode(vnode.value);
        return [vnode.element];
    }

    if (vnode.tag === Fragment) {
        const rendered: DOMNode[] = [];

        vnode.children.forEach((child, childIndex) => {
            const renderedPart = render(
                child,
                parentElement,
                childIndex,
                parentPath.concat(childIndex),
                inSVG
            );
            rendered.push(...renderedPart);
        });

        return rendered;
    }

    if (typeof vnode.tag === "string") {
        // Detect if this or any parent is an SVG element
        const isSVG = inSVG || vnode.tag === "svg";
        let element: HTMLElement;
        if (isSVG) {
            element = document.createElementNS(
                "http://www.w3.org/2000/svg",
                vnode.tag
            ) as unknown as HTMLElement;
        } else {
            element = document.createElement(vnode.tag);
        }

        setProps(element, vnode.props);

        vnode.children.forEach((child, childIndex) => {
            mount(
                child,
                element,
                childIndex,
                parentPath.concat(childIndex),
                isSVG
            );
        });

        vnode.element = element;

        return [element];
    }

    const Component = vnode.tag;

    const fullPath = parentPath.concat(index);
    currentComponentInfo = {
        fn: Component,
        parentElement,
        path: fullPath,
    };

    const componentKey = JSON.stringify(currentComponentInfo);
    // Reset hook indices before rendering the component
    resetHookIndices(componentKey);

    vnode.props.children = vnode.children;
    const componentNode = Component(vnode.props);

    componentsVirtualNodes.set(currentComponentInfo, vnode);

    currentComponentInfo = null;

    vnode.componentInstance = {
        node: componentNode,
    };

    return render(componentNode, parentElement, index, fullPath, inSVG);
}

function setProps(element: HTMLElement, props: Props) {
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith("on") && typeof value === "function") {
            const eventName = key.toLowerCase().substring(2);
            element.addEventListener(eventName, value);
        } else if (key === "value" && element instanceof HTMLInputElement) {
            // Special handling for input value to maintain cursor position
            element.value = value as string;
        } else if (key === "className" && typeof value === "string") {
            element.setAttribute("class", value);
            // Import dynamically to avoid circular dependencies
            import("./tailwind")
                .then(({ tw }) => {
                    const styles = tw(value);
                    Object.entries(styles).forEach(
                        ([styleName, styleValue]) => {
                            element.style[styleName as any] =
                                styleValue as string;
                        }
                    );
                })
                .catch((err) => {
                    console.warn("Tailwind module not available:", err);
                });
        } else if (key === "style" && typeof value === "object") {
            Object.entries(value).forEach(([styleName, styleValue]) => {
                element.style[styleName as any] = styleValue as string;
            });
        } else {
            element.setAttribute(key, value);
        }
    });
}
