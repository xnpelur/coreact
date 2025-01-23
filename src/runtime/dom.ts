import { Fragment, isElement, isText, Props, VirtualNode } from "./jsx-runtime";

type DOMNode = HTMLElement | Text;

export function mount(vnode: VirtualNode, parent: HTMLElement) {
    const rendered = render(vnode);
    rendered.forEach((element) => parent.appendChild(element));
}

export function unmount(vnode: VirtualNode) {
    if (vnode?.element) {
        vnode.element.remove();
    }

    if (isElement(vnode)) {
        vnode.children.forEach(unmount);
        unmount(vnode.componentInstance?.node);
    }
}

function render(vnode: VirtualNode): DOMNode[] {
    if (vnode === null || vnode === undefined) {
        return [];
    }

    if (isText(vnode)) {
        vnode.element = document.createTextNode(vnode.value);
        return [vnode.element];
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

        vnode.element = element;

        return [element];
    }

    const Component = vnode.tag;
    const componentNode = Component(vnode.props);

    vnode.componentInstance = {
        node: componentNode,
    };

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
