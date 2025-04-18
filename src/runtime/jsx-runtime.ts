export type Props = Record<string, any>;

export type VirtualNode = VirtualElement | VirtualText | null | undefined;

export type VirtualText = {
    value: string;
    element: Text | null;
};

export type VirtualElement = {
    tag: string | Function;
    props: Props;
    children: VirtualNode[];
    element: HTMLElement | null;
    componentInstance?: {
        node: VirtualNode;
    };
};

/**
 * Checks if a virtual node is a text node.
 * This is used internally to determine if a node should be rendered as text content.
 *
 * @param {VirtualNode} node - The virtual node to check
 * @returns {boolean} True if the node is a text node
 */
export function isText(node: VirtualNode): node is VirtualText {
    return (node as VirtualText)?.value !== undefined;
}

/**
 * Checks if a virtual node is an element node.
 * This is used internally to determine if a node should be rendered as an HTML element.
 *
 * @param {VirtualNode} node - The virtual node to check
 * @returns {boolean} True if the node is an element node
 */
export function isElement(node: VirtualNode): node is VirtualElement {
    return (node as VirtualElement)?.tag !== undefined;
}

/**
 * Creates a new virtual node (VNode) from a tag, props, and children.
 * This is the core function for creating elements in the framework.
 *
 * @param {string | Function} tag - The tag name or component function
 * @param {Props} props - The properties to attach to the element
 * @param {...any[]} children - The children of the element
 * @returns {VirtualNode} The created virtual node
 */
export function createElement(
    tag: string | Function,
    props: Props,
    ...children: any[]
): VirtualNode {
    return {
        tag,
        props: props || {},
        children: children.map((child) =>
            child === null || child === undefined || typeof child === "object"
                ? child
                : {
                      value: child.toString(),
                      element: null,
                  }
        ),
        element: null,
    };
}

/**
 * Creates a fragment node that can contain multiple children without creating an extra DOM node.
 * This is used when you need to return multiple elements from a component.
 *
 * @returns {VirtualNode} A fragment virtual node
 */
export function Fragment(): VirtualNode {
    return null;
}
