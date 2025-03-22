import { Fragment, isElement, isText, Props, VirtualNode } from "./jsx-runtime";

type DOMNode = HTMLElement | Text;

export type ComponentInfo = {
    fn: Function;
    parentElement: HTMLElement;
    path: number[];
};

let currentComponentInfo: ComponentInfo | null = null;

const componentsVirtualNodes = new Map<ComponentInfo, VirtualNode>();

export function getCurrentComponentInfo(): ComponentInfo | null {
    return currentComponentInfo;
}

export function mount(vnode: VirtualNode, parent: HTMLElement, index?: number) {
    const rendered = render(vnode, parent, index ?? 0);

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

export function unmount(vnode: VirtualNode) {
    if (vnode?.element) {
        vnode.element.remove();
    }

    if (isElement(vnode)) {
        vnode.children.forEach(unmount);
        unmount(vnode.componentInstance?.node);
    }
}

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

    unmount(vnode);
    mount(vnode, parentElement, index);
}

function render(
    vnode: VirtualNode,
    parentElement: HTMLElement,
    index: number
): DOMNode[] {
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
            const renderedPart = render(child, parentElement, index); // TODO: add path handling
            rendered.push(...renderedPart);
        });

        return rendered;
    }

    if (typeof vnode.tag === "string") {
        const element = document.createElement(vnode.tag);

        setProps(element, vnode.props);

        vnode.children.forEach((child, childIndex) => {
            mount(child, element, childIndex);
        });

        vnode.element = element;

        return [element];
    }

    const Component = vnode.tag;

    currentComponentInfo = {
        fn: Component,
        parentElement,
        path: [index],
    };

    vnode.props.children = vnode.children;
    const componentNode = Component(vnode.props);

    componentsVirtualNodes.set(currentComponentInfo, vnode);

    currentComponentInfo = null;

    vnode.componentInstance = {
        node: componentNode,
    };

    return render(componentNode, parentElement, index);
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
