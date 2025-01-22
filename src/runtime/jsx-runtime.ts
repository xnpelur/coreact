export type Props = Record<string, any>;
export type Children = (string | Node)[];

export function createElement(
    type: string | Function,
    props: any,
    ...children: any[]
) {
    if (typeof type === "function") {
        return type(props);
    }

    const element = document.createElement(type);

    for (const prop in props) {
        if (prop === "onClick") {
            element.addEventListener("click", props[prop]);
        } else {
            element.setAttribute(prop, props[prop]);
        }
    }

    children.flat().forEach((child) => {
        if (child === null || child === undefined) {
            return;
        }

        const node =
            typeof child === "object"
                ? child
                : document.createTextNode(String(child));

        element.appendChild(node);
    });

    return element;
}

export const Fragment = (props: { children: Children }) => {
    const fragment = document.createDocumentFragment();
    props.children.forEach((child) => {
        if (typeof child === "string") {
            fragment.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            fragment.appendChild(child);
        }
    });
    return fragment;
};
