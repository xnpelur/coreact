export type Props = Record<string, any>;
export type Children = VirtualNode[];

export type VirtualNode = VirtualElement | string | number | null | undefined;

export type VirtualElement = {
    tag: string | Function;
    props: Props;
    children: Children;
};

export function createElement(
    tag: string | Function,
    props: any,
    ...children: any[]
): VirtualNode {
    return {
        tag,
        props: props || {},
        children,
    };
}

export function Fragment(props: { children: Children }): VirtualNode {
    return {
        tag: "",
        props: {},
        children: props.children,
    };
}
