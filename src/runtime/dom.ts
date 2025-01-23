import { Fragment, Props, VirtualNode } from "./jsx-runtime";

type DOMNode = HTMLElement | Text;

export function mount(vnode: VirtualNode, parent: HTMLElement) {
    const rendered = render(vnode);
    rendered.forEach((element) => parent.appendChild(element));
}

function render(vnode: VirtualNode): DOMNode[] {
    if (vnode === null || vnode === undefined) {
        return [];
    }

    if (typeof vnode === "string" || typeof vnode === "number") {
        return [document.createTextNode(vnode.toString())];
    }

    if (vnode.tag === Fragment) {
        const rendered: DOMNode[] = [];

        vnode.children.forEach((child) => {
            const renderedPart = render(child);
            rendered.push(...renderedPart);
        });

        return rendered;
    }

    if (typeof vnode.tag === "string") {
        const element = document.createElement(vnode.tag);

        setProps(element, vnode.props);

        vnode.children.forEach((child) => {
            mount(child, element);
        });

        return [element];
    }

    const Component = vnode.tag;
    const componentNode = Component(vnode.props);

    return render(componentNode);
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
