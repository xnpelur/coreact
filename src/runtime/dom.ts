import {
    Fragment,
    isElement,
    isText,
    Props,
    VirtualNode,
} from "@/runtime/jsx-runtime";
import { reconcile } from "@/runtime/reconciliation";
import { resetHookIndices } from "@/runtime/hooks/state";
import { clearEffects } from "@/runtime/hooks/effect";
import { clearStores } from "@/runtime/store";
import {
    clearContext,
    context,
    Context,
    ContextMap,
    setContext,
} from "@/runtime/context";

type DOMNode = HTMLElement | Text;

const componentsVirtualNodes = new ContextMap<VirtualNode>();
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
    inSVG: boolean = false
) {
    const rendered = render(vnode, parent, index ?? 0, inSVG);

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
export function unmount(vnode: VirtualNode, keepEffects: boolean = false) {
    if (!isElement(vnode)) {
        return;
    }

    if (
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

        if (!keepEffects) {
            setContext(parentElement, index);

            clearEffects();
            clearStores();

            clearContext();
        }
    }

    if (vnode.element) {
        vnode.element.remove();
    }

    if (vnode.componentInstance) {
        unmount(vnode.componentInstance.node, keepEffects);
    } else {
        vnode.children.forEach((child, childIndex) =>
            unmount(child, keepEffects)
        );
    }
}

/**
 * Re-renders a component by updating its virtual node and reconciling with the DOM.
 * This function handles the complete re-rendering process of a component,
 * including creating new instances, reconciling with the old state, and updating the DOM.
 *
 * @throws {Error} If the component is not found or parent element is not found
 */
export function rerender(componentContext: Context) {
    const vnode = componentsVirtualNodes.get(componentContext);
    if (!isElement(vnode)) {
        throw new Error("Component not found");
    }

    // Store the old component instance node for reconciliation
    const oldComponentNode = vnode.componentInstance?.node;

    setContext(componentContext.parentElement, componentContext.index);

    // Reset hook indices before rendering the component
    resetHookIndices();
    const Component = vnode.tag as Function;
    const newComponentNode = Component(vnode.props);

    // Update the component instance with the new node
    vnode.componentInstance = {
        node: newComponentNode,
    };

    componentsVirtualNodes.set(context!, vnode);

    clearContext();

    // Reconcile the old and new nodes
    if (oldComponentNode) {
        reconcile(
            oldComponentNode,
            newComponentNode,
            componentContext.parentElement,
            componentContext.index,
            mount,
            unmount
        );
    } else {
        // Fallback to mount if there's no old node to reconcile with
        mount(
            newComponentNode,
            componentContext.parentElement,
            componentContext.index
        );
    }
}

function render(
    vnode: VirtualNode,
    parentElement: HTMLElement,
    index: number,
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
            mount(child, element, childIndex, isSVG);
        });

        vnode.element = element;

        return [element];
    }

    const Component = vnode.tag;

    setContext(parentElement, index);

    // Reset hook indices before rendering the component
    resetHookIndices();

    vnode.props.children = vnode.children;
    const componentNode = Component(vnode.props);

    componentsVirtualNodes.set(context!, vnode);

    clearContext();

    vnode.componentInstance = {
        node: componentNode,
    };

    return render(componentNode, parentElement, index, inSVG);
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
        } else if (key === "style" && typeof value === "object") {
            Object.entries(value).forEach(([styleName, styleValue]) => {
                element.style[styleName as any] = styleValue as string;
            });
        } else {
            element.setAttribute(key, value);
        }
    });
}
