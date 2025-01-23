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

export function isText(node: VirtualNode): node is VirtualText {
    return (node as VirtualText)?.value !== undefined;
}

export function isElement(node: VirtualNode): node is VirtualElement {
    return (node as VirtualElement)?.tag !== undefined;
}

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

export function Fragment(): VirtualNode {
    return null;
}
