/**
 * Minimal Tailwind CSS core implementation
 * This provides the core functionality of Tailwind with a minimal footprint
 */

const propsWithColor = {
    bg: ["backgroundColor"],
    text: ["color"],
    border: ["borderColor"],
};

const propsWithSpacing = {
    m: ["margin"],
    p: ["padding"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    gap: ["gap"],
    w: ["width"],
    h: ["height"],
};

type StyleObject = Record<string, string | number>;

const utilities: Record<string, StyleObject> = {
    // Display
    block: { display: "block" },
    "inline-block": { display: "inline-block" },
    inline: { display: "inline" },
    flex: { display: "flex" },
    "inline-flex": { display: "inline-flex" },
    grid: { display: "grid" },
    hidden: { display: "none" },

    // Flex
    "flex-row": { flexDirection: "row" },
    "flex-col": { flexDirection: "column" },
    "flex-wrap": { flexWrap: "wrap" },
    "flex-nowrap": { flexWrap: "nowrap" },
    "justify-start": { justifyContent: "flex-start" },
    "justify-center": { justifyContent: "center" },
    "justify-end": { justifyContent: "flex-end" },
    "justify-between": { justifyContent: "space-between" },
    "justify-around": { justifyContent: "space-around" },
    "items-start": { alignItems: "flex-start" },
    "items-center": { alignItems: "center" },
    "items-end": { alignItems: "flex-end" },
    "items-stretch": { alignItems: "stretch" },

    // Align self
    "self-auto": { alignSelf: "auto" },
    "self-start": { alignSelf: "flex-start" },
    "self-center": { alignSelf: "center" },
    "self-end": { alignSelf: "flex-end" },
    "self-stretch": { alignSelf: "stretch" },
    "self-baseline": { alignSelf: "baseline" },

    // Text alignment
    "text-left": { textAlign: "left" },
    "text-center": { textAlign: "center" },
    "text-right": { textAlign: "right" },
    "text-justify": { textAlign: "justify" },

    // Border
    border: { borderWidth: "1px" },
    "border-0": { borderWidth: "0" },
    "border-2": { borderWidth: "2px" },
    "border-4": { borderWidth: "4px" },
    rounded: { borderRadius: "0.25rem" },
    "rounded-md": { borderRadius: "0.375rem" },
    "rounded-lg": { borderRadius: "0.5rem" },
    "rounded-full": { borderRadius: "9999px" },
};

function parse(className: string): [string, string][] {
    // Handle spacing classes
    const spacingMatch = className.match(
        /^(-?)(m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl|gap|w|h)-(\d{1,2}|full|auto)$/
    );
    if (spacingMatch) {
        const [, minus, prefix, value] = spacingMatch;
        if (prefix in propsWithSpacing) {
            let cssValue: string;
            if (value === "full") {
                cssValue = "100%";
            } else if (value === "auto") {
                cssValue = "auto";
            } else {
                cssValue = `calc(var(--spacing)*${
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

    // Handle color classes
    const colorMatch = className.match(/^([a-z]+)-([a-z]+)(?:-(\d{2,3}))?$/);
    if (colorMatch) {
        const [, prefix, color, shade] = colorMatch;
        if (
            prefix in propsWithColor &&
            (shade || color === "white" || color === "black")
        ) {
            const cssValue = shade
                ? `var(--color-${color}-${shade})`
                : `var(--color-${color})`;
            const result = [];
            for (const prop of propsWithColor[
                prefix as keyof typeof propsWithColor
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
            ["fontSize", `var(--text-${size})`],
            ["lineHeight", `var(--text-${size}--line-height)`],
        ];
    }

    // Font weight
    const fontWeightMatch = className.match(
        /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/
    );
    if (fontWeightMatch) {
        const [, weight] = fontWeightMatch;
        return [["fontWeight", `var(--font-weight-${weight})`]];
    }

    // Line height
    const lineHeightMatch = className.match(
        /^leading-(tight|snug|normal|relaxed|loose)$/
    );
    if (lineHeightMatch) {
        const [, lineHeight] = lineHeightMatch;
        return [["lineHeight", `var(--leading-${lineHeight})`]];
    }

    // Max width
    const maxWidthMatch = className.match(
        /^max-w-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|screen|full)$/
    );
    if (maxWidthMatch) {
        const [, size] = maxWidthMatch;
        if (size === "screen") {
            return [["maxWidth", "100vw"]];
        } else if (size === "full") {
            return [["maxWidth", "100%"]];
        }
        return [["maxWidth", `var(--container-${size})`]];
    }

    return [];
}

/**
 * Parse a string of Tailwind class names and return a CSS object
 * @param classNames - Space-separated Tailwind class names
 * @returns CSS object with styles
 */
export function tw(classNames: string): Record<string, any> {
    const classes = classNames.split(" ").filter(Boolean);
    const styles: Record<string, any> = {};

    for (const className of classes) {
        let result = parse(className);
        for (const [prop, value] of result) {
            styles[prop] = value;
        }
        if (result.length === 0 && className in utilities) {
            Object.assign(styles, utilities[className]);
        }
    }

    return styles;
}
