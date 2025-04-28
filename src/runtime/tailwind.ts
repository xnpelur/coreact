/**
 * Minimal Tailwind CSS core implementation
 * This provides the core functionality of Tailwind with a minimal footprint
 */

const colors = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
    },
    blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365",
    },
    red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a",
    },
};

const spacing = {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    64: "16rem",
};

const fontSize = {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
};

const fontWeight = {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
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

    // Margin and Padding
    "m-0": { margin: spacing[0] },
    "m-1": { margin: spacing[1] },
    "m-2": { margin: spacing[2] },
    "m-4": { margin: spacing[4] },
    "p-0": { padding: spacing[0] },
    "p-1": { padding: spacing[1] },
    "p-2": { padding: spacing[2] },
    "p-4": { padding: spacing[4] },

    // Text alignment
    "text-left": { textAlign: "left" },
    "text-center": { textAlign: "center" },
    "text-right": { textAlign: "right" },
    "text-justify": { textAlign: "justify" },

    // Font size
    "text-xs": { fontSize: fontSize.xs },
    "text-sm": { fontSize: fontSize.sm },
    "text-base": { fontSize: fontSize.base },
    "text-lg": { fontSize: fontSize.lg },
    "text-xl": { fontSize: fontSize.xl },
    "text-2xl": { fontSize: fontSize["2xl"] },
    "text-3xl": { fontSize: fontSize["3xl"] },
    "text-4xl": { fontSize: fontSize["4xl"] },
    "text-5xl": { fontSize: fontSize["5xl"] },
    "text-6xl": { fontSize: fontSize["6xl"] },

    // Font weight
    "font-normal": { fontWeight: fontWeight.normal },
    "font-medium": { fontWeight: fontWeight.medium },
    "font-bold": { fontWeight: fontWeight.bold },

    // Text color
    "text-black": { color: colors.black },
    "text-white": { color: colors.white },
    "text-gray-500": { color: colors.gray[500] },
    "text-blue-500": { color: colors.blue[500] },
    "text-red-500": { color: colors.red[500] },

    // Background color
    "bg-transparent": { backgroundColor: colors.transparent },
    "bg-black": { backgroundColor: colors.black },
    "bg-white": { backgroundColor: colors.white },
    "bg-gray-100": { backgroundColor: colors.gray[100] },
    "bg-blue-500": { backgroundColor: colors.blue[500] },
    "bg-red-500": { backgroundColor: colors.red[500] },

    // Border
    border: { borderWidth: "1px" },
    "border-0": { borderWidth: "0" },
    "border-2": { borderWidth: "2px" },
    "border-4": { borderWidth: "4px" },
    "border-black": { borderColor: colors.black },
    "border-gray-300": { borderColor: colors.gray[300] },
    rounded: { borderRadius: "0.25rem" },
    "rounded-md": { borderRadius: "0.375rem" },
    "rounded-lg": { borderRadius: "0.5rem" },
    "rounded-full": { borderRadius: "9999px" },
};

/**
 * Parse a string of Tailwind class names and return a CSS object
 * @param classNames - Space-separated Tailwind class names
 * @returns CSS object with styles
 */
export function tw(classNames: string): Record<string, any> {
    const classes = classNames.split(" ").filter(Boolean);
    const styles: Record<string, any> = {};

    for (const className of classes) {
        if (className in utilities) {
            Object.assign(styles, utilities[className]);
        }
    }

    return styles;
}

/**
 * Apply Tailwind styles to an HTML element
 * @param element - HTML element to style
 * @param classNames - Space-separated Tailwind class names
 */
export function applyTailwind(element: HTMLElement, classNames: string): void {
    const styles = tw(classNames);
    Object.assign(element.style, styles);
}

/**
 * Create a style tag with Tailwind base styles
 * This injects the minimal base styles needed for Tailwind
 */
export function injectTailwindBase(): void {
    const style = document.createElement("style");
    style.textContent = `
    *, ::before, ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e2e8f0;
    }
    
    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    
    body {
      margin: 0;
      font-family: inherit;
      line-height: inherit;
    }
    
    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px;
    }
    
    img, svg, video, canvas, audio, iframe, embed, object {
      display: block;
      vertical-align: middle;
    }
    
    img, video {
      max-width: 100%;
      height: auto;
    }
    
    button, input, optgroup, select, textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    
    button, select {
      text-transform: none;
    }
  `;
    document.head.appendChild(style);
}
