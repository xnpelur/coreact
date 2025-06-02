declare namespace JSX {
    type HTMLAttributes = {
        [key: string]: any;
        children?: any;
        onClick?: (event: any) => void;
    };

    interface IntrinsicElements {
        [elemName: string]: HTMLAttributes;
    }
}
