import { Fragment, Props, VirtualNode } from "./jsx-runtime";

export function render(
    vnode: VirtualNode,
    parent: HTMLElement
): HTMLElement | Text | null {
    if (vnode === null || vnode === undefined) {
        return null;
    }

    if (typeof vnode === "string" || typeof vnode === "number") {
        const textNode = document.createTextNode(vnode.toString());
        parent.appendChild(textNode);
        return textNode;
    }

    if (typeof vnode.tag === "string") {
        const element = document.createElement(vnode.tag);

        setProps(element, vnode.props);

        vnode.children.forEach((child) => {
            render(child, element);
        });

        parent.appendChild(element);

        return element;
    }

    if (vnode.tag === Fragment) {
        vnode.children.forEach((child) => {
            render(child, parent);
        });

        return parent;
    }

    const Component = vnode.tag;
    const componentNode = Component(vnode.props);

    render(componentNode, parent);

    return null;
}

function setProps(element: HTMLElement, props: Props) {
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith("on") && typeof value === "function") {
            const eventName = key.toLowerCase().substring(2);
            element.addEventListener(eventName, value);
        } else {
            element.setAttribute(key, value);
        }
    });
}
