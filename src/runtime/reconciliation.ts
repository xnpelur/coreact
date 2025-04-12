import { isElement, isText, Props, VirtualNode } from "./jsx-runtime";

/**
 * Reconciles an old virtual node with a new one, updating the DOM efficiently
 */
export function reconcile(
    oldNode: VirtualNode,
    newNode: VirtualNode,
    parentElement: HTMLElement,
    index: number,
    mount: (vnode: VirtualNode, parent: HTMLElement, index?: number) => void,
    unmount: (vnode: VirtualNode, keepEffects: boolean) => void
): void {
    // If nodes are not the same type, replace completely
    if (!isSameNode(oldNode, newNode)) {
        unmount(oldNode, true);
        mount(newNode, parentElement, index);
        return;
    }

    // Handle text nodes
    if (isText(oldNode) && isText(newNode)) {
        if (oldNode.element) {
            // Always update the text content to ensure proper rendering
            oldNode.element.nodeValue = newNode.value;
            newNode.element = oldNode.element;
        }
        return;
    }

    // Handle element nodes
    if (isElement(oldNode) && isElement(newNode) && oldNode.element) {
        newNode.element = oldNode.element;

        if (
            typeof oldNode.tag === "string" &&
            typeof newNode.tag === "string"
        ) {
            updateProps(oldNode.element, oldNode.props, newNode.props);

            reconcileChildren(
                oldNode.element,
                oldNode.children,
                newNode.children,
                mount,
                unmount
            );
        }

        if (
            typeof oldNode.tag === "function" &&
            typeof newNode.tag === "function"
        ) {
            if (
                oldNode.componentInstance?.node &&
                newNode.componentInstance?.node
            ) {
                reconcile(
                    oldNode.componentInstance.node,
                    newNode.componentInstance.node,
                    parentElement,
                    index,
                    mount,
                    unmount
                );
            }
        }
    }
}

/**
 * Compares two virtual nodes and returns true if they represent the same DOM element
 */
function isSameNode(oldNode: VirtualNode, newNode: VirtualNode): boolean {
    if (oldNode === null || newNode === null) {
        return oldNode === newNode;
    }

    if (isText(oldNode) && isText(newNode)) {
        return true;
    }

    if (isElement(oldNode) && isElement(newNode)) {
        if (typeof oldNode.tag !== typeof newNode.tag) {
            return false;
        }

        if (
            typeof oldNode.tag === "string" &&
            typeof newNode.tag === "string"
        ) {
            return oldNode.tag === newNode.tag;
        }

        if (
            typeof oldNode.tag === "function" &&
            typeof newNode.tag === "function"
        ) {
            return oldNode.tag === newNode.tag;
        }
    }

    return false;
}

/**
 * Updates props on an existing DOM element
 */
function updateProps(
    element: HTMLElement,
    oldProps: Props,
    newProps: Props
): void {
    // Remove old props that are no longer present
    Object.keys(oldProps).forEach((key) => {
        if (key.startsWith("on") && typeof oldProps[key] === "function") {
            const eventName = key.toLowerCase().substring(2);
            element.removeEventListener(eventName, oldProps[key]);
        } else if (!(key in newProps)) {
            element.removeAttribute(key);
        }
    });

    // Add or update new props
    Object.entries(newProps).forEach(([key, value]) => {
        if (oldProps[key] === value) {
            return;
        }

        if (key.startsWith("on") && typeof value === "function") {
            const eventName = key.toLowerCase().substring(2);
            if (typeof oldProps[key] === "function") {
                element.removeEventListener(eventName, oldProps[key]);
            }
            element.addEventListener(eventName, value);
        } else {
            // Special handling for value property on input elements to maintain cursor position
            if (key === "value" && element instanceof HTMLInputElement) {
                const inputElement = element as HTMLInputElement;
                const selectionStart = inputElement.selectionStart;
                const selectionEnd = inputElement.selectionEnd;
                const selectionDirection = inputElement.selectionDirection;

                if (inputElement.value !== value) {
                    inputElement.value = value as string;
                }

                if (
                    document.activeElement === inputElement &&
                    selectionStart !== null &&
                    selectionEnd !== null
                ) {
                    inputElement.setSelectionRange(
                        selectionStart,
                        selectionEnd,
                        selectionDirection || undefined
                    );
                }
            } else {
                element.setAttribute(key, value as string);
            }
        }
    });
}

/**
 * Reconciles children of a virtual node
 */
function reconcileChildren(
    parentElement: HTMLElement,
    oldChildren: VirtualNode[],
    newChildren: VirtualNode[],
    mount: (vnode: VirtualNode, parent: HTMLElement, index?: number) => void,
    unmount: (vnode: VirtualNode, keepEffects: boolean) => void
): void {
    const maxLength = Math.max(oldChildren.length, newChildren.length);

    for (let i = 0; i < maxLength; i++) {
        const oldChild = oldChildren[i];
        const newChild = newChildren[i];

        if (oldChild && !newChild) {
            if (isElement(oldChild) && oldChild.element) {
                oldChild.element.remove();
            } else if (isText(oldChild) && oldChild.element) {
                oldChild.element.remove();
            }
        } else if (!oldChild && newChild) {
            // This will be handled by the mount function in dom.ts
        } else if (oldChild && newChild) {
            reconcile(oldChild, newChild, parentElement, i, mount, unmount);
        }
    }
}
