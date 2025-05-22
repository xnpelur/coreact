/**
 * Minimal Tailwind CSS core implementation
 * This provides the core functionality of Tailwind with a minimal footprint
 */

const propsWithColor = {
    bg: ["background-color"],
    text: ["color"],
    border: ["border-color"],
};

const propsWithSpacing = {
    m: ["margin"],
    p: ["padding"],
    mx: ["margin-left", "margin-right"],
    my: ["margin-top", "margin-bottom"],
    px: ["padding-left", "padding-right"],
    py: ["padding-top", "padding-bottom"],
    mt: ["margin-top"],
    mr: ["margin-right"],
    mb: ["margin-bottom"],
    ml: ["margin-left"],
    pt: ["padding-top"],
    pr: ["padding-right"],
    pb: ["padding-bottom"],
    pl: ["padding-left"],
    gap: ["gap"],
    w: ["width"],
    h: ["height"],
    leading: ["line-height"],
    top: ["top"],
    right: ["right"],
    bottom: ["bottom"],
    left: ["left"],
    "min-h": ["min-height"],
    "min-w": ["min-width"],
};

const directions = {
    t: "top",
    r: "right",
    b: "bottom",
    l: "left",
};

const utilities: Record<string, Record<string, string>> = {
    // Display
    block: { display: "block" },
    "inline-block": { display: "inline-block" },
    inline: { display: "inline" },
    flex: { display: "flex" },
    "inline-flex": { display: "inline-flex" },
    grid: { display: "grid" },
    hidden: { display: "none" },

    // Position
    sticky: { position: "sticky" },
    absolute: { position: "absolute" },
    relative: { position: "relative" },
    fixed: { position: "fixed" },

    // Flex
    "flex-row": { "flex-direction": "row" },
    "flex-col": { "flex-direction": "column" },
    "flex-wrap": { "flex-wrap": "wrap" },
    "flex-nowrap": { "flex-wrap": "nowrap" },
    "justify-start": { "justify-content": "flex-start" },
    "justify-center": { "justify-content": "center" },
    "justify-end": { "justify-content": "flex-end" },
    "justify-between": { "justify-content": "space-between" },
    "justify-around": { "justify-content": "space-around" },
    "items-start": { "align-items": "flex-start" },
    "items-center": { "align-items": "center" },
    "items-end": { "align-items": "flex-end" },
    "items-stretch": { "align-items": "stretch" },
    "flex-1": { flex: "1" },
    grow: { "flex-grow": "1" },

    // Align self
    "self-auto": { "align-self": "auto" },
    "self-start": { "align-self": "flex-start" },
    "self-center": { "align-self": "center" },
    "self-end": { "align-self": "flex-end" },
    "self-stretch": { "align-self": "stretch" },
    "self-baseline": { "align-self": "baseline" },

    // Text alignment
    "text-left": { "text-align": "left" },
    "text-center": { "text-align": "center" },
    "text-right": { "text-align": "right" },
    "text-justify": { "text-align": "justify" },

    // Overflow
    "overflow-hidden": { overflow: "hidden" },
    "overflow-auto": { overflow: "auto" },
    "overflow-scroll": { overflow: "scroll" },
    "overflow-x-hidden": { "overflow-x": "hidden" },
    "overflow-x-auto": { "overflow-x": "auto" },
    "overflow-x-scroll": { "overflow-x": "scroll" },
    "overflow-y-hidden": { "overflow-y": "hidden" },
    "overflow-y-auto": { "overflow-y": "auto" },
    "overflow-y-scroll": { "overflow-y": "scroll" },
    "overflow-visible": { overflow: "visible" },

    // Cursor
    "cursor-pointer": { cursor: "pointer" },
    "cursor-default": { cursor: "default" },
    "cursor-move": { cursor: "move" },
    "cursor-grab": { cursor: "grab" },

    // Font
    "font-sans": { "font-family": "var(--font-sans)" },
    "font-serif": { "font-family": "var(--font-serif)" },
    "font-mono": { "font-family": "var(--font-mono)" },

    // Lists
    "list-disc": { "list-style-type": "disc" },
    "list-decimal": { "list-style-type": "decimal" },
    "list-none": { "list-style-type": "none" },
    "list-inside": { "list-style-position": "inside" },
    "list-outside": { "list-style-position": "outside" },
};

function parse(className: string): [string, string][] {
    if (className in utilities) {
        return Object.entries(utilities[className]);
    }

    // Handle spacing classes
    const spacingMatch = className.match(
        /^(-?)(m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl|gap|w|h|leading|top|right|bottom|left|min-h|min-w)-(\d{1,2}|full|auto|screen)$/
    );
    if (spacingMatch) {
        const [, minus, prefix, value] = spacingMatch;
        if (prefix in propsWithSpacing) {
            let cssValue: string;
            if (value === "full") {
                cssValue = "100%";
            } else if (value === "auto") {
                cssValue = "auto";
            } else if (value === "screen") {
                cssValue = prefix === "w" ? "100vw" : "100vh";
            } else {
                cssValue = `calc(var(--spacing) *${
                    parseInt(value) * (minus ? -1 : 1)
                })`;
            }

            const result = [];
            for (const prop of propsWithSpacing[
                prefix as keyof typeof propsWithSpacing
            ]) {
                result.push([prop, cssValue] as [string, string]);
            }
            return result;
        }
    }

    // Font size
    const fontSizeMatch = className.match(
        /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/
    );
    if (fontSizeMatch) {
        const [, size] = fontSizeMatch;
        return [
            ["font-size", `var(--text-${size})`],
            ["line-height", `var(--text-${size}--line-height)`],
        ];
    }

    // Font weight
    const fontWeightMatch = className.match(
        /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
    );
    if (fontWeightMatch) {
        const [, weight] = fontWeightMatch;
        return [["font-weight", `var(--font-weight-${weight})`]];
    }

    // Line height
    const lineHeightMatch = className.match(
        /^leading-(tight|snug|normal|relaxed|loose)$/
    );
    if (lineHeightMatch) {
        const [, lineHeight] = lineHeightMatch;
        return [["line-height", `var(--leading-${lineHeight})`]];
    }

    // Max width
    const maxWidthMatch = className.match(
        /^max-w-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|screen|full)$/
    );
    if (maxWidthMatch) {
        const [, size] = maxWidthMatch;
        if (size === "screen") {
            return [["max-width", "100vw"]];
        } else if (size === "full") {
            return [["max-width", "100%"]];
        }
        return [["max-width", `var(--container-${size})`]];
    }

    // Border width
    const borderWidthMatch = className.match(
        /^border(?:-(t|r|b|l))?(?:-(\d{1,2}))?$/
    );
    if (borderWidthMatch) {
        const [, direction, value] = borderWidthMatch;
        const cssValue = value ? `${value}px` : "1px";
        return [
            [
                `border-${
                    directions[direction as keyof typeof directions]
                }-width`,
                cssValue,
            ],
        ];
    }

    // Border radius
    const borderRadiusMatch = className.match(
        /^rounded(?:-(t|r|b|l))?-(xs|sm|md|lg|xl|2xl|3xl|4xl|none|full)$/
    );
    if (borderRadiusMatch) {
        const [, side, size] = borderRadiusMatch;

        let cssValue: string;
        if (size === "none") {
            cssValue = "0";
        } else if (size === "full") {
            cssValue = "9999px";
        } else {
            cssValue = `var(--radius-${size})`;
        }

        if (side === "t") {
            return [
                ["border-top-left-radius", cssValue],
                ["border-top-right-radius", cssValue],
            ];
        } else if (side === "r") {
            return [
                ["border-top-right-radius", cssValue],
                ["border-bottom-right-radius", cssValue],
            ];
        } else if (side === "b") {
            return [
                ["border-bottom-left-radius", cssValue],
                ["border-bottom-right-radius", cssValue],
            ];
        } else if (side === "l") {
            return [
                ["border-top-left-radius", cssValue],
                ["border-bottom-left-radius", cssValue],
            ];
        }

        return [["border-radius", cssValue]];
    }

    // Z-index
    const zIndexMatch = className.match(/^z-(\d{1,2}|auto)$/);
    if (zIndexMatch) {
        const [, value] = zIndexMatch;
        if (value === "auto") {
            return [["z-index", "auto"]];
        }
        return [["z-index", value]];
    }

    // Handle color classes
    const colorMatch = className.match(
        /^([a-z]+)-([a-z]+)(?:-(\d{2,3}))?(?:\/(\d{1,3}))?$/
    );
    if (colorMatch) {
        const [, prefix, color, shade, opacity] = colorMatch;
        if (prefix in propsWithColor) {
            const colorValue = `var(--color-${color}${
                shade ? `-${shade}` : ""
            })`;
            const cssValue = opacity
                ? `color-mix(in srgb, ${colorValue} ${opacity}%, transparent)`
                : colorValue;

            const result = [];
            for (const prop of propsWithColor[
                prefix as keyof typeof propsWithColor
            ]) {
                result.push([prop, cssValue] as [string, string]);
            }
            return result;
        }
    }

    return [];
}

type ParseResult = {
    variants: string[];
    properties: [string, string][];
};

/**
 * Parse a string of Tailwind class names and return a CSS object
 * @param className - Tailwind class name
 * @returns CSS object with styles
 */
export function tw(className: string): ParseResult {
    if (className.includes(":")) {
        const parts = className.split(":");
        const actualClassName = parts.pop()!;
        const variants = parts;

        return {
            variants,
            properties: parse(actualClassName),
        };
    }

    return {
        variants: [],
        properties: parse(className),
    };
}
