import { describe, it, expect } from "vitest";
import { tw } from "@/runtime/tailwind";

describe("Styling", () => {
    describe("Utility Classes", () => {
        it("should parse display utilities", () => {
            expect(tw("block")).toEqual({
                variants: [],
                properties: [["display", "block"]],
            });
            expect(tw("flex")).toEqual({
                variants: [],
                properties: [["display", "flex"]],
            });
            expect(tw("hidden")).toEqual({
                variants: [],
                properties: [["display", "none"]],
            });
        });

        it("should parse text alignment utilities", () => {
            expect(tw("text-center")).toEqual({
                variants: [],
                properties: [["text-align", "center"]],
            });
            expect(tw("text-right")).toEqual({
                variants: [],
                properties: [["text-align", "right"]],
            });
        });
    });

    describe("Spacing Classes", () => {
        it("should parse padding classes", () => {
            expect(tw("p-4")).toEqual({
                variants: [],
                properties: [["padding", "calc(var(--spacing) *4)"]],
            });
            expect(tw("pt-2")).toEqual({
                variants: [],
                properties: [["padding-top", "calc(var(--spacing) *2)"]],
            });
            expect(tw("px-6")).toEqual({
                variants: [],
                properties: [
                    ["padding-left", "calc(var(--spacing) *6)"],
                    ["padding-right", "calc(var(--spacing) *6)"],
                ],
            });
        });

        it("should parse margin classes", () => {
            expect(tw("m-8")).toEqual({
                variants: [],
                properties: [["margin", "calc(var(--spacing) *8)"]],
            });
            expect(tw("mb-1")).toEqual({
                variants: [],
                properties: [["margin-bottom", "calc(var(--spacing) *1)"]],
            });
            expect(tw("my-3")).toEqual({
                variants: [],
                properties: [
                    ["margin-top", "calc(var(--spacing) *3)"],
                    ["margin-bottom", "calc(var(--spacing) *3)"],
                ],
            });
        });

        it("should parse width and height classes", () => {
            expect(tw("h-full")).toEqual({
                variants: [],
                properties: [["height", "100%"]],
            });
            expect(tw("w-screen")).toEqual({
                variants: [],
                properties: [["width", "100vw"]],
            });
            expect(tw("min-h-screen")).toEqual({
                variants: [],
                properties: [["min-height", "100vh"]],
            });
            expect(tw("w-12")).toEqual({
                variants: [],
                properties: [["width", "calc(var(--spacing) *12)"]],
            });
        });
    });

    describe("Color Classes", () => {
        it("should parse basic color classes", () => {
            expect(tw("bg-red-500")).toEqual({
                variants: [],
                properties: [["background-color", "var(--color-red-500)"]],
            });
            expect(tw("text-blue-700")).toEqual({
                variants: [],
                properties: [["color", "var(--color-blue-700)"]],
            });
        });

        it("should parse color classes with opacity", () => {
            expect(tw("bg-green-200/50")).toEqual({
                variants: [],
                properties: [
                    [
                        "background-color",
                        "color-mix(in srgb, var(--color-green-200) 50%, transparent)",
                    ],
                ],
            });
            expect(tw("text-purple-600/75")).toEqual({
                variants: [],
                properties: [
                    [
                        "color",
                        "color-mix(in srgb, var(--color-purple-600) 75%, transparent)",
                    ],
                ],
            });
        });
    });

    describe("Border Classes", () => {
        it("should parse basic border width", () => {
            expect(tw("border")).toEqual({
                variants: [],
                properties: [["border-width", "1px"]],
            });
            expect(tw("border-2")).toEqual({
                variants: [],
                properties: [["border-width", "2px"]],
            });
        });

        it("should parse directional border widths", () => {
            expect(tw("border-t-4")).toEqual({
                variants: [],
                properties: [["border-top-width", "4px"]],
            });
            expect(tw("border-b")).toEqual({
                variants: [],
                properties: [["border-bottom-width", "1px"]],
            });
        });

        it("should parse border radius", () => {
            expect(tw("rounded-md")).toEqual({
                variants: [],
                properties: [["border-radius", "var(--radius-md)"]],
            });
            expect(tw("rounded-t-lg")).toEqual({
                variants: [],
                properties: [
                    ["border-top-left-radius", "var(--radius-lg)"],
                    ["border-top-right-radius", "var(--radius-lg)"],
                ],
            });
            expect(tw("rounded-full")).toEqual({
                variants: [],
                properties: [["border-radius", "9999px"]],
            });
        });

        it("should parse border colors", () => {
            expect(tw("border-gray-300")).toEqual({
                variants: [],
                properties: [["border-color", "var(--color-gray-300)"]],
            });
            expect(tw("border-indigo-500/80")).toEqual({
                variants: [],
                properties: [
                    [
                        "border-color",
                        "color-mix(in srgb, var(--color-indigo-500) 80%, transparent)",
                    ],
                ],
            });
        });
    });

    describe("Z-Index Classes", () => {
        it("should parse z-index classes", () => {
            expect(tw("z-10")).toEqual({
                variants: [],
                properties: [["z-index", "10"]],
            });
            expect(tw("z-auto")).toEqual({
                variants: [],
                properties: [["z-index", "auto"]],
            });
        });
    });

    describe("Variant Classes", () => {
        it("should parse single variants", () => {
            expect(tw("hover:bg-blue-500")).toEqual({
                variants: ["hover"],
                properties: [["background-color", "var(--color-blue-500)"]],
            });
            expect(tw("md:text-lg")).toEqual({
                variants: ["md"],
                properties: [
                    ["font-size", "var(--text-lg)"],
                    ["line-height", "var(--text-lg--line-height)"],
                ],
            });
            expect(tw("dark:text-white")).toEqual({
                variants: ["dark"],
                properties: [["color", "var(--color-white)"]],
            });
        });

        it("should parse multiple variants", () => {
            expect(tw("md:hover:bg-gray-200")).toEqual({
                variants: ["md", "hover"],
                properties: [["background-color", "var(--color-gray-200)"]],
            });
        });
    });

    describe("Edge Cases and Unknown Classes", () => {
        it("should return empty for unknown classes", () => {
            expect(tw("unknown-class")).toEqual({
                variants: [],
                properties: [],
            });
        });

        it("should return empty properties for variant-only classes", () => {
            expect(tw("hover:")).toEqual({
                variants: ["hover"],
                properties: [],
            });
            expect(tw("md:dark:")).toEqual({
                variants: ["md", "dark"],
                properties: [],
            });
        });

        it("should handle empty string input", () => {
            expect(tw("")).toEqual({ variants: [], properties: [] });
        });
    });
});
